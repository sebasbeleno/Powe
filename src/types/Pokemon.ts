export interface Pokemon {
  id: number;
  name: string;
  image: string;
  types: Array<string>;
  stats: Array<{ name: string; value: number }>;
  abilities: Array<string>;
  moves: Array<string>;
  height: number;
  weight: number;
  base_experience: number;
  species: string;
  generation: string;
}
