const Input = ({ title, type, placeholder, setvalue, value, required, bg }) => {
    return (
        <input
            onChange={(e) => setvalue({ ...value, [title]: e.target.value })}
            className={`py-1.5 border text-center w-full border-gray-300 rounded-md focus:outline-gray-300 focus:shadow-lg mb-3 ${bg ? bg : "bg-white"}`}
            type={type}
            placeholder={placeholder}
            required={required}
            name={title}
        />
    );
};

export default Input;