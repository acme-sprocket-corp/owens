export const Button: React.FC<ButtonProperties> = ({
  content,
  handleOnClick,
}: ButtonProperties) => {
  return (
    <button className="btn btn-primary" onClick={handleOnClick}>
      {content}
    </button>
  );
};

interface ButtonProperties {
  content: string;
  handleOnClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
