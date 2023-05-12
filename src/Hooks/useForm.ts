import { useState } from "react";

type FormState = {
  [key: string]: any;
};

export const useForm = (initialState: FormState) => {
  const [state, setState] = useState<FormState>(initialState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
  };

  return [state, handleChange];
};

export default useForm;
