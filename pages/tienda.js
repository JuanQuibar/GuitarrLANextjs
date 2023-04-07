import Layout from "@/components/layout"
import Guitarra from "@/components/guitarra"
import styles from '../styles/grid.module.css'

//LLAMADA ESTATICA AL SERVIDOR
/* export async function getStaticProps() {
  const respuesta = await fetch (`${process.env.API_URL}/guitarras?populate=imagen`)
  const {data: guitarras} = await respuesta.json()
  return{
    props:{
      guitarras
    }
  }
} */

//LLAMADA DINAMICA AL SERVIDOR
export async function getServerSideProps() {
  const respuesta = await fetch (`${process.env.API_URL}/guitarras?populate=imagen`)
  const {data: guitarras} = await respuesta.json()
  return{
    props:{
      guitarras
    }
  }
}

export default function Tienda ({guitarras}) {
  
  return (
    <Layout
      title={'Tienda virtual'}
      description={'Página para comprar guitarras'}
    >
      <main className="contenedor">
        <h1 className="heading">Nuestra colección</h1>
        
        <div className={styles.grid} >
          {guitarras?.map(guitarra => (
              <Guitarra 
                key={guitarra.id}
                guitarra={guitarra.attributes}
              />
            ))
            } 
        </div>
        
      </main>
      
    </Layout>
    
  )
}