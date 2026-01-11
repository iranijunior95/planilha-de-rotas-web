import "./style.css";

export default function Input({forLabel, label, icon, messageError, ...rest}) {
    return (
        <div className="form-group">
            <label htmlFor={forLabel}>{label}:</label>

            <div className={!messageError ? "input-wrapper" : "input-wrapper error"}>
                {icon && (
                    <span className="icon-span">{icon}</span>
                )}
                
                <input 
                    {...rest}
                />
            </div>
            
            {messageError && (
                <span className="span-message">{messageError}</span>
            )}
        </div>
    );
}