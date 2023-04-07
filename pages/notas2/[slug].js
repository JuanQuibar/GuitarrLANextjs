import { useRouter } from "next/router"

export default function Producto() {

  return (
    <div>[slug]</div>
  )
}

  
  export async function getServerSideProps(datos) {
    console.log(datos)

    return {
        props: {

        }
    }
  }
  