interface Props {
  name: string;
}
export const LayoutTitle = ({ name }: Props) => {
  return (
    <>
      <h1 className="text-4xl font-semibold leading-none">{name}</h1>
      <hr className="my-5" />
    </>
  );
};