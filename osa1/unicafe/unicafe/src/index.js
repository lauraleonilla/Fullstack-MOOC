import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistics = (props) => {
    return (
        <table>
            <colgroup>
            <col width="100px" />
            </colgroup>
                <tbody>
                    <tr>
                        <td>{props.text}</td>
                        <td>{props.clicks}</td>
                    </tr>
                </tbody>
        </table>
    )
} 

const Button = (props) => {
    return (
        <button onClick={props.onClick}>{props.text}</button>
    )
}

const App = (props) => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const [allClicks, setAll] = useState(0)
    const [average, setAverage] = useState(0)

    const handleBadCLick = () => {
        setAverage(average - 1)
        setAll(allClicks + 1)
        setBad(bad + 1)
    }

    const handleGoodCLick = () => {
        setAverage(average + 1)
        setAll(allClicks + 1)
        setGood(good + 1)
    }

    const handleNeutralCLick = () => {
        setAll(allClicks + 1)
        setNeutral(neutral + 1)
    }
    if(!allClicks) {
        return (
            <div>
                <h1>Anna palautetta</h1>
                <Button onClick={handleGoodCLick} text='Hyvä' />
                <Button onClick={handleNeutralCLick} text='Neutraali' />
                <Button onClick={handleBadCLick} text='Huono' />
                <h2>Statistiikka</h2>
                Ei yhtään palautetta annettu
            </div>
        )
    }
    return (
        <div>
            <h1>Anna palautetta</h1>
                <Button onClick={handleGoodCLick} text='Hyvä' />
                <Button onClick={handleNeutralCLick} text='Neutraali' />
                <Button onClick={handleBadCLick} text='Huono' />
                <h2>Statistiikka</h2>
                <Statistics text='Hyvä' clicks={good} />
                <Statistics text='Neutraali' clicks={neutral} />
                <Statistics text='Huono' clicks={bad} />
                <Statistics text='Yhteensä' clicks={allClicks} />
                <Statistics text='Keskiarvo' clicks={average / allClicks} />
                <Statistics text='Positiivisia' clicks={`${good / allClicks * 100} %`} />
        </div>
    )

}

ReactDOM.render(<App />, document.getElementById('root'))