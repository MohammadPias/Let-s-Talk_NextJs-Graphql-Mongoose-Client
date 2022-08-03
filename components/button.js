const Button = ({ title, type, handleClick }) => {
    return (
        <button
            onClick={handleClick}
            className='btn btn-primary  w-full focus:outline-primary' type={type}>
            {title}
        </button>
    );
};

export default Button;