const Exercise = (props) => {
 
    return (
        <>
            <div className="exercise">
            <img className="images" src={props.exercise.image} alt=""/>
            <div className="card w-1/4 text-center">
            <h3>Name: {props.exercise.name}</h3>
            <h3>Equipment: {props.exercise.equipment}</h3>
            <h3>Muscle: {props.exercise.muscle}</h3>
            <h3>Type: {props.exercise.type}</h3>
            </div>
            </div>
            
        </>
    )
}

export default Exercise