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
import { registerWithEmailAndPassword } from "../firebase";

export default function Signup() {
  const initSate = {
    name: "",
    email: "",
    password: "",
  };

  const [signupCreds, setSignupCreds] = useState(initSate);

  const handleSignup = () => {
    console.log(signupCreds);
    registerWithEmailAndPassword(
      signupCreds.name,
      signupCreds.email,
      signupCreds.password
    );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupCreds({ ...signupCreds, [name]: value });
  };

  return (
    <Box mx={"auto"} width={"md"}>
      <Heading>Sign up here</Heading>
      <FormControl isRequired mt={12}>
        <FormLabel>Name</FormLabel>
        <Input onChange={handleChange} name="name" value={signupCreds.name} />
        <FormLabel>Email address</FormLabel>
        <Input
          onChange={handleChange}
          name="email"
          type="email"
          value={signupCreds.email}
        />
        <FormLabel>Password</FormLabel>
        <Input
          onChange={handleChange}
          name="password"
          type="password"
          value={signupCreds.password}
        />
        <Button
          mt={4}
          style={{
            backgroundColor: "black",
            color: "white",
            cursor: "pointer",
            width: "100%",
          }}
          onClick={handleSignup}
        >
          SIGN UP
        </Button>
      </FormControl>
    </Box>
  );
}
