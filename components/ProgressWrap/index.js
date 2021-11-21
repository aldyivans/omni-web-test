import { useEffect, useState } from "react";
import { ProgressArrow } from "../../public/icons"
import styles from './progressWrap.module.scss'

const ProgressWrap = () => {
  const topFunction = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <div className="fixed w-14 h-14 right-4 lg:right-8 bottom-8 cursor-pointer z-50 progress-wrap opacity-0 opacity-100">
      <div className="relative rounded-full">
        <div className={styles.progressCircular} onClick={topFunction}>
          <ProgressArrow />
        </div>
      </div>
    </div>
  )
}

export default ProgressWrap
