export class CreateArticleDto {
  readonly id: number
  readonly title: string
  readonly content: string
  readonly numberOfWords: number
  readonly date: Date
  readonly userId: number
}
