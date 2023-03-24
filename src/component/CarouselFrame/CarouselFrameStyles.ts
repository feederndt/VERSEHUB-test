import styled from 'styled-components'

export const CarouselFrameContainer = styled.div`
  position: relative;
  width: 80%;
  height: 50vh;

  .btn.left {
    left: 20px;
  }

  .btn.right {
    right: 20px;
  }

  .left1,
  .left2,
  .active,
  .right2,
  .right1 {
    display: block;
  }

  .left1 {
    left: calc(28% - 125px);
    width: 250px;
    height: 250px;
    z-index: 2;
    top: calc(55% - 125px);
  }

  .left2 {
    left: calc(10% - 100px);
    width: 200px;
    height: 200px;
    top: calc(60% - 100px);
  }

  .right1 {
    left: calc(72% - 125px);
    width: 250px;
    height: 250px;
    z-index: 2;
    top: calc(55% - 125px);
  }

  .right2 {
    left: calc(90% - 100px);
    width: 200px;
    height: 200px;
    top: calc(60% - 100px);
  }

  .active {
    left: calc(50% - 150px);
    width: 300px;
    height: 300px;
    z-index: 3;
    top: calc(50% - 150px);
  }

  @media (max-width: 992px) {
    width: 90%;

    .left2,
    .right2 {
      display: none;
    }

    .right1 {
      left: calc(80% - 125px);
    }

    .left1 {
      left: calc(20% - 125px);
    }

    img {
      scale: 0.8;
    }

    img:hover {
      scale: 1.2;
    }
  }

  @media (max-width: 572px) {
    .left1,
    .right1 {
      display: none;
    }

    img {
      scale: 1;
    }

    img:hover {
      scale: 1;
    }
  }
`

export const CarouselFrameItem = styled.img`
  position: absolute;
  border-radius: 50%;
  object-fit: cover;
  display: none;

  :hover {
    cursor: pointer;
    scale: 1.5;
    z-index: 10;
  }
`

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  height: 10vh;

  .btn {
    font-size: 35px;
    z-index: 5;

    :hover {
      cursor: pointer;
    }
  }

  @media (max-width: 992px) {
    width: 90%;
  }
`
