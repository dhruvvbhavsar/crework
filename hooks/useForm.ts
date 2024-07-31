"use client";
import { useState, useEffect } from 'react';

interface FormValues {
  [key: string]: string;
}

const useForm = (initialValues: FormValues, validate: (values: FormValues) => boolean) => {
  const [values, setValues] = useState(initialValues);
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    setIsValid(validate(values));
  }, [values, validate]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  return { values, handleChange, isValid };
};

export default useForm;