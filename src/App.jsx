import { useState, useEffect } from "react";
import "./index.css";
import Header from "./components/header";
import Projects from "./components/projects";
import Footer from "./components/footer";
import Contact from "./components/contact";

const techs = [
  { name: "React", color: "text-cyan-400", logo: "/react.png" },
  { name: "Node.js", color: "text-green-600", logo: "/node.png" },
  { name: "Tailwind CSS", color: "text-cyan-500", logo: "/tailwind.png" },
  { name: "Next.js", logo: "/next.png" },
];

function App() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState(""); // Current typed text
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const [showLogo, setShowLogo] = useState(false); // Controls logo visibility
  const [speed, setSpeed] = useState(150);

  const currentTech = techs[currentWordIndex];

  useEffect(() => {
    const handleTyping = () => {
      const fullText = currentTech.name;

      if (isDeleting) {
        setDisplayedText(fullText.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
        setShowLogo(false); // Hide logo when deleting
        setSpeed(75);
      } else {
        setDisplayedText(fullText.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
        setSpeed(150);
      }

      if (!isDeleting && charIndex === fullText.length) {
        setShowLogo(true); // Show logo when the word is complete
        setTimeout(() => setIsDeleting(true), 1000); // Pause before deletion
      }

      if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % techs.length); // Move to next word
      }
    };

    const timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, currentWordIndex, speed]);

  return (
    <div className="bg-neutral-100 dark:bg-neutral-900 m-0 h-dvh font-mono dark:text-white overflow-y-auto scrollbar-none snap-mandatory snap-y scroll-smooth">
      <Header />
      <div id='about' className="flex justify-center items-center  h-dvh relative -top-20 snap-center">
        <div className="w-1/2 flex items-center justify-end  mr-10 h-full">
        <img
          src="../avatar.jpg"
          className="w-64 rounded-full shadow-2xl shadow-purple-500"
        />
        </div>
      
        <div className="gap-4 flex flex-col w-1/2 justify-center mr-20 h-full">
          <h1 className="text-5xl font-bold">Hii, I'm Atul S.</h1>
          <h2 className="text-4xl font-semibold">I develop web apps</h2>
          <h2 className="text-4xl font-semibold flex items-center">
            using&nbsp;
            <span className={`${currentTech.color}`}>{displayedText}</span>
            {showLogo && (
              <img
                src={currentTech.logo}
                alt={`${currentTech.name} logo`}
                className="w-10 h-10 ml-2"
              />
            )}
            <span className="blink-cursor ml-1">|</span>
          </h2>
        </div>
      </div>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
