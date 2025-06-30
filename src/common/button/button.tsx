export const Button: React.FC<ButtonProperties> = ({
  content,
}: ButtonProperties) => {
  return <button className="btn btn-primary">{content}</button>;
};

interface ButtonProperties {
  content: string;
}
