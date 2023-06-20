import React from 'react'

const Cards = () => {

  const handleLinkClick = (event, ref) => {
    event.preventDefault();
    const element = document.getElementById(ref);
    element.scrollIntoView({ behavior: 'smooth' });
  };

    const items = [
        { alt: "Entradas", src: "./img/cards/appetizer.jpeg", href: "appetizers" },
        { alt: "Pizzas", src: "./img/cards/pizza.jpeg", href: "pizzas" },
        { alt: "Platos", src: "./img/cards/cooked.jpeg", href: "cookedPlates" },
        { alt: "Bebidas", src: "./img/cards/drink.jpeg", href: "drinks" },
        { alt: "Postres", src: "./img/cards/dessert.jpeg", href: "desserts" },
        { alt: "Ver Carta", src: "./img/cards/menu.jpeg", href: "drinks" }
    ] 

    return (
        <div className='d-flex flex-wrap justify-content-center blob-container'>
            {   
                items.map(item => (
                    <div onClick={e => handleLinkClick(e, item.href)} className="blob d-flex align-items-center justify-content-center" style={{backgroundImage: `url(${item.src})`}} key={item.alt || Math.random()}>
                        <h2 className="cards-title" > { item.alt } </h2>
                    </div>
                    )
                )
            }
        </div>
    )
}

export default Cards