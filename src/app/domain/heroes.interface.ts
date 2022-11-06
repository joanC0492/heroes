// export interface HeroesResponse {
//   id: number;
//   name: string;
//   sprites: {
//     other: {
//       "official-artwork": {
//         front_default: string;
//       };
//     };
//   };
// }

// export interface HeroesFlavorTextEntry {
//   flavor_text: string;
// }

// export interface HeroesEspeciesResponse {
//   flavor_text_entries: HeroesFlavorTextEntry[];
// }

export interface IHeroe {
  id: number;
  hero: string;
  name: string;
  publisher: string; // Quien lo publica
  first_magazine: string; // Primer episodio
  img: string;
}
