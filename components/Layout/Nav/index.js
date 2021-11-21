import clsx from 'clsx'
import { useTheme } from 'next-themes'
import { useEffect, useMemo, useState } from 'react'
import { ArrowDown } from '../../../public/icons'
import Expand from './Expand'
import styles from './nav.module.scss'
import Theme from './Theme'

const Nav = () => {
  const { theme } = useTheme();
  const [openTheme, setOpenTheme] = useState(false)
  const [expandOpen, setExpandOpen] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(0);

  console.log(theme)

  useEffect(() => {
    document.body.style = openTheme || expandOpen ? "overflow: hidden" : "";
  });

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  const OmniLogo = useMemo(() => {
    if (theme === "dark") {
      return (
        <img src="/images/brand/logo_white.svg" alt="Logo Omnicreativora" className="w-4/5 sm:w-full" />
      )
    }

    return (
      <img src="/images/brand/logo_blue.svg" alt="Logo Omnicreativora" className={clsx(styles.logo, "w-4/5 sm:w-full")} />
    )
  }, [theme])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={clsx(styles.navBar, scrollPosition > 0 ? "bg-white dark:bg-grayDark shadow-sm" : "bg-transparent")}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <a aria-label="Logo" href="/">
            {OmniLogo}
          </a>
          <div className="flex items-center">
            <div className="lg:mr-8 font-semibold cursor-pointer inline-flex items-center" onClick={() => setOpenTheme(!openTheme)}>
              <span className="text-xs sm:text-sm">Themes&nbsp;</span>
              <span>
                <ArrowDown className="text-blueOmniDark dark:text-blue-300" />
              </span>
            </div>
            <button type="button" className={clsx(styles.buttonCircle, styles.colorPurpleLight, "hidden lg:block")}>Let's Talk</button>
            <div className={clsx(styles.menuIcon, expandOpen && styles.isActive, "lg:ml-8 ml-6 cursor-pointer")} onClick={() => setExpandOpen(!expandOpen)}>
              <span className="bg-blueOmni dark:bg-white"></span>
              <span className="bg-blueOmni dark:bg-white"></span>
              <span className="bg-blueOmni dark:bg-white"></span>
            </div>
          </div>
          {expandOpen && <Expand setExpandOpen={setExpandOpen} expandOpen={expandOpen} />}
          {openTheme && <Theme setOpenTheme={setOpenTheme} openTheme={openTheme} />}
        </div>
      </div>
    </nav>
  )
}

export default Nav
