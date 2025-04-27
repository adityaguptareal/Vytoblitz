import React from 'react'
import {motion} from "motion/react"

function FeedBack() {
    const feedBackData = [
        {
            feedback: "Great event, learned a lot!",
            username: "Ravi Kumar",
            position: "GL Bajaj Insitute of Technology",
            rating: "⭐⭐⭐⭐⭐"
        },
        {
            feedback: "Amazing experience, highly recommend!",
            username: "Priya Sharma",
            position: "ITS Engineering College",
            rating: "⭐⭐⭐⭐"
        },
        {
            feedback: "Well organized and very informative.",
            username: "Amit Patel",
            position: "NIET College, Greater Noida",
            rating: "⭐⭐⭐"
        },
        {
            feedback: "A fantastic opportunity to network.",
            username: "Sneha Gupta",
            position: "GGSIPU College",
            rating: "⭐⭐⭐"
        },
        {
            feedback: "Learned new skills and met great people.",
            username: "Vikram Singh",
            position: "Galgotias University",
            rating: "⭐⭐⭐⭐⭐"
        },
        {
            feedback: "Incredible event, will attend again!",
            username: "Anjali Mehta",
            position: "ILM College, Greater Noida",
            rating: "⭐⭐⭐⭐⭐"
        }

    ]
    return (




        feedBackData.map((data, index) => {
            return (
                <motion.div initial={{opacity: 0, y: -50}} whileInView={{opacity: 1,y: 0 }} transition={{duration: .9,delay:index * 0.2}} id='container' key={index} className='p-4 border w-72  border-white'>
                    <div className='text-xl'>{data.rating}</div>
                    <div className='text-base'>{data.feedback}</div>
                    <div id='userDetails' className='flex items-center py-2 gap-2'>
                        <div className='w-[50px] h-[50px] bg-white rounded-full' ></div>
                        <div id="userName">
                            <div className='text-base font-medium'>{data.username}</div>
                            <div className='text-base font-thin'>{data.position}</div>
                        </div>
                    </div>
                </motion.div>
            )
        })


    )
}

export default FeedBack
