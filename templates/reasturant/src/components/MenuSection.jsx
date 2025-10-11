import React from "react";
import "../css/MenuSection.css";
import menuImg1 from '../assets/menu1.jpg';
import menuImg2 from '../assets/menu2.png';
import menuImg3 from '../assets/menu3.png';
import menuImg4 from '../assets/menu4.jpg';
import menuImg5 from '../assets/menu5.jpg';
import menuImg6 from '../assets/menu1.jpg';

const menuItems = [
    {
        id: 1,
        name: "Signature Grilled Burger",
        description: "Angus beef, caramelized onions, aged cheddar, secret sauce",
        price: "$12.99",
        image: menuImg1,
    },
    {
        id: 2,
        name: "Street Tacos Trio",
        description: "Slow-cooked carnitas, fresh pico, cilantro-lime crema",
        price: "$10.99",
        image: menuImg2,
    },
    {
        id: 3,
        name: "Loaded BBQ Fries",
        description: "Crispy fries, pulled pork, cheese sauce, jalapeños",
        price: "$9.99",
        image: menuImg3,
    },
    {
        id: 4,
        name: "Spicy Chicken Wrap",
        description: "Grilled chicken, buffalo sauce, fresh veggies, ranch",
        price: "$11.99",
        image: menuImg4,
    },
    {
        id: 5,
        name: "Gourmet Hot Dog",
        description: "All-beef frank, crispy bacon, grilled peppers, spicy aioli",
        price: "$8.99",
        image: menuImg5,
    },
    {
        id: 6,
        name: "Churros Supreme",
        description: "Cinnamon sugar, chocolate & caramel dipping sauces",
        price: "$6.99",
        image: menuImg6,
    },
];

const MenuSection = () => {
    return (
        <section id="menu" className="menu-section">
            <div className="menu-header">
                <span data-aos="fade-up"  className="menu-tag">MENU</span>
                <h2 data-aos="fade-up" >What We're Serving</h2>
                <p data-aos="fade-up" >Handcrafted with premium ingredients, served with passion</p>
            </div>

            <div data-aos="fade-up"  className="menu-grid">
                {menuItems.map((item) => (
                    <div key={item.id} className="menu-card">
                        <img src={item.image} alt={item.name} />
                        <div className="menu-info">
                            <h3>{item.name}</h3>
                            <p>{item.description}</p>
                            <div className="menu-bottom">
                                <span className="price">{item.price}</span>
                                <button className="add-btn">Add</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div data-aos="fade-up" class="view-menu-btn-container">
                <button class="view-menu-btn">
                    View Full Menu <span class="arrow">→</span>
                </button>
            </div>
        </section>
    );
};

export default MenuSection;
