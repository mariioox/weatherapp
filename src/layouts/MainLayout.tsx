import { Outlet, Link } from "react-router-dom";

function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="p-4 border-b flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/weather">Weather</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
      </nav>

      {/* Page content */}
      <main className="flex-1 m-5">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="p-4 border-t text-center">© 2026 - Weather app</footer>
    </div>
  );
}

export default MainLayout;
