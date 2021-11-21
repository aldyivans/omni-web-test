import styles from './footer.module.scss'
import clsx from 'clsx'
import { Dribble, Behance, Facebook, Instagram, Twitter } from '../../../public/images/socmed/icons'
import Top from './Top'

const socmed = [
  {
    icon: <Dribble />,
    url: "https://dribbble.com/omnicreativora",
  },
  {
    icon: <Behance />,
    url: "https://www.behance.net/AnggitYuniar",
  },
  {
    icon: <Facebook />,
    url: "https://www.facebook.com/omnicreativora",
  },
  {
    icon: <Instagram />,
    url: "https://www.instagram.com/omnicreativora/",
  },
  {
    icon: <Twitter />,
    url: "https://twitter.com/omnicreativora",
  }
]

const Footer = () => {
  return (
    <footer>
      <Top />
      <div className={clsx("bg-blueOmniDark py-14 dark:bg-grayDark", styles.footerWrapper)}>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start text-center lg:text-left">
            <div className="mt-4">
              <a href="/">
                <img src="/images/brand/logo_white.svg" alt="Logo Omnicreativora" className="mx-auto lg:mx-0" />
              </a>
              <p className="text-white mt-6 text-lg">Signaturing Experience</p>
            </div>
            <div className="mt-4">
              <h1 className="text-white uppercase font-bold">Get in touch</h1>
              <p className="text-white mt-6">
                <a
                  href="mailto:hello@omnicreativora.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-blue-300 text-sm md:text-base underline"
                >
                  Email Us
                </a>
              </p>
              <div className="my-8 text-white leading-7">
                <p>Perumahan M.B.S. <strong>No.28</strong> Condongcatur, Sleman, Yogyakarta, Indonesia</p>
              </div>

              {
                socmed.map((v, i) => {
                  return (
                    <div className="mt-2 inline-block" key={i}>
                      <a
                        href={v.url}
                        target="_blank"
                        rel="noreferrer"
                        className="no-underline flex w-10 h-10 bg-blueOmniDarkest dark:bg-gray-900 mr-2 rounded-xl items-center justify-center border dark:border-gray-800 border-transparent"
                        aria-label="Dribbble"
                      >
                        {v.icon}
                      </a>
                    </div>
                  )
                })

              }
            </div>
            <div className="mt-4">
              <div className="mt-4 mx-auto">
                <h1 className="text-white uppercase font-bold">Explore</h1>
                <div className="mt-6">
                  <div className="mt-3">
                    <a className="no-underline text-white" href="/">Home</a>
                  </div>
                  <div className="mt-3">
                    <a className="no-underline text-white" href="/works">Works</a>
                  </div>
                  <div className="mt-3">
                    <a className="no-underline text-white" href="/studio">Studio</a>
                  </div>
                  <div className="mt-3">
                    <a className="no-underline text-white" href="/what-we-do">What We Do</a>
                  </div>
                  <div className="mt-3">
                    <a className="no-underline text-white" href="/manifesto">Manifesto</a>
                  </div>
                  <div className="mt-3">
                    <a className="no-underline text-white" href="/contact">Contact</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-blueOmniDarkest dark:bg-gray-900 py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-white">
            © 2021. Omnicreativora
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
