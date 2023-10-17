import { DocumentData } from "firebase/firestore"

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

export interface UserObj {
  tokens: number,
  name: string,
  email: string,
  id: string
}

export interface AuthObj {
  isLoggedIn: boolean,
  authId: string | undefined
}

export interface PackObj {
  id: string,
  value: string
}