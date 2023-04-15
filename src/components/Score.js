export default function Score(props) {
    const scores = props.data
    return scores.map((s, index) => {
        return (
            <>
                <h2>Date: {s.date}</h2>
                <h2>
                    Score: {s.score}
                </h2>
            </>
        )
    })
}