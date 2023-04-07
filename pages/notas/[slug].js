

export default function Articulo({datosNota}) {
  console.log(datosNota.id)

  const {title} = datosNota

  return (
    <div>{title} </div>
  )
} 

export async function getServerSideProps({query: {slug}}) {
    const id= (slug.replace(/[^0-9]/g, ""))
    console.log("hola", id)

    const respuesta = await fetch(`https://api.diariouno.com.ar/2.0/public/articles/${id}`)
    const datosNota = await respuesta.json()
    

    return{
        props:{
          datosNota
        }
    }
} 