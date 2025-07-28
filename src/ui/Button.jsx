function Button({ name, active, handleModeChange, setActive }) {
  return (
    <button
      className={`font-['Inter'] text-sm font-medium px-3 py-2 transition-all duration-300 rounded-md ${active ? "bg-amber-100 shadow-sm" : "hover:bg-gray-100"}`}
      onClick={() => {
        handleModeChange();
        setActive();
      }}
    >
      {name}
    </button>
  );
}

export default Button;
