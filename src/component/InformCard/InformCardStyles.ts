import styled from 'styled-components'

export const CardContainer = styled.div`
  border: 1px solid blue;
  border-radius: 10px;
  padding: 30px 20px;
  width: 300px;
  user-select: none;
`

export const Text = styled.p`
  font-size: 18px;
  font-weight: 500;
  line-height: 18px;
  border-bottom: 1px solid blue;
  margin-top: 15px;

  &:nth-child(1) {
    margin-top: 0;
  }
`
