
import './App.css';

let stdJson = require('./student.json');
let stdIndex = 0;

function update(){
  document.getElementById("nameF").innerText = stdJson[stdIndex].Name;
  document.getElementById("idF").innerText = stdJson[stdIndex].ID;
  document.getElementById("classF").innerText = stdJson[stdIndex].Class;
  document.getElementById("seatF").innerText = stdJson[stdIndex].Seat;
}

function App() {
  const handleNextClick =()=>{
    if(stdIndex < 9) stdIndex++;
    update();
  }
  const handlePreviousClick =()=>{
    if(stdIndex) stdIndex--;
    update();
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Student Data</h1>
      </header>
      <body>
        <table align="center" cellpadding = "10">
        <tr>
        <td>Name :</td>
        <td><lable ID="nameF"/></td>
        </tr>
        <tr>
        <td>ID :</td>
        <td><lable ID="idF"/></td>
        </tr>
        <tr>
        <td>Class :</td>
        <td><lable ID="classF"/></td>
        </tr>
        <tr>
        <td>Seat :</td>
        <td><lable ID="seatF"/></td>
        </tr>
        </table>

        <div>
          <button className="button" onClick={handlePreviousClick}>Previous</button>
          <button className="button" onClick={handleNextClick}>Next</button>
        </div>
      </body>
    </div>
  );
}

export default App;
