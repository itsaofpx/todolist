import React from "react";
import { Trash2, Edit } from "lucide-react";

interface ListProps {
  title: string;
  description: string;
  status: string;
  onDelete: (index: number) => void;
  onEdit: (index: number) => void;
}

const getStatusColor = (status: string) => {
  switch (status) {
    case "Pending":
      return "bg-amber-400 text-white";
    case "Completed":
      return "bg-emerald-500 text-white";
    default:
      return "bg-red-500 text-white";
  }
};

const Card: React.FC<ListProps> = ({ title, description, status, onDelete, onEdit }) => {
  return (
    <div className="grid grid-cols-[4fr_2fr] h-[12rem] rounded-xl shadow-lg bg-gradient-to-r from-white to-slate-50 border border-slate-200">
      {/* Left Section */}
      <div className="grid p-6 w-full items-center">
        <h3 className="text-2xl font-semibold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
          {title}
        </h3>
        <p className="text-slate-600 text-lg mt-3 font-light leading-relaxed">
          {description}
        </p>

        <div className="mt-4">
          <span
            className={`px-4 py-2 text-lg font-medium rounded-full shadow-sm ${getStatusColor(
              status
            )}`}
          >
            {status}
          </span>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex rounded-r-xl justify-end">
        <div className="flex flex-col bg-gradient-to-b from-indigo-500 to-blue-600 h-full w-3/5 justify-evenly p-4 items-center rounded-r-xl transition-all duration-300">
          {/* Update Button */}
          <button className="p-3 text-white/90 hover:text-white transition-colors duration-200 hover:scale-110 transform" onClick={() => onEdit(0)}>
            <Edit size={32} />
          </button>

          {/* Delete Button */}
          <button className="p-3 text-white/90 hover:text-white transition-colors duration-200 hover:scale-110 transform mt-2 " onClick={() => onDelete(0)}>
            <Trash2 size={32} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;