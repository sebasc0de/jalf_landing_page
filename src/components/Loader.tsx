export const Loader = ({ className }: Props) => {
  return <div className={className}>s</div>;
};

export const SecondaryLoader = () => {
  return (
    <div className="w-100 flex justify-center items-center">
      <span className="secondary-loader"></span>
    </div>
  );
};

interface Props {
  className: string;
}
