function Employee(props) {
    return (
        <>
            <h3> Employee {props.name}</h3>
            <p> {props.role ? props.role : 'No role found'}</p>
        </>

    )

}
export default Employee
