import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return(
    <h1>{props.titulo}</h1>
  )
}
const Content = (props) => {
  return(
    <p>{props.part} {props.numberOfExercises}</p>
  )
}
const Total = (props) => {
  return(
    <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14


  return(
  <>
    <Header titulo={course}/>
    <Content part={part1} numberOfExercises={exercises1}/>
    <Content part={part2} numberOfExercises={exercises2}/>
    <Content part={part3} numberOfExercises={exercises3}/>
    <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />
  </>
  )
}


ReactDOM.render(<App />, document.getElementById('root'))