

import React, { useState, useEffect } from "react";
import { FiCamera } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import ImageModal from "./ImageModal"; 
import Button from "../components/subComponents/Button";

// IMPORT AVATARS
import avatar1 from "../assets/avatars/avatar1.jpeg";
import avatar2 from "../assets/avatars/avatar2.jpeg";
import avatar3 from "../assets/avatars/avatar3.jpeg";
import avatar4 from "../assets/avatars/avatar4.jpeg";
import avatar5 from "../assets/avatars/avatar5.jpeg";
import avatar6 from "../assets/avatars/avatar6.jpeg";

const ProfileSection = ({ profile }) => {
  // ✅ Hooks must always be at the top
  const [profilePicture, setProfilePicture] = useState(null);
  const [showMenu, setShowMenu] = useState(false);
  const [showAvatarMenu, setShowAvatarMenu] = useState(false);
  const [showModal, setShowModal] = useState(false);
  
  const navigate = useNavigate();

  // Load saved avatar
  useEffect(() => {
    const savedAvatar = localStorage.getItem("user_avatar");
    if (savedAvatar) {
      setProfilePicture(savedAvatar);
    } else {
      setProfilePicture(avatar1);
    }
  }, []);

  // ⛔ Conditional rendering must come AFTER hooks
  if (!profile) return <div>Loading...</div>;

  const { first_name, last_name, phone_number, date_of_birth } = profile;

  const avatars = [avatar1, avatar2, avatar5, avatar6];

  // Select avatar
  const handleAvatarSelect = (avatar) => {
    setProfilePicture(avatar);
    localStorage.setItem("user_avatar", avatar);

    setShowAvatarMenu(false);
    setShowMenu(false);
  };

  return (
    <div className="bg-gray-950 w-full p-6 rounded-lg shadow-md flex flex-col items-center">
      <div className="relative">
        <div className="relative w-40 h-40 rounded-full overflow-hidden">
          <img
            src={profilePicture}
            alt="Profile"
            className="w-full h-full object-cover"
          />

          <button
            className="absolute bottom-2 right-2 bg-gray-800 p-2 rounded-full"
            onClick={() => setShowMenu(!showMenu)}
          >
            <FiCamera size={24} className="text-white" />
          </button>
        </div>

        {showMenu && (
          <div className="absolute mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-md">
            <ul className="text-left">
              <li
                className="p-2 text-black hover:bg-gray-100 cursor-pointer"
                onClick={() => setShowModal(true)}
              >
                See Profile Picture
              </li>

              <li
                className="p-2 text-black hover:bg-gray-100 cursor-pointer"
                onClick={() => setShowAvatarMenu(!showAvatarMenu)}
              >
                Choose Avatar
              </li>
            </ul>
          </div>
        )}

        {showAvatarMenu && (
          <div className="absolute mt-2 w-56 bg-white border border-gray-200 rounded-md shadow-md p-3 grid grid-cols-4 gap-2">
            {avatars.map((avatar, index) => (
              <img
                key={index}
                src={avatar}
                className="w-12 h-12 rounded-full cursor-pointer hover:ring-2 hover:ring-purple-600"
                onClick={() => handleAvatarSelect(avatar)}
              />
            ))}
          </div>
        )}
      </div>

      <div className="text-center mt-4">
        <h1 className="text-lg text-gray-300 font-semibold">{`${first_name} ${last_name}`}</h1>
        <p className="text-gray-100 text-sm">{phone_number}</p>
        <p className="text-gray-100 text-sm">{date_of_birth}</p>
      </div>

      <Button
        className="mt-4 px-4 py-2 font-bold rounded-lg"
        onClick={() => navigate("/helpsetting")}
      >
        Subscription Details
      </Button>

      {showModal && (
        <ImageModal imageUrl={profilePicture} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default ProfileSection;
