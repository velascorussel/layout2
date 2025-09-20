import "./App.css";

export default function App() {
  return (
    <div className="container">

      <div className="top">
        <div className="box orange"></div>
        <div className="box orange inner-flex">
          <div className="inner pink light">Russel John</div>
          <div className="inner pink dark">Velasco</div>
        </div>
        <div className="box orange"></div>
      </div>


      <div className="middle">
        <div className="large pink dark"></div>
        <div className="side">
          <div className="small pink dark"></div>
          <div className="small pink dark"></div>
        </div>
      </div>


      <div className="bottom-section">
        <div className="box purple"></div>
        <div className="box orange bottom-orange">C-PCIT9LAB</div>
        <div className="box orange bottom-orange">IT-3B</div>
        <div className="box purple"></div>
      </div>
    </div>
  );
}
