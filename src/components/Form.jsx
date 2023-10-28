/* eslint-disable react/prop-types */
import { useState } from 'react';
import '../styles/Form.css'

export const Form = ({ setInfo, info }) => {

    const [name, setName] = useState('')
    const [work, setWork] = useState('')
    const [age, setAge] = useState(0)

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = { name, work, age, id: new Date().getMilliseconds() }
        setInfo([...info, data]);
    }

    return (
        <form className="registro" onSubmit={handleSubmit}>
            <h2>Formulario de usuario</h2>
            <section className='entrega'>
                <div className='placa'>
                    <label htmlFor="">Ingresa su nombre:</label>
                    <input type="text" name='name' placeholder="Nombre" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className='placa'>
                    <label htmlFor="">Ingresa su oficio:</label>
                    <input type="text" name='work' placeholder="Oficio" value={work} onChange={(e) => setWork(e.target.value)} />
                </div>
                <div className='placa'>
                    <label htmlFor="">Ingresa su edad:</label>
                    <input type="number" name='age' placeholder="Edad" value={age} onChange={(e) => setAge(e.target.value)} />
                </div>
                <button type="submit">Ingresar</button>
            </section>
        </form>
    )
}
