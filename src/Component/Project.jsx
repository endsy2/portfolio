// import React from 'react'
// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { project } from '../constant';
import { Link } from 'react-router-dom';


const Project = () => {
    // const settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 3,
    //     slidesToScroll: 3
    // };
    return (
        // <div className="slider-container mt-72">
        //     <Slider {...settings}>
        //         <div>
        //             <h3>1</h3>
        //         </div>
        //         <div>
        //             <h3>2</h3>
        //         </div>
        //         <div>
        //             <h3>3</h3>
        //         </div>
        //         <div>
        //             <h3>4</h3>
        //         </div>
        //         <div>
        //             <h3>5</h3>
        //         </div>
        //         <div>
        //             <h3>6</h3>
        //         </div>
        //         <div>
        //             <h3>7</h3>
        //         </div>
        //         <div>
        //             <h3>8</h3>
        //         </div>
        //         <div>
        //             <h3>9</h3>
        //         </div>
        //     </Slider>
        // </div>
        <div className='flex flex-col mt-20 text-primaryfont-semi'>
            <h1 className='text-2xl md:text-4xl lg:text-5xl font-bold text-primary'>Project</h1>
            <div className='flex mt-20 gap-20'>
                {project.map((element, index) => (
                    <Link key={index} to={element.link} className='flex flex-col w-80 space-y-4 rounded-xl hover:scale-105 hover:transition hover:duration-300 text-subPrimary bg-primary py-7 px-6'>
                        <div className='flex justify-center items-center gap-2'>
                            <p className='text-2xl'>{element.img}</p>
                            <p>{element.projectName}</p>
                        </div>
                        <div>
                            <p className='text-start'><span className='ml-6'></span>{element.description}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Project
