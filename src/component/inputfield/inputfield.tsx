import "./inputfield.css";

const InputField = ({
  type,
  placeholder,
  label,
  onChange,
  value,
  ref,
  id,
  endAdornment = null,
  disabled,
  defaultVal,
}: {
  type?: string;
  placeholder?: string;
  label?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  ref?: React.RefObject<HTMLInputElement | null>;
  id?: string;
  endAdornment?: React.ReactNode;
  disabled?: boolean;
  defaultVal?: string | undefined | number;
}) => {
  return (
    <>
      <div className="outer">
        <div className="input">
          <label>{label}</label>
          <input
            id={id}
            type={type}
            placeholder={placeholder}
            className="input-label"
            onChange={onChange}
            value={value}
            ref={ref}
            disabled={disabled}
            defaultValue={defaultVal}
          />
          <div>{endAdornment ? endAdornment : null}</div>
        </div>
      </div>
      {/* <p>value is:{value}</p> */}
    </>
  );
};

export default InputField;
