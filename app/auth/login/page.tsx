"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import AuthLayout from "@/components/AuthLayout";
import FormInput from "@/components/FormInput";
import PasswordInput from "@/components/PasswordInput";
import SubmitButton from "@/components/SubmitButton";
import useForm from "@/hooks/useForm";
import { login } from "@/lib/api";
import { useAuth } from "@/lib/context";
import { useRequireAuth } from "@/hooks/useRequiredAuth";

const Login: React.FC = () => {
  const router = useRouter();
  const isAuthenticated = useRequireAuth();
  const [error, setError] = useState<string | null>(null);
  if (isAuthenticated) {
    router.push("/dashboard");
  }
  const { login: authLogin } = useAuth();
  const { values, handleChange, isValid } = useForm(
    { email: "", password: "" },
    (values) => values.email !== "" && values.password.length >= 8
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await login(values.email, values.password);
      authLogin(response.token);
      router.push("/dashboard");
    } catch (error) {
      console.error("Login failed:", error);
      setError("Login failed. Are you sure your email and password are correct?");
    }
  };

  const handleKeyPress = (event: any) => {
    if (event.key === 'Enter') {
      handleSubmit(event);
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <AuthLayout title="Welcome to">
      <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
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
        <SubmitButton isValid={isValid}>Login</SubmitButton>
        <p className="text-center">
          Don't have an account? Create a{" "}
          <Link href="/auth/register">
            <span className="text-[#0054A1]">new account</span>
          </Link>
          .
        </p>
      </form>
    </AuthLayout>
  );
};

export default Login;
