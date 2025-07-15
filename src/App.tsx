import { ThemeProvider } from "@/components/theme/theme-provider";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/footer";
import Skills from "./components/Skills";

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <div className="flex min-h-svh flex-col">
        <Header />
        <Hero />
      </div>
      <main>
        <Skills />
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
