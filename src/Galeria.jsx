import Header from "./Header";
import { Link } from 'react-router-dom';

function Galeria() {
  return(
    <>
    <Header></Header>
    <section>
        <h4 className="pierw"><Link to="/">Menu</Link></h4>
        <h4 className="drug"><Link to="/galeria">Photogallery</Link></h4>
    </section>
    <section id="btnContainer">
    <button id="btn" onClick={Gray}>Make them gray!</button>
    <button id="btn" onClick={Color}>Back in color!</button>
    </section>
    <section className="katalog">
    <div className="obraz">
        <img src="images/1.jpg" alt="1" id="1"/>
        <p className="lokalizacja">📍 Como, Italy</p>
    </div>
    <div className="obraz">
        <img src="images/2.jpg" alt="2" id="2"/>
        <p className="lokalizacja">📍 La Spezia, Italy</p>
    </div>
    <div className="obraz">
        <img src="images/3.jpg" alt="3" id="3"/>
        <p className="lokalizacja">📍 Paris, France</p>
    </div>
    <div className="obraz">
        <img src="images/4.jpg" alt="4" id="4"/>
        <p className="lokalizacja">📍 Cracow, Poland</p>
    </div>
    </section>
    </>
  )
}

function Gray(){
    let obraz1 = document.getElementById("1");
    let obraz2 = document.getElementById("2");
    let obraz3 = document.getElementById("3");
    let obraz4 = document.getElementById("4");
    obraz1.style.filter = "grayscale(100%)";
    obraz2.style.filter = "grayscale(100%)";
    obraz3.style.filter = "grayscale(100%)";
    obraz4.style.filter = "grayscale(100%)";
}
function Color(){
    let obraz1 = document.getElementById("1");
    let obraz2 = document.getElementById("2");
    let obraz3 = document.getElementById("3");
    let obraz4 = document.getElementById("4");
    obraz1.style.filter = "grayscale(0%)";
    obraz2.style.filter = "grayscale(0%)";
    obraz3.style.filter = "grayscale(0%)";
    obraz4.style.filter = "grayscale(0%)";
}

export default Galeria;