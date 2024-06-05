import {z} from "zod"
import { CurrencySchema,CryptoCurrenctResponseSchema, PairSchema, CryptoPriceSchema } from "../Schema/CriptoSchema"

export type Currency = z.infer<typeof CurrencySchema>

export type CriptoCurrency = z.infer<typeof CryptoCurrenctResponseSchema>

export type Pair = z.infer<typeof PairSchema>
  
export type CryptoPrice = z.infer<typeof CryptoPriceSchema>