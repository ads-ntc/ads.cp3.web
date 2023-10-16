import Image from "next/image";
import Link from "next/link";
import "../components/styles/styles.css"

import Roupas from "../../src/app/assets/roupas.png"
import Logo from "../../src/app/assets/logo.jpg"

export default function Home() {
  return (
    <div>
      <div className="container-home">
        <div>
        <h1>Produtos em geral</h1>
        <p>O melhor da moda, você encontra aqui!</p>
        </div>
        <figure>
          <Image src={Logo} width={400} height={400} alt="Tenis" />
          <figcaption>Roupas em geral</figcaption>
        </figure>
      </div>
    </div>
  )
}