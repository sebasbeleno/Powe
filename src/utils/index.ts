export const getPokemonColorFromType = (type: string) => {
  switch (type) {
    case "grass":
      return "#72cdb2";
    case "poison":
      return "#b97fc9";
    case "fire":
      return "#ec7572";
    case "flying":
      return "#3dc7ef";
    case "water":
      return "#86bdf9";
    case "bug":
      return "#729f3f";
    case "normal":
      return "#a4acaf";
    case "electric":
      return "#eed535";
    case "ground":
      return "#ab9842";
    case "fairy":
      return "#fdb9e9";
    case "fighting":
      return "#d56723";
    case "psychic":
      return "#f366b9";
    case "rock":
      return "#a38c21";
    case "steel":
      return "#9eb7b8";
    case "ice":
      return "#51c4e7";
    case "ghost":
      return "#7b62a3";
    case "dragon":
      return "#f16e57";
    default:
      return "#000000";
  }
};
