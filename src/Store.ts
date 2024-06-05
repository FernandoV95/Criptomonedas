import {create} from "zustand"
import {devtools } from "zustand/middleware"
import {getCryptos,fetchCurrentCryptoPrice} from "./Services/servicios"
import {CriptoCurrency, Pair, CryptoPrice} from "./types/index"


type CryptoStore = {
    cryptocurrencies : CriptoCurrency[]
    result:CryptoPrice
    loading: boolean
    fetchCrypto: () => Promise<void>
    fetchData: ( pair:Pair)  => Promise<void>
}

export const useCryptoStore = create<CryptoStore>()(devtools(
    ((set) => ({
        cryptocurrencies: [],
        result:{
            IMAGEURL: '',
            PRICE:'',
            HIGHDAY: '',
            LOWDAY: '',
            CHANGEPCT24HOUR: '',
            LASTUPDATE: ''
        },
        loading:false,
        fetchCrypto: async () => {
          const cryptocurrencies = await getCryptos()
            set(()=>({
                cryptocurrencies
            }))
        },

        fetchData: async(pair)=>{
            set( ()=> ({
                loading:true
           }))
           const result = await  fetchCurrentCryptoPrice(pair)
           set( ()=> ({
                result,
                loading:false
           }))
           
        }

    }))
))
 