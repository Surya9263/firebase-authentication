import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/react";
import { useState } from "react";
import {
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
} from "../firebase";

export default function Login() {
  const initSate = {
    email: "",
    password: "",
  };

  const [loginCreds, setSignupCreds] = useState(initSate);

  const handleLogin = () => {
    console.log(loginCreds);
    logInWithEmailAndPassword(loginCreds.email, loginCreds.password);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupCreds({ ...loginCreds, [name]: value });
  };

  return (
    <Box mx={"auto"} width={"md"}>
      <Heading>Login here</Heading>
      <FormControl isRequired mt={12}>
        <FormLabel>Email address</FormLabel>
        <Input
          onChange={handleChange}
          name="email"
          type="email"
          value={loginCreds.email}
        />
        <FormLabel>Password</FormLabel>
        <Input
          onChange={handleChange}
          name="password"
          type="password"
          value={loginCreds.password}
        />
        <Button
          mt={4}
          style={{
            backgroundColor: "black",
            color: "white",
            cursor: "pointer",
            width: "100%",
          }}
          onClick={handleLogin}
        >
          LOGIN
        </Button>
      </FormControl>
    </Box>
  );
}
