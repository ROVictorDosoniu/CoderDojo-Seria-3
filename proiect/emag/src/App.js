import React from 'react';
import './App.css';

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

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <NavList />
          <div id="help">
            <a id="Help" href="#help">Help</a>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default App;
