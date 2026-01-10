import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Simple fake authentication
    if (username && password) {
      // Store in localStorage (or context) that user is authenticated
      localStorage.setItem("isAuthenticated", "true");
      navigate("/weather");
    } else {
      alert("Please enter username and password");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-full">
      <div>
        <form
          onSubmit={handleLogin}
          className="flex flex-col p-6 border rounded-md w-80 gap-4"
        >
          <h2 className="text-2xl font-bold text-center">Login</h2>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border p-2 rounded"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border p-2 rounded"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Login
          </button>
        </form>
      </div>
      <div className="p-4 ml-5">
        <p>
          Don't have an account? <Link to="/signup">Signup</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
