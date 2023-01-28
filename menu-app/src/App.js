// import logo from './logo.svg';
// import './App.css';

import Categories from "./Categories";
import Menu from "./Menu";
import items from "./Data";
import { useState } from "react";

const allCategories = ["all", ...new Set(items.map((item) => item.category))];
console.log(allCategories);

function App() {
  const [menu, setMenu] = useState(items);
  const [category, setCategory] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setMenu(items);
      return;
    }

    const newItems = items.filter((item) => item.category === category);
    setMenu(newItems);
  };
  return (
    <div className="App">
      <main>
        <div className="title">
          <h1>Our Menu</h1>
          <div className="underline"></div>
        </div>
        <Categories filterItems={filterItems} categories={category} />
        <Menu menu={menu} />
      </main>
    </div>
  );
}

export default App;
