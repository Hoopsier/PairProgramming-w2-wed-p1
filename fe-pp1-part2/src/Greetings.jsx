function Greetings(props) {
  let message;
  switch (props.lang) {
    case "fi":
      message = "Hei"
      break;
    case "de":
      message = "Hallo"
      break;
    case "en":
      message = "Hello"
      break;
    case "es":
      message = "Hola"
      break;
    case "fr":
      message = "Bonjour"
  }
  return (
    <div className="Greeting">{message + " " + props.children}</div>
  )
}

export default Greetings
