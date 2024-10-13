import React, { useState, useRef, useEffect } from 'react';

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const containerRef = useRef(null);
  const scrollPositionRef = useRef(0);
  let timeoutId = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (hoveredIndex !== null) {
      scrollPositionRef.current = container.scrollTop;
      container.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (scrollPositionRef.current > 0) {
      container.scrollTo({ top: scrollPositionRef.current, behavior: 'smooth' });
    }
  }, [hoveredIndex]);

  const handleMouseOver = (e, index) => {
    clearTimeout(timeoutId.current);
    timeoutId.current = setTimeout(() => {
      e.target.play();
      setHoveredIndex(index);
    }, 1200);
  };

  const handleMouseOut = (e) => {
    clearTimeout(timeoutId.current);
    e.target.pause();
    setHoveredIndex(null);
  };

  const projects = [
    {
      video: "https://atulshivnani.s3.eu-north-1.amazonaws.com/submission.mp4",
      title: "Anicomics",
      description: "An e-commerce platform",
      techStack: "Typescript, Nextjs, Tailwind",
      githubRepo: "https://github.com/Atul-Shivnani/anicomics"
    },
    {
      video: "https://atulshivnani.s3.eu-north-1.amazonaws.com/whatsapp+extension.mp4",
      title: "WhatsApp Extension",
      description: "A browser extension",
      techStack: "JavaScript, HTML, CSS",
      githubRepo: "https://github.com/Atul-Shivnani/whatsapp-extension"
    },{
        video: "https://atulshivnani.s3.eu-north-1.amazonaws.com/submission.mp4",
        title: "Anicomics",
        description: "An e-commerce platform",
        techStack: "Typescript, Nextjs, Tailwind",
        githubRepo: "https://github.com/Atul-Shivnani/anicomics"
      },
      {
        video: "https://atulshivnani.s3.eu-north-1.amazonaws.com/whatsapp+extension.mp4",
        title: "WhatsApp Extension",
        description: "A browser extension",
        techStack: "JavaScript, HTML, CSS",
        githubRepo: "https://github.com/Atul-Shivnani/whatsapp-extension"
      },{
        video: "https://atulshivnani.s3.eu-north-1.amazonaws.com/submission.mp4",
        title: "Anicomics",
        description: "An e-commerce platform",
        techStack: "Typescript, Nextjs, Tailwind",
        githubRepo: "https://github.com/Atul-Shivnani/anicomics"
      },
      {
        video: "https://atulshivnani.s3.eu-north-1.amazonaws.com/whatsapp+extension.mp4",
        title: "WhatsApp Extension",
        description: "A browser extension",
        techStack: "JavaScript, HTML, CSS",
        githubRepo: "https://github.com/Atul-Shivnani/whatsapp-extension"
      },
    // Add more projects here
  ];

  return (
    <div className="max-h-dvh h-dvh relative -top-20 snap-center p-20" id='projects'>
      <div
        ref={containerRef}
        className={`grid grid-cols-2 h-full gap-10 m-5
                    ${hoveredIndex !== null ? 'p-0' : 'overflow-y-scroll overflow-x-hidden  p-10'}
                    scrollbar-thin scrollbar-track-transparent scrollbar-thumb-purple-400`}
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className={`rounded-lg group w-full relative
                        ${hoveredIndex === index ? 'col-span-2 h-5/6 z-10' : ''}
                        ${hoveredIndex !== null && hoveredIndex !== index ? 'hidden' : ''}
                        bg-neutral-100 dark:bg-neutral-900 transition-all ease-in-out duration-1000 shadow-2xl shadow-neutral-500 hover:shadow-xl group`}
            onMouseOver={(e) => handleMouseOver(e, index)}
            onMouseOut={handleMouseOut}
          >
            <div 
              className={`z-10 flex flex-col justify-center rounded-lg p-2 gap-2 top-1/2 h-1/2 w-full absolute bg-neutral-100 dark:bg-neutral-900 bg-opacity-75 dark:bg-opacity-75 ${hoveredIndex === index ? 'hidden' : ''}`}
              onMouseOver={(e) => e.stopPropagation()}
              onMouseOut={(e) => e.stopPropagation()}
            >
                <span className="absolute top-0 text-center w-full text-neutral-500">Hover Above to play ↑</span>
              <h1 className='text-lg font-semibold'>{project.title}</h1>
              <p>{project.description}</p>
              <p><strong>Tech Stack:</strong> {project.techStack}<br/>
              <strong>Github Repo:</strong><a href={project.githubRepo} className='hover:text-blue-500'> <u>{project.githubRepo}</u></a></p>
            </div>
            <video
              src={project.video}
              className="w-full h-full rounded-lg object-contain"
              muted
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;