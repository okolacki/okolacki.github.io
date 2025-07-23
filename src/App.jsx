import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'

function App() {
  const [count, setCount] = useState(0)

  return (
      <>
        <Header></Header>
        <section>
        <h4 className="pierw"><a href="index.html">Menu</a></h4>
        <h4 className="drug"><a href="views.html">Photogallery</a></h4>
    </section>
    <section className="tekst">
        <h3>Discover. Plan. Explore.</h3>
        <p>Whether you're chasing sunsets in Bali, skiing down the Alps, or wandering through the cobbled streets of Europe, our travel portal is your all-in-one gateway to unforgettable experiences.

From hand-picked destinations and detailed travel guides to flight deals, hotel bookings, and local tips, we help you make every journey smooth, exciting, and tailored to you.</p>
        <h3>What You’ll Find Here:</h3>
        <ul>
            <li><p>Inspiring Destinations: Browse curated travel guides, from iconic cities to hidden gems.</p></li>
            <li><p>Best Deals: Compare flights, hotels, and packages from trusted partners</p></li>
            <li><p>Custom Itineraries: Build your perfect trip with our easy-to-use planner.</p></li>
            <li><p>Local Insights: Get insider tips on where to eat, what to see, and how to move like a local.</p></li>
        </ul>
    </section>
    <section className="mail">
        <h3>Send us a mail!</h3>
        <label for="mail">Your e-mail:<br/>
            <input type="email" name="mail"/></label><br/><br/>
        <label for="box">Your message<br/>
            <input type="textbox" name="box"/></label><br/><br/>
        <button id="bnt">send</button>
    </section>
      </>
  )
}

function Galeria() {
  return(
    <>
    <Header></Header>
    <section>
        <h4 class="pierw"><a href="App">Menu</a></h4>
        <h4 class="drug"><a href="Galeria">Photogallery</a></h4>
    </section>
    <section class="katalog">
    <div class="obraz">
        <img src="images/1.jpg" alt="1"/>
        <p class="lokalizacja">📍 Como, Italy</p>
    </div>
    <div class="obraz">
        <img src="images/2.jpg" alt="2"/>
        <p class="lokalizacja">📍 La Spezia, Italy</p>
    </div>
    <div class="obraz">
        <img src="images/3.jpg" alt="3"/>
        <p class="lokalizacja">📍 Paris, France</p>
    </div>
    <div class="obraz">
        <img src="images/4.jpg" alt="4"/>
        <p class="lokalizacja">📍 Cracow, Poland</p>
    </div>
    </section>
    </>
  )
}

export default App


