import s from './Footer.module.css'
import Volume from "./Volume/Volume";
import ProgressBar from "./ProgressBar/ProgressBar";
import TrackInfo from "./TrackInfo/TrackInfo";

const Footer = (props) => {
    return (
        <div className={s.footer}>
            <TrackInfo audio={props.audio}/>
            <ProgressBar audio={props.audio}/>
            <Volume audio={props.audio} />
        </div>
    );
}

export default Footer;