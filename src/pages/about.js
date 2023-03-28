
import NavBar from './components/navbar'
import Footer from './components/footer.js'
import Image from 'next/image'
import Innovation from '../../public/innovation.png'
import Partner from '../../public/partnet.png'
import EviaDt from '../../public/Dt.png'
function About(){

    return(
        <div>
            <NavBar/>
            <section class="text-gray-400 bg-gray-900 body-font">
                <div class="container mx-auto flex px-10 py-24 md:flex-row flex-col items-center">
                    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
                        <Image 
                            src={Innovation}
                            alt="Mern Stack"
                            class="object-cover object-center w-full h-full block"
                        />
                    </div>
                    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white flex justify-content-center w-100">Discover the Power of Innovation at
                    <br class="hidden lg:inline-block"/>EviaDt</h1>
                    <p class="mb-8 leading-relaxed align-justify">At EVIADT, we are passionate about harnessing the power of innovation to create exceptional web development solutions. With a team of experienced professionals, we use the latest technologies and industry best practices to deliver results that exceed your expectations. Whether you are looking to establish an online presence, enhance your existing website, or add new functionality, we are here to help. Join us on our mission to transform the way you approach web development.</p>
                    <div class="flex justify-center flex justify-content-center w-100">
                        <button class="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">Read More</button>
                    </div>
                    </div>
                </div>
            </section>
            {/* <hr className={styles.hline}/> */}
            <section class="text-gray-400 bg-gray-900 body-font">
                <div class="container mx-auto flex px-10 py-24 md:flex-row flex-col items-center">
                    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white  flex justify-content-center w-100">Your Partner in Web Development
                    </h1>
                    <p class="mb-8 leading-relaxed align-justify">At EVIADT, we believe in forging lasting partnerships with our clients. We understand that your website is a vital part of your business, and we are committed to helping you achieve your goals. Our team works closely with you every step of the way to ensure that your website is not just visually appealing, but also highly functional, secure, and optimized for search engines. Trust us to be your partner in web development and take your online presence to the next level.</p>
                    <div class="flex justify-center  flex justify-content-center w-100">
                        <button class="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">Read More</button>
                    </div>
                    </div>
                    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <Image 
                            src={Partner}
                            alt="Mern Stack"
                            class="object-cover object-center w-full h-full block"
                        />
                    </div>
                </div>
            </section>  
            {/*<hr className={styles.hline}/>  */}
            <section class="text-gray-400 bg-gray-900 body-font">
                <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                        <Image 
                            src={EviaDt}
                            alt="Mern Stack"
                            class="object-cover object-center w-25 mb-20 block cursor-pointer"
                        />
                    <div class="text-center lg:w-2/3 w-full">
                    <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Empowering Your Vision with Cutting-Edge Web Development at EVIADT</h1>
                    <p class="leading-relaxed mb-8 ">At EVIADT, we believe that your vision deserves to be brought to life with the latest and greatest in web development technology. Our team of experts stays on the cutting-edge of the industry, ensuring that we always have the tools and skills to bring your unique vision to life. From stunning website design to seamless functionality and beyond, we are here to empower your vision and help you achieve success online.</p>
                    <div class="flex justify-center">
                        <button class="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">Read More</button>
                    </div>
                    </div>
                </div>
            </section>

            <Footer/>
        </div>
    )


}

export default About;