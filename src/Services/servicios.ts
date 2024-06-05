import axios from "axios"
import {CryptoCurrenctsResponseSchema, CryptoPriceSchema} from "../Schema/CriptoSchema"
import { Pair } from "../types";


export async function getCryptos(){
    const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD`;
    const {data: {Data}} = await axios(url);
    const resultado = CryptoCurrenctsResponseSchema.safeParse(Data)
    if(resultado.success){
        return resultado.data
    }
}

export async function fetchCurrentCryptoPrice(pair:Pair){
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${pair.criptomoneda}&tsyms=${pair.moneda}`;
    const {data:{DISPLAY} }= await axios(url); 
    const result = CryptoPriceSchema.safeParse(DISPLAY[pair.criptomoneda][pair.moneda])
    if(result.success){
        return result.data
    }
}