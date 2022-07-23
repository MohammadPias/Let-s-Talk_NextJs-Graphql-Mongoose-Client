const Input = ({ type, placeholder, setvalue, value, required, bg }) => {
    return (
        <input
            className={`py-1.5 border text-center w-full border-gray-300 rounded-md focus:outline-gray-400 mb-3 ${bg ? bg : "bg-white"}`}
            type={type}
            placeholder={placeholder}
            value={value}
            setvalue={""}
            required={required}
        />
    );
};

export default Input;