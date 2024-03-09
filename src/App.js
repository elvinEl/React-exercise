import React, { useState } from "react";
function App() {
  const [names, setNames] = useState(["app", "controller", ""]);
  const value = names[names.length - 1];
  const changeHandle = (e) => {
    if (e.target.value.includes("/")) {
      setNames((names) => [...names, ""]);
    } else {
      setNames((names) => [...names.slice(0, -1), e.target.value]);
    }
  };
  const handleDelete = (e) => {
    if (e.key === "Backspace" && !e.target.value) {
      setNames((names) => names.slice(0, -1));
      e.preventDefault();
    }
  };
  return (
    <div className="flex gap-3  text-white p-8">
      {names &&
        names.slice(0, -1).map((name, index) => (
          <>
            <div key={index}>{name}</div>
            <div>/</div>
          </>
        ))}
      <input
        onKeyDown={handleDelete}
        onChange={changeHandle}
        value={value}
        className="bg-transparent border-[1px] rounded-[6px] outline-none px-2 text-white"
        type="text"
      />
    </div>
  );
}

export default App;
