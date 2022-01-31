import './FlipButton.css'
import {useState} from "react";

function FlipButton() {
const [heads,setHeads]= useState(0)
    const [tails,setTails]= useState(0)


    function flipCoin() {
        let coin = document.querySelector('.coin')
        let flipButton = document.querySelector('.flipButton')
        coin.style.animation = 'none'
        let headsResult = Math.random()<0.5
        if(headsResult){
            setTimeout(function () {
                coin.style.animation = "spin-heads 3s forwards";
            },100)
        }else{
            setTimeout(function () {
                coin.style.animation = "spin-tails 3s forwards";

            },100)
        }
        console.log(heads)
flipButton.disabled = true

        setTimeout(function () {

            flipButton.disabled = false
            if(headsResult){
                setHeads(heads+1)
            }else {
                setTails(tails+1)
            }
        },3000)
    }
function reset() {
    let flipButton = document.querySelector('.flipButton')
    let coin = document.querySelector('.coin')


}
    return(<>
        <div className="results">

            <p>Heads:{heads}</p>
            <p>Tails:{tails}</p>
        </div>
        <button className='flipButton' onClick={flipCoin}>Flip</button>
</>  )
}

export default FlipButton