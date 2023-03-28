import styles from '../app/Home.module.css'
import NavBar from './components/navbar'
import Footer from './components/footer.js'
import React, {useEffect, useState} from 'react'
import Link from 'next/link'
import * as fs from 'node:fs';

const Blogs = (props) =>{
        console.log(props)
        const [blogs, setBlogs] = useState(props.allBlogs)


        return(
        <div class="bg-gray-900">
            <NavBar/>
                    <div class="mx-8 my-8 bg-gray-900">
                    {blogs.map((blogitem)=>{
                        return(
                            <div key={blogitem.id}>
                            <h1 class="mt-1 text-gray-500 text-sm">{blogitem.date}</h1>
                            <div class="md:flex-grow">
                        
                            <Link href={`/blogpost/${blogitem.slug}`} legacyBehavior>
                                <h2 class="text-2xl font-medium text-gray-200 title-font mb-2 cursor-pointer">{blogitem.title}</h2>
                            </Link>
                            <p class="leading-relaxed text-gray-400">{blogitem.content.substr(0, 100)}...</p>
                            <a class="text-blue-400 inline-flex items-center mt-0 text-decoration-none">Learn More
                                <svg class="w-4 h-4 ml-2 pb-20 cursor-pointer" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M5 12h14"></path>
                                <path d="M12 5l7 7-7 7"></path>
                                </svg>
                            </a>
                            
                            </div>
                            <hr className={styles.hline}/>
                        </div>
                       )
                        })}
                        </div>
                    <Footer/>
        </div>
    )


}
export async function getStaticProps(context){
    let data = await fs.promises.readdir("blogdata")
    let myfile;
    let allBlogs = []
    for (let index = 0; index < data.length; index++)
    {
        const item = data[index]
        myfile = await fs.promises.readFile(('blogdata/' + item), 'utf-8')
        allBlogs.push(JSON.parse(myfile))
    }
    return {
        props:{allBlogs}
    }
}

export default Blogs;


