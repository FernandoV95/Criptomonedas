import { ChangeEvent, FormEvent, useState } from "react"
import {currencies} from "../data/data"
import { useCryptoStore } from "../Store"
import { Pair } from "../types"
import Alerta from "../Alerta/Alerta"




function Formulario() {
  const monedas = useCryptoStore( s => s.cryptocurrencies)
  const fetchData = useCryptoStore( s => s.fetchData)
  
  const [error,setError]=useState('')
  const [pair,setPair]=useState<Pair>({
    moneda:'',
    criptomoneda:''
  })

  const handleChange=(e:ChangeEvent<HTMLSelectElement>)=>{
    setPair({...pair,[e.target.id]:e.target.value})
  }

  const handleSubmit=(e:FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    //Hay espacios vacio en el formulario?
    if(Object.values(pair).includes('')){
      setError('Todos los campos son obligatorios')
      return 
    } 
    setError('')
    fetchData(pair)
  }

  
 

  return (
    <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
      {error && <Alerta>{error}</Alerta>}
        <div className="flex flex-col gap-8 fila">
        <label htmlFor="moneda">Moneda </label>
        <select name="currency" id="moneda" className=" p-4 rounded-2xl text-3xl border" onChange={handleChange}>
            <option value={pair.moneda}>-- Seleccione una Opcion --</option>
            {currencies.map( i => <option key={i.code} value={i.code}>{i.name}</option>)}
        </select>
      </div>

      <div className="flex flex-col gap-8 fila">
        <label htmlFor="criptomoneda">Criptomoneda </label>
        <select name="criptoCurrency" id="criptomoneda" className=" p-4 rounded-2xl text-3xl border" onChange={handleChange}>
            <option value={pair.criptomoneda}>-- Seleccione una Opcion --</option>
            {monedas.map( i => <option key={i.CoinInfo.Internal} value={i.CoinInfo.Internal}>{i.CoinInfo.FullName}</option>)}
        </select>
      </div>

      <input type="submit" value="Cotizar" className=" border-none p-4 rounded-2xl cursor-pointer my-8 hover:scale-110"/>

    </form>
  )
}

export default Formulario
