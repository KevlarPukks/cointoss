import heads from "../heads.png";
import tails from "../tails.png";
import './Coin.css'

function Coin(){
    return (
        <div className="coin" id="coin">
            <div className="heads">  <img src={heads} className="" alt="logo" /></div>
            <div className="tails">    <img src={tails} className='' alt=""/></div>
        </div>
    )
}

export default Coin