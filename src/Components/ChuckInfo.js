function ChuckInfo({ whales, kicks, handleRoundHouseKicks }) {

    return (
        <>
            <p>Number of Whales Saved: {whales}</p>

            <p>Number of Round House Kicks (in the last day): {kicks}</p>
            
            <button onClick={() => handleRoundHouseKicks()}>
                Kick Me
            </button>
        </>
    )
}

export default ChuckInfo;