import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting login with:", email, password); // Debugging

    try {
      const res = await fetch("http://localhost:8080/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }), // Check if the data is formatted correctly
      });

      console.log("Response Status: ", res.status); // Debugging
      if (!res.ok) throw new Error("Invalid credentials");

      const data = await res.json();
      console.log("Response Data: ", data); // Debugging
      localStorage.setItem("token", data.token);
      navigate("/");
    } catch (err) {
      console.error("Error: ", err);
      setError(err.message || "Something went wrong");
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-12 p-6 border rounded shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Login</h2>
      {error && <p className="text-red-600 mb-2">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1">
            Email
          </label>
          <input
            type="text"
            id="email"
            className="w-full p-2 border rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block mb-1">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full p-2 border rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full p-2 bg-blue-600 text-white rounded mb-3"
        >
          Login
        </button>
      </form>
      <p className="text-sm text-gray-700">
        Don't have an account?{" "}
        <Link to="/register" className="text-blue-600 hover:underline">
          Register here
        </Link>
      </p>
      <p>
        demo: <p>cybergametechs@gmail.com</p>
              <p>123</p>
      </p>
    </div>
  );
};

export default Login;
