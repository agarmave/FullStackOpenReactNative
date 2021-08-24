import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return(
    <h1>{props.titulo}</h1>
  )
}
const Content = (props) => {
  return(
    <div>
      <p>{props.part1} {props.numberOfExercises1}</p>
      <p>{props.part2} {props.numberOfExercises2}</p>
      <p>{props.part3} {props.numberOfExercises3}</p>
    </div>
  )
}
const Total = (props) => {
  return(
    <p>Number of exercises {props.numberOfExercises1 + props.numberOfExercises2 + props.numberOfExercises3}</p>
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
    <Content 
      part1={part1} numberOfExercises1={exercises1} 
      part2={part2} numberOfExercises2={exercises2}
      part3={part3} numberOfExercises3={exercises3}/>
    <Total numberOfExercises1={exercises1} numberOfExercises2={exercises2} numberOfExercises3={exercises3}/>
  </>
  )
}


ReactDOM.render(<App />, document.getElementById('root'))