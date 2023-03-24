import styled from 'styled-components'

export const CarouselFrameContainer = styled.div`
  position: relatie;
  height: 50%;

  .left1 {
    left: calc(30% - 125px);
    width: 250px;
    height: 250px;
    z-index: 2;
    top: calc(45% - 125px);
    display: block;
  }

  .left2 {
    left: calc(10% - 100px);
    width: 200px;
    height: 200px;
    top: calc(50% - 100px);
    display: block;
  }

  .right1 {
    left: calc(70% - 125px);
    width: 250px;
    height: 250px;
    z-index: 2;
    top: calc(45% - 125px);
    display: block;
  }

  .right2 {
    left: calc(90% - 100px);
    width: 200px;
    height: 200px;
    top: calc(50% - 100px);
    display: block;
  }

  .active {
    left: calc(50% - 150px);
    width: 300px;
    height: 300px;
    z-index: 3;
    top: calc(40% - 150px);
    display: block;
  }

  .active:hover {
    left: calc(50% - 200px);
    width: 400px;
    height: 400px;
    z-index: 10;
    top: calc(40% - 200px);
    display: block;
  }
`

export const CarouselFrameItem = styled.img`
  position: absolute;
  border-radius: 50%;
  object-fit: cover;
  display: none;
  :hover {
    cursor: pointer;
  }
`
