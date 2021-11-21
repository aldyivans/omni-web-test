import clsx from "clsx"
import { useTheme } from "next-themes"
import { useState } from "react"
import { Close } from "../../../public/icons"
import styles from './nav.module.scss'

const Theme = ({ setOpenTheme, openTheme }) => {
  const { setTheme, theme } = useTheme();

  return (
    <div className={clsx(styles.navBarThemeExpand, "bg-body dark:bg-gray-900 text-black dark:text-white text-center backdrop-blur-lg backdrop-filter bg-opacity-50 dark:bg-opacity-50")}>
      <div className="max-w-screen-lg mx-auto px-6 py-20 min-h-full items-center flex justify-center">
        <div onClick={() => setOpenTheme(!openTheme)}>
          <Close className="absolute top-8 right-8 cursor-pointer text-dark dark:text-white" />
        </div>

        <div className="py-10 lg:py-0">
          <h1 className="text-xl md:text-3xl font-bold">
            Choose how&nbsp;<span className="text-blueOmni dark:text-blue-400">Omnicreativora</span>&nbsp;looks to you.
          </h1 >
          <p className="mt-4 mb-8" > Select a theme, or use system and automatically switch between light or dark themes based on your setting.</p >
          <div>
            <div className={styles.modeToogle}>
              <label htmlFor="light" className={clsx(styles.box, theme === "light" && styles.isActive, "dark:border-gray-300 text-blueOmni dark:text-gray-300 border border-blueOmni text-center block md:inline-block dark:bg-gray-800 bg-gray-50 bg-opacity-50 dark:bg-opacity-50")}>
                <input type="radio" id="light" name="mode" onChange={() => setTheme("light")} />
                <img src="/images/theme/light_preview.svg" alt="Light Preview" className="rounded-lg shadow-lg border border-gray-300 dark:border-gray-500 mx-auto" />
                <span className="mt-4 block">Light</span>
              </label>
              <label htmlFor="dark" className={clsx(styles.box, theme === "dark" && styles.isActive, "bg-gray-50 bg-opacity-50 block border border-gray-300 dark:bg-gray-800 dark:bg-opacity-50 dark:border-blue-300 dark:text-blue-300 md:inline-block text-gray-300 text-center")}>
                <input type="radio" id="dark" name="mode" onChange={() => setTheme("dark")} />
                <img src="/images/theme/dark_preview.svg" alt="Dark Preview" className="rounded-lg shadow-lg border border-gray-300 dark:border-gray-500 mx-auto" />
                <span className="mt-4 block">Dark</span>
              </label>
            </div>
          </div>
        </div >
      </div >
    </div >
  )
}

export default Theme
