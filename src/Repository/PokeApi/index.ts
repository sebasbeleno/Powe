import { Pokemon } from "../../types";

class PokemonAPI {
  private baseUrl: string = "https://pokeapi.co/api/v2/pokemon/";

  async getAllPokemons(): Promise<Pokemon[]> {
    let response = await fetch(this.baseUrl);
    let data = await response.json();
    let pokemons: Array<Pokemon> = [];
    for (let i = 0; i < data.results.length; i++) {
      let pokemon = await this.getPokemon(data.results[i].name);
      pokemons.push(pokemon);
    }
    return pokemons;
  }

  // Fetches data from the PokeAPI for a specific pokemon
  // Returns a Pokemon object
  async getPokemon(name: string): Promise<Pokemon> {
    // Fetches data from the PokeAPI
    let response = await fetch(this.baseUrl + name);
    let data = await response.json();

    // Gets the image url for the pokemon
    const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${data.id}.png`;

    // Creates a Pokemon object
    let pokemon: Pokemon = {
      id: data.id,
      name: data.name,
      image,
      types: data.types.map((type) => type.type.name),
      stats: data.stats.map((stat) => ({
        name: stat.stat.name,
        value: stat.base_stat,
      })),
      abilities: data.abilities.map((ability) => ability.ability.name),
      moves: data.moves.map((move) => move.move.name),
      height: data.height,
      weight: data.weight,
      base_experience: data.base_experience,
      species: data.species.name,
    };
    return pokemon;
  }
}

export default new PokemonAPI();
