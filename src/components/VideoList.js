import React from 'react';
import VideoItems from './VideoItems';


const VideoList=(props)=>{

    const renderedList = props.videos.map(video=>{return <VideoItems key={video.id.videoId} onVideoSelect = {props.onVideoSelect} video={video}/>});
    return(
        <div className="ui relaxed divided list">
            {renderedList}
        </div>
    );

}
export default VideoList;