import { Router } from "express";
import { Resend } from "resend";
import { z } from "zod/v4";

const router = Router();

const contactSchema = z.object({
  name: z.string().trim().min(2, "Nome muito curto").max(100),
  email: z.string().trim().email("Email inválido").max(254),
  message: z.string().trim().min(10, "Mensagem muito curta").max(5000),
  honeypot: z.string().optional(),
});

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

router.post("/contact", async (req, res) => {
  try {
    const parsed = contactSchema.safeParse(req.body);

    if (!parsed.success) {
      res
        .status(400)
        .json({ error: parsed.error.issues[0]?.message ?? "Dados inválidos" });
      return;
    }

    const { name, email, message, honeypot } = parsed.data;

    if (honeypot) {
      res.json({ ok: true });
      return;
    }

    const apiKey = process.env["RESEND_API_KEY"];
    const toEmail = process.env["CONTACT_EMAIL"] ?? "nathanlira15@gmail.com";
    const fromEmail =
      process.env["RESEND_FROM_EMAIL"] ??
      "Portfolio Igor Lira <onboarding@resend.dev>";

    if (!apiKey) {
      req.log.error("RESEND_API_KEY não configurada");
      res.status(503).json({ error: "Serviço de email não configurado" });
      return;
    }

    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: email,
      subject: `[Portfólio] Nova mensagem de ${name}`,
      html: `
        <h2>Nova mensagem pelo portfólio</h2>
        <p><strong>Nome:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Mensagem:</strong></p>
        <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
      `,
    });

    if (error) {
      req.log.error({ error }, "Erro ao enviar email");
      res.status(500).json({ error: "Não foi possível enviar a mensagem" });
      return;
    }

    res.json({ ok: true });
  } catch {
    res.status(500).json({ error: "Erro interno ao processar a solicitação" });
  }
});

export default router;
