// src/components/PizzaList.js
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectPizzas } from "../store/pizzas/selectors";
import { selectRestaurantsWithPizzas } from "../store/selectors";

export function RestaurantList() {
  const restaurants = useSelector(selectRestaurantsWithPizzas);
  const pizzas = useSelector(selectPizzas)
  const [selectedPizzas, setSelectedPizza] = useState(pizzas[0].id)

  return (
    <div>
      <h1>Restaurants</h1>
      <div style={{ display: "flex", justifyContent: "flex-start" }}>
        <select value={selectedPizzas} onChange={(e) => {
            setSelectedPizza(parseInt(e.target.value));
          }}></select>
        <ul>
          {restaurants.map((restaurant) => (
            <li key={restaurant.id}>
              <strong>{restaurant.name}</strong>
              <ul>
                {restaurant.pizzas.map((p) => (
                  <li>{p.name}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}