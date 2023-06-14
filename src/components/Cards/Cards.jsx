import React from 'react'
import Figure from 'react-bootstrap/Figure';

const Cards = () => {

    const items = [
        { alt: "burger", src: "./img/burger.webp" },
        { alt: "pizza", src: "./img/pizza.webp" },
        { alt: "appetizer", src: "./img/appetizer.webp" },
        { alt: "bistec", src: "./img/bistec.webp" }
    ]

    return (
        <div className='d-flex flex-wrap'>
            {
                items.map(item => (
                    <Figure key={item.alt}>
                        <Figure.Image
                            width={171}
                            height={180}
                            alt={item.alt}
                            src= {item.src}
                        />
                    </Figure>
                    )
                )
            }
        </div>
    )
}

export default Cards