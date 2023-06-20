import React from 'react'

const Cards = () => {

  const handleLinkClick = (event, ref) => {
    event.preventDefault();
    const element = document.getElementById(ref);
    element.scrollIntoView({ behavior: 'smooth' });
  };

    const items = [
        { alt: "Hamburguesas", src: "./img/cards/a.jpeg", href: "burgers" },
        { alt: "Pizzas", src: "./img/cards/b.jpeg", href: "pizzas" },
        { alt: "Entradas", src: "./img/cards/appetizer.webp", href: "appetizers" },
        { alt: "Platos", src: "./img/cards/bistec.webp", href: "cookedPlates" },
        { alt: "Bebidas", src: "./img/cards/drinksBottles.jpg", href: "drinks" },
        { alt: "Ver Carta", src: "./img/cards/menu.jpg", href: "drinks" }
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