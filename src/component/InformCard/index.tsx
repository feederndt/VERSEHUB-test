import { CSSProperties } from 'react'
import { CardContainer, Text } from './InformCardStyles'

type Props = {
  name: string
  age: number
  weight: number
  isBite: boolean
  style?: CSSProperties
}

export default function Index({ name, age, weight, isBite, style }: Props) {
  return (
    <CardContainer style={style}>
      <Text>Tên:{name}</Text>
      <Text>Tuổi:{age}</Text>
      <Text>Cân nặng:{weight}kg</Text>
      <Text>Có cắn không:{isBite ? 'có' : 'không'}</Text>
    </CardContainer>
  )
}
