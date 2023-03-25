import React, { useState, useRef, useEffect } from 'react'
import {
  ButtonGroup,
  CarouselFrameContainer,
  CarouselFrameItem,
} from './CarouselFrameStyles'

import InformCard from '../InformCard'

import Container from '../Container'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'

type Infor = {
  src: string
  name: string
  age: number
  weight: number
  isBite: boolean
}

type Props = {
  data: Infor[]
}

export default function Index({ data }: Props) {
  const [activeIndex, setActiveIndex] = useState<number>(0)
  const ref = useRef<HTMLDivElement>(null)

  const plus2 = (activeIndex: number): number => {
    if (activeIndex + 2 < data.length) {
      return activeIndex + 2
    }
    return activeIndex + 2 - data.length
  }

  const plus1 = (activeIndex: number): number => {
    if (activeIndex + 1 < data.length) {
      return activeIndex + 1
    }
    return activeIndex + 1 - data.length
  }

  const minus1 = (activeIndex: number): number => {
    if (activeIndex - 1 >= 0) {
      return activeIndex - 1
    }
    return data.length - 1
  }

  const minus2 = (activeIndex: number): number => {
    if (activeIndex - 2 >= 0) {
      return activeIndex - 2
    }
    return data.length + activeIndex - 2
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

  useEffect(() => {
    const carousel = ref.current
    if (ref && carousel) {
      let start: number

      const onStart = (e: MouseEvent) => {
        start = e.pageX
        console.log('start', e.pageX)
      }

      carousel.addEventListener('mousedown', onStart)

      const onEnd = (e: MouseEvent) => {
        console.log('end', e.pageX)
        if (e.pageX && Math.abs(e.pageX - start) > 50) {
          e.pageX - start > 0
            ? setActiveIndex((e) => minus1(e))
            : setActiveIndex((e) => plus1(e))
        }
      }

      carousel.addEventListener('mouseup', onEnd)

      return () => {
        carousel.removeEventListener('mousedown', onStart)
        carousel.removeEventListener('mouseup', onEnd)
      }
    }
  }, [ref, activeIndex])

  return (
    <Container>
      <CarouselFrameContainer ref={ref}>
        {data.map((e, i) => (
          <CarouselFrameItem
            src={e.src}
            alt={e.name}
            className={posotionImage(i)}
            onClick={() => setActiveIndex(i)}
          />
        ))}
      </CarouselFrameContainer>
      <ButtonGroup>
        <FontAwesomeIcon
          icon={faAngleLeft}
          className='btn left'
          onClick={() => setActiveIndex((i) => minus1(i))}
        />
        <FontAwesomeIcon
          icon={faAngleRight}
          className='btn right'
          onClick={() => setActiveIndex((i) => plus1(i))}
        />
      </ButtonGroup>

      <InformCard
        name={data[activeIndex].name}
        age={data[activeIndex].age}
        weight={data[activeIndex].weight}
        isBite={data[activeIndex].isBite}
      />
    </Container>
  )
}
