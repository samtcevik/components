import className from 'classnames'
import '../index.css'

function Button({
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    outline,
    rounded, 
    ...rest
}) {
    const classes = className(rest.className,"flex items-center px-3 py-1.5 border", {
        "border-blue-500 bg-blue-500 text-white": primary && !outline,
        "border-blue-500 bg-white text-blue-500": primary && outline,
        "border-gray-900 bg-gray-900 text-white": secondary  && !outline,
        "border-gray-900 bg-white text-gray-900": secondary  && outline,
        "border-green-500 bg-green-500 text-white": success && !outline,
        "border-green-500 bg-white text-green-500": success && outline,
        "border-yellow-400  bg-yellow-400 text-white": warning && !outline,
        "border-yellow-400  bg-white text-yellow-400": warning && outline,
        "border-red-500 bg-red-500 text-white": danger && !outline,
        "border-red-500 bg-white text-red-500": danger && outline,
        "rounded-full": rounded,
        "bg-white": outline,
    });

    return (
        <button {...rest} className={classes}>
            {children}
        </button>
    )
}

export default Button;