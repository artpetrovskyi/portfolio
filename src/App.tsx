import { ThemeProvider } from "@/components/theme/theme-provider";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import About from "./components/About";
import type { GeneralData } from "./lib/types";
import { useFetchContent } from "./hooks/useFetchContent";

function App() {
  const {
    data: generalData,
    status,
    error,
  } = useFetchContent<GeneralData>("content/general.json");

  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <div className="flex min-h-svh flex-col">
        <Header />
        <Hero contacts={generalData?.contacts} status={status} error={error} />
      </div>
      <main>
        <Projects />
        <About
          about={generalData?.about}
          contacts={generalData?.contacts}
          status={status}
          error={error}
        />
        <Skills skills={generalData?.skills} status={status} error={error} />
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
