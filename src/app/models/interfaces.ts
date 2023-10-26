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
  value: string,
  price: string,
  name: string,
  tokens: number,
  imageUrl: string
}

export interface IconObj {
  pathOne: string,
  pathTwo?: string
}

export interface ModelLinkObj {
  name: string,
  description: string,
  link?: string,
  icon: IconObj
}

export interface PaymentObj {
  madeBy: string | null,
  amountOfTokens: number | null
}