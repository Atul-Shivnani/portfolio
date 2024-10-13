const Footer = () => {
    const links = [
      { name: "Resume", icon: "/resume.png", url: "https://drive.google.com/file/d/1SR5DzGtM24KDpj4MVHOdSqRppeCHPtc5/view?usp=drive_link", bg: "from-purple-400 to-purple-500" },
      { name: "LinkedIn", icon: "/linkedin.png", url: "https://www.linkedin.com/in/atul-shivnani-411495201/", bg: "bg-[#0A66C2]" },
      { name: "Github", icon: "/github.png", url: "https://github.com/Atul-Shivnani", bg: "bg-[#333]" },
      { name: "Instagram", icon: "/instagram.png", url: "https://www.instagram.com/atul_shivnani/", bg: "from-pink-400 via-red-500 to-yellow-500" },
      { name: "Email", icon: "/gmail.png", url: "mailto:shivnaniatul@gmail.com", bg: "from-red-500 via-blue-500 to-green-500" },
      { name: "X", icon: "/twitter.png", url: "https://x.com/atulshivnani203", bg: "bg-[#1DA1F2]" },
    ];
  
    return (
      <footer className="max-h-dvh h-dvh relative -top-20 snap-center pt-16 text-xl">
        {links.map(({ name, icon, url, bg = "" }) => (
          <a
            key={name}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="relative px-24 h-1/6 flex items-center justify-between hover:font-semibold group transition-all duration-500 overflow-hidden"
          >
            {/* Background on Hover */}
            <div
              className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-opacity-75 ${
                bg.includes("from") ? `bg-gradient-to-r ${bg}` : bg
              }`}
              style={{ zIndex: 0 }}
            />
  
            {/* Content Block */}
            <div className="flex items-center justify-between w-40 relative z-10">
              <span className="transition-transform duration-300 group-hover:translate-x-2">
                {name}
              </span>
              <img src={icon} alt={`${name} icon`} className="w-10 h-10 ml-5" />
            </div>
  
            {/* Arrow Icon */}
            <svg
            className="opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300 w-12 h-12 relative z-10"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z" />
          </svg>
          </a>
        ))}
      </footer>
    );
  };
  
  export default Footer;
  