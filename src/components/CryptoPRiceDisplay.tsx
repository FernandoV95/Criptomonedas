import { useMemo} from "react"
import { useCryptoStore } from "../Store"
import Spiner from "./Spiner"

 
function CryptoPRiceDisplay() {
    const result = useCryptoStore( s => s.result)
    const load = useCryptoStore( s => s.loading)
    const Hay = useMemo(()=> !Object.values(result).includes(''),[result])
 
  return (
    <>
        { load ? <Spiner/> : Hay && (
                <div className=" mt-24">

                <>
                <h2 className="text-center">Cotizacion</h2>
                    <div className="grid  caja items-center gap-8">
                        <img className=" w-full" alt="Imagen de la criptomoneda" src={`https://cryptocompare.com/${result.IMAGEURL}`}/> 
                        <div className="">
                            <p className=" text-2xl">El precio es de: <span className=" font-bold">{result.PRICE}</span></p>
                            <p className=" text-2xl">Precio mas alto: <span className=" font-bold">{result.HIGHDAY}</span></p>
                            <p className=" text-2xl">Precio mas bajo: <span className=" font-bold">{result.LOWDAY}</span></p>
                            <p className=" text-2xl">Variacion de las ultimas 24Hrs: <span className=" font-bold">{result.CHANGEPCT24HOUR}</span></p>
                            <p className=" text-2xl">Ultima actualizacion: <span className=" font-bold">{result.LASTUPDATE}</span></p>
                        </div>
                    </div>
                </>    
    
        </div>


        )} 
    </>
  )
}

export default CryptoPRiceDisplay
