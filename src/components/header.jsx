import ThemeToggle from "./themeToggle";
import AnimatedUnderline from "./animatedSpan";

const Header = () => {
  return (
    <div className="scrollbar-none justify-between bg-neutral-100 dark:bg-neutral-900 bg-opacity-75 dark:bg-opacity-75 flex p-4 hover:border-b border-purple-400 z-10 sticky top-0">
      <div className="flex text-2xl items-center ml-4 hover:font-semibold cursor-pointer">
        {/*<img src="../../avatar.jpg" className="rounded-full w-12 h-12" />*/}
        Atul Shivnani
      </div>
      <div className="flex items-center">
        <div className="flex gap-4 text-lg">
          <a href="#about" className="relative cursor-pointer flex items-center group hover:font-semibold">
            <AnimatedUnderline>About</AnimatedUnderline>
            <svg
              className="opacity-0 translate-x-[-5px] translate-y-[5px] transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
            >
              <path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z" />
            </svg></a>

          <a href="#projects" className="relative cursor-pointer flex items-center group hover:font-semibold">

            <AnimatedUnderline>Projects</AnimatedUnderline>
            <svg
              className="opacity-0 translate-x-[-5px] translate-y-[5px] transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
            >
              <path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z" />
            </svg>
            </a>

          <a href="#contact" className="relative cursor-pointer flex items-center group hover:font-semibold">
          <AnimatedUnderline>Contact</AnimatedUnderline>
            <svg
              className="opacity-0 translate-x-[-5px] translate-y-[5px] transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
            >
              <path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z" />
            </svg>
          </a>
        </div>
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Header;
