import { useState } from "react"
import words from "./wordList.json"

function App() {
  // element unuseable ignore that error message
  const [wordToGuess, setWordToGuess] = useState (() => {
    return words [Math.floor(Math.random() * words.length)]
  })

  return (
    <>
      <div>
        <h1> Hallooo</h1>
       </div>
    </>
  )

  console.log(wordToGuess)
}

export default App
