import phrases from "./data/phrases.json"
import { getRandoNumber } from "./utils/getRandom"
import FortunerPrhases from "./components/FortunerPrhases"
import Button from "./components/button/button"
import { useState } from "react"
 
import fondo1 from "./assets/fortuna/fondo1.png"
import fondo2 from "./assets/fortuna/fondo2.png"
import fondo3 from "./assets/fortuna/fondo3.png"
import fondo4 from "./assets/fortuna/fondo4.png"

import "./App.css"

const backgrounds = [fondo1, fondo2, fondo3, fondo4, ]

function App() {
  const getRandomPhrase = () => phrases[getRandoNumber(phrases.length - 1)]
  const getRandomBackground = () => backgrounds[getRandoNumber(backgrounds.length - 1)]
  const [background, setbackground] = useState(getRandomBackground())

  const [phrase, setphrase] = useState(getRandomPhrase)
  
  const ChangePhrase = () => {
    let newPhrase = getRandomPhrase()
    let newBackground = getRandomBackground()

    while (newPhrase.phrase === phrase.phrase) {
      newPhrase = getRandomPhrase()
    }

    while (newBackground === background){
      newBackground = getRandomBackground()
    }

    setphrase(newPhrase)
    setbackground(newBackground)
  }
  return (
    <div className="container-app" style={{ backgroundImage: `url("${background}")`}}>
      <h1>GALLETAS DE LA FORTUNA</h1>
      <Button handlerClick={ChangePhrase}/>
      <FortunerPrhases
      phrase={phrase.phrase} 
      author={phrase.author}
      />
      {/*<p>Author: <mark>{phrase.author}</mark></p>*/}
    </div>
  )
}

export default App