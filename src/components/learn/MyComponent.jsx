import './style.css'
//() => {}
//Component = HTML + JS + CSS
//fragment

const MyComponent = () => {
    return (
        <>
            <div>kenzongo & bapngo</div>
            <div className="child" style={{ borderRadius: '10px' }}>Child</div>
        </>
    );
}

export default MyComponent;