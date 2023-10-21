import React from "react";

interface ButtonProps {
  label: string;
  onClick?: () => void;
}

const TriggerButton: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
    >
      {label}
    </button>
  );
};

export default TriggerButton;
