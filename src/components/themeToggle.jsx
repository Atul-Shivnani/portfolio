import { useState, useEffect } from 'react';

function ThemeToggle() {
  const [theme, setTheme] = useState('light');
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    // On mount, check the user's theme preference from localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
      setIsChecked(savedTheme === 'dark');
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    setIsChecked(newTheme === 'dark');
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  const handleCheckboxChange = () => {
    toggleTheme();
  };

  return (
    <label className='themeSwitcherTwo relative inline-flex cursor-pointer select-none items-center'>
      <input
        type='checkbox'
        checked={isChecked}
        onChange={handleCheckboxChange}
        className='sr-only'
      />
      <span
        className={`slider mx-4 flex h-8 w-[60px] items-center rounded-full p-1 duration-200  border border-purple-400 ${
          isChecked ? 'bg-[#212b36]' : 'bg-[#CCCCCE]'
        }`}
      >
        <span
          className={`dot h-6 w-6 rounded-full bg-white duration-200 ${
            isChecked ? 'translate-x-[28px]' : ''
          }`}
        >
          <img
            src={isChecked ? '../../dark.png' : '../../light.png'}
            alt={isChecked ? 'Dark Mode' : 'Light Mode'}
            className="h-full w-full rounded-full"
          />
        </span>
      </span>
    </label>
  );
}

export default ThemeToggle;
