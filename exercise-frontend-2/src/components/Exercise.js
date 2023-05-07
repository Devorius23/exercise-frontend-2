const Exercise = (props) => {
 
    return (
        <>
            <img className="pic" src={props.exercise.image} alt=""/>
            <div className="card w-1/4 text-center">
            <h3>Name: {props.exercise.name}</h3>
            <h3>Equipment: {props.exercise.equipment}</h3>
            <h3>Muscle: {props.exercise.muscle}</h3>
            <h3>Type: {props.exercise.type}</h3>
            </div>
            
        </>
    )
}

export default Exercise