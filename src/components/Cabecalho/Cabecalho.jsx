import Link from 'next/link'
import './Cabecalho.css'

export default function Cabecalho() {
  return (
    <header className='cabecalho'>
      <nav>
        <Link href="/produtos/calca">CALÇA</Link>
        <Link href="/produtos/camisa">CAMISA</Link>
        <Link href="/produtos/bone">BONE</Link>
        <Link href="/produtos/sapato">SAPATO</Link>
        <Link href="/produtos/oculos">OCULOS</Link>
      </nav>
    </header>
    
  )
}