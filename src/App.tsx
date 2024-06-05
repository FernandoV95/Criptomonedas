import CryptoPRiceDisplay from "./components/CryptoPRiceDisplay"
import Formulario from "./components/Formulario"
import { useCryptoStore } from "./Store"
import { useEffect } from "react"

function App() {
  const fetch = useCryptoStore( (set) => set.fetchCrypto)
  
  useEffect( ()=>{
    fetch()
  },[])

  return (
    <>
      <div className=" w-4/5 max-w-5xl mx-auto">
        <h1 className="app-title my-20">Cotizador de <span>Criptomonedas</span></h1>

        <div className=" mt-20 px-24 py-8 bg-white border rounded-2xl contenedor">
          <Formulario/>
          <CryptoPRiceDisplay/>
        </div>
        
      </div>
    </>
  )
}

export default App
