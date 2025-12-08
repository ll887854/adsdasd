"use client"

import { useState } from "react"

export default function Home() {
  const [number, setNumber] = useState(0) 
  const [text, setText] = useState("click!!")

  return (
    <main>
      <h1>Score: {number}</h1>
      <h1>{text}</h1>

      <button onClick={() => setNumber(number + 1)}>
        +1
      </button>

      {number >= 10 && number < 20 && <p>keep going</p>}
      {number >= 20 && number < 30 && <p>almost there</p>}
      {number >= 30 && <p>YOU DID IT!</p>}
    </main>
  )
}
