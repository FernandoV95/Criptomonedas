import {z} from "zod"

export const CurrencySchema = z.object({
    code: z.string(),
    name: z.string()
})


export const CryptoCurrenctResponseSchema =  z.object({
        CoinInfo: z.object({
            FullName:z.string(),
            Internal: z.string()    
        })
    }) 


export const CryptoCurrenctsResponseSchema = z.array(
    CryptoCurrenctResponseSchema
)

export const PairSchema = z.object({
    moneda: z.string(),
    criptomoneda:z.string()
})

export const CryptoPriceSchema = z.object({
    IMAGEURL: z.string(),
    PRICE: z.string(),
    HIGHDAY: z.string(),
    LOWDAY: z.string(),
    CHANGEPCT24HOUR: z.string(),
    LASTUPDATE: z.string()
})