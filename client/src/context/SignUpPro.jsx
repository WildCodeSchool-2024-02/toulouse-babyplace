import PropTypes from "prop-types";
import { createContext, useContext, useMemo, useState } from "react";

export const SignUpProContext = createContext();

export function SignUpProProvider({ children }) {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [avatar, setAvatar] = useState("");
  const [description, setDescription] = useState("");
  const [opening, setOpening] = useState("");
  const [closing, setClosing] = useState("");
  const [capacity, setCapacity] = useState();

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
      street,
      setStreet,
      city,
      setCity,
      zipCode,
      setZipCode,
      avatar,
      setAvatar,
      description,
      setDescription,
      opening,
      setOpening,
      closing,
      setClosing,
      capacity,
      setCapacity,
    }),
    [
      password,
      email,
      name,
      phoneNumber,
      street,
      city,
      zipCode,
      avatar,
      description,
      opening,
      closing,
      capacity,
    ]
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
