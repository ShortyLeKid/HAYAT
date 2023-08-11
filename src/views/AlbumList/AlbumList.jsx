import AlbumCard from '../../components/AlbumCard/AlbumCard';
import albumDatas from '../../assets/data/data'
import './albumlist.scss';


const AlbumList = () => {

    return (
        <div className="album-list">
            {albumDatas.map(({ artist, title, cover, coverColor, link, spotifyEmbeedLink, slug }) => (
                <AlbumCard
                    artist={artist}
                    title={title}
                    cover={cover}
                    coverColor={coverColor}
                    link={link}
                    // spotifyEmbeedLink={spotifyEmbeedLink}
                    key={title}
                    slug={slug}
                />
            ))}
        </div>
    );
};


export default AlbumList;