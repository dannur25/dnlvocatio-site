import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Work from "./pages/Work";
import Resume from "./pages/Resume";
import Projects from "./pages/Projects";
import Life from "./pages/Life";
import Cycling from "./pages/hobbies/Cycling";
import Travel from "./pages/hobbies/Travel";
import Running from "./pages/hobbies/Running";
import Fishing from "./pages/hobbies/Fishing";
import Reading from "./pages/hobbies/Reading";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
      <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/work/resume" element={<Resume />} />
          <Route path="/work/projects" element={<Projects />} />
          <Route path="/life" element={<Life />} />
          <Route path="/life/hobbies/cycling" element={<Cycling />} />
          <Route path="/life/hobbies/travel" element={<Travel />} />
          <Route path="/life/hobbies/running" element={<Running />} />
          <Route path="/life/hobbies/fishing" element={<Fishing />} />
          <Route path="/life/hobbies/reading" element={<Reading />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
