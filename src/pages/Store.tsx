import ItemCard from "../componets/itemCard/ItemCard";
import storeItems from "../data/items.json";
import { itemType } from "../types/itemType";
import "./style.css";
const Store = () => {
  const items: itemType[] = storeItems;
  return (
    <main className="main store">
      <h2 className="store__title">Store</h2>
      <ul className="store__list">
        {items && items.map((item) => <ItemCard key={item.id} {...item} />)}
      </ul>
    </main>
  );
};

export default Store;
