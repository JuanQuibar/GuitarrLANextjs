import Image from "next/image"
import Layout from "@/components/layout"
import styles from '../styles/nosotros.module.css'

const Nosotros = () => {
  return (
    <Layout
      title={'Nosotros'}
      description={'Blog de música y venta de guitarras'}
    >
      <main className="contenedor">
        <h2 className="heading">Nosotros</h2>

        <div className={styles.contenido}>
          <Image src="/img/nosotros.jpg" width={1000} height={800} alt="foto de Nosotros" />
          <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt eum nam, quo doloremque incidunt, in eveniet ullam, dolorum impedit quia at cumque itaque dignissimos. Repudiandae accusamus mollitia debitis corrupti corporis.</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi numquam temporibus et mollitia reiciendis vitae delectus sapiente exercitationem incidunt accusamus, pariatur ex, animi fuga, iure inventore aperiam? Officiis, perspiciatis laborum.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius distinctio tenetur dolore fugit esse harum? Voluptate nam dolores doloribus quia itaque, at, molestias consectetur dolorem aliquam cum accusantium quod quaerat!</p>
          </div>
        </div>

      </main>
      
    </Layout>
    
    
  )
}

export default Nosotros