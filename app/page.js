'use client'

import Image from "next/image";
import Header from "./components/header/Header";
import styles from './styles.module.css'
import heroImage from '@/assets/mockhub.jpg'
import Footer from "./components/footer/Footer";
import Stats from "./components/stats/Stats";
import { useRouter } from "next/navigation";
import Globe from "@/components/ui/globe";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { enqueueSnackbar } from "notistack";
import Marquee from "@/components/ui/marquee";
import axios from "axios";
import CarouselCard from "./components/carouselCard/CarouselCard";
// import Globe from "@/components/magicui/globe";

export default function Home() 
{
    const divRef = useRef();
    // const [ feedbacks, setFeedbacks ] = useState(null)

    // const getFeedbacks = async ()=>
    // {
    //     try
    //     {
    //         const url = '/api/feedback';
    //         const response = await axios.get(url);
    //         setFeedbacks(response.data);
    //     }
    //     catch(error)
    //     {
    //         toast.error(error.message)
    //     }
    // }

    useEffect(()=>
    {
        // getFeedbacks();

        const width = divRef.current.offsetWidth;
        if(width < 480)
            enqueueSnackbar('You seem to be using mobile screen. Use large screen for better experience')
    },[])


    return (
        <div className={styles.wrapper}>
            <Header/>
            <div ref={divRef}>
                <div className={styles.globeWrapper}>
                    <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">MockHub</span>
                    <Globe className={styles.globe}/>
                    <div className="pointer-events-none inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
                </div>
                <div className={styles.content}>
                    <Stats/>
                </div>   
            </div>
          
           {/* <div className={styles.feedbacks}>
                <Marquee pauseOnHover vertical className="[--duration:20s]">
                    {feedbacks.map((feedback)=>
                    (
                        <CarouselCard feedback={feedback} key={feedback._id}/>
                    ))}
                </Marquee>
            </div> */}

            <Footer/>
        </div>
  );
}