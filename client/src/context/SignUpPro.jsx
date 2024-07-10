import PropTypes from "prop-types";
import { createContext, useContext, useMemo, useState } from "react";

export const SignUpProContext = createContext();

export function SignUpProProvider({ children }) {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const signUpProValue = useMemo(
    () => ({
      password,
      setPassword,
      email,
      setEmail,
      name,
      setName,
      phoneNumber,
      setPhoneNumber,
    }),
    [password, email, name, phoneNumber]
  );

  return (
    <SignUpProContext.Provider value={signUpProValue}>
      {children}
    </SignUpProContext.Provider>
  );
}

export function useSignUpPro() {
  return useContext(SignUpProContext);
}

SignUpProProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
