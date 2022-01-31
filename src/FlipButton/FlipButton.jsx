import './FlipButton.css'
function FlipButton() {



    function flipCoin() {
        let coin = document.querySelector('.coin')
        let flipButton = document.querySelector('.flipButton')
        coin.style.animation = 'none'
        let heads = Math.random()<0.5
        if(heads){
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
        },3000)
    }
function reset() {
    let flipButton = document.querySelector('.flipButton')
    let coin = document.querySelector('.coin')


}
    return(<>
        <button className='flipButton' onClick={flipCoin}>Flip</button>
</>  )
}

export default FlipButton