import styles from '../styles/diario.module.css'
import Nota from "@/components/nota"

export async function getServerSideProps() {
    const respuesta = await fetch (`https://api.diariouno.com.ar/2.0/public/articles/page?page=1&size=20&id=10`)

    const {"10":data} = await respuesta.json()
    
    return{
      props:{
        data
      }
    }
  }

export default function Diario({data}) {
  const notas= data.newsArticles

  return (
    <div className={styles.display}> 
      {notas?.map(nota=>(
        <Nota
          key={nota.id}
          nota={nota}
        />
      ))}
    </div>
  )
}
