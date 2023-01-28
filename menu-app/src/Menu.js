import React from "react";

function Menu({ menu }) {
  return (
    <div className="section-center">
      {menu.map((menuItem) => {
        const { id, title, price, img, desc } = menuItem;
        return (
          <div key={id} className="menu-item">
            <img src={img} alt={title} className="photo"></img>
            <div className="item-info">
              <header>
                <h4>{title}</h4>
                <h4 className="price">{price}</h4>
              </header>
              <p className="item-text">{desc}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Menu;
