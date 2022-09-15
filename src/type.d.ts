interface IArticle {
  id: number
  backdrop: boolean
  body: string
}

type ArticleState = {
  state: IArticle[]
}

type ArticleAction = {
  type: boolean
  article: IArticle
}

type DispatchType = (args: ArticleAction) => ArticleAction