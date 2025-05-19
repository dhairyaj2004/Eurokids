/* src/components/EnrollNowLink.jsx */
import { NavLink, useNavigate } from "react-router-dom";

export function EnrollNowDesktop({ className = "" }) {
  return (
    <NavLink
      to="/Form"
      className={({ isActive }) =>
        `fixed bottom-4 right-4 z-50 flex items-center gap-2
        bg-orange-600 text-white font-semibold shadow-lg
        rounded-full px-5 py-3
        hover:bg-orange-700 active:scale-95 transition
         ${isActive ? "text-orange-700" : "text-red-700"}
         hover:bg-orange-700 ${className}`
      }
    >
      ENROLL NOW
    </NavLink>
  );
}

export function EnrollNowFab() {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate("/Form")}
      className="
        fixed bottom-4 right-4 z-50 flex items-center gap-2
        bg-orange-600 text-white font-semibold shadow-lg
        rounded-full px-5 py-3
        hover:bg-orange-700 active:scale-95 transition
        lg:hidden   /* hide on ≥ lg screens */
      "
    >
      Enroll Now
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='currentColor'
        viewBox='0 0 24 24'
        className='w-5 h-5'
      >
        <path d='M5 12h14M12 5l7 7-7 7' />
      </svg>
    </button>
  );
}
