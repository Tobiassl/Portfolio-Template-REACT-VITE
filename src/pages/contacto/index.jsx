import React from 'react';
import './contacto.css'

const Contacto = () => {
    return(
        <div className='contenedorcontacto'>
            
            <form>
                <label>Ingrese su nombre:</label>
                <input type="text" placeholder='nombre' required/>
                <label>Ingrese su apellido:</label>
                <input type="text" placeholder='apellido' required/>
                <label>Ingrese su email:</label>
                <input type="text" placeholder='email' required disabled/>
                <label>Ingrese su comentario:</label>
                <textarea placeholder='comentario'></textarea>
                <select name="animales" id="">
                    <option value="Leon">Leon</option>
                    <option value="Tigre">Tigre</option>
                    <option value="Puma">Puma</option>
                </select>



                <button type='submit'>Enviar</button>
                <button type='reset'>Borrar</button>
            </form>


        </div>
    )
}

export { Contacto }