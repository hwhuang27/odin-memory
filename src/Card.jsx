
function Card({ img, onClick }){

    return (
        <div className="card">
            <img src={img} alt="icon" onClick={onClick}/>
        </div>
    )
}

export default Card;