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
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <>
      <Header titulo={course}/>
      <Content 
        part1={part1.name} numberOfExercises1={part1.exercises} 
        part2={part2.name} numberOfExercises2={part2.exercises}
        part3={part3.name} numberOfExercises3={part3.exercises}
      />
      <Total numberOfExercises1={part1.exercises} numberOfExercises2={part2.exercises} numberOfExercises3={part3.exercises}/>
    </>
  )
}


ReactDOM.render(<App />, document.getElementById('root'))