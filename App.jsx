 import React from "react"
import Produto from "./Produto"
const App = ()=>{

const [dados, setDados] = React.useState(null)
const [carregando, setCarregando] = React.useState(null)

async function getData(event){
    setCarregando(true)
    const response = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`)

    const json = await response.json()

setDados(json)
setCarregando(false)
}
return(
    <>
    <button onClick={getData}>tablet</button>
    <button onClick={getData}>notebook</button>
    <button onClick={getData}>smartphone</button>
    {carregando && <p>Carregando...</p>}
    {dados != null ? <Produto dados={dados}/> : null}
    </>
)
}
export default App; 