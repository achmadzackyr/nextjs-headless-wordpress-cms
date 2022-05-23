import ReactPlayer from 'react-player/youtube';

export default function YoutubePlayer({ url }) {
  return (
    <div className="player-wrapper">
      <ReactPlayer
        controls={true}
        width="100%"
        style={{ position: 'absolute', top: 0, left: 0 }}
        height="100%"
        url={url}
      />
    </div>
  );
}
