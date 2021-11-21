import clsx from "clsx"
import { useTheme } from "next-themes";
import { useState } from "react";
import Slider from "react-slick";
import Tilt from 'react-tilt'
import styles from "./home.module.scss"

const clientRight = [
  {
    name: "Rupiah Token",
    logo: "/images/assets/client-slides/rupiah_token_logo.png",
    desc: <p>Built <em><strong>website</strong></em> for a Blockchain technology company.</p>
  },
  {
    name: "BoxSwap",
    logo: "/images/assets/client-slides/box_swap_logo.png",
    desc: <p>Website design, Illustration for BoxSwap.</p>
  },
  {
    name: "Kata.ai",
    logo: "/images/assets/client-slides/kata_ai_logo.png",
    desc: <p>Website design, Illustration for Kata.ai.</p>
  }
]

const clientLeft = [
  {
    name: "Air Push",
    logo: "/images/assets/client-slides/airpush_logo.png",
    desc: <p>Web Redesign world-class mobile advertising platform.</p>
  },
  {
    name: "Mandiri",
    logo: "/images/assets/client-slides/mandiri_logo.png",
    desc: <p>Visual Identity for <em><strong>Mandiri</strong></em> company product</p>
  },
  {
    name: "Nalagenetics",
    logo: "/images/assets/client-slides/nalagenetics_logo.png",
    desc: <p>We keep our studio intentionally small so we can form close-knit <strong>relationships</strong> with our clients, ensuring every detail of a <strong>project</strong> is handled from strategy through <strong>launch</strong>. We’re a small interdisciplinary team with big ambitions. <a href="http://omnicreativora.com/studio"></a>Built website for biotech company.</p>
  },
]

const sliderSettings = {
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  speed: 5000,
  autoplaySpeed: 5000,
  vertical: true,
  cssEase: "linear",
  verticalSwiping: true,
  accessibility: false,
  arrows: false
};

const tiltSettings = {
  reverse: true,
  max: 5,
  perspective: 1000,
  scale: 1,
};

const Clients = () => {
  const { theme, systemTheme } = useTheme();

  return (
    <div className="container mx-auto px-6 pt-26 py-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="w-full mx-auto">
          <div className={clsx(styles.clientAnimation, theme === "dark" && styles.isDark, "grid grid-cols-2 gap-14 items-center")}>
            <SlideClient clientArr={clientLeft} />
            <SlideClient clientArr={clientRight} />
          </div>
        </div>
        <div className="mt-8 text-center lg:text-left">
          <span className="uppercase block mb-6 text-blueOmniDark font-bold dark:text-blue-300">
            💌 	 YES, WE ARE FALLING IN LOVE
          </span>
          <h1 className="text-4xl leading-tight mb-4 font-bold">Our Beloved Clients</h1>
          <div className="mt-4 leading-loose text-xl">
            <p>We keep our studio intentionally small so we can form close-knit <strong>relationships</strong> with our clients, ensuring every detail of a <strong>project</strong> is handled from strategy through <strong>launch</strong>. We’re a small interdisciplinary team with big ambitions.</p>
            <p><a href="http://omnicreativora.com/studio"></a></p>
          </div>
        </div>
      </div>
    </div>
  )
}

const SlideClient = ({
  clientArr
}) => {
  return (
    <Slider {...sliderSettings}>
      {
        clientArr.map((v, i) => (
          <div key={i}>
            <Tilt className={styles.slideImage} options={tiltSettings}>
              <div className="bg-white p-8 flex items-center rounded-xl dark:bg-gray-800 my-6 h-72 relative top-20 w-full shadow-lg">
                <div>
                  <img src={v.logo} alt="BoxSwap - Omnicreativora" />
                  <h1 className="text-lg font-bold mt-6 mb-2">{v.name}</h1>
                  <div className={clsx(styles.description, "text-md leading-relaxed")}>
                    {v.desc}
                  </div>
                </div>
              </div>
            </Tilt>
          </div >
        ))
      }
    </Slider >
  )
}

export default Clients
