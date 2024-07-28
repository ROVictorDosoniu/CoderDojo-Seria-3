
import React from 'react';
import './App.css';
import Poze from './pozeJos';
import Lista from './Lista';

const NavItem = ({ id, href, children }) => {
  return (
    <li>
      <a id={id} href={href}>{children}</a>
    </li>
  );
};

const navItems = [
  { id: "Produse", href: "#Prosduse", label: "Produse" },
  { id: "OfertaZilei", href: "#Prosduse", label: "Oferta Zilei" },
  { id: "GeniusDeals", href: "#Prosduse", label: "Genius Deals" },
  { id: "EasyBuyBack", href: "#Prosduse", label: "Easy BuyBack" },
  { id: "Rabla", href: "#Prosduse", label: "Rabla" },
  { id: "Genius", href: "#Prosduse", label: "Genius" },
  { id: "OferteleEmag", href: "#Prosduse", label: "Ofertele eMag" },
];

const NavList = () => {
  return (
    <ul>
      {navItems.map(item => (
        <NavItem key={item.id} id={item.id} href={item.href}>
          {item.label}
        </NavItem>
      ))}
    </ul>
  );
};

const chesti = [
  {
    imagine: "smartphone.png",
    text: "Laptop, Tablete & Telefoane",
  },
  {
    imagine: "mouse.png",
    text: " PC, Periferice & Software",
  },
  {
    imagine: "tv.png ",
    text: " TV, Audio-Video & Foto",
  },
  {
    imagine: "wash.png",
    text: " Electrocasnice & Climatizare",
  },
  {
    imagine: "ps4.png",
    text: "Gaming, Carti & Birotica",
  },
  {
    imagine: "bag.png",
    text: " Bacanie",
  },
  {
    imagine: "tricou.png",
    text: "Fashion",
  },
  {
    imagine: "mirror.png",
    text: "Ingrijire personala & Cosmetice",
  },
  {
    imagine: "canapea.png",
    text: "Casa, Gradina & Bricolaj",
  },
  {
    imagine: "ping.png",
    text: "Sport & Travel",
  },
  {
    imagine: "ca.png",
    text: "Auto, Moto & RCA",
  },
  {
    imagine: "bear.png",
    text: "Jucarii, Copii & Bebe",
  },
];



function App() {
  return (
    <>
      <div className="App">
        <div className="header">
          <img src="emaglogo.png" />
          <input type="text" placeholder="începe o nouă căutare"></input>
        </div>
      </div>

      <header>
        <nav>
          <NavList />
          <div id="help">
            <a id="Help" href="#help">
              Help
            </a>
          </div>
        </nav>
      </header>

     <div className='mijloc'>
      <div className='list'>
        <ul>
          {chesti.map((obj)=> 
          <Lista imagine={obj.imagine} text={obj.text}></Lista>
          )}
        </ul>
      </div>
      <img src='emag.PNG' alt=""/>
     </div>
      <div className="Jos">
        <Poze />
      </div>
    </>
  );
    }

export default App;