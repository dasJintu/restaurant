import create from "zustand";

const useStore = create((set) => ({
  menu: [
    {
      id: 1,
      name: "Classic Cheese Burger",
      ingredients: "angus ground brisket / american cheese/ fixins",
      price: "$13",
    },
    {
      id: 2,
      ingredients: "applewood smoked bacon/ guyere",
      name: "Baconator Burger",
      price: "$15",
    },
    {
      id: 3,
      name: "Slap Your Face Burger",
      ingredients:
        "argentinian raised prime black angus chuck / poblano peppers / butter ",
      price: "$12",
    },
    {
      id: 4,
      ingredients: "idaho potatoes / salt/ pepper",
      name: "French Fies",
      price: "$6",
    },
    {
      id: 5,
      ingredients: "not your planter's peanuts",
      name: "Boiled Peanuts",
      price: "$2",
    },
    {
      id: 6,
      ingredients: "green chillies",
      name: "Chili Slices",
      price: "$2",
    },
  ],
}));

export default useStore;
