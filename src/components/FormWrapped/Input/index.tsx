import { IInput } from "interfaces/IInput";

const Input = ({
  className,
  feedback,
  title,
  value,
  onChange,
  isValid,
  name,
}: IInput) => {
  return (
    <div className={className ?? "col-md-3"}>
      <div className="form-outline">
        <label htmlFor="validationCustom01" className="form-label">
          {title}
        </label>
        <input
          type="text"
          className={`form-control ${isValid ? "" : "is-invalid"}`}
          id="validationCustom01"
          value={value}
          onChange={onChange}
          name={name}
        />
        <div className="invalid-feedback">{feedback}</div>
      </div>
    </div>
  );
};

export default Input;
