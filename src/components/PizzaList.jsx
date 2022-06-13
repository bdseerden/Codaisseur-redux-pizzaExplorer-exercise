// src/components/PizzaList.js
import { useSelector } from "react-redux";
import { selectUser } from "../store/user/selectors";
import { selectNumberOfPizzas, selectPizzas } from "../store/pizzas/selectors";
import { pizzaSlice } from "../store/pizzas/slice";

export default function PizzaList() {
  const user = useSelector(selectUser);
  const numberOfPizzas = useSelector(selectNumberOfPizzas)
  const pizzas = useSelector(selectPizzas)
  return (
    <div>
      <h1>Pizza Explorer</h1>
      <p>
        Welcome back, <strong>{user.name}</strong>! There are <strong>{numberOfPizzas}</strong> pizzas on our menu!
      </p>
      <ul>
       {pizzas.map ((p) => (
            <li key={p.id}>
            <h4>{p.name}</h4>
            <p>{p.description}</p>
            <span>
              Bought: <strong>{p.bought}</strong> times!
            </span>
          </li>
       ))}
      </ul>
    </div>
  );
}
