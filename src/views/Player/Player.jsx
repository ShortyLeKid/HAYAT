import { NavLink, useParams } from "react-router-dom";
import albumDatas from "../../assets/data/data";
import './player.scss';

const Player = () => {

    const { slug } = useParams();
    const found = albumDatas.find((element) => element.slug === slug);

    return (
        <div className="player-container">
            <iframe
                className='spotify-player'
                src={found.spotifyEmbeedLink}
                frameBorder="0"
                allowFullScreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
            />
            <NavLink to={"/"}>Go back</NavLink>
        </div>
    );
};

export default Player;