import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
    return (
        <div>
            <h1>{props.course}</h1>
        </div>
    )
}

const Part = (props) => {
    return (
        <div>
            <p>{props.part} {props.exercices}</p>
        </div>
    )
}

const Content = (props) => {
    return (
        <div>
            <Part part={props.part} exercices={props.exercices}/>
        </div>
    ) 
}

const Total = (props) => {
    return (
        <div>
            <p>Yhteensä {props.total} tehtävää</p>
        </div>
    )
}

const App = () => {
    const course = {
    name: 'Half Stack -sovelluskehitys',
        parts: [
            {
            name: 'Reactin perusteet',
            exercises: 10 
        },
        {
            name: 'Tiedonvälitys propseilla',
            exercices: 7
        },
        {
            name: 'Komponenttien tila',
            exercices: 14
        }
    ]
}

    return (
        <div>
           <Header course={course.name} /> 
            <Content part={course.parts[0].name} exercices={course.parts[0].exercises} />
            <Content part={course.parts[1].name} exercices={course.parts[1].exercices} />
            <Content part={course.parts[2].name} exercices={course.parts[2].exercices} />
           <Total total={course.parts[0].exercises + course.parts[1].exercices + course.parts[2].exercices}/>
        </div>
    )
 }

ReactDOM.render(<App />, document.getElementById('root'))