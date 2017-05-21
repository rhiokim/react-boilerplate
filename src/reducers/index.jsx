/* sample */
import articleReducer from './article'
import userReducer from './user'

import type { ArticleState } from './article.d'
import type { UserState } from './user.d'

export type AppState = {
  articleReducer: ArticleState,
  userReducer: UserState
}

export default {
  articleReducer: articleReducer,
  userReducer: userReducer
}
