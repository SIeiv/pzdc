import {useState} from "react";
import s from './ProgressBar.module.css'

const ProgressBar = (props) => {
    const [duration, setDuradion] = useState(0);
    const [curtime, setcurtime] = useState(0);
    const [tempVolume, setTempVolume] = useState(0);
    const [switcher, setswitcher] = useState(true);


    function timer()
    {
        setDuradion(props.audio.audio.duration);
        setcurtime(props.audio.audio.currentTime);

    }

    if (switcher) {
        let time = setInterval(timer, 16);
        setswitcher(false);
    }


    let curSec = 0;
    let curMin =  Math.floor(curtime / 60);

    if (Math.floor(curtime % 60) >= 10) {
        curSec = Math.floor(curtime % 60);
    } else {
        curSec = "0" + Math.floor(curtime % 60);
    }

    let durSec;
    let durMin =  Math.floor(duration / 60);

    if (Math.floor(duration % 60) >= 10) {
        durSec = Math.floor(duration % 60);
    } else if (Math.floor(duration % 60) < 10) {
        durSec = "0" + Math.floor(duration % 60);
    }

    if (durSec === undefined) { durSec = "00"}
    if (isNaN(durMin)) { durMin = "0"}

    return (
        <div className={s.progressbar}>
            <span>{curMin + ":" + curSec}</span>
            <input className={s.input} type="range" value={curtime} max={duration} onChange={ (e) =>{
                props.audio.audio.currentTime = e.target.value;
            }} onMouseDown={(e) => {
                setTempVolume(props.audio.audio.volume);
                props.audio.audio.volume = 0}}
            onMouseUp={() => props.audio.audio.volume = tempVolume}/>
            <span>{durMin + ":" + durSec}</span>
        </div>
    );
}

export default ProgressBar;