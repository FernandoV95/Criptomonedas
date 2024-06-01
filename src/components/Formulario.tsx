 import {currencies} from "../data/data"

function Formulario() {
  return (
    <form className="flex flex-col gap-8">
      <div className="flex flex-col gap-8 fila">
        <label htmlFor="currency">Moneda </label>
        <select name="currency" id="currency" className=" p-4 rounded-2xl text-3xl border">
            <option value="">-- Seleccione una Opcion --</option>
            {currencies.map( i => <option key={i.code} value={i.code}>{i.name}</option>)}
        </select>
      </div>

      <div className="flex flex-col gap-8 fila">
        <label htmlFor="criptoCurrency">Criptomoneda </label>
        <select name="criptoCurrency" id="criptoCurrency" className=" p-4 rounded-2xl text-3xl border">
            <option value="">-- Seleccione una Opcion --</option>
        </select>
      </div>

      <input type="submit" value="Cotizar" className=" border-none p-4 rounded-2xl cursor-pointer my-8 hover:scale-110"/>

    </form>
  )
}

export default Formulario
