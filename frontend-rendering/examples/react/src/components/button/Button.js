import './Button.css';

function Button({ onClick, children }) {

  return <button className="action-button" onClick={onClick}>{ children }</button>
}

export default Button;
