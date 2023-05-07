import { useState, useEffect  } from 'react'
import axios from 'axios'
import Exercise from './components/Exercise'
import Add from './components/Add'
import Edit from './components/Edit'
import './App.css'

const App = () => {
  const [exercise, setExercise] = useState([])

  const getExercise = () => {
    axios.get('http://localhost:3000/exercise')
    .then((response) => setExercise(response.data), (err) => console.log(err))
    .catch((error) => console.log(error))
  }

  const handleCreate = (data) => {
    console.log(data)
    axios.post('http://localhost:3000/exercise', data)
    .then((response) => {
      console.log(response)
      let newExercise = [...exercise, response.data]
      setExercise(newExercise)
    })
  }

  const handleDelete = (deletedExercise) => {
    axios.delete('http://localhost:3000/exercise/' + deletedExercise._id)
    .then((response) => {
      let newExercise = exercise.filter((exercise) => {
        return exercise._id !== deletedExercise._id
      })
      setExercise(newExercise)
    })
  }

  const handleEdit = (data) => {
    axios.put('http://localhost:3000/exercise/' + data._id, data)
    .then((response) => {
      let newExercise = setExercise.map((exercise) => {
        return exercise._id !== data._id ? exercise : data
      })
      setExercise(newExercise)
    })
  }

  useEffect(() => {
    getExercise()
  }, [])

  return (
    <>
      <div className="bg-cyan-400" >
      <h1 className="text-2xl text-center">Big Body Lifts</h1>
      <Add handleCreate={handleCreate} />
      <div className=''>
        {exercise.map((exercise) => {
          return (
            <>
              <div key={exercise._id}>
                <Exercise exercise={exercise} />
                <Edit exercise={exercise} handleEdit={handleEdit} />
                <div className="text-center">
                <button onClick={() => { handleDelete(exercise) }} >Delete</button>
                </div>
              </div>

            </>
          )
        })}
      </div>
      </div>
    </>
  )
}

export default App