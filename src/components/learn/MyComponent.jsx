import './style.css'
//() => {}
//Component = HTML + JS + CSS
//fragment

const MyComponent = () => {
    // const stringName = 'kenzongo update';
    // const stringName = 25;
    // const stringName = true;
    // const stringName = undefined;
    // const stringName = null;
    // const stringName = [1, 2, 3]
    const stringName = {
        name: 'kenzongo',
        age: 25
    }
    return (
        <>
            <div>{JSON.stringify(stringName)} & bapngo</div>
            <div className="child" style={{ borderRadius: '10px' }}>Child</div>
        </>
    );
}

export default MyComponent;