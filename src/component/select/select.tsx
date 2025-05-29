import "./select.css";

const Select = ({
  options,
  default_val,
  label,
  onClick,
  onChange,
<<<<<<< HEAD
  id,
  value
=======
  id
>>>>>>> 68c7065 (first-commit)
}: {
  options: string[];
  default_val?: string;
  label: string;
  onClick?:()=>void,
<<<<<<< HEAD
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  id?:string
  value?:string
=======
  onChange?:(event:React.ChangeEvent<HTMLSelectElement>)=>void;
  id?:string
>>>>>>> 68c7065 (first-commit)
}) => {
  return (
    <>
      <label>{label}</label>

<<<<<<< HEAD
      <select className="select" defaultValue={default_val} value={value} onClick={onClick} id={id} onChange={onChange} >
=======
      <select className="select" defaultValue={default_val} onClick={onClick} id={id} onChange={onChange}>
>>>>>>> 68c7065 (first-commit)
        {options.map((element) => (
          <option>{element}</option>
        ))}
      </select>
    </>
  );
};

export default Select;
