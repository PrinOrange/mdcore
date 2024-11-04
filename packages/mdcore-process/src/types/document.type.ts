export interface IMarkdownDocument<T> {
	frontmatter: T;
	content: string | null;
}

export type TProcessOutput<T> = T | null;
