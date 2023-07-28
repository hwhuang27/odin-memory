import { useState, useEffect } from "react"
import Card from './Card.jsx'
import { data, returnUrl} from './CardData.jsx'

function CardTable() {
    const [img1, setImg1] = useState();
    

    async function fetchImage(url){
        const res = await fetch(url);
        return res;
        const blob = await res.blob();
        const imageURL = URL.createObjectURL(blob);
        return imageURL;
    }

    useEffect(() => {
        let mobArray = [];
        const fetchData = async () => {
            data.map((mob) => {
                const mobName = mob.name;
                const imageURL = fetchImage(returnUrl(mob.id));
                mobArray.push([mobName, imageURL]);
            })
        }
        fetchData();
        setImageArray(mobArray);
    }, []);

    useEffect(() => {
        console.log(imageArray);
    })


    function clickHandler(){
        console.log('hey');
    }
    return(
        <div className="cardTable">
            {data.map((mob) => {
                return <Card img={returnUrl(mob.id)} onClick={clickHandler}></Card>
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
