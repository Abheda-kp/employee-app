import { useEffect, useState } from "react";

export const saveLocalStorage = () :[boolean,(v:boolean)=>void]=> {
  const [passwordView, setPasswordView] = useState(
    "true" === localStorage.getItem("show-password") ? true : false
  );
  useEffect(() => {
    
    localStorage.setItem("show-password", passwordView.toString());
    
  }, [passwordView]);

  
  return [passwordView,setPasswordView]
  
};
