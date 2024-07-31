import React from "react";
import { FeatureCard } from "./FeatureCard";
import Modal from "./Modal";
import {
  CalendarIcon,
  CircleHelp,
  FilterIcon,
  PlusCircle,
  SearchIcon,
  ShareIcon,
  StarIcon,
} from "@/assets/icons";
import { barlow } from "@/assets/fonts";
import { useAuth } from "@/lib/context";

const Header: React.FC = () => {
  const { user } = useAuth();
  return (
    <header className="mb-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className={`${barlow.className} text-5xl font-semibold`}>
          Good morning, {user.name.split(" ")[0]}!
        </h1>
        <div className="flex items-center gap-2">
          <p>Help & Feedback</p>
          <CircleHelp size={20} />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2 mb-8">
        <FeatureCard
          icon="/tag-icon.png"
          title="Introducing tags"
          description="Easily categorize and find your notes by adding tags. Keep your workspace clutter-free and efficient."
        />
        <FeatureCard
          icon="/share-icon.png"
          title="Share Notes Instantly"
          description="Effortlessly share your notes with others via email or link. Enhance collaboration with quick sharing options."
        />
        <FeatureCard
          icon="/device-icon.png"
          title="Access Anywhere"
          description="Sync your notes across all devices. Stay productive whether you're on your phone, tablet, or computer."
        />
      </div>
      <div className="flex items-center justify-between">
        <div className="relative flex items-center justify-between">
          <input
            type="text"
            placeholder="Search"
            className=" pl-2 text-[#797979] placeholder:text-[#797979] focus:outline-[#999999] text-sm  pr-4 py-2 border border-[#E9E9E9] rounded-lg w-64"
          />
          <SearchIcon className="w-5 h-5 absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
        <div className="flex space-x-4">
          {[
            { icon: CalendarIcon, label: "Calendar view" },
            { icon: StarIcon, label: "Automation" },
            { icon: FilterIcon, label: "Filter" },
            { icon: ShareIcon, label: "Share" },
          ].map(({ icon: Icon, label }) => (
            <button
              key={label}
              className="flex text-sm items-center text-[#797979]"
            >
              {label} <Icon size={20} className="ml-3" />
            </button>
          ))}
          <Modal user={user}>
            {" "}
            <button className="bg-gradient-to-b from-[#4C38C2] to-[#2F2188] p-2 rounded-lg text-white flex items-center justify-center">
              {"Create new"}
              <PlusCircle className="ml-2 fill-white text-[#2F2188]" />
            </button>
          </Modal>
        </div>
      </div>
    </header>
  );
};

export default Header;
