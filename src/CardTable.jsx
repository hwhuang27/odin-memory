import { useState, useEffect } from "react"
import Card from './Card.jsx'

const imgUrlArray = [
    "https://maplestory.io/api/GMS/242/mob/100004/render/stand",
    "https://maplestory.io/api/GMS/242/mob/2600309/render/stand",
    "https://maplestory.io/api/GMS/242/mob/2600307/render/stand",
    "https://maplestory.io/api/GMS/242/mob/2100100/render/stand",
    "https://maplestory.io/api/GMS/242/mob/2100105/render/stand",
    "https://maplestory.io/api/GMS/242/mob/2220100/render/stand",
    "https://maplestory.io/api/GMS/242/mob/2600314/render/stand",
    "https://maplestory.io/api/GMS/242/mob/2230101/render/stand",
    "https://maplestory.io/api/GMS/242/mob/2600013/render/stand",
    "https://maplestory.io/api/GMS/242/mob/2600609/render/stand",
]

function CardTable() {
    // const [img, setImg] = useState();
    // async function fetchImage(imgUrl){
    //     const res = await fetch(imgUrl);
    //     const imageBlob = await res.blob();
    //     const imageObjURL = URL.createObjectURL(imageBlob);
    //     setImg(imageObjURL);
    // }
    // useEffect(() => {
    //     fetchImage(imgUrlArray[0]);
    // }, []);

    function clickHandler(){
        console.log('hey');
    }

    return(
        <div className="cardTable">
            {imgUrlArray.map((imgUrl) => {
                return <Card img={imgUrl} onClick={clickHandler}></Card>
            })}
        </div>
    )
}

export default CardTable;

    // function shuffle(array) {
    //     // Fisher-Yates shuffle
    //     let oldElement;
    //     for (let i = array.length - 1; i > 0; i--) {
    //         let rand = Math.floor(Math.random() * (i + 1));
    //         oldElement = array[i];
    //         array[i] = array[rand];
    //         array[rand] = oldElement;
    //     }
    //     return array;
    // }
