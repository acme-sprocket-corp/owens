import type RequiredChildrenProperties from "../interfaces/required-children-properties";

export const Container: React.FC<RequiredChildrenProperties> = ({
  children,
}: RequiredChildrenProperties) => {
  return <div className="container">{children}</div>;
};
