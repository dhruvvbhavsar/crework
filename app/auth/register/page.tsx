"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import AuthLayout from "@/components/AuthLayout";
import FormInput from "@/components/FormInput";
import PasswordInput from "@/components/PasswordInput";
import SubmitButton from "@/components/SubmitButton";
import useForm from "@/hooks/useForm";
import { register } from "@/lib/api";
import { useAuth } from "@/lib/context";

const Register: React.FC = () => {
  const router = useRouter();
  const { login } = useAuth();
  const [error, setError] = useState<string | null>(null);

  const { values, handleChange, isValid } = useForm(
    { name: "", email: "", password: "" },
    (values) =>
      values.name !== "" && values.email !== "" && values.password.length >= 8
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await register(values.email, values.password, values.name);
      // Assuming the register function returns the same structure as login
      // If it doesn't, you might need to adjust this part
      login(response.token);
      router.push('/dashboard'); // Redirect to dashboard after successful registration
    } catch (error) {
      console.error('Registration failed:', error);
      setError('Registration failed. Are you sure you dont have an account already?');
    }
  };

  return (
    <AuthLayout title="Welcome to">
      <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
        <FormInput
          name="name"
          value={values.name}
          onChange={handleChange}
          placeholder="Your name"
        />
        <FormInput
          name="email"
          value={values.email}
          onChange={handleChange}
          placeholder="Your email"
          type="email"
        />
        <PasswordInput
          name="password"
          value={values.password}
          onChange={handleChange}
          placeholder="Password"
        />
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <SubmitButton isValid={isValid}>Register</SubmitButton>
        <p className="text-center">
          Already have an account?{" "}
          <Link href="/auth/login">
            <span className="text-[#0054A1]">Login</span>
          </Link>
          .
        </p>
      </form>
    </AuthLayout>
  );
};

export default Register;