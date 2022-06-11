import React, { useEffect, useRef, useState } from 'react'
import styles from './Timer.module.css';


const Timer = () => {
    const [displaytime,setDisplaytime]=useState("00:00:00");
    const [controller,setController]=useState(true);
    const [time,setTime]=useState(0);
const getTimeRemaining = (e) => {
    const total = e;
    const seconds = Math.floor((total%60));
    const minutes = Math.floor((total/ 60)%60);
    const hours = Math.floor((total / 60 / 60) );
    setDisplaytime(hours+"h: "+minutes+"m: "+seconds+"s")
    return { total, seconds, minutes, hours };
  };
    
    const timerref=useRef(null);

    const startIntervel=()=>{
         
        timerref.current=setInterval(()=>{
              setTime((time)=>time-1)    
        },1000)
    }
    const start =()=>{
        startIntervel();
        setController(!controller);
    }
    const stop=()=>{
        clearInterval(timerref.current);
        setController(!controller);
    }  
   const reset =()=>{
    clearInterval(timerref.current);
    setTime(0);
    setController(true);
   }

   useEffect(()=>{
       
   if(time<=0){
        clearInterval(timerref.current);
       setTime(undefined);
       
      setController(true);
    }
    getTimeRemaining(time)
   },[time])
   const handlechange=(e)=>{
    const tmp=Number(e.target.value)
    setTime(tmp);
    getTimeRemaining(tmp);
   }

  return (
    <div className={styles.timer_container}>
        <h4 className={styles.heading}>TIMER</h4>
         <h1 className={styles.timer_box} > {displaytime === "NaNh: NaNm: NaNs" ? "00h :00m :00s":displaytime} </h1>
        <input className={styles.input_box} type="number" placeholder="Enter time in Second" onChange={handlechange} />

    <br />
    <br />
        <button className={styles.btn} disabled={time ===0 ? true:false} onClick={controller ? start :stop}>{controller ? "start" :"pause"}</button> 
        <button className={styles.reset} disabled={time ===0 ? true:false} onClick={reset}>reset</button>
    </div>

  )
}

export default Timer