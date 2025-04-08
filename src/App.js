import { useContext } from "react";
import socials from "./socials";
import { ThemeContext } from "./themeContext";
import { MdDarkMode, MdLightMode } from "react-icons/md";

function ToggleThemeButton({ theme, setTheme }) {
  const Icon = theme === "dark" ? MdLightMode : MdDarkMode;
  return (
    <button
      aria-label="Toggle theme"
      className="button__toggle-theme"
      onClick={(_) => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <Icon fontSize={24} />
    </button>
  );
}

function App() {
  const [theme, setTheme] = useContext(ThemeContext);
  return (
    <main className={"App-" + theme}>
      <ToggleThemeButton theme={theme} setTheme={setTheme} />
      <div className="content">
        <h1>ATAKAN ERMİŞ</h1>
        <h2>Software Developer</h2>
        <ul>
          {socials.map((social, index) => (
            <li key={index} style={{ animationDelay: index * 75 + "ms" }}>
              <a
                href={social.link}
                aria-label={social.name}
                rel="noopener noreferrer"
                target="_blank"
              >
                {social.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}

export default App;
