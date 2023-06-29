// import "./Ui.css";

const Ui = (props) => {
  return (
    <div className="main-container">
      <div className="container">{props.children}</div>
    </div>
  );
};

export default Ui;
