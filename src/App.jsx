import { motion } from "motion/react";
import { useState } from "react";
import Reveal from "./Reveal";

function App() {
  const [openLetter, setOpenLetter] = useState(false);
  return (
    <Reveal>
      <div className="relative h-screen bg-[url(./assets/bgg.png)] bg-bottom bg-cover">
        <div className="h-full flex items-end justify-start pl-[5rem]">
          <motion.div
            animate={{ y: -50, transition: { duration: 2 } }}
            className="h-[250px] w-[400px] bg-[url(./assets/envelope.png)] bg-cover bg-no-repeat flex items-center justify-center rounded-[10px]"
          >
            <a
              href="/letter"
              className="relative top-6 px-4 py-2 bg-pink-400 rounded-2xl text-white font-semibold animate-bounce hover:bg-pink-500 hover:text-black duration-300"
            >
              Otwórz list
            </a>
          </motion.div>
        </div>
      </div>
    </Reveal>
  );
}

export default App;
