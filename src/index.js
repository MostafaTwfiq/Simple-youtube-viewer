import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import VideoList from './Components/video-list.js';
import SearchBar from './Components/search-bar.js';
import VideoDetail from './Components/video-detail.js';

const API_KEY = 'AIzaSyDo0x3-ouQ_J_90VSGn6lo6aIrwQ__aPKQ';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.videoSelectHandler = this.videoSelectHandler.bind(this);
        this.searchForVideos = this.searchForVideos.bind(this);
        this.videoSearchHandler = this.videoSearchHandler.bind(this);
    }


    searchForVideos(term) {
        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }

    componentDidMount() {
        this.searchForVideos("youtube");
    }

    videoSearchHandler(term) {
        this.searchForVideos(term);
    }

    videoSelectHandler(selectedVideo) {
        this.setState({selectedVideo: selectedVideo});
    }

    render() {
        return (
            <div>
                <SearchBar onVideoSearch={this.videoSearchHandler}/>
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList onVideoSelect={this.videoSelectHandler} videos={this.state.videos} />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));