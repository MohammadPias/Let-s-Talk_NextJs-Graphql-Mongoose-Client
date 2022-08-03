const CheckBox = ({
    value,
    setvalue,
    title,
    check,
    setcheck }
) => {
    return (
        <div className='flex space-x-3 items-center mb-3'>
            <input
                onChange={(e) => {
                    setvalue({ ...value, role: e.target.name })
                    setcheck(!check)
                }}
                checked={value.role === title && true}
                type="checkbox"
                name={title}
                id={title} />
            <label htmlFor={title}>{title}</label>
        </div>
    )
}
export default CheckBox;