import styled from 'styled-components'

export const CarouselFrameWrapper = styled.div`
  margin-top: 200px;
  display: flex;
  justify-content: center;
  position: relative;
  max-width: 1400px;
`

export const Button = styled.button`
  background-color: #93f542;
  height: 45px;
  width: 45px;
  text-align: center;
  border-radius: 50%;
  border: none;
  position: absolute;
  top: 50%;
  cursor: pointer;
  font-size: 30px;

  &.right {
    right: -5%;
  }

  &.left {
    left: -5%;
  }
`

export const CarouselFrameContainer = styled.div`
  white-space: nowrap;
  overflow: hidden;
  min-height: fit-content;

  & > img:first-of-type {
    margin-left: 0;
  }
`

export const CarouselFrameItem = styled.img`
  aspect-ratio: 1 / 1;
  object-fit: cover;
  width: calc((100% - 56px) / 5);
  margin-left: 14px;

  &:hover {
    z-index: 5;
    width: calc(100% / 4);
    aspect-ratio: 1 / 1;
  }
`
