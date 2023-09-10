import HomeLayout from '../Layouts/HomeLayout'
import aboutMainImage from '../assets/Images/aboutMainImage.jpg'
import CarouselSlide from '../Components/CarouselSlide'
import { celebrities  } from '../constants/CelebrityData'

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
                    {celebrities && celebrities.map(celebrity => (<CarouselSlide 
                                                                    {...celebrity}
                                                                    key={celebrity.slideNumber}
                                                                    totalSlide={celebrities.length}
                                                                 />))}
                    
                </div>
            </div>
        </HomeLayout>
    )
}

export default AboutUs;