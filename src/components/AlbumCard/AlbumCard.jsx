import { useNavigate } from 'react-router-dom';
import './albumcard.scss';

const AlbumCard = ({
    title,
    artist,
    cover,
    coverColor,
    slug,
    isEnabled
}) => {

    const handleHover = () => {
        document.body.style.backgroundColor = coverColor;
    };

    const handleHoverOut = () => {
        document.body.style.backgroundColor = '#f0f0f0';
    };

    const navigate = useNavigate();

    return (
        <div className='album-player-container'>
            <div
                onClick={isEnabled ? () => navigate(`/player/${slug}`) : null}
                onMouseEnter={handleHover}
                onMouseLeave={handleHoverOut}
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
        </div>
    );
};

export default AlbumCard;