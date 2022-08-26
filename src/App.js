//code is inserted into the application through the props

import React, { useState } from "react";
import Input from "./components/Input";
import Button from "./components/Button";


function App() {

      //Estados del input
      const [nombre, setNombre] = useState("");
      const [contrasena, setContrasena] = useState("");


  return (
    <div className="user">
        <Input 
          nombre={nombre}
          setNombre={setNombre}
          contrasena={contrasena}
          setContrasena={setContrasena}
        />

      {contrasena === '252525' ? 
        <Button 
          nombre={nombre}
          setNombre={setNombre}
          contrasena={contrasena}
          setContrasena={setContrasena}
        />
       
        : ''}
    </div>
  );
}

export default App;
