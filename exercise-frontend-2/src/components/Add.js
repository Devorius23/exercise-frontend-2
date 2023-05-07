import { useState } from 'react'

const Add = (props) => {
    const [exercise, setExercise] = useState({image: '', name: '', equipment: '', muscle: '', type: ''})


    const handleChange = (event) => {
        setExercise({...exercise, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.handleCreate(exercise)
    }




    return (
        <>
        <div className="card w-1/4 h-23">
            <summary>Add Exercise</summary>
            <form onSubmit={handleSubmit}>
                <label htmlFor="image">Image: </label>
                <input type="text" name='image' onChange={handleChange} />
                <br/>
                <br/>
                <label htmlFor="name">Name: </label>
                <input type="text" name='name' onChange={handleChange} />
                <br/>
                <br/>
                <label htmlFor="equipment">Equipment: </label>
                <input type="text" name='equipment' onChange={handleChange} />
                <br/>
                <br/>
                <label htmlFor="muscle">Muscle: </label>
                <input type="text" name='muscle' onChange={handleChange} />
                <br/>
                <br/>
                <label htmlFor="type">Type: </label>
                <input type="text" name='type' onChange={handleChange} />
                <br/>
                <br/>
                <input type="submit"/>
            </form>
            </div>
            
        </>
    )
}

export default Add