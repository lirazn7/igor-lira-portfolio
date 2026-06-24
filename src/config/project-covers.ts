export const projectCovers: Record<string, string> = {
  "Site-de-Loja-Igor-s-Store": "/projects/igors-store.png",
};

export function getProjectCover(githubUrl: string): string | undefined {
  const slug = githubUrl.split("/").filter(Boolean).pop();
  return slug ? projectCovers[slug] : undefined;
}
