import visa from "./assets/images/visa.png"
import mc from "./assets/images/master-card.svg"
function CreditCard(props) {
  const num = props.number.slice(-4);
  let myImg;
  switch (props.type) {
    case "Visa":
      myImg = visa;
      break;
    case "Master Card":
      myImg = mc;
      break;
  }
  const mystyle = {
    backgroundColor: props.bgColor,
    color: props.color
  };
  return (
    <div className="CreditCard" style={mystyle}>
      <header>
        <img className="my-img" src={myImg} alt="This is an image" />
      </header>

      <h1>**** **** **** {num}</h1>
      <p>Expires {props.expirationMonth}/{props.expirationYear} {props.bank}</p>
      <p>{props.owner}</p>

    </div>
  )
}

export default CreditCard
