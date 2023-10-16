import Image from "next/image"
import Link from "next/link"

export default function Camisa() {
  return (
    <div>
      <h1>Tenis</h1>
      <div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit delectus incidunt totam laborum tenetur, aliquam dolor temporibus nesciunt accusamus doloribus nemo quas ratione quos corporis est odio, repellendus reiciendis dignissimos.</p>
        <p><Link href="/">HOME</Link></p>
        <figure>
          <Image src="/img/tenis.png" width={400} height={400} alt="Tenis" />
          <figcaption>Tenis</figcaption>
        </figure>
      </div>
    </div>
  )
}