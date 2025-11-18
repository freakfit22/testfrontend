


import React, { useState, useEffect } from "react";
import axios from "axios";

const DetailsCard = ({ profile }) => {
  const [fields, setFields] = useState({
    height: "",
    weight: "",
    gender: "",
    address: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const baseUrl = import.meta.env.VITE_API_BASE_URL;
  const userId = profile?.user?.id;

  // Load profile into fields
  useEffect(() => {
    if (profile) {
      setFields({
        height: profile?.additional_info?.height || "",
        weight: profile?.additional_info?.weight || "",
        gender: profile?.additional_info?.gender || "",
        address: profile?.additional_info?.address || "",
      });
    }
  }, [profile]);

  // Save ALL fields at once  
  const handleSaveAll = async () => {
    setIsSubmitting(true);
    setSuccessMessage("");

    try {
      const response = await axios.post(
        `${baseUrl}/user-profile/${userId}/additional-info/`,
        fields
      );

      if (response.status === 200) {
        setSuccessMessage("Profile updated successfully!");
      } else {
        setSuccessMessage("Update failed. Try again.");
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      setSuccessMessage("There was an error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFieldChange = (field, value) => {
    setFields((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-md min-h-[450px] mx-auto flex flex-col">

      {/* Success message */}
      {successMessage && (
        <div className="bg-green-100 text-green-800 p-2 rounded-md mb-4">
          {successMessage}
        </div>
      )}

      <ul className="space-y-6 flex-1">
        {/* HEIGHT */}
        <li>
          <p className="text-gray-500">Height (cm)</p>
          <input
            type="number"
            value={fields.height}
            onChange={(e) => handleFieldChange("height", e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </li>

        {/* WEIGHT */}
        <li>
          <p className="text-gray-500">Weight (kg)</p>
          <input
            type="number"
            value={fields.weight}
            onChange={(e) => handleFieldChange("weight", e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </li>

        {/* GENDER */}
        <li>
          <p className="text-gray-500">Gender</p>
          <select
            value={fields.gender}
            onChange={(e) => handleFieldChange("gender", e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          >
            <option value="">Select Gender</option>
            <option value="F">Female</option>
            <option value="M">Male</option>
            <option value="O">Other</option>
          </select>
        </li>

        {/* ADDRESS */}
        <li>
          <p className="text-gray-500">Address</p>
          <input
            type="text"
            value={fields.address}
            onChange={(e) => handleFieldChange("address", e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </li>
      </ul>

      {/* SINGLE SAVE BUTTON */}
      <button
        onClick={handleSaveAll}
        disabled={isSubmitting}
        className="mt-6 bg-purple-600 text-white p-3 rounded-md font-semibold hover:bg-purple-700 disabled:bg-gray-400"
      >
        {isSubmitting ? "Saving..." : "Save Changes"}
      </button>
    </div>
  );
};

export default DetailsCard;
