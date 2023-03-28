import React, {useState, useEffect} from 'react'
import {useRouter} from 'next/router'
import NavBar from '../components/navbar'
import Footer from '../components/footer.js'


const Slug = (props) => {
    const [blog, setBlog] = useState(props.myBlog)
    return(
        <div class='bg-gray-900'>
            <NavBar/>
            <main class='w-50 flex flex-column justify-content-center m-auto py-20'>
                <h1 class='flex justify-content-center text-gray-200'>{blog && blog.title}</h1>
                <hr/>
                <div class='text-justify text-gray-400'>
                    {blog && blog.content}
                </div>
                
            </main>
            <Footer/>
        </div>
    )
}

export async function getStaticPaths(){
    return {
        paths : [
            {params: {slug: 'discover-the-power'}},
            {params: {slug: 'power-the-discover'}},
        ],
        fallback: true
    };
}

import * as fs from 'node:fs';
export async function getStaticProps(context){
    console.log(context)
    const {slug} = context.params;

    let myBlog = await fs.promises.readFile(`blogdata/${slug}.json`, 'utf-8')
        return {
            props: {myBlog: JSON.parse(myBlog)},
        }
    }

export default Slug;