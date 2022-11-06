interface Props {
  children?: React.ReactNode;
}

export const Layout = ({ children }: Props) => {
  return (
    <section className="py-5">
      <div className="container mx-auto">{children}</div>
    </section>
  );
};
