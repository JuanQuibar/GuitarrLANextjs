import { useState } from "react"
import Image from "next/image"
import styles from '../../styles/guitarras.module.css'
import Layout from "@/components/layout"

export async function getServerSideProps({query:{url}}){
    
    const respuesta = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`)
    const {data} = await respuesta.json()

    return{
        props:{
            data
        }
    }

}

export default function Producto({data,agregarCarrito}) {

    const [cantidad, setCantidad] = useState(0)
    const {nombre, descripcion, imagen, precio} = data[0].attributes

    const handleSubmit = e => {
        e.preventDefault()

        if(cantidad < 1){
            alert('Cantidad no válida')
            return
        }

        //construir un objeto

        const guitarraSeleccionada = {
            id: data[0].id,
            imagen: imagen.data.attributes.url,
            nombre,
            precio,
            cantidad
        }
        agregarCarrito(guitarraSeleccionada)
    }

        return(
            <Layout
                title={nombre}
            >
                <div className={styles.guitarra} >

                    <Image src={imagen.data.attributes.url} width={600} height={400} alt={`Imagen guitarra ${nombre}`} />

                    <div className={styles.contenido} >
                        <h3>{nombre} </h3>
                        <p className={styles.descripcion} >{descripcion} </p>
                        <p className={styles.precio} >${precio} </p>

                        <form 
                            onSubmit={handleSubmit}
                            className={styles.formulario}
                        >
                            <label htmlFor="cantidad">Cantidad:</label>
                            <select 
                                onChange={ e => setCantidad(+e.target.value) }
                                id="cantidad"
                            >
                                <option value="0">-- Seleccione --</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                            <input type="submit" value="agregar al carrito" />
                        </form>
                    </div>
                </div>
            </Layout>
        )
    
    } 