import { memo } from 'react'
import { FooterWrapper } from './styles';

function Footer() {
  return (
    <FooterWrapper>
      <p>Challenge by <a href="https://www.frontendmentor.io?ref=challenge" rel="noreferrer" target="_blank">Frontend Mentor</a>.</p>
      <p>Coded by <a href="https://github.com/MartaZaorska" target="_blank" rel="noreferrer">Marta Zaorska</a>.</p>
    </FooterWrapper>
  )
}

export default memo(Footer);