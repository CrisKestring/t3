import React, { useState } from "react";

const Managelist1 = () => {
  const [products] = useState(["Relogio", "caneca", "abajur"]);

  const [students, setStudants] = useState([
    { id: 0, registration: 21105677, nome: "Cris", age: 25 },
    { id: 1, registration: 21106544, nome: "lux", age: 45 },
    { id: 2, registration: 21108754, nome: "garen", age: 27 },
    { id: 3, registration: 21112345, nome: "pit", age: 23 },
    { id: 4, registration: 21165478, nome: "vlad", age: 65 },
    { id: 5, registration: 21103456, nome: "dell", age: 90 },
  ]);

  const deleteRandomstudent = () => {
    const randomNumber = Math.floor(Math.random() * 5);

    setStudants ((prevStudents) => {
        return prevStudents.filter((students))
        randomNumber !== students.id;
    })
  };

  return (
    <div>
      <ul>
        {products.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <button onClick={deleteRandomstudent}>
        Remover estudante aleatorio!
      </button>
    </div>
  );
};

export default Managelist1;
