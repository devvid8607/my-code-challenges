import React from "react";

function Child(setValue) {
  return (
    <div>
      <div>Child</div>
      <button onClick={() => setValue("Parent has been updated")}>
        Change Parent Value
      </button>
    </div>
  );
}

export default Child;
