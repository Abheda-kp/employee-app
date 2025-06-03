import "./select.css";

const Select = ({
  options,
  default_val,
  label,
  onClick,
  onChange,
  id
}: {
  options: string[];
  default_val?: string;
  label: string;
  onClick?:()=>void,
  onChange?:(event:React.ChangeEvent<HTMLSelectElement>)=>void;
  id?:string
}) => {
  return (
    <>
      <label>{label}</label>

      <select className="select" defaultValue={default_val} onClick={onClick} id={id} onChange={onChange}>
         {options.map((element, id) => (
          <option key={id} value={element}>
            {element}
          </option>
        ))}
      </select>
    </>
  );
};

export default Select;
