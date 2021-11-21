import clsx from "clsx"
import styles from './nav.module.scss'

const socmed = [
  {
    title: "Dribbble",
    url: "https://dribbble.com/omnicreativora",
  },
  {
    title: "Behance",
    url: "https://www.behance.net/AnggitYuniar",
  },
  {
    title: "Facebook",
    url: "https://www.facebook.com/omnicreativora",
  },
  {
    title: "Instagram",
    url: "https://www.instagram.com/omnicreativora/",
  },
  {
    title: "Twitter",
    url: "https://twitter.com/omnicreativora",
  }
]

const Expand = () => {
  return (
    <div className={clsx(styles.navBarExpand, "bg-purpleDarkest dark:bg-grayDark")} >
      <div className="max-w-screen-lg mx-auto px-10 md:px-6 py-24 lg:py-32 min-h-full flex items-center flex-col md:flex-row ">
        <div className="w-full md:w-9/12">
          <div className="py-3 md:py-5">
            <a className="no-underline hover:text-purpleOmni" href="#">
              <span className="text-3xl md:text-6xl font-semibold">Home</span>
            </a>
          </div>
          <div className="py-3 md:py-5">
            <a className="no-underline hover:text-purpleOmni" href="#">
              <span className="text-3xl md:text-6xl font-semibold">Works</span>
            </a>
          </div>
          <div className="py-3 md:py-5">
            <a className="no-underline hover:text-purpleOmni" href="#">
              <span className="text-3xl md:text-6xl font-semibold">Studio</span>
            </a>
          </div>
          <div className="py-3 md:py-5">
            <a className="no-underline hover:text-purpleOmni" href="#">
              <span className="text-3xl md:text-6xl font-semibold">What We Do</span>
            </a>
          </div>
          <div className="py-3 md:py-5">
            <a className="no-underline hover:text-purpleOmni" href="#">
              <span className="text-3xl md:text-6xl font-semibold">Manifesto</span>
            </a>
          </div>
          <div className="py-3 md:py-5">
            <a className="no-underline hover:text-purpleOmni" href="#">
              <span className="text-3xl md:text-6xl font-semibold">Contact</span>
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/12 mt-10 md:mt-0">
          <h6 className="text-gray-400 font-bold mb-6">Socials</h6>
          <div className="text-white">
            {socmed.map((v, i) => {
              return (
                <div className="my-2" key={i}>
                  <a href={v.url} target="_blank" rel="noreferrer" className="no-underline text-lg font-bold hover:text-purpleOmni">
                    {v.title}
                  </a>
                </div>
              )
            })}
          </div>
          <div className="mt-20">
            <h6 className="text-gray-400 font-bold mb-6">Say Hi</h6>
            <p className="text-white text-lg font-bold">
              <a href="mailto:hello@omnicreativora.com" target="_blank" rel="noreferrer" className="hover:text-purpleOmni text-sm md:text-base">
                Email Us
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Expand
