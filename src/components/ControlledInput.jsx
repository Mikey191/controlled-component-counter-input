import React, { useState } from "react";

const ControlledInput = () => {
  const [value, setValue] = useState(" ");
  return (
    <div>
      <h1>{value}</h1>
      <input
        onChange={(event) => setValue(event.target.value)}
        type="text"
        placeholder="Текст внутри инпута"
        value={value}
      />
    </div>
  );
};

export default ControlledInput;
