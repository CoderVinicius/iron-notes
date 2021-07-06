function TextInput(props) {
  return (
<<<<<<< HEAD
    <div className="input-group mb-3">
      <label className="input-group-text" htmlFor={props.id}>{props.label}</label>
      <input
        id={props.id}
        maxLength="25"
        required={true}
=======
    <div className="form-group mb-3">
      <label htmlFor={props.id}>{props.label}</label>
      <input
        id={props.id}
        type={props.type}
        className="form-control"
        onChange={props.onChange}
>>>>>>> d1def754c183ea7018f8e08151b0042c00ae2e30
        value={props.value}
        name={props.name}
<<<<<<< HEAD
        onChange={props.onChange}
        className="form-control"
=======
        required={props.required}
>>>>>>> d1def754c183ea7018f8e08151b0042c00ae2e30
      />
    </div>
  );
}

export default TextInput; 