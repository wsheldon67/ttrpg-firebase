export type Article = {
  title: string,
  description: string,
  system: string,
  path: string,
  quick: string,
  tags: string[],
  relevance: number,
  link?: string
}