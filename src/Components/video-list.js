import React from 'react';
import VideoListItem from './video-list-item.js';

export default class VideoList extends React.Component {
    constructor(props) {
        super(props);
    }

    get videosList() {
        return this.props.videos.map(
            (video) => {return <VideoListItem onVideoClick={this.props.onVideoSelect} key={video.etag} video={video} />;}
        );
    }


    render() {
        return (
            <ul className="col-md-4 list-group">{this.videosList}</ul>
        );
    }

}
