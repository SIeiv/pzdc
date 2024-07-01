
import s from './TrackInfo.module.css'
import {useState} from "react";


const TrackInfo = (props) => {
    let [trackAuthor, setTrackAuthor] = useState(props.audio.trackAuthor);
    let [trackName, setTrackName] = useState(props.audio.trackName);
    let [trackTitle, setTrackTitle] = useState(props.audio.trackTitle);
    const [switcher, setswitcher] = useState(true);



    function timer()
    {
        setTrackAuthor(props.audio.trackAuthor);
        setTrackName(props.audio.trackName);
        setTrackTitle(props.audio.trackTitle);

    }

    if (switcher) {
        let time = setInterval(timer, 100);
        setswitcher(false);
    }

    return (
        <div className={s.trackInfo}>
            <img src={trackTitle}/>
            <div className={s.textbox}>
                <div className={s.text}>{trackAuthor}</div>
                <div className={s.text}>{trackName}</div>
            </div>
        </div>
    );
}

export default TrackInfo;