type Props = {
  children: React.ReactNode;
};

const Button = ({ children }: Props) => {
  return (
    <button className="bg-[#9ee347] transition hover:bg-[#d4ed3] px-8 py-1 shadow-lg rounded-3xl text-white">
      {children}
    </button>
  );
};

export default Button;
