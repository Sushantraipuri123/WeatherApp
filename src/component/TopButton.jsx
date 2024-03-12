import React from 'react'

const TopButton = () => {

    const cities = [
        {
            id: 1,
            title: "India"
        },
        {
            id: 2,
            title: "London"
        },
        {
            id: 3,
            title: "Toronto"
        },
        {
            id: 4,
            title: "Canada"
        },
        {
            id: 5,
            title: "Australia"
        }
    ];
    return (
        <div className='flex gap-5 items-center justify-center py-5'>
        {cities.map((city) => (
            <button key={city.id} className='text-white text-lg font-medium'>{city.title}</button>
        ))}
    </div>
    

    )
}

export default TopButton
