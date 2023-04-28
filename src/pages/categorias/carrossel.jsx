
import { Fragment,useEffect,useState,useRef } from 'react';
import './categorias.css'
import Post from '../../components/post/post';
import {motion} from 'framer-motion'
import img from '/assets/Baki.jpg'
function MovieCarousel(props){
     
    const carosel = useRef();
    const [width,setWidth] = useState(0)

    useEffect(() => {
        setWidth(carosel.current?.scrollWidth - carosel.current?.offsetWidth)
    })

    const posts = props.post
  return(
    <Fragment>
        <motion.div ref={carosel} className='carosel' whileTap={{cursor:"grabbing"}}>
            <motion.div 
            className='inner'
            drag='x'
            dragConstraints={{right: 0, left:-width}}
            >
                {posts.map(post =>(
                    <motion.div className='item' key={post}>
                        {post}
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    </Fragment>
  )
}
export default MovieCarousel;