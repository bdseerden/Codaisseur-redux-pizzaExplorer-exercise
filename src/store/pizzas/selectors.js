export const selectNumberOfPizzas = (reduxState) => {
  return reduxState.pizzas.allPizzas.length;
};

export const selectPizzas = (reduxState) => {
  const clonedArray = [...reduxState.pizzas.allPizzas];
  return clonedArray.sort((a, b) => b.bought - a.bought);
};
