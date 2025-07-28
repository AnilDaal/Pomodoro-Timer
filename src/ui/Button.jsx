function Button({ name, active, handleModeChange, setActive }) {
  return (
    <button
      className={`${active ? "p-1 bg-amber-100  rounded-[5px]" : ""}`}
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
