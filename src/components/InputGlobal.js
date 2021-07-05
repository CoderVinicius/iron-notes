function InpuGlobal(props) {
  return (
    <div className="input-group mb-3">
      <span className="input-group-text" id="inputGroup-sizing-default">
        {props.nameInput}
      </span>
      <input
        value={props.value}
        type="text"
        name={props.name}
        onChange={props.Change}
        className="form-control"
        aria-label="Sizing example input"
        aria-describedby="inputGroup-sizing-default"
      />
    </div>
  );
}

export default InpuGlobal;
