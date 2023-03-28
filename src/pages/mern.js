import styles from '@/styles/Home.module.css'
import NavBar from './components/navbar.js'
import Footer from './components/footer.js'
import Image from 'next/image'
import Link from 'next/link'
import mern from '../public/mern.webp'

function Vue(){
    return(
        <>
            <NavBar/>
                <div>
                    {/* Vue order */}
                    <section class="text-gray-400 bg-gray-900 body-font overflow-hidden">
                        <div class="container px-5 py-24 mx-auto">
                            <div class="lg:w-4/5 mx-auto flex flex-wrap">
                                <Image 
                                    src={mern}
                                    alt="Mern Stack"
                                    class="object-cover object-center w-full h-full block cursor-pointer"
                                />
                            <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                                <h2 class="text-sm title-font text-gray-500 tracking-widest">EviaDt</h2>
                                <h1 class="text-white text-3xl title-font font-medium mb-4">Web App with React | Node | Express</h1>
                                <div class="flex mb-4">
                                <a class="flex-grow text-blue-400 hover:text-blue-400 border-b-2 border-blue-400 py-2 text-lg px-1 text-decoration-none ">Detail</a>
                                </div>
                                <p class="leading-relaxed mb-4">Our Basic Plan is designed for businesses and individuals who are looking for a powerful and reliable web app that will help them achieve their goals online. This plan includes the development of a custom web app using the latest and greatest in web development technology, including Vue, Node, and Express. With these tools at our disposal, we will be able to build a fast, efficient, and secure web app that meets your specific needs and exceeds your expectations.</p>
                                <div class="flex border-t border-gray-800 py-2">
                                <span class="text-gray-500">Pages</span>
                                <span class="ml-auto text-white">7</span>
                                </div>
                                <div class="flex border-t border-gray-800 py-2">
                                <span class="text-gray-500">Database</span>
                                <span class="ml-auto text-white">Connected</span>
                                </div>
                                <div class="flex border-t border-b mb-6 border-gray-800 py-2">
                                <span class="text-gray-500">Revisions</span>
                                <span class="ml-auto text-white">Unlimited</span>
                                </div>
                                <div class="flex">
                                <span class="title-font font-medium text-2xl text-white">$20.00/Hr</span>
                                <Link href='/contact' legacyBehavior>
                                <button class="flex ml-auto text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded">Discuss</button>
                                </Link>
                                </div>
                            </div>
                           </div>
                        </div>
                    </section>
                    {/* ./ vue order */}
                </div>
            <Footer/>
        </>
    )
}

export default Vue;