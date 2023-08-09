import './albumcard.scss';
import { useState } from 'react';

const AlbumCard = ({ title, artist, cover, coverColor, link, spotifyEmbeedLink }) => {

    const handleHover = () => {
        document.body.style.backgroundColor = coverColor;
    };

    const handleHoverOut = () => {
        document.body.style.backgroundColor = '#f0f0f0';
    };

    const [isActive, setIsActive] = useState(false);

    return (
        <div className='album-player-container'>
            <div
                onMouseEnter={handleHover}
                onMouseLeave={handleHoverOut}
                onClick={() => window.open(link)}
                className="album-card"
            >
                <div className='album-card__header'>
                    <div className='album-card__artist'>
                        {artist}
                    </div>
                    <div className='album-card__title'>
                        {title}
                    </div>
                </div>
                <img
                    className='album-card__cover'
                    src={cover}
                />
            </div>
            {/* TODO: Le player se reveal au hover sur la card */}
            <div className='spotify-player'>
                <iframe style={{ borderRadius: '12px' }} src={spotifyEmbeedLink} width="100%" height="352" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
        </div>
    );
};

export default AlbumCard;