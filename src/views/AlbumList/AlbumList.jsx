import AlbumCard from '../../components/AlbumCard/AlbumCard';
import albumDatas from '../../assets/data/data'
import './albumlist.scss';


const AlbumList = () => {

    return (
        <div className="album-list">
            <p>
                The HAYAT project is a platform of expression that Armless Kid established as a tribute to his mother. His goal is to release music he personally enjoys, and promote artists he genuinely appreciates.
            </p>
            <p>
                Each release must carry a deep emotional vibe, allowing him to connect intimately with the music. He prefers an unfussy approach, letting the raw state of the music speak for itself.
                HAYAT is not about being trendy nor following sophisticated vibes. It's about exploring originality and supporting artists who dare to take a little step aside from the norm.
            </p>
            <p>
                It's all about keeping it simple and true to his taste.
            </p>
            <div>
                {albumDatas.map(({
                    artist,
                    title,
                    cover,
                    coverColor,
                    link,
                    slug,
                    id,
                    isEnabled
                }) => (
                    <AlbumCard
                        artist={artist}
                        title={title}
                        cover={cover}
                        coverColor={coverColor}
                        link={link}
                        key={id}
                        slug={slug}
                        isEnabled={isEnabled}
                    />
                ))}
            </div>
        </div>
    );
};


export default AlbumList;