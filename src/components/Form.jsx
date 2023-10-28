export const Form = () => {
    return (
        <form>
            <h2>Formulario de usuario</h2>
            <div>
                <label htmlFor="">Ingresa su nombre: </label>
                <input type="text" placeholder="Nombre" />
            </div>
            <div>
                <label htmlFor="">Ingresa su oficio: </label>
                <input type="text" placeholder="Oficio" />
            </div>
            <div>
                <label htmlFor="">Ingresa su edad: </label>
                <input type="number" placeholder="Edad" />
            </div>
            <button type="submit">Ingresar</button>
        </form>
    )
}
