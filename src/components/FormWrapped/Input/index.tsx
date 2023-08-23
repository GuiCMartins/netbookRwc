interface InputProps {
  name: string;
  placeHolder: string;
}

const Input = ({ name, placeHolder }: InputProps) => {
  return (
    <div className="input-group mb-3">
      <span className="input-group-text" id="inputGroup-sizing-default">
        {name}
      </span>
      <input
        type="text"
        className="form-control"
        placeholder={placeHolder}
        aria-label="Username"
        aria-describedby="basic-addon1"
      />
    </div>
  );
};

export default Input;
