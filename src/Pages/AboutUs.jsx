import HomeLayout from '../Layouts/HomeLayout'
import aboutMainImage from '../assets/Images/aboutMainImage.jpg'
import steve from '../assets/Images/steve.jpg'
import kalam from '../assets/Images/kalam.jpg'
import zukerburg from '../assets/Images/zukerburg.jpg'
import einstein from '../assets/Images/einstein.jpg'
import gates from '../assets/Images/gates.jpg'

function AboutUs() {
    return (
        <HomeLayout>
            <div className='pl-20 pt-20 flex flex-col text-black'>
                <div className='flex items-center gap-[80px] mx-10'>
                    <section className='w-1/2 space-y-10'>
                        <h1 className='text-5xl text-yellow-500 font-semibold'>
                            Affordable and quality education
                        </h1>
                        <p className='text-xl text-gray-700'>
                            Our Goal to provide the affordable and quality education to the world.
                            We are providind the plateform the aspiring teachers and 
                            students to share their skills, creativity and knowledge to each other to 
                            empowerment in the growth and willness of minkind
                        </p>
                    </section>

                    <div className='w-1/2'>
                        <img 
                            id='test1'
                            style={{
                                filter: "drop-shadow(0px 10px 10px rgb(0, 0, 0));"
                            }}
                            alt='about main image'
                            className='drop-shadow-2xl w-[450px] rounded-[10%]'
                            src={aboutMainImage} />
                    </div>
                </div>

                <div className="carousel w-1/2 m-auto my-16">
                    <div id="slide1" className="carousel-item relative w-full">
                        <div className='flex flex-col items-center justify-center gap-4 px-[15%]'>
                            <img src={kalam} className="rounded-full w-40 h-40 border border-gray-400" />
                            <p className='text-xl text-gray-700'>
                                "Education is most powerfull tool you can the world"
                            </p>
                            <h3 className='text-2xl font-semibold'></h3>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide4" className="btn btn-circle">❮</a> 
                                <a href="#slide2" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div> 
                    <div id="slide2" className="carousel-item relative w-full">
                        <div className='flex flex-col items-center justify-center gap-4 px-[15%]'>
                            <img src={einstein} className="rounded-full w-40 h-40 border-2 border-gray-400" />
                            <p className='text-xl text-gray-700'>
                                "Education is most powerfull tool you can the world"
                            </p>
                            <h3 className='text-2xl font-semibold'>Nelson Mandela</h3>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide1" className="btn btn-circle">❮</a> 
                                <a href="#slide3" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div> 
                    <div id="slide3" className="carousel-item relative w-full">
                        <div className='flex flex-col items-center justify-center gap-4 px-[15%]'>
                            <img src={steve} className="rounded-full w-40 h-40 border-2 border-gray-400" />
                            <p className='text-xl text-gray-700'>
                                "Education is most powerfull tool you can the world"
                            </p>
                            <h3 className='text-2xl font-semibold'>Nelson Mandela</h3>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide2" className="btn btn-circle">❮</a> 
                                <a href="#slide4" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div> 
                    <div id="slide4" className="carousel-item relative w-full">
                        <div className='flex flex-col items-center justify-center gap-4 px-[15%]'>
                            <img src={zukerburg} className="rounded-full w-40 h-40 border-2 border-gray-400" />
                            <p className='text-xl text-gray-700'>
                                "Education is most powerfull tool you can the world"
                            </p>
                            <h3 className='text-2xl font-semibold'>Nelson Mandela</h3>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide3" className="btn btn-circle">❮</a> 
                                <a href="#slide5" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div>
                    <div id="slide5" className="carousel-item relative w-full">
                        <div className='flex flex-col items-center justify-center gap-4 px-[15%]'>
                            <img src={gates} className="rounded-full w-40 h-40 border-2 border-gray-400" />
                            <p className='text-xl text-gray-700'>
                                "Education is most powerfull tool you can the world"
                            </p>
                            <h3 className='text-2xl font-semibold'>Nelson Mandela</h3>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide4" className="btn btn-circle">❮</a> 
                                <a href="#slide1" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </HomeLayout>
    )
}

export default AboutUs;