/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react"
import validation from "../Validation/Validation"
import style from './Form.module.css'

const Form = ({ login }) => {
    const [errors, setErrors] = useState({})
    const [userData, setUserData] = useState({
        email: '',
        password: ''
    })

    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })

        setErrors(validation({
            ...userData,
            [event.target.name]: event.target.value
        }))
    }

    const handleSubmit= (event) => {
        event.preventDefault();
        login(userData);
    }

    return(
        <div className="form-login" >
        <form onSubmit={handleSubmit} >

            <label htmlFor="email">Email:</label>
            <input name="email" type="email" value={userData.email} onChange={handleChange} />
            {errors.email && <p>{errors.email}</p>}

            <label htmlFor="password">Contraseña</label>
            <input name='password' type="password"  value={userData.password} onChange={handleChange} />
            {errors.password && <p>{errors.password}</p>}

            <button>Submit</button>

        </form>
        </div>
    )
}

export default Form