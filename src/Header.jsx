
function Header(){

    return(
        <div className="header">

            <div className="title">
                <h1>Memory Game</h1>
                <p>Get points by clicking on cards, but don't click on a card more than once!</p>
            </div>

            <div className="scoreboard">
                <p>Score: 0</p>
                <p>Best Score:  0</p>
            </div>

        </div>
    )
}

export default Header;