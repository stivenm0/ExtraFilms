import React from 'react'
import { useForm } from "react-hook-form";
import axios from 'axios';
import swal from 'sweetalert';



function FormLogin({getIn}) {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const submitt = (data)=>{
      // challenge@alkemy.org //react
        axios.post('///challenge-react.alkemy.org/', data)
        .then(res=> { getIn()
          localStorage.setItem('token', res.data.token)})
        .catch(res=>{ swal(
          "No Tienes Acceso", "", "error"
      )})
    }

  return (

    <>
        <form className='Inicio  d-flex flex-column bg-dark p-2 rounded-2 ' onSubmit={handleSubmit(submitt)} >
          <h1 className='text-center text-white' >Iniciar Sesión</h1>
            <div className="form-floating mb-1">
              <input
                type="text"
                className="form-control form-control-sm  " 
                name="formId1" id="formId1" placeholder="email"
                {...register("email", {
                  required: { value:true,
                  message: 'campo requerido'
                  },
                  pattern:{
                  value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  message: 'campo no valido'
                  }
                } 
                )}
                />
              <label htmlFor="formId1">Email</label>
            </div>
            {errors.email && <small id="helpId" className="text-warning ">{errors.email.message}</small>}
            
            <div className="form-floating mb-1 mt-1">
              <input
                type="text"
                className="form-control form-control-sm  " 
                name="formId1" id="formId1" placeholder="email"
                {...register("password", {
                  required: { value:true,
                  message: 'campo requerido'
                  }
                } 
                )}
                />
              <label htmlFor="formId1">Password</label>
            </div>
            {errors.password && <small id="helpId" className=" text-warning ">{errors.password.message}</small> }
            
            <button type="submit" className="btn btn-primary">Login</button>
        </form>
    </>
  )
}

export default FormLogin