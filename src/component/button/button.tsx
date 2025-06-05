import "./button.css";

const Button = (
  {
    Text,
    className,
    onClick,
    type,
    disabled
  }: {
    Text?: string;
    className: string;
    onClick?: (e:any) => void;
    type: "submit" | "reset" | "button" | undefined;
    disabled: boolean;
  },
  
) => {
  return (
    <button
      type={type}
      className={`${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {Text}
    </button>
  );
};

export default Button;

//varient
