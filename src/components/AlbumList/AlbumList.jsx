import AlbumCard from '../AlbumCard/AlbumCard';

import HYT001cover from '../../assets/HYT001_COVER.jpg';
import HYT002cover from '../../assets/HYT002_COVER.jpg';
import HYT003cover from '../../assets/HYT003_COVER.jpg';
import albumDatas from '../../assets/data/data'

import './albumlist.scss';


const AlbumList = () => {

    return (
        <div className="album-list">
            {albumDatas.map(({ artist, title, cover, coverColor, link, spotifyEmbeedLink }) => (
                <AlbumCard
                    artist={artist}
                    title={title}
                    cover={cover}
                    coverColor={coverColor}
                    link={link}
                    spotifyEmbeedLink={spotifyEmbeedLink}
                    key={title}
                />
            ))}
        </div>
    );
};


export default AlbumList;