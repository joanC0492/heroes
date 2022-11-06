import { Link } from "react-router-dom";
import { IHeroe } from "../../../app/domain/heroes.interface";

interface IModule {
  default: string;
}
const projectImgs: Record<string, IModule> = import.meta.globEager(
  "@/assets/images/heroes/*.jpg"
);

export const CardHeroe = ({
  id,
  hero,
  name,
  publisher,
  first_magazine,
  img,
}: IHeroe) => {
  const getSrc = (name: string): string => {
    const path: string = Object.keys(projectImgs).find((item: string) =>
      item.includes(name)
    )!;
    return projectImgs[path].default;
  };

  return (
    <div className="outline outline-1 outline-gray-200 rounded flex ">
      <figure className="w-2/6 overflow-hidden">
        <img src={getSrc(img)} alt={name} loading="lazy" />
      </figure>
      <div className="w-4/6 p-4">
        <p className="font-bold text-xl">{hero}</p>
        <p className="mt-2 font-semibold">{name}</p>
        <p className="mt-4 font-bold text-xs text-gray-400">{first_magazine}</p>
        <div className="mt-3">
          <Link to="" className="text-sky-500 font-medium">
            Más...
          </Link>
        </div>
      </div>
    </div>
  );
};
