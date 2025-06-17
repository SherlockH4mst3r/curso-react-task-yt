function Title (props) {
  return (
    <h1 {...props} className="text-center text-3xl font-bold text-slate-100">
      {props.children}
    </h1>
  );
};

export default Title;
