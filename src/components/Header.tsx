import { ModeToggle } from "./theme/mode-toggle";

const LINKS = ["Projects", "About me", "Skills"];

export default function Header() {
  return (
    <header>
      <div className="container flex items-center gap-5 py-12">
        <div className="flex-grow">
          <ModeToggle />
        </div>

        <nav>
          <ul className="flex gap-12">
            {LINKS.map((link) => (
              <li key={link}>
                <a
                  className="opacity-70 transition-opacity duration-200 hover:opacity-100"
                  href="#"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-grow justify-end">
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
