import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <h1>Produtos em geral</h1>
      <div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quos recusandae sint pariatur eaque neque enim ipsum magni cumque asperiores, animi ab porro eos repellendus culpa consequuntur, vitae fugit iure!</p>
        <figure>
          <Image src="/img/roupas.jpg" width={400} height={400} alt="Tenis" />
          <figcaption>Roupas em geral</figcaption>
        </figure>
      </div>
    </div>
  )
}