import s from './Track.module.css'
import {useState} from "react";

const Track = (props) => {
    let audio = props.audio.audio;
    let state = 1;


    return (
        <button  className={s.track} onClick={() => {


            if (audio.src !== props.url) {
                audio.src = props.url;
                audio.play();

                props.audio.trackAuthor = props.author;
                props.audio.trackName = props.name;
                props.audio.trackTitle = props.image;

                state = 1;
            } else if (state === 1) {
                audio.pause();
                state = 2;
            } else if (state === 2) {
                audio.play();
                state = 1;
            }

        }}>
            <img src={props.image}/>
            <div className={s.textbox}>
                <div className={s.text}>{props.author}</div>
                <div className={s.text}>{props.name}</div>
            </div>
        </button>
    );
}

export default Track;