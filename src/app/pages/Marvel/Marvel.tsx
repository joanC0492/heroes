import { CardHeroe } from "../../../shared/components/CardHeroe/CardHeroe";
import { LayoutTitle } from "../../../shared/components/Layout/LayoutTitle";
import { IHeroe } from "../../domain/heroes.interface";

const heroesMarvel: IHeroe[] = [
  {
    id: 1,
    hero: "Spider Man",
    name: "Peter Parker",
    publisher: "",
    first_magazine: "Amazing Fantasy #15",
    img: "marvel-spider",
  },
  {
    id: 2,
    hero: "Hulk",
    name: "Bruce Banner",
    publisher: "",
    first_magazine: "The incredible Hulk #1",
    img: "marvel-hulk",
  },
  {
    id: 3,
    hero: "Cyclops",
    name: "Scott Summers",
    publisher: "",
    first_magazine: "X-Men #1",
    img: "marvel-cyclops",
  },
  {
    id: 4,
    hero: "Captain America",
    name: "Steve Rogers",
    publisher: "",
    first_magazine: "Captain America Comics #1",
    img: "marvel-captain",
  },
  {
    id: 5,
    hero: "Wolverine",
    name: "James Howlett",
    publisher: "",
    first_magazine: "The incredible Hulk #180",
    img: "marvel-wolverine",
  },
  {
    id: 6,
    hero: "Silver Surfer",
    name: "Norrin Radd",
    publisher: "",
    first_magazine: "The Fantastic Four #48",
    img: "marvel-silver",
  },
  {
    id: 7,
    hero: "Iron Man",
    name: "Tony Stark",
    publisher: "",
    first_magazine: "Tales of Suspense #39",
    img: "marvel-iron",
  },
  {
    id: 8,
    hero: "Daredevil",
    name: "Matthew Michael Murdock",
    publisher: "",
    first_magazine: "Daredevil #1",
    img: "marvel-daredevil",
  },
  {
    id: 9,
    hero: "Thor",
    name: "Thor Odinson",
    publisher: "",
    first_magazine: "Journey into Myster",
    img: "marvel-thor",
  },
  {
    id: 10,
    hero: "Hawkeye",
    name: "Clinton Francis Barton",
    publisher: "",
    first_magazine: "Tales of Suspense",
    img: "marvel-hawkeye",
  },
];

export const Marvel = () => {
  return (
    <>
      <LayoutTitle name="Marvel Screen" />
      <div className="grid grid-cols-3 gap-4">
        {heroesMarvel.map((heroe: IHeroe) => (
          <CardHeroe key={heroe.id} {...heroe} />
        ))}
      </div>
    </>
  );
};
