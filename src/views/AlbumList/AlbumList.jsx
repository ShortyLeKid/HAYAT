import AlbumCard from '../../components/AlbumCard/AlbumCard';
import albumDatas from '../../assets/data/data'
import './albumlist.scss';


const AlbumList = () => {

    return (

            <div className='album-list'>
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
        // </div>
    );
};


export default AlbumList;