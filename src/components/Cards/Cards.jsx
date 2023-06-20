import React from 'react'

const Cards = () => {

    const items = [
        { alt: "Hamburguesas", src: "./img/cards/burger.webp" },
        { alt: "Pizzas", src: "./img/cards/pizza.webp" },
        { alt: "Entradas", src: "./img/cards/appetizer.webp" },
        { alt: "Platos", src: "./img/cards/bistec.webp" },
        { alt: "Bebidas", src: "./img/cards/drinksBottles.jpg" },
        { alt: "Ver Carta", src: "./img/cards/menu.jpg" }
    ]

    return (
        <div className='d-flex flex-wrap justify-content-center blob-container'>
            {
                items.map(item => (
                    <div class="blob d-flex align-items-center justify-content-center" style={{backgroundImage: `url(${item.src})`}}>
                        <h2 className="cards-title" > { item.alt } </h2>
                    </div>
                    )
                )
            }
        </div>
    )
}

export default Cards