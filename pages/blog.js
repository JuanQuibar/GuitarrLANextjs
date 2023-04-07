
import Layout from "@/components/layout"
import styles from "../styles/grid.module.css"
import Post from "@/components/post"

export async function getStaticProps() {
  const respuesta = await fetch (`${process.env.API_URL}/posts?populate=imagen`)
  const {data: posts} = await respuesta.json()
  return{
    props:{
      posts
    }
  }
} 

const Blog = ({posts}) => {
  
  return (
    <Layout
      title={'Blog'}
      description={'Blog de música y venta de guitarras'}
    >
      <main className="contenedor">
        <h1 className="heading">Blog</h1>
        <div className={styles.grid} >
          {posts?.map( post=> (
            <Post
              key={post.id}
              post={post.attributes}
            />
          )) }
        </div>

      </main>
      
    </Layout>
    
    
  )
}

export default Blog