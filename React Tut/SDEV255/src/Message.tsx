//PascalCase(1st letter uppercase)
function Message() {
    //JSX (JavaScript XML) - HTML like syntax
    const name = "KayRue";
    if (name){
        return <h1>Hello {name}</h1>;
    }
    return <h1>Hello World</h1>;
}

export default Message;