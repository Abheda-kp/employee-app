import "./title.css"
const Title = ({
  heading,
  endAdornment = null,
}: {
  heading: string;
  endAdornment?: React.ReactNode;
}) => {
  return (
   <div className="title-background">
      <div className="left-head">{heading}</div>
      <div>{endAdornment ? endAdornment : null}</div>
    </div>
  );
};

export default Title;
