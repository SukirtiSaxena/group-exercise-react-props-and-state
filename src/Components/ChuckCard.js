function ChuckCard({ chuckGreeting, chuckImage }) {

    const chuckSoStylish = {
        width: "900px",
        border: "10px solid green",
    }

    return (
        <>
            <h2>{chuckGreeting}</h2>

            <img src={chuckImage}
                alt="Chuck Norris riding a killer whale"
                style={chuckSoStylish} />
        </>
    )
}

export default ChuckCard;