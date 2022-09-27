import { FC } from "react";

/* eslint-disable jsx-a11y/iframe-has-title */
const YoutubeVideo: FC<{ youtubeId: string }> = ({ youtubeId }) => {
    return (
        <div className="video-responsive">
            <iframe
                src={`https://www.youtube.com/embed/${youtubeId}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
            />
        </div>
    );
};

export default YoutubeVideo