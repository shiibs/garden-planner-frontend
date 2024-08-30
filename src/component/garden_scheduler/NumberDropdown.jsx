// export default function NumberDropdown({
//   identifier,
//   onSelectChange,
//   defaultValue,
// }) {
//   const numbers = Array.from({ length: 100 }, (_, i) => i + 1);

//   const handleChange = (event) => {
//     onSelectChange(event);
//   };

//   return (
//     <div>
//       <select
//         name={identifier}
//         id={identifier}
//         defaultValue={defaultValue}
//         onChange={handleChange}
//         className="p-1"
//       >
//         {numbers.map((number) => (
//           <option key={number} value={number}>
//             {number}
//           </option>
//         ))}
//       </select>
//     </div>
//   );
// }

import React, { useState, useRef, useEffect } from "react";
import dropdown from "../../assets/planner/down.png";

let useClickOutside = (handler) => {
  let domNode = useRef();

  useEffect(() => {
    let maybeHandler = (event) => {
      if (!domNode.current.contains(event.target)) {
        handler();
      }
    };

    document.addEventListener("mousedown", maybeHandler);

    return () => {
      document.removeEventListener("mousedown", maybeHandler);
    };
  });

  return domNode;
};

export default function NumberDropdown({
  identifier,
  onSelectChange,
  defaultValue,
}) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(defaultValue || 1);
  let domNode = useClickOutside(() => {
    setDropdownOpen(false);
  });

  const numbers = Array.from({ length: 15 }, (_, i) => i + 1);

  const handleSelectChange = (number) => {
    setSelectedValue(number);
    onSelectChange({ target: { value: number } });
    setDropdownOpen(false);
  };

  return (
    <div ref={domNode} className="relative inline-block">
      <button
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="p-2 flex gap-1 border-emerald-700 border rounded-md"
      >
        {selectedValue} <img src={dropdown} alt="" className="h-7 w-7" />
      </button>
      {dropdownOpen && (
        <div className="absolute bg-white border px-2">
          {numbers.map((number) => (
            <div
              key={number}
              onClick={() => handleSelectChange(number)}
              className="p-2 cursor-pointer hover:bg-gray-200"
            >
              {number}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
