/**
 * A basic element a user can click.
 */
export const Button: React.FC<ButtonProperties> = ({
  content,
  handleOnClick,
}: ButtonProperties) => {
  return (
    <button className="btn btn-primary" onClick={handleOnClick} type="button">
      {content}
    </button>
  );
};

interface ButtonProperties {
  /**
   * The text content to display.
   */
  content: string;

  /**
   * A callback called for every click.
   */
  handleOnClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
