import { ThemeProvider } from "@/components/theme/theme-provider";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <div className="flex min-h-svh flex-col">
        <Header />
        <Hero />
      </div>
      <main>
        <Projects />
        <Skills />
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
