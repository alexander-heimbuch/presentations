import './Input.css';

function Input({ value, onChange }) {
  const changeHandler = (event) => onChange(event.target.value);

  return <input type="text" value={value} className="input-field" onChange={changeHandler} />
}

export default Input;
