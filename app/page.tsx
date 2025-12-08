"use client"

import { useState } from "react"

export default function Home () {
  const [number, setNumber] = useState(0)

  return (
    <main>
      <h1>Score: {number}</h1>
      <button onClick={() => setNumber(number +1)}>
        +1
      </button>
      {number >= 10 && number < 20 && <p>keep going PUSSY!</p>}
     {number >= 20 && number < 30 && <p>10 MORE NOW!</p>}
      {number >= 30 && <p>GOOOOD BOY YOU DID IT!</p>}
    </main>
  )
}
