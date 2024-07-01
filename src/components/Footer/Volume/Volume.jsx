import {useState} from "react";
import s from './Volume.module.css'

const Volume = (props) => {
    const [value,setValue] = useState(10);
    return (
        <div className={s.volume}>
            <img src="https://cdn.discordapp.com/attachments/1257334947216359496/1257393548534218854/icons8-sound-100.png?ex=66843e7f&is=6682ecff&hm=6f933a75542e30c5fcfa412ed366436cd65e9cb7f67ba56a7e9c0aa4d2ec397d&"/>
            <div>
                <input className={s.input} value={value} type="range" max='100' onChange={(e) => {
                    props.audio.audio.volume = e.target.value / 100;
                    setValue(e.target.value);
                }}/>
            </div>

        </div>
    );
}

export default Volume;