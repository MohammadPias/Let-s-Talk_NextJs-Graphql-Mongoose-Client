const Button = ({ title, type }) => {
    return (
        <button className='btn btn-primary  w-full focus:outline-primary' type={type}>
            {title}
        </button>
    );
};

export default Button;