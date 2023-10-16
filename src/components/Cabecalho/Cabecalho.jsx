import Link from 'next/link'
import './Cabecalho.css'

export default function Cabecalho() {
  return (
    <header className='cabecalho'>
      <nav>
        <ul>
          <li><Link href="/">HOME</Link></li>
          <li><Link href="/produtos/calca">CALÇA</Link></li>
          <li><Link href="/produtos/camisa">CAMISA</Link></li>
          <li><Link href="/produtos/bone">BONE</Link></li>
          <li><Link href="/produtos/sapato">SAPATO</Link></li>
          <li><Link href="/produtos/oculos">OCULOS</Link></li>
        </ul>
      </nav>
    </header>
    
  )
}