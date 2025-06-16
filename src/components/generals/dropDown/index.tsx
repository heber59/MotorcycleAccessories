import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

interface DropdownMenuProps {
  label: string;
  items: string[];
  onSelect?: (item: string) => void;
}

export const DropdownMenu = ({ label, items, onSelect }: DropdownMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  let timeoutId: ReturnType<typeof setTimeout>;
  const navigate = useNavigate();

  const handleMouseEnter = () => {
    clearTimeout(timeoutId);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => setIsOpen(false), 400);
  };

  const handleClick = () => {
    navigate("/productos");
    setIsOpen(false);
  };

  const handleItemClick = (item: string) => {
    onSelect?.(item);
    setIsOpen(false);
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="flex items-center gap-1 cursor-pointer text-xl hover:text-blue-600"
        onClick={handleClick}
      >
        {label}
        <FaChevronDown className="text-sm" />
      </div>

      {isOpen && (
        <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded p-2 z-20">
          {items.map((item) => (
            <div
              key={item}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-800"
              onClick={() => handleItemClick(item)}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
