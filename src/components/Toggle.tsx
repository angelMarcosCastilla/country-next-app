"use client";
import React, { useEffect, useState } from "react";

enum Theme {
  dark = "dark",
  light = "light",
}

type typeToggle = Theme.dark | Theme.light;

export default function Toggle() {
  const [isDark, setIsdark] = useState<typeToggle>(() => {
    const theme = window.localStorage.getItem("theme");
    return theme ? (theme as typeToggle) : Theme.light;
  });

  const handletogleTheme = () => {
    if (isDark === Theme.dark) {
      setIsdark(Theme.light);
    } else {
      setIsdark(Theme.dark);
    }
  };

  useEffect(() => {
    window.localStorage.setItem("theme", isDark);
    if (isDark === Theme.dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <button
      className="flex items-center gap-2 hover:opacity-[.9]"
      onClick={handletogleTheme}
    >
      <svg
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="0"
        viewBox="0 0 512 512"
        color="currentColor"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M279.135 512c78.756 0 150.982-35.804 198.844-94.775 28.27-34.831-2.558-85.722-46.249-77.401-82.348 15.683-158.272-47.268-158.272-130.792 0-48.424 26.06-92.292 67.434-115.836 38.745-22.05 28.999-80.788-15.022-88.919A257.936 257.936 0 0 0 279.135 0c-141.36 0-256 114.575-256 256 0 141.36 114.576 256 256 256zm0-464c12.985 0 25.689 1.201 38.016 3.478-54.76 31.163-91.693 90.042-91.693 157.554 0 113.848 103.641 199.2 215.252 177.944C402.574 433.964 344.366 464 279.135 464c-114.875 0-208-93.125-208-208s93.125-208 208-208z"></path>
      </svg>
      <span>{isDark === Theme.dark ? "Ligth" : "Dark"} mode</span>
    </button>
  );
}
