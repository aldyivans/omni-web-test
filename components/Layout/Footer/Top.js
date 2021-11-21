import clsx from "clsx"
import styles from './footer.module.scss'

const Top = () => {
  return (
    <div className="bg-purpleDarkest py-10 lg:py-16 footer_cta__ZWN7q">
      <div className="container mx-auto px-6">
        <div className="md:max-w-screen-lg mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center text-center">
            <div className="my-8">
              <a className={clsx(styles.footerIcon, "text-gray-400 mt-4 inline-block text-lg no-underline hover:underline font-bold hover:text-white")} href="#">
                <img src="/images/assets/ic_work_color.svg" alt="Icon Work Omnicreativora" className="mx-auto mb-6" />
                View more works
              </a>
            </div>
            <div className="my-8">
              <a className={clsx(styles.footerIcon, "text-gray-400 mt-4 inline-block text-lg no-underline hover:underline font-bold hover:text-white")} href="#">
                <img src="/images/assets/ic_collaborate_color.svg" alt="Icon Work Omnicreativora" className="mx-auto mb-6" />
                See how we collaborate
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Top
