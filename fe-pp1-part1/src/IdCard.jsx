import "./App.css"
function IdCard(props) {
  console.log(props)
  return (
    <div className="IdCard">
      <img src={props.picture} alt="" />
      <ul className="noDots">
        <li>FirstName: {props.firstName}</li>
        <li>LastName: {props.lastName}</li>
        <li>Gender: {props.gender}</li>
        <li>Height: {props.height} cm</li>
        <li>Birth Date: {props.birth.toDateString()}</li>
      </ul>
    </div>
  )
}

//gender='female'
//     height={174}
//       birth={new Date("1988-05-11")}

export default IdCard
