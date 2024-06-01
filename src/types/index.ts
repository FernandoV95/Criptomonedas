import {z} from "zod"
import { CurrencySchema } from "../Schema/CriptoSchema"

export type Currency = z.infer<typeof CurrencySchema>