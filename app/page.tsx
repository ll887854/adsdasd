"use client"
import { useState } from "react"
import { styleText } from "util"
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
             {number >= 300 && ( <button onClick={() => setLevel("secret")}>
              psssst
            </button> )}
          </div>
        )
      }
      {level === "finish" && 
      ( <div>
        <h1>YAY! YOU DID IT!</h1>
   
      </div>
      )
    }
    {level === "secret" &&
    ( <div>
      <h1>psst this is secret click the button to see the truth</h1>
      
      <button onClick={() => setLevel("secret2")}>
        click me 
      </button>
    </div>
    )
  }
  {level === "secret2" &&
  ( <div>
    <h1>YOU ARE GAY!!!</h1>

    <button onClick={() => {
      setLevel("start")
      setNumber(0)
    }}>
      reset
    </button>
  </div>
  )
}   
        </main>
      )
    }
