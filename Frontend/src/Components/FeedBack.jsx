import React from 'react'

function FeedBack() {
    const feedBackData = [
        {
            feedback: "Great event, learned a lot!",
            username: "Ravi Kumar",
            position: "Software Engineer",
            rating: "⭐⭐⭐⭐⭐"
        },
        {
            feedback: "Amazing experience, highly recommend!",
            username: "Priya Sharma",
            position: "Data Scientist",
            rating: "⭐⭐⭐⭐"
        },
        {
            feedback: "Well organized and very informative.",
            username: "Amit Patel",
            position: "Web Developer",
            rating: "⭐⭐⭐⭐⭐"
        },
        {
            feedback: "A fantastic opportunity to network.",
            username: "Sneha Gupta",
            position: "Product Manager",
            rating: "⭐⭐⭐⭐"
        },
        {
            feedback: "Learned new skills and met great people.",
            username: "Vikram Singh",
            position: "UX Designer",
            rating: "⭐⭐⭐⭐⭐"
        },
        {
            feedback: "Incredible event, will attend again!",
            username: "Anjali Mehta",
            position: "AI Researcher",
            rating: "⭐⭐⭐⭐"
        }

    ]
    return (




        feedBackData.map((data, index) => {
            return (
                <div id='container' key={index} className='p-4 border w-72  border-white'>
                    <div className='text-xl'>{data.rating}</div>
                    <div className='text-base'>{data.feedback}</div>
                    <div id='userDetails' className='flex items-center py-2 gap-2'>
                        <div className='w-[50px] h-[50px] bg-white rounded-full' ></div>
                        <div id="userName">
                            <div className='text-base font-medium'>{data.username}</div>
                            <div className='text-base font-thin'>{data.position}</div>
                        </div>
                    </div>
                </div>
            )
        })


    )
}

export default FeedBack
