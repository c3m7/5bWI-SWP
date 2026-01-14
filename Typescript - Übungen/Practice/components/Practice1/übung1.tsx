import React, { useState } from "react";

const Übung1 = () => {
  const startValue = 7;

  const [count, setCount] = useState<number>(startValue);

  return (
    <div className="flex flex-col items-center space-y-4 p-8">
      <button
        type="button"
        onClick={() => setCount(count + 1)}
        className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
      >
        Number: {count}
      </button>
      <button
        type="button"
        onClick={() => setCount(0)}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      >
        Reset
      </button>
    </div>
  );
};

export default Übung1;
