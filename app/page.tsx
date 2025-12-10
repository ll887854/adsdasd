
"use client"
import { useState } from "react"
export default function Home () {
  const [level, setLevel] = useState("start")
    const [number, setNumber] = useState(0)
      const [text, setText] = useState("PLAY MY GAME!!!!")

      return (
        <main>
          {level === "start" && 
          ( <div> <h1>Wanna play the Click Game Ultra Sonic Clicker Man??</h1>
             <button onClick={() => setLevel("playing")}>
              Yes
             </button> 
             <div>
             <button onClick={() => setLevel("fuck you")}>
              No
             </button>
             </div>
             </div>
          )
        }

        {level === "fuck you" &&
          ( <div>
            <h1>{text}</h1>
            <button onClick={() => setLevel("playing")}>
              PLAY!
            </button>
          </div>
          )
        }

    

        {level === "playing" && (
          <div>
            <h1>Score: {number}</h1>
            
            <button onClick={() => setNumber(number + 30)}>
              click!
            </button>
            <div>

            {number >= 100 && ( <button onClick={() => setLevel("finish")}>
              Oki you can go now just click me 
            </button> )}
            </div>
          </div>
        )
      }
      {level === "finish" && 
      ( <div>
        <h1>YAY! YOU DID IT!</h1>
   
      </div>
      )
    }

        
      
        </main>
      )
    }
