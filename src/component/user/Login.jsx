import { FaGoogle } from "react-icons/fa";

export default function Login() {
  const baseURL = import.meta.env.VITE_API_BASE_URL;
  const handleLogin = () => {
    window.location.href = `/auth/login`;
  };

  return (
    <button
      onClick={handleLogin}
      class="px-2 md:px-4 py-2 border flex gap-2 rounded-lg text-slate-900 bg-white  hover:border-slate-400   hover:shadow transition duration-150"
    >
      <img
        class="w-4 h-4 md:w-6 md:h-6"
        src="https://www.svgrepo.com/show/475656/google-color.svg"
        loading="lazy"
        alt="google logo"
      />
      <span className="text-sm md:text-base">Login with Google</span>
    </button>
  );
}
