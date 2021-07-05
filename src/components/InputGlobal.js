function InpuGlobal(props) {
  return (
    <div className="input-group mb-3">
      <label className="input-group-text" htmlFor={props.id}>{props.label}</label>
      <input
        id={props.id}
        maxLength="25"
        required={true}
        value={props.value}
        type="text"
        name={props.name}
        onChange={props.onChange}
        className="form-control"
      />
    </div>
  );
}

export default InpuGlobal;
