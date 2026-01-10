import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();

    // Simple fake authentication
    if (username && password && confirmPassword) {
      // Store in localStorage (or context) that user is authenticated
      localStorage.setItem("isAuthenticated", "true");
      navigate("/weather");
    } else if (password != confirmPassword) {
      alert("Password and Confirmation dosen't match");
    } else {
      alert("Please enter username and password");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-full">
      <div>
        <form
          onSubmit={handleSignup}
          className="flex flex-col p-6 border rounded-md w-80 gap-4"
        >
          <h2 className="text-2xl font-bold text-center">Signup</h2>
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
          <input
            type="password"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="border p-2 rounded"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Signup
          </button>
        </form>
      </div>
      <div className="p-4 ml-5">
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
