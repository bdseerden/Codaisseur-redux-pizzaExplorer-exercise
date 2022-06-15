// src/components/PizzaList.js
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../store/user/selectors";
import { selectNumberOfPizzas, selectPizzas } from "../store/pizzas/selectors";
import { pizzaSlice } from "../store/pizzas/slice";
import { toggleFavorites } from "../store";
import "/Users/bozebeats/Desktop/Codaisseur/week5/pizza-explorer/src/components/styles.scss"

export default function PizzaList() {
  const user = useSelector(selectUser);
  const numberOfPizzas = useSelector(selectNumberOfPizzas)
  const pizzas = useSelector(selectPizzas)
  const dispatch = useDispatch();
  return (
    <div className="pizza-list">
      <h1>Pizza Explorer</h1>
      <p>
        Welcome back, <strong>{user.name}</strong>! There are{" "}
        <strong>{pizzas.length}</strong> pizzas in total:
      </p>
      <ul className="pizzas">
        {pizzas.map((p) => (
          <li
            key={p.id}
            className="pizza"
            style={{ backgroundImage: `url(${p.image})` }}
          >

            <button
              onClick={() => dispatch(toggleFavorites(p.id))}
              className={`fav-toggle ${
                user.favorites.includes(p.id) ? "fav" : ""
              }`}
            >
              {user.favorites.includes(p.id) ? "♥" : "♡"}
            </button>
            <div className="overlay">
              <p><strong>{p.name}</strong> {p.description}</p>
              <span>
                Bought: <strong>{p.bought}</strong> times!
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};