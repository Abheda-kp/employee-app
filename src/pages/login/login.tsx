import "./login.css";
import Button from "../../component/button/button";
import InputField from "../../component/inputfield/inputfield";
import { useEffect, useRef, useState } from "react";
import mousePosition from "../../hooks/mouseposition";
import { saveLocalStorage } from "../../hooks/localStorage";
import { Navigate, useNavigate, useSearchParams } from "react-router-dom";
import { useLoginMutation } from "../../api-service/auth/login.api";

// const Login = () => {

// const [counter,setCounter]=useState(0);
//    const handleClick=()=>{
//     setCounter(counter=>counter+1);
//     console.log(counter)

//    }

// const [userName, setUserName] = useState("");
// const [password, setPassword] = useState("");

const Login = () => {
  const navigate = useNavigate();
  // if (localStorage.getItem("token") !== "") return navigate("/employees");
  const [login, { isLoading }] = useLoginMutation();
  const [userName, setUserName] = useState("");
  const [passwordView, setPasswordView] = saveLocalStorage();

  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const onLogin = async (e:any) => {
    e.preventDefault();
    await login({ email: userName, password: password })
      .unwrap()
      .then((response) => {
        console.log(response);
        localStorage.setItem("token", response?.accessToken);
        navigate("/employees");
      })
      .catch((error) => {
        setError(error.data.message);
        console.log(error);
      });
  };

  // const hook=saveLocalStorage();
  // const [error, setError] = useState("");
  // const usernameRef=useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (userName.length > 30) {
      setError("Username must be less than 20 characters");}
      
    //  usernameRef.current?.focus()

  }, [userName]);

  // const [searchParams, setSearchParams] = useSearchParams();

  // const getQuery = () => {
  //   console.log(searchParams.get("status"));
  // };
  // const setQuery = () => {
  //   searchParams.set("status", "inactive");
  //   setSearchParams(searchParams);
  // };

  // const handleClick = () => {
  //   if (userName == "abhi" && password) {
  //     localStorage.setItem("isLoggedIn", "true");
  //     navigate("/employees");
  //   } else {
  //     alert("Invalid user");
  //   }

  const [x, y] = mousePosition();

  // useEffect(()=>{
  //     usernameRef.current?.focus()
  // },[])
  return (
    <div className="row">
      <div className="column1">
        <div className="circle">
          <img src="/image.png"></img>
        </div>
      </div>

      <div className="column2">
        <div className="login-box">
          {/* <h1>X coordinate:{x}</h1>
          <h1>Y coordinate:{y}</h1> */}
          <img src="kv-logo.png" alt="Keyvalue Logo" className="logo" />
          <form>
            <div className="first-input">
              <InputField
                type="text"
                placeholder="Username"
                label="Username"
                id="Username"
                // ref={usernameRef}
                value={userName}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setUserName(e.target.value)
                }

                endAdornment={
                  <button
                    onClick={() => setUserName("")}
                    disabled={userName.length === 0}
                    type="button"
                  >
                    clear
                  </button>
                }
               
              />
            </div>
            {/* <p>this is the value:{Username}</p> */}

            <InputField
              id="password"
              type={passwordView ? "text" : "Password"}
              placeholder="Password"
              value={password}
              id="Password"
              label="Password"

              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPassword(e.target.value)
              }
            />

            <label>Show password</label>
            <input
              type="checkbox"
              checked={passwordView}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPasswordView(e.target.checked)
              }
            />
            
            <Button
              Text="Login"
              className="login"
              onClick={onLogin}
              disabled={isLoading}
              type="submit"
            />
           <p> {error}</p>
          </form>
          {/* <button onClick={getQuery}>get-Query-param</button> */}
          {/* <button onClick={setQuery}>set-Query-param</button> */}
        </div>
      </div>
    </div>
  );
};
export default Login;
