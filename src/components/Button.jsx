// button component and its validations are inserted
import React from "react";
import Swal from "sweetalert2";

const Button = (props) => {
   //Validation;

  const validate = () =>{

   if (props.nombre === "") {
    
     Swal.fire({
      icon: "error",
      customClass: 'swal-wide',
      title: "Oops...",
      text: "No olvides tu nombre!",
    })

    props.setNombre("");
    props.setContrasena("");
    return;
  } 
  else(
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Ha iniciado Sesión',
      showConfirmButton: false,
      timer: 1500
    })
  
  )

}
  return (
    
    <button  onClick={validate} type="submit" className="btn btn-primary" >
      Ingresar
    </button>


  );
};

export default Button;
