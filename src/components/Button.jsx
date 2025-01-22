function Button({ ButtonText }) {
    return (
        <button className="text-white bg-gradient-to-br from-purple-600 to-cyan-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
            {ButtonText}
        </button>
    );
}

export default Button;
