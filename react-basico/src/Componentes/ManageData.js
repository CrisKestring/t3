import { useState } from "react";

const ManageData = () => {
  const [number, setnumber] = useState(30);

  console.log("number: " + number);

  return (
    <div>
      <div>
        <p>Valor: {number}</p>
        <button
          onClick={() => {
            setnumber(15);
          }}
        >
          Alterar valor!
        </button>
      </div>
    </div>
  );
};

export default ManageData;
