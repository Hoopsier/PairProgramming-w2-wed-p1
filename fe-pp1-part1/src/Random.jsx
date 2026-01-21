import "./App.css";

function Random (props) {
    const min = props.min
    const max = props.max

    console.log(props)
    const randomNumber = 
        Math.floor(Math.random() * (max - min + 1)) + min;
    return (
        <div className ="Random">
            <p>Random value between {min} and {max} = {randomNumber}</p>
        </div>
    );
}

export default Random;