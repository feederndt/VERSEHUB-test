import { ReactNode } from 'react'
import { Container } from './ContainerStyles'

type Props = { children: ReactNode }

export default function index({ children }: Props) {
  return <Container>{children}</Container>
}
