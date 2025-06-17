const Button = (props) => {
  return (
    <button
      className="rounded-md bg-slate-400 p-2 text-white"
      {...props}
    >
      {props.children}
    </button>
  );
};

export default Button;
