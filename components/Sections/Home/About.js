import Slider from "react-slick";
import Tilt from 'react-tilt'
import styles from './home.module.scss'

const slides = [
  {
    title: "Rupiah Token",
    description: <p>Built <em><strong>website</strong></em> for a Blockchain technology company.</p>,
    image: "/images/assets/slides/rupiah_token_cover.png"
  },
  {
    title: "Nalagenetics",
    description: <p>We keep our studio intentionally small so we can form close-knit <strong>relationships</strong> with our clients, ensuring every detail of a <strong>project</strong> is handled from strategy through <strong>launch</strong>. We’re a small interdisciplinary team with big ambitions.<a href="http://omnicreativora.com/studio"></a>Built website for biotech company.</p>,
    image: "/images/assets/slides/nalagenetics_cover.png"
  },
  {
    title: "Air Push",
    description: <p>Web Redesign world-class mobile advertising platform.</p>,
    image: "/images/assets/slides/airpush_cover.png"
  },
]

const sliderSettings = {
  dots: true,
  appendDots: (dots) => <ul className="slick-dots">{dots}</ul>,
  customPaging: () => <div className="customDots"></div>,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false
};

const tiltSettings = {
  reverse: true,
  max: 5,
  perspective: 1000,
  scale: 1,
};

const About = () => {
  return (
    <div className="container mx-auto px-6 pt-12 pb-10">
      <Slider {...sliderSettings}>
        {
          slides.map((v, i) => (
            <div key={i}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center cursor-move">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-20 items-center order-last lg:order-none">
                  <div className="col-span-1 lg:col-span-3 xl:col-span-2 xl:col-start-2 text-center lg:text-left">
                    <h1 className="uppercase text-blueOmniDark font-bold mb-2 dark:text-blue-300 text-xl">
                      {v.title}
                    </h1>
                    <div className="leading-relaxed text-xl mt-6">
                      {v.description}
                    </div>
                  </div>
                </div>

                <div className="px-8 relative">
                  <Tilt className={styles.slideImage} options={tiltSettings}>
                    <img src={v.image} alt="Nalagenetics" className="rounded-xl mx-auto xl:mx-0" />
                  </Tilt>
                </div>
              </div>
            </div>
          ))
        }
      </Slider>
    </div>
  )
}

export default About
