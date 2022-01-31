import './FlipButton.css'
import Results from '../Results/Results'
import {useEffect, useState} from "react";

function FlipButton() {
const [heads,setHeads]= useState(0)
    const [tails,setTails]= useState(0)

    useEffect(function getLocalStorageItems() {
        let headsLocal = localStorage.getItem('heads');
        if(headsLocal){
           setHeads(parseInt(headsLocal))
       }
        let tailsLocal = localStorage.getItem('tails');

        if(tailsLocal){
            setTails(parseInt(tailsLocal))
        }
    }, []);


    useEffect(function setLocalStorageItems(){
        localStorage.setItem('tails',(tails).toString())
        localStorage.setItem('heads',(heads).toString())
    }, [tails,heads]);

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
setHeads(0)
    setTails(0)


}
    return(<>
        <Results heads={heads} tails={tails}/>
        <button className='flipButton' onClick={flipCoin}>Flip</button>
        <button className='flipButton' onClick={reset}>Reset</button>
</>  )
}

export default FlipButton