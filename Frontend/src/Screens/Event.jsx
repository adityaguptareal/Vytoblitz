import { React, useState } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { useForm } from 'react-hook-form'
import EventCta from '../Components/EventCta'
import EventSchedule from '../Components/EventSchedule'
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
import { useEffect } from 'react'
import FeedBack from '../Components/FeedBack'
import AccordionCustomIcon from '../Components/Faqs'
import Button from '../Components/Button'
import { useNavigate } from "react-router-dom"
import { motion } from "motion/react"


function Event() {
  const [loader, setloader] = useState(true)
  const navigateTo = useNavigate()


  useEffect(() => {
    const timer = setTimeout(() => {
      setloader(false);
    }, 2500)
  }, [])
  const loaderStyle = {
    height: "230px",
    width: "400px"

  }

  return (
    <>
      <div className='bg-slate-950 relative h-full w-full z-0'>
        <SkeletonTheme baseColor="#202020" highlightColor="#444">
          <div class="absolute top-0 z-[-2] h-screen w-screen bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

          <div className="absolute bottom-0 z-[2] left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
          <Navbar />
          <div className='relative z-10'>
            <div className='pt-10 pb-40'>
              {/* Event Hero Section */}
              <div className='px-10 md:px-20 h-[300px] py-10 font-Montserrat text-white flex flex-col lg:flex-row items-center xl:justify-around lg:justify-between '>
                <div id='eventLeft' className='xl:w-[36%] py-6 lg:w-6/12 w-full flex items-center lg:items-start justify-center flex-col gap-5'>
                  <h1 className='text-4xl font-Orbitron text-center md:text-left font-bold'>VytoBlitz 1.0 2024</h1>
                  <p className='text-lg lg:text-left text-center'>Join us for an exhilarating experience filled with innovation, technology, and creativity!</p>
                  <div id='form' className='flex w-full flex-col gap-4'>
                    <form className='flex flex-col  md:flex-row gap-4'>
                      <input type='text' placeholder='Your Name' className='h-[45px] w-full pl-3 border bg-transparent border-b border-white text-white focus:outline-none' />
                      <input type='email' placeholder='Your Email' className='h-[45px] w-full pl-3 border bg-transparent border-b border-white text-white focus:outline-none' />
                    </form>
                    <button className='px-2 MobileM:px-5 font-medium sm:px-6 py-2 text-white' style={{
                      background: 'linear-gradient(90deg, rgba(148,0,252,1) 0%, rgba(0,142,247,1) 100%, rgba(31,31,31,1) 100%)',
                    }}>Registration Closed !</button>
                  </div>
                  <span className='text-sm'>By clicking Reserve My Spot, you agree to our Terms and Conditions.</span>
                </div>
                {/* <div id="eventRight" className='flex flex-col gap-5 items-center justify-center'>
                  <h1 className='text-3xl text-center font-bold font-Montserrat'>Thu, 28 Nov</h1>
                  <div id="timeDuration" className='flex justify-center items-center gap-5 border text-white border-white font-Montserrat MobileM:p-3 p-0  divide-x-2'>
                    <div id='day' className='pl-5 text-center '>
                      <div className='text-4xl'>0</div>
                      <div className='text-sm'>Days</div>
                    </div>
                    <div id='hour' className='pl-5 text-center'>
                      <div className='text-4xl'>0</div>
                      <div className='text-sm'>Hours</div>
                    </div>
                    <div id='minute' className='pl-5 text-center'>
                      <div className='text-4xl'>0</div>
                      <div className='text-sm'>Mins</div>
                    </div>
                    <div id='second' className='pl-5 text-center pr-5'>
                      <div className='text-4xl'>0</div>
                      <div className='text-sm'>Secs</div>
                    </div>
                  </div>
                  <span style={{
                    background: 'linear-gradient(90deg, rgba(148,0,252,1) 0%, rgba(0,142,247,1) 100%, rgba(31,31,31,1) 100%)',
                  }} className='cursor-pointer text-white rounded-md font-semibold px-3 py-1 text-sm'>Event Ended !</span>
                </div> */}
              </div>

              {/* Event Schedule section */}
              <div id="eventSchedule" className=' md:pt-0 pt-32 font-Montserrat'>

                <div id="textContainer" className='flex items-center justify-center flex-col gap-2 pt-80 lg:pt-14 text-white text-center font-Montserrat'>
                  <span className='text-base font-semibold'>Explore</span>
                  <h1 className='text-4xl font-bold font-Orbitron'>Schedule</h1>
                  <p className='max-w-lg font-Montserrat'>Come along for a thrilling weekend packed with technology events, contests, and chances to network!</p>
                </div>


                <div id="eventList" className='py-9 flex flex-col '>
                  <EventSchedule />
                </div>

              </div>
              {/* Event Schedule section Closed */}


              {/* Event Highlight */}
              <motion.div initial={{y:70,opacity:0}} whileInView={{y:0, opacity:1}} transition={{duration:1,delay:.5,ease:'easeInOut'}} id='eventHightlight' className='font-Orbitron w-full'>
                <div id='textContain' className='lg:pt-20 pt-5'>
                  <h1 className='text-center text-4xl font-bold underline'>Event Highlight</h1>
                  <p className='text-center py-3 font-Montserrat'>Explore captivating moments from our past tech fests!</p>
                </div>

                {/* Video Section */}
                <div id="videoSection" className=''>

                  <div id="" className='flex gap-x-10 flex-col lg:flex-row flex-wrap  px-0 md:px-16 py-10 gap-y-10 justify-center items-center'>
                    <div id="video1" className=' w-[310px] h-[200px]  MobileL:w-[400px] MobileL:h-[240px] relative'>
                      {
                        loader ? (
                          <Skeleton style={loaderStyle}></Skeleton>
                        ) : (
                          <>
                            <iframe src="https://player.vimeo.com/video/1042595529?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} title="Vytoblitz Quizathon"></iframe>
                            <script src="https://player.vimeo.com/api/player.js"></script></>
                        )
                      }


                    </div>
                    <div id="video2" className='w-[310px] h-[200px]  MobileL:w-[400px] MobileL:h-[240px] relative'>
                      {
                        loader ? (
                          <Skeleton style={loaderStyle}></Skeleton>

                        ) : (
                          <>

                            <iframe src="https://player.vimeo.com/video/1042596330?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} title="Vytoblitz Quizathon"></iframe>
                            <script src="https://player.vimeo.com/api/player.js"></script>
                          </>
                        )
                      }

                    </div>
                    <div id="video3" className='w-[310px] h-[200px]  MobileL:w-[400px] MobileL:h-[240px] relative'>
                      {
                        loader ? (
                          <Skeleton style={loaderStyle}></Skeleton>

                        ) : (
                          <>

                            <iframe src="https://player.vimeo.com/video/1042594818?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} title="Vytoblitz 1.0 Cultural Carnival"></iframe><script src="https://player.vimeo.com/api/player.js"></script>
                          </>
                        )
                      }
                    </div>
                    <div id="video3" className='w-[310px] h-[200px]  MobileL:w-[400px] MobileL:h-[240px] relative'>
                      {
                        loader ? (
                          <Skeleton style={loaderStyle}></Skeleton>

                        ) : (
                          <>

                            <iframe src="https://player.vimeo.com/video/1042627385?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} title="Esports Tournament"></iframe>
                          </>
                        )
                      }
                      <script src="https://player.vimeo.com/api/player.js"></script>
                    </div>
                    <div id="video3" className='w-[310px] h-[200px]  MobileL:w-[400px] MobileL:h-[240px] relative'>
                      {
                        loader ? (
                          <Skeleton style={loaderStyle}></Skeleton>

                        ) : (
                          <>

                            <iframe src="https://player.vimeo.com/video/1042596920?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} title="Special Guest video"></iframe><script src="https://player.vimeo.com/api/player.js"></script>
                          </>
                        )
                      }
                    </div>
                  </div>
                </div>
              </motion.div>
              {/* Event Highlight Closed */}


              {/* Individual Event Section */}
              <section id="Event" className='py-20 flex-col items-center justify-center flex gap-10 lg:gap-40'>



                { /* Quizathon */}
                <section id='quizathon' className='w-full px-6 md:px-12 lg:px-28 gap-6 md:gap-12 justify-center items-center py-4 flex flex-col lg:flex-row'>
                  <motion.div initial={{x:-100,opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:1,delay:.5}} id='imageContainer' className='w-full lg:w-1/2 flex justify-center items-center h-[200px] md:h-[300px]'>
                    <img alt='VytoBlitz Event Image' src='https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className='hover:brightness-50 bg-white w-full lg:w-[500px] h-full'></img>
                  </motion.div>
                  <motion.div initial={{x:100,opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:1,delay:.5}} id='textContainer' className='flex flex-col gap-5 w-full lg:w-1/2'>
                    <h1 className='font-Montserrat text-white font-bold text-2xl md:text-3xl lg:text-4xl'>
                      Test Your Knowledge: Join Our Exciting Quiz Event!
                    </h1>
                    <p className='text-base'>
                      Dive into a world of knowledge and competition at our Quiz event. Challenge yourself and your peers with intriguing questions across various topics!
                    </p>
                    <div id="statsContainer" className='font-Montserrat flex flex-col md:flex-row gap-6 md:gap-16'>
                      <div id="stats1" className='flex gap-2 flex-col max-w-[250px]'>
                        <h1 className='text-5xl font-bold' id="statsnumber">80%</h1>
                        <p>Engaging questions and thrilling prizes await!</p>
                      </div>
                      <div id="stats2" className='flex gap-2 flex-col max-w-[250px]'>
                        <h1 className='text-5xl font-bold' id="statsnumber">95%</h1>
                        <p>Participants rave about the fun and excitement!</p>
                      </div>
                    </div>
                    <div>
                      <Button text="Learn More" navigate="/event/quizathon" />
                    </div>
                  </motion.div>
                </section>
                {/* Quizathon Closed */}

                <section id='ArtistryArena' className='w-full px-6 md:px-12 lg:px-28 gap-6 md:gap-12 justify-center items-center py-4 flex flex-col lg:flex-row'>
                  <motion.div initial={{x:-100,opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:1,delay:.5}} id='textContainer' className='flex flex-col gap-5 w-full lg:w-1/2'>
                    <span className='font-bold text-base'>Create</span>
                    <h1 className='font-Montserrat text-white font-bold text-2xl md:text-3xl lg:text-4xl'>
                      Unleash Your Creativity at the Canva Competition
                    </h1>
                    <p className='text-base'>
                      Dive into a world of knowledge and competition at our Quiz event. Challenge yourself and your peers with intriguing questions across various topics!
                    </p>

                    <div>
                      <Button text="Learn More" navigate="/event/artistryarena" />
                    </div>

                  </motion.div>

                  <motion.div initial={{x:100,opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:1,delay:.5}} id='imageContainer' className='w-full lg:w-1/2 flex justify-center items-center h-[200px] md:h-[300px]'>
                    <img alt='VytoBlitz Event Image' src='https://plus.unsplash.com/premium_photo-1721225465446-02f5b991a37f?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className=' w-full lg:w-[500px] h-full'></img>
                  </motion.div>
                </section>
                {/* Artistry Arena Closed */}

                {/* Hackathon */}
                <section id='Hackathon' className='w-full px-6 md:px-12 lg:px-28 gap-6 md:gap-12 justify-center items-center py-4 flex flex-col lg:flex-row'>
                  <motion.div initial={{x:-100,opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:1,delay:.5}} id='imageContainer' className='w-full lg:w-1/2 flex justify-center items-center h-[200px] md:h-[300px]'>
                    <img alt='VytoBlitz Event Image' src='https://images.unsplash.com/photo-1524868857876-218cafbdda8b?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className='bg-white w-full lg:w-[500px] h-full'></img>
                  </motion.div>
                  <motion.div initial={{x:100,opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:1,delay:.5}} id='textContainer' className='flex flex-col gap-5 w-full lg:w-1/2'>
                    <h1 className='font-Montserrat text-white font-bold text-2xl md:text-3xl lg:text-4xl'>
                      Unleash Your Creativity at Our Thrilling Hackathon Event!
                    </h1>
                    <p className='text-base'>
                      Join us for an exhilarating Hackathon where innovation meets collaboration. Participants will tackle real-world challenges, showcasing their skills and creativity.
                    </p>
                    <div id="statsContainer" className='font-Montserrat flex flex-col md:flex-row gap-6 md:gap-16'>
                      <div id="stats1" className='flex gap-2 flex-col max-w-[250px]'>
                        <h1 className='text-5xl font-bold' id="statsnumber">744</h1>
                        <p>Registrations</p>
                      </div>
                      <div id="stats2" className='flex gap-2 flex-col max-w-[250px]'>
                        <h1 className='text-5xl font-bold' id="statsnumber">1,06,945</h1>
                        <p>Impressions</p>
                      </div>
                    </div>
                    <div>
                      <Button text="Learn More" navigate="/event/hackathon" />
                    </div>
                  </motion.div>
                </section>
                {/* Hackathon Closed */}
                { /* Cultural Carnival */}
                <section id='culturalCarnival' className='w-full px-6 md:px-12 lg:px-28 gap-6 md:gap-12 justify-center items-center py-4 flex flex-col lg:flex-row'>
                  <motion.div initial={{x:-100,opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:1,delay:.5}} id='textContainer' className='flex flex-col gap-5 w-full lg:w-1/2'>
                    <h1 className='font-Montserrat text-white font-bold text-2xl md:text-3xl lg:text-4xl'>
                      Experience the Vibrancy of Our Cultural Carnival: A Celebration of Diversity
                    </h1>
                    <p className='text-base'>
                      Join us for an unforgettable Cultural Carnival, where creativity and tradition collide in a vibrant showcase of performances, art, and food from around the world. Immerse yourself in the rich tapestry of cultures as you enjoy live music, dance, and interactive workshops that celebrate our diverse community.
                    </p>
                    <div>
                      <Button text="Learn More" navigate="/event/cultural" />
                    </div>
                  </motion.div>
                  <motion.div initial={{x:100,opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:1,delay:.5}} id='imageContainer' className='w-full lg:w-1/2 flex justify-center items-center h-[200px] md:h-[300px]'>
                    <img alt='VytoBlitz Event Image' src='https://images.unsplash.com/photo-1721840317409-c77a9b8abf1e?q=80&w=2232&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></img>
                  </motion.div>
                </section>
                {/* Cultural Carnival Closed */}
                {/* Gaming  */}
                <section id='Game' className='w-full px-6 md:px-12 lg:px-28 gap-6 md:gap-12 justify-center items-center py-4 flex flex-col lg:flex-row'>
                  <motion.div initial={{translateX:-100,opacity:0}} whileInView={{translateX:0,opacity:1}} transition={{duration:1,delay:.5}} id='imageContainer' className='w-full lg:w-1/2 flex justify-center items-center h-[200px] md:h-[300px]'>
                    <img alt='VytoBlitz Event Image' src='https://images.unsplash.com/photo-1548686304-637b8e7c663b?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className='bg-white w-full lg:w-[500px] h-full'></img>
                  </motion.div>
                  <motion.div initial={{translateX:100,opacity:0}} whileInView={{translateX:0,opacity:1}} transition={{duration:1,delay:.5}} id='textContainer' className='flex flex-col gap-5 w-full lg:w-1/2'>
                    <span className='font-bold text-base'>Gaming</span>
                    <h1 className='font-Montserrat text-white font-bold text-2xl md:text-3xl lg:text-4xl'>
                      Unleash Your Competitive Spirit at Esports Tournament!
                    </h1>
                    <p className='text-base'>
                      Join us for an electrifying Esports event where gamers compete for glory and prizes. Experience the thrill of live matches and witness top-tier talent in action.
                    </p>
                    <div id="statsContainer" className='font-Montserrat flex flex-col md:flex-row gap-6 md:gap-16'>
                      <div id="stats1" className='flex gap-2 flex-col max-w-[250px]'>
                        <h1 className='text-xl font-bold' id="statsnumber">Game on</h1>
                        <p>Compete in popular games and showcase your skills against the best players.</p>
                      </div>
                      <div id="stats2" className='flex gap-2 flex-col max-w-[250px]'>
                        <h1 className='text-xl font-bold' id="statsnumber">Participant Feedback</h1>
                        <p>“An unforgettable experience filled with excitement and fierce competition!”</p>
                      </div>
                    </div>
                    <div>
                      <button onClick={() => navigateTo("/event/esports")}
                        className={` MobileM:px-5 px-4 py-2 text-white font-normal rounded-full font-Montserrat hover:scale-[1.09] transition-all`}
                        style={{
                          background: 'linear-gradient(90deg, rgba(148,0,252,1) 0%, rgba(0,142,247,1) 100%, rgba(31,31,31,1) 100%)',
                        }}
                      >Join Now</button>
                    </div>
                  </motion.div>
                </section>
                {/* Gaming Closed  */}

              </section>




              {/* Individual Event Section Closed */}

              {/* FeedBack Section */}
              <section id='feedback'>
                <div className='flex justify-center flex-col py-7 lg:py-20 gap-2 items-center md:max-w-[450px] max-w-sm mx-auto'>
                  <h1 className='font-Orbitron text-2xl MobileL:text-3xl md:text-4xl font-bold text-center text-white underline'>Participant Feedback</h1>
                  <p className='font-Montserrat text-white text-base text-center '>An unforgettable experience filled with learning and fun!</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-10 xl:gap-x-0 gap-y-7 w-full px-10 xl:px-20 py-4 justify-items-center font-Montserrat items-stretch'>
                  <FeedBack />
                </div>
              </section>
              {/* FeedBack Section Closed */}

              {/* How to Participate in the Event */}
              <div id='howToParticipate' className='font-Montserrat text-center justify-center items-center flex flex-col gap-3 py-20'>
                <div className='flex flex-col justify-center items-center text-center w-3/4 lg:w-3/6 gap-4'>
                  <p className='text-base  text-center font-bold'>Join</p>
                  <h1 className='text-3xl md:text-4xl font-Orbitron underline text-center font-bold'>How to Participate in Our Tech Fest</h1>
                  <p className='text-base  text-center '>Participating in our tech fest is easy and exciting! Follow these simple steps to secure your spot and showcase your skills.</p>
                </div>
                <div className='flex flex-wrap justify-center items-center gap-12 px-12 py-7 '>
                  <div id="step1" className='flex flex-wrap flex-col gap-4 justify-center items-center' p-4>
                    <div className='rounded-full bg-white w-[60px] h-[60px] flex justify-center items-center text-slate-950 text-2xl font-bold'>1</div>
                    <h1 className=' text-center font-Montserrat text-2xl font-bold '>Step 1: Register Online Today</h1>
                    <p className='text-center text-sm'>Complete the registration form on our website.</p>
                  </div>
                  <div id="step1" className='flex flex-wrap flex-col gap-2 justify-center items-center p-4'>
                    <div className='rounded-full bg-white w-[60px] h-[60px] flex justify-center items-center text-slate-950 text-2xl font-bold'>2</div>
                    <h1 className=' text-center font-Montserrat text-2xl font-bold '>Step 2: Prepare Your Project Submission</h1>
                    <p className='text-center text-sm'>Ensure your project meets the event guidelines.</p>
                  </div>
                  <div id="step1" className='flex flex-wrap flex-col gap-2 justify-center items-center p-4'>
                    <div className='rounded-full bg-white w-[60px] h-[60px] flex justify-center items-center text-slate-950 text-2xl font-bold'>3</div>
                    <h1 className=' text-center font-Montserrat text-2xl font-bold '>Step 3: Attend the Event</h1>
                    <p className='text-center text-sm'>Join us for an unforgettable experience!</p>
                  </div>
                </div>
              </div>
              {/* How to Participate in the Event Closed */}

              {/* Cta Section */}
              <div className='pt-30'>
                <EventCta heading='Join Us for the Ultimate Tech Experience!' description='Get ready to explore technology and innovative ideas at our annual tech fest. Mark your calendars for an unforgettable experience on November 28-29!' primaryBtn={"Register"} secondaryBtn={"Learn More"} primaryBtnLink={"/registration"} secondaryBtnLink={"/event"} />
              </div>
              {/* Cta Section Closed */}

              {/* Faq Section */}
              <section id='questions' className='flex flex-col justify-center py-20  items-center'>
                <h1 className='text-2xl MobileL:text-3xl md:text-4xl underline text-center py-8 font-bold font-Orbitron'>Frequently Asked Questions</h1>
                <div className='w-[70%] xl:w-1/2 font-Montserrat'>
                  <AccordionCustomIcon />
                </div>
              </section>
              {/* Faq Section Closed */}
              {/* Contact CTA  */}

              <div id='contactCta' className='flex font-Montserrat flex-col gap-3 justify-center items-center'>
                <h1 className='text-3xl text-center font-Orbitron font-bold text-white'>Still Have Questions ?</h1>
                <p className='text-base text-center text-white'>Reach out to us anytime!</p>
                <button onClick={() => navigateTo("/contact")} className='px-3 hover:scale-[1.2] transition  py-2 bg-transparent border border-white'>Contact us</button>
              </div>

              {/* Contact CTA Closed */}

            </div>
          </div>
        </SkeletonTheme>
      </div>
      <Footer />
    </>
  )
}

export default Event
