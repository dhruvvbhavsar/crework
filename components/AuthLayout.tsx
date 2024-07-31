import { barlow } from '@/assets/fonts';
import React from 'react';

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children, title }) => (
  <main className="h-screen bg-gradient-to-b from-white to-[#AFA3FF]">
    <div className="mt-[120px] w-2/5 border border-[#CECECE] bg-white rounded-2xl p-[60px] flex flex-col gap-8 mx-auto">
      <p className={`${barlow.className} text-center font-semibold text-5xl`}>
        {title} <span className="text-[#4534AC]">Workflo!</span>
      </p>
      {children}
    </div>
  </main>
);

export default AuthLayout;
