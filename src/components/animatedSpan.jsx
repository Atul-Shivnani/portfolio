const AnimatedUnderline = ({ children }) => {
  return (
    <span className="relative group">
      <span className="relative z-10">{children}</span>
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-400 group-hover:w-full transition-all duration-300 ease-in-out origin-left"></span>
    </span>
  );
};

export default AnimatedUnderline;
