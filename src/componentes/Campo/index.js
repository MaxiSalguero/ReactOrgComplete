import "./Campo.css"

const Campo = (props) => {
    const placeholderModificado = `${props.placeholder}...`

    const { titulo, required, valor, type = "text" } = props

    const manejarCambio = (e) => {
        props.actualizarValor(e.target.value)
    }

    return <div className={`campo campo-${type}`}>
        <label>{titulo}</label>
        <input
            placeholder={placeholderModificado}
            required={required}
            value={valor}
            onChange={manejarCambio}
            type={type}
        />
    </div>
}

export default Campo