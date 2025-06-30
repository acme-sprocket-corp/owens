import { Outlet } from "react-router";

export const App: React.FC = () => {
  return (
    <div>
      <header />
      <main>
        <Outlet />
      </main>
      <footer />
    </div>
  );
};
