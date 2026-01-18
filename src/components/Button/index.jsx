import "./style.css";

export default function Button({ type, text, icon, color, onClick, ...rest }) {
    return (
        <button 
            type={type ?? "button"}
            className={`btn-component ${color}`}
            onClick={onClick}
            {...rest}
        >
            {icon ? (
                <>
                    <span className="icon-span">{icon}</span>
                    {text}
                </>
            ) : text}
        </button>
    );
}