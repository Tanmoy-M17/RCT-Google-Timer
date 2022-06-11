import React, { useState,useEffect } from 'react'
import styles from './Stopwatch.module.css';
export const Stopwatch = () => {
    const[time,settime]=useState(0)
    const[timeon,setTimeOn]=useState(false)
    
    
    useEffect(() => {
    let interval=null;
    
    if(timeon){
    interval=setInterval(()=>{
        settime(time=>time+10)
    },10)
    }else{
        clearInterval(interval)
    }
      return()=>clearInterval(interval)
    }, [timeon]);
    
    
      return (
        <div className={styles.stopwatch_container}>
             <div className={styles.heading}>
                      <h4>STOPWATCH</h4>
                  </div>
       <div className={styles.timer_box}>
       <h1>{("0"+Math.floor((time/60000)%60)).slice(-2)}m:{("0"+Math.floor((time/1000)%60)).slice(-2)}s:{(("0"+(time/10)%100)).slice(-2)}ms</h1>
          
       </div>
       <div className='stopwatchbtn'>
           <button  className={styles.btn} onClick={()=>setTimeOn(true)}>START</button>
           <button  className={styles.btn} onClick={()=>setTimeOn(false)}>PAUSH</button>
           <button  className={styles.reset} onClick={()=>{settime(0);setTimeOn(false)}}>RESET</button>
       </div>
        </div>
  )
}

