import {useState} from 'react'

const Edit = (props) => {
  const [exercise, setExercise] = useState({...props.exercise})

  const handleChange = (event) => {
    setExercise({...exercise, [event.target.name]: event.target.value})
   }

   const handleSubmit = (event) => {
      event.preventDefault()
      props.handleEdit(exercise)
   }

  return(
    <>
      <details>
        <summary className="text-center">Update Exercise</summary>
        <form onSubmit={handleSubmit}>
                <label htmlFor="image">Image: </label>
                <input type="text" name='image' onChange={handleChange} value={exercise.image}/>
                <br/>
                <br/>
                <label htmlFor="name">Name: </label>
                <input type="text" name='name' onChange={handleChange} value={exercise.name}/>
                <br/>
                <br/>
                <label htmlFor="equipment">Equipment: </label>
                <input type="text" name='equipment' onChange={handleChange} value={exercise.equipment}/>
                <br/>
                <br/>
                <label htmlFor="muscle">Muscle: </label>
                <input type="text" name='muscle' onChange={handleChange} value={exercise.muscle}/>
                <br/>
                <br/>
                <label htmlFor="type">Type: </label>
                <input type="text" name='type' onChange={handleChange} value={exercise.type}/>
                <br/>
                <br/>
                <input type="submit"/>
            </form>
      </details>
    </>
  )
}

export default Edit