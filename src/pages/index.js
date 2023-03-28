import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import EviaDt from '../../public/EviaDt.png'
import stages from '../../public/stages.png'
import { Inter } from '@next/font/google'
import styles from '@/app/Home.module.css'
import NavBar from './components/navbar.js'
import Footer from './components/footer.js'
import vue from '../../public/vue.jpeg'
import mern from '../../public/mern.webp'
import next from '../../public/next.png'
import flutter from '../../public/flutter.png'
import { NextSeo } from 'next-seo';
import 'tailwindcss/tailwind.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
        <NextSeo
        title="Simple Usage Example"
        description="A short description goes here."
        />
      <Head>
        <title>EviaDt | Build Dynamic Components</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Dt.png"/>
      </Head>
      <main className={styles.home}>
         <NavBar/>
         <section className="text-gray-400 bg-gray-900 body-font">
            <div className="container mx-auto flex px-5 pt-24 pb-10 items-center justify-center flex-col">
                <div className="text-center lg:w-1/2 w-full">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-white">Welcome to
                    <span className={styles.evia}> Evia<span className={styles.dt}>Dt</span></span>
                </h1>
                <p className="leading-relaxed mb-8">Efficient Validation of Inputs and Outputs Data Types <span className="text-gray-100">Upgrade your web application with EviaDt.</span> Our expert team will improve accuracy, reliability, and security by implementing efficient validation for all inputs and outputs. Get rid of data type errors – <span className='text-gray-100'>Upgrade to EVIADT now!</span></p>
                <div className="flex justify-center">
                    <Link href='/contact' legacyBehavior>
                        <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">Get Started</button>
                    </Link>
                    <Link href='/about' legacyBehavior>
                        <button className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">About Us</button>
                    </Link>
                </div>
                </div>
            </div>
            <Image
                src={EviaDt}
                alt="Service Broucher"
                width={720}
                height={600}
                className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 pb-10 m-auto object-cover object-center rounded"
            />
        <hr className={styles.hrline}/>
        {/* Pakeages */}
        <section className="text-gray-400 bg-gray-900 body-font">
            <div className="container px-5 py-24 mx-auto">
            <h1 className={styles.stages}>Packages</h1>
                <div className="flex flex-wrap -m-4 pt-20">
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Web App</h3>
                    <a className="block relative h-48 rounded overflow-hidden">
                    <Link href='/vue' legacyBehavior>
                        <Image 
                        src={vue}
                        alt="vue Thumbnail"
                        className="object-cover object-center w-full h-full block cursor-pointer"
                        />
                    </Link>
                    </a>
                    <div className="mt-4">
                    <Link href='/vue' legacyBehavior>
                        <h2 className="text-white title-font text-lg font-bold cursor-pointer">Vue.Js</h2>
                    </Link>
                    <p className="mt-1">$20.00/Hr</p>
                    </div>
                </div>
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Web App</h3>
                    <a className="block relative h-48 rounded overflow-hidden">
                    <Link href='/mern' legacyBehavior>
                        <Image 
                            src={mern}
                            alt="Mern Stack"
                            className="object-cover object-center w-full h-full block cursor-pointer"
                        />
                    </Link>
                    </a>
                    <div className="mt-4">
                    <Link href='/mern' legacyBehavior>
                        <h2 className="text-white title-font text-lg font-bold cursor-pointer">MERN Stack</h2>
                    </Link>
                    <p className="mt-1">$20.00/Hr</p>
                    </div>
                </div>
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Web App</h3>
                    <a className="block relative h-48 rounded overflow-hidden">
                    <Link href='/next' legacyBehavior>
                        <Image 
                            src={next}
                            alt="Mern Stack"
                            className="object-cover object-center w-full h-full block cursor-pointer"
                        />
                    </Link>
                    </a>
                    <div className="mt-4">
                    <Link href='/next' legacyBehavior>
                        <h2 className="text-white title-font text-lg font-bold cursor-pointer">Next.Js</h2>
                    </Link>
                    <p className="mt-1">$25.00/Hr</p>
                    </div>
                </div>
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Mobile App</h3>
                    <a className="block relative h-48 rounded overflow-hidden">
                    <Link href='/flutter' legacyBehavior>
                        <Image 
                            src={flutter}
                            alt="Mern Stack"    
                            className="object-cover object-center w-full h-full block cursor-pointer"
                        />
                    </Link>
                    </a>
                    <div className="mt-4">
                    <Link href='/flutter' legacyBehavior>
                        <h2 className="text-white title-font text-lg font-bold cursor-pointer">Flutter</h2>
                    </Link>
                    <p className="mt-1">$25.00/Hr</p>
                    </div>
                </div>
                </div>
            </div>
            <hr className={styles.hrline}/>
        </section>
        {/* ./ pakages */}
        </section>
        {/* offer */}
        <section className="text-gray-400 bg-gray-900 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                <h1 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-white">What We Offer!</h1>
                </div>
                <div className="flex flex-wrap -m-4 text-center">
                <div className="p-4 lg:w-1/2 md:w-1/2 sm:w-1/1 w-full">
                    <div className="border-2 border-gray-800 px-10 pb-12 py-6 rounded-lg">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="text-blue-400 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                        <path d="M8 17l4 4 4-4m-4-5v9"></path>
                        <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
                    </svg>
                    <h2 className="title-font font-medium text-3xl text-white">Fast</h2>
                    <p className="leading-relaxed">Fast, efficient applications tailored to your specific needs.</p>
                    </div>
                </div>
                <div className="p-4 lg:w-1/2 md:w-1/2 sm:w-1/2 w-full">
                    <div className="border-2 border-gray-800 px-10 pb-12 py-6 rounded-lg">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="text-blue-400 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
                    </svg>
                    <h2 className="title-font font-medium text-3xl text-white">Responsive</h2>
                    <p className="leading-relaxed">Providing intuitive, mobile-friendly user experiences through responsive design.</p>
                    </div>
                </div>
                <div className="p-4 lg:w-1/2 md:w-1/2 sm:w-1/2 w-full">
                    <div className="border-2 border-gray-800 px-10 py-6 rounded-lg">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="text-blue-400 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                        <path d="M3 18v-6a9 9 0 0118 0v6"></path>
                        <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"></path>
                    </svg>
                    <h2 className="title-font font-medium text-3xl text-white">Intuitive</h2>
                    <p className="leading-relaxed">Intuitive design for seamless user experience and enjoyment.</p>
                    </div>
                </div>
                <div className="p-4 lg:w-1/2 md:w-1/2 sm:w-1/2 w-full">
                    <div className="border-2 border-gray-800 px-4 py-6 rounded-lg">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="text-blue-400 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    </svg>
                    <h2 className="title-font font-medium text-3xl text-white">Dynamic</h2>
                    <p className="leading-relaxed">Dynamic solutions for changing business environments and needs.</p>
                    </div>
                </div>
                </div>
            </div>
        <hr className={styles.hrline}/>
        </section>
        {/* ./ offer */}
        {/* Stages */}
        <section className="text-gray-400 bg-gray-900 body-font">
        <h1 className={styles.stages}>5 Stages of Development</h1>
            <div className="container px-20 pb-24 pt-5 sm:pl-10 mx-auto flex flex-wrap">
                <div className="flex flex-wrap w-full">
                <div className="lg:w-1/1 md:w-1/1 md:pr-10 md:pl-10 md:py-6">
                    <div className="flex relative pb-12">
                    <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                        <div className="h-full w-1 bg-gray-800 pointer-events-none"></div>
                    </div>
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 inline-flex items-center justify-center text-white relative z-10">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                        </svg>
                    </div>
                    <div className="flex-grow pl-4">
                        <h2 className="font-medium title-font text-sm text-white mb-1 tracking-wider">STAGE 1</h2>
                        <p className="leading-relaxed">Our experts at EviaDt ensure project success by thoroughly <span className='text-blue-300'>Understanding your Requirements</span> and delivering the results you need.</p>
                    </div>
                    </div>
                    <div className="flex relative pb-12">
                    <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                        <div className="h-full w-1 bg-gray-800 pointer-events-none"></div>
                    </div>
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 inline-flex items-center justify-center text-white relative z-10">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                        </svg>
                    </div>
                    <div className="flex-grow pl-4">
                        <h2 className="font-medium title-font text-sm text-white mb-1 tracking-wider">STAGE 2</h2>
                        <p className="leading-relaxed">Our <span className='text-blue-300'>Design Process</span> creates unique and impactful solutions that reflect your vision and brand identity. Collaborate with our experienced designers for a successful outcome.</p>
                    </div>
                    </div>
                    <div className="flex relative pb-12">
                    <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                        <div className="h-full w-1 bg-gray-800 pointer-events-none"></div>
                    </div>
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 inline-flex items-center justify-center text-white relative z-10">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                        <circle cx="12" cy="5" r="3"></circle>
                        <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                        </svg>
                    </div>
                    <div className="flex-grow pl-4">
                        <h2 className="font-medium title-font text-sm text-white mb-1 tracking-wider">STAGE 3</h2>
                        <p className="leading-relaxed">Our developers create custom solutions with technical expertise and creative vision. Experience a transparent <span className='text-blue-300'>Development Process</span> with us.</p>
                    </div>
                    </div>
                    <div className="flex relative pb-12">
                    <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                        <div className="h-full w-1 bg-gray-800 pointer-events-none"></div>
                    </div>
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 inline-flex items-center justify-center text-white relative z-10">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                    </div>
                    <div className="flex-grow pl-4">
                        <h2 className="font-medium title-font text-sm text-white mb-1 tracking-wider">STAGE 4</h2>
                        <p className="leading-relaxed">Ensure a seamless online experience with our expert web <span className='text-blue-300'>Testing</span> services. We evaluate functionality, compatibility, and security for optimal performance.</p>
                    </div>
                    </div>
                    <div className="flex relative">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 inline-flex items-center justify-center text-white relative z-10">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                        <path d="M22 4L12 14.01l-3-3"></path>
                        </svg>
                    </div>
                    <div className="flex-grow pl-4">
                        <h2 className="font-medium title-font text-sm text-white mb-1 tracking-wider">FINISH</h2>
                        <p className="leading-relaxed">we prioritize timely and <span className='text-blue-300'>Efficient Delivery</span> for project success. Our systematic approach, expert team, and commitment to quality ensure that your project is completed on time and within budget.</p>
                    </div>
                    </div>
                </div>
                
                </div>
            </div>
            <hr className={styles.hrline}/>
        </section>
        {/* ./ stages */}
        {/* Testamonial */}
        <section className="text-gray-400 bg-gray-900 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="inline-block w-8 h-8 text-gray-500 mb-8" viewBox="0 0 975.036 975.036">
                    <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                </svg>
                <p className="leading-relaxed text-lg">Working with EviaDt was a fantastic experience. They brought our vision to life, delivering a beautifully designed and highly functional website that exceeded our expectations. Their technical expertise, attention to detail, and exceptional communication skills made the entire process seamless. We highly recommend EviaDt to anyone looking for a talented, reliable, and professional environment.</p>
                <span className="inline-block h-1 w-10 rounded bg-blue-500 mt-8 mb-6"></span>
                <h2 className="text-white font-medium title-font tracking-wider text-sm">Aria Jenkins</h2>
                <p className="text-gray-500">Senior Product Designer</p>
                </div>
            </div>
        </section>
        {/* ./ testamonial */}
        <Footer/>
      </main>
    </>
  )
}
