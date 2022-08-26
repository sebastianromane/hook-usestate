//component inputs name and password are inserted
const Input = (props) => {
  
  return (
    <div>
     
          <input
            type="text"
            name="nombre"
            className="form-control"
            onChange={(e) => props.setNombre(e.target.value)}
            value={props.nombre}
            placeholder="Ingresa tu nombre"
          />
      
          <input
            type="password"
            name="contrasena"
            className="form-control"
            onChange={(e) => props.setContrasena(e.target.value)}
            value={props.contrasena}
            placeholder="Ingresa tu contraseña"
          />

    </div>
  );
}

export default Input