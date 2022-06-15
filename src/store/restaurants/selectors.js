export const selectRestaurants = (reduxState) => {
  const clonedArray = [...reduxState.restaurant.allRestaurants];
  console.log([...reduxState.restaurant.allRestaurants]);
  return clonedArray.sort((a, b) => a.name.localeCompare(b.name));
};
