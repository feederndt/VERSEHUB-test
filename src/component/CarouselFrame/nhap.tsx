import React, { useState } from 'react'
import {
  CarouselFrameContainer,
  CarouselFrameItem,
} from './CarouselFrameStyles'

import image1 from '../../assets/img/image-1.jpg'
import image2 from '../../assets/img/image-2.jpg'
import image3 from '../../assets/img/image-3.jpg'
import image4 from '../../assets/img/image-4.jpg'
import image5 from '../../assets/img/image-5.jpg'
import image6 from '../../assets/img/image-6.jpg'
import image7 from '../../assets/img/image-7.jpg'

const dataArr = [image1, image2, image3, image4, image5, image6, image7]

export default function Index() {
  const [activeIndex, setActiveIndex] = useState<number>(0)

  const plus2 = (activeIndex: number): number => {
    if (activeIndex + 2 < dataArr.length) {
      return activeIndex + 2
    }
    return activeIndex + 2 - dataArr.length
  }

  const plus1 = (activeIndex: number): number => {
    if (activeIndex + 1 < dataArr.length) {
      return activeIndex + 1
    }
    return activeIndex + 1 - dataArr.length
  }

  const minus1 = (activeIndex: number): number => {
    if (activeIndex - 1 >= 0) {
      return activeIndex - 1
    }
    return dataArr.length - 1
  }

  const minus2 = (activeIndex: number): number => {
    if (activeIndex - 2 >= 0) {
      return activeIndex - 2
    }
    return dataArr.length + activeIndex - 2
  }

  const posotionImage = (
    index: number
  ): 'right1' | 'right2' | 'active' | 'left1' | 'left2' | undefined => {
    switch (index) {
      case activeIndex:
        return 'active'
      case minus1(activeIndex):
        return 'left1'
      case minus2(activeIndex):
        return 'left2'
      case plus1(activeIndex):
        return 'right1'
      case plus2(activeIndex):
        return 'right2'
      default:
        return undefined
    }
  }

  return (
    <>
      <CarouselFrameContainer>
        {dataArr.map((e, i) => (
          <CarouselFrameItem
            src={e}
            alt={e}
            className={posotionImage(i)}
            onClick={() => setActiveIndex(i)}
          />
        ))}
      </CarouselFrameContainer>
      <button onClick={() => setActiveIndex((e) => plus1(e))}>
        aaaaaaaaaaaa
      </button>
    </>
  )
}
