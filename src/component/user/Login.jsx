import { FaGoogle } from "react-icons/fa";

export default function Login() {
  const baseURL = import.meta.env.VITE_API_BASE_URL;
  const handleLogin = () => {
    window.location.href = `/auth/login`;
  };

  return (
    <div className="px-3">
      <button
        onClick={handleLogin}
        class="px-4 py-2 border flex gap-2 rounded-lg text-slate-900 bg-white  hover:border-slate-400   hover:shadow transition duration-150"
      >
        <img
          class="w-6 h-6"
          src="https://www.svgrepo.com/show/475656/google-color.svg"
          loading="lazy"
          alt="google logo"
        />
        <span>Login with Google</span>
      </button>
    </div>
  );
}
