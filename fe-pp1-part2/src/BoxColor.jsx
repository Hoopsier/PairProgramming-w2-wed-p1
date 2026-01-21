function BoxColor(props) {
    const r = props.r;
    const g = props.g;
    const b = props.b;

    const boxColor = {
        backgroundColor: `rgb(${r}, ${g}, ${b})`,
    };

    return (
        <div className = "BoxColor" style={boxColor}>
            rgb({r}, {g}, {b})
        </div>
    );
}


export default BoxColor;