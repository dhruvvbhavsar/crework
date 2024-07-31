"use client";
import React from "react";
import Modal from "./Modal";
import {
  AnalyticsIcon,
  BellDotIcon,
  BoardsIcon,
  DownloadIcon,
  HomeIcon,
  LoaderDotIcon,
  PlusCircle,
  RightArrows,
  SettingsIcon,
  TeamsIcon,
} from "@/assets/icons";
import { useAuth } from "@/lib/context";
import { useRouter } from "next/navigation";
import { useRequireAuth } from "@/hooks/useRequiredAuth";

const Sidebar: React.FC = () => {
  const router = useRouter();
  const isAuthenticated = useRequireAuth();
  const { user, logout } = useAuth();
  if (!isAuthenticated) {
    router.push('/auth/login');
  }
  return (
    <aside className="w-64 bg-white pt-6 pb-8 px-4 flex flex-col h-screen border-r border-gray-200">
      <div className="flex items-center mb-2">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://s3-alpha-sig.figma.com/img/71f6/04d7/50a4101f6f29ecef74a38e0f7ae7513c?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VM3VVa9PGHndk4Xx3cTIkxtNw3EGNszsbcm1ft0qvPP9wA2WChraKVPXcMXvm23nSFji19Xg7Gl6o83tfLxLjNC9MCB0voT53dCvZ78AhIXkLsc9BLFqD4adx3723o54O5N5F0ZiOa7hy5n7H22jpi~kvFx2L6kg7y4KoLZGOR7XGghLNW7EiNAtn~nM4yc68cIHN1P1assk3lJlC5ZfSr4d7Nw4bGZTxUMuMqbnquOKp9vBhjvt55OuGVrzYprtQYdB57zKPmzw0bXPMiqPOy-sBaN-oVcDg95Nha6~twTziQrvgrdkfK1yXCL7S8t1wKOQyUaoYx~LfDOK22WVpQ"
          alt="Joe Gardner"
          className="size-8 rounded-lg mr-2 object-cover"
        />
        <h2 className="font-medium text-[#080808]">{user?.name || "Joe Gardener"}</h2>
      </div>
      <div className="text-[#666666] flex items-center justify-between">
        <div className="flex gap-3">
          <BellDotIcon className="h-6 w-5" />
          <LoaderDotIcon className="h-6 w-5" />
          <RightArrows className="h-6 w-5" />
        </div>
        <button onClick={logout} className="bg-[#F4F4F4] rounded p-2 text-[#797979] text-base">
          Log Out
        </button>
      </div>
      <nav className="flex-1 mt-4">
        <ul className="space-y-0">
          {[
            { icon: HomeIcon, label: "Home", active: true },
            { icon: BoardsIcon, label: "Boards" },
            { icon: SettingsIcon, label: "Settings" },
            { icon: TeamsIcon, label: "Teams" },
            { icon: AnalyticsIcon, label: "Analytics" },
          ].map(({ icon: Icon, label, active }) => (
            <li key={label}>
              <a
                href="#"
                className={`flex items-center text-[#797979]  rounded-md p-2 ${
                  active ? "bg-[#F4F4F4] border border-[#DDDDDD]" : ""
                }`}
              >
                <Icon size={20} className="mr-3" /> {label}
              </a>
            </li>
          ))}
        </ul>
        <Modal user={user} classX="w-full">
          <button className="bg-gradient-to-b w-full from-[#4C38C2] to-[#2F2188] p-2 rounded-lg text-white flex items-center justify-center">
            <span className="">Create New Task</span>
            <PlusCircle className="ml-2 fill-white text-[#2F2188]" />
          </button>
        </Modal>
      </nav>

      <button className="bg-[#F3F3F3] flex items-center rounded-lg p-2">
        <DownloadIcon size={32} className="mr-2 text-[#666666]" />
        <div className="text-left">
          <p className="text-[#666666] font-medium">Download the app</p>
          <p className="text-[#666666] text-sm">Get the full experience</p>
        </div>
      </button>
    </aside>
  );
};

export default Sidebar;
