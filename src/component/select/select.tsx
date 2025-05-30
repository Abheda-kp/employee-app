import "./select.css";

const Select = ({
  options,
  default_val,
  label,
  onClick,
  onChange,
  id,
  value
}: {
  options: string[];
  default_val?: string;
  label: string;
  onClick?:()=>void,
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  id?:string
  value?:string
}) => {
  return (
    <>
      <label>{label}</label>

      <select className="select" defaultValue={default_val} value={value} onClick={onClick} id={id} onChange={onChange} >
        {options.map((element) => (
          <option>{element}</option>
        ))}
      </select>
    </>
  );
};

export default Select;
