import { Features } from "@/components/Features";
import Footer from "@/components/Footer";
import { Form } from "@/components/Form";
import { Hero } from "@/components/Hero";
import { Home } from "@/components/Home"
import Navbar from "@/components/Navbar";

export default function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Hero />
      <Features />
      <Form />
      <Footer />
    </>
  );
}
