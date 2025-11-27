const formatErrorMessage = (message) => {
    if (Array.isArray(message)) {
        return (
            <ul style={{ backgroundColor: 'white', listStyle: 'inherit', paddingLeft: '20px', marginTop: '-5px' }}>
                {message.map((item, index) => (
                    <li key={`${item}-${index}`}>{item}</li>
                ))}
            </ul>
        );
    }
    return message;
};

export default formatErrorMessage;