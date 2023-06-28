import "./Button.css"

const Button = ({ handlerClick }) => {
  return (
    <div>
        <button className="button" onClick={handlerClick}>Probar mi suerte</button>
    </div>
  )
}

export default Button