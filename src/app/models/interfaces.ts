
export interface ResponseObj {
  loading: boolean,
  errorMessage: string
}

export interface AmountObj {
  value: string,
  label: string
}

export interface ResolutionObj {
  value: string,
  label: string
}

export interface TokensObj {
  chatTokens: number,
  codeTokens: number,
  imageToken: number
}

export interface UserObj {
  isLoggedIn: boolean,
  tokens: TokensObj,
  name: string,
  email: string,
  id: string
}