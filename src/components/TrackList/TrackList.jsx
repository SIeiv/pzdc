import Track from "./Track/Track";
import DB from "../../DBEmitter";
import s from './TrackList.module.css'

const TrackList = (props) => {

    var a = [];

    if (props.all) {
        DB.forEach((element) => {
            a.push(
                <Track url={element.url}
                       image={element.image}
                       author={element.author}
                       name={element.name}
                       audio={props.audio}
                />
            )
        });
    }

    DB.forEach((element) => {
        if (element.author === props.author) {
            a.push(
                <Track url={element.url}
                       image={element.image}
                       author={element.author}
                       name={element.name}
                       audio={props.audio}
                />
            )
        }
    });

    return (
        <div className={s.tracklistWrapper}>
            <div className={s.tracklist}>
                <ul>{a}</ul>
            </div>
        </div>
    );
}

export default TrackList;