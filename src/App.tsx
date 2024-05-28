import Home from "@/components/Home"
import Navbar from "@/components/Navbar"
import Projects from "@/components/Projects"
import About from "@/components/About"
import Contact from "@/components/Contact"
import Footer from "./components/Footer"
import { ScrollArea } from "@/components/ui/scroll-area"

function App() {
  return (
    <ScrollArea className="h-[100vh]">
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </ScrollArea>
  )
}

export default App
