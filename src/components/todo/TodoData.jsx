const TodoData = ({ name, age, data }) => {
    // console.log('>>>> Check props:', props)
    // const name = props.name;
    // const age = props.age;
    // const data = props.data;
    // const { name, age, data } = props;
    return (
        <div className='todo-data'>
            <div>My name is {name}</div>
            <div>Learning React</div>
            <div>Watching Youtube</div>
        </div>
    );
}

export default TodoData;