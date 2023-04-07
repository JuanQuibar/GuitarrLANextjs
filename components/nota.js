import Link from "next/link"
import {generarSlug} from '../helpers'

export default function Nota({nota}) {

    const {title, id, caption, shortUrl} = nota
    
    // console.log(slug)
 
    const slug = generarSlug(title)

  return (
    <div>
        
            <Link href={`/notas/${slug}-${id}`}><h2>{title}</h2> </Link>
        
        <p>{caption} {shortUrl
} </p>
    </div>
  )
}
