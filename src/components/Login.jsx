import React from "react";
import { useState } from "react";
import { Form, FormGroup, Label, Input, FormFeedback, Button } from "reactstrap";

export const Login = ({setIsLoggedIn, setLoggedUser}) => {

    const[userName, setUserName]=useState("")
    const[password, setPassword]=useState("")
    const[isValidUserName, setIsValidUserName]=useState(null)
    const[isValidPassword, setIsValidPassword]=useState(null)

    const handleCheckUserName=()=>{
        console.log(userName, import.meta.env.VITE_USERNAME)
        userName==import.meta.env.VITE_USERNAME ? setIsValidUserName(true) : setIsValidUserName(false)
        console.log(isValidUserName);
    }

    const handleLogin=()=>{
        if(password==import.meta.env.VITE_PW){
            setIsValidPassword(true)
            setIsLoggedIn(true)
            setLoggedUser(import.meta.env.VITE_USERNAME)
            console.log('login successful')
        }
        
    }

  return (
    <div>
      <Form className="login border p-3 shadow mt-1 rounded">
        <FormGroup>
          <Label for="userName">Username</Label>
          <Input id="userName" 
          autoFocus 
          value={userName}
          onChange={(event)=>setUserName(event.target.value)}
          onBlur={handleCheckUserName}
          className={isValidUserName== null ? "" : (isValidUserName ? "is-valid" : "is-invalid")}
          />
          <FormFeedback>Invalid password!</FormFeedback>
        </FormGroup>

        <FormGroup>
          <Label for="password">password</Label>
          <Input id="password"  
          value={password}
          onChange={(event)=>setPassword(event.target.value)}
          className={isValidPassword== null ? "" : (isValidPassword ? "is-valid" : "is-invalid")}
          />
          <FormFeedback>Invalid username!</FormFeedback>
        </FormGroup>

        <div>
        <Button type="button" 
            color="primary" 
            onClick={handleLogin}
            disabled={!password || !isValidUserName}>Log in</Button>
        </div>
      </Form>
    </div>
  );
};
