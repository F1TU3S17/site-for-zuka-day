import "./Button.css"
export default function Button({ children, isActive, ...props}) {
    let classButton="button";
    if (isActive){
        classButton = "button active"
    }
    return (
      <button
        {...props}
        className={classButton}
        >
        {children}
      </button>
    );
  }