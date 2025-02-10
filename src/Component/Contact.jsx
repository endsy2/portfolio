import React from 'react';

const Contact = ({ data }) => {
    return (
        <div className='py-10 px-10 lg:px-24'>
            <h1 className='font-bold text-3xl lg:text-4xl text-primary text-center mb-10'>Contact</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-primary items-center'>
                {data.map((element, index) => (
                    <div
                        key={index}
                        className='flex flex-col items-center border-2 border-primary px-10 py-7 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 bg-white text-center'
                    >
                        <p className='text-5xl mb-4'>{element.img}</p>
                        <p className='font-bold text-lg mb-2'>{element.head}</p>
                        <p className='text-base'>{element.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Contact;
