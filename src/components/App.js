import React from 'react';
import SearchBar from './SearchBar';
import axios from 'axios';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

const KEY = 'AIzaSyBoT5UW-5-7EBwi0EyyFYS6EL5eMOfn6WM';

class App extends React.Component{

    state = {videos : [] , selectedVideo : null};
    onTermSubmit= async (term)=>{
        const response = await axios.get("https://www.googleapis.com/youtube/v3/search" ,{
            params:{
                part : 'snippet',
                maxResults:5,
                key:KEY,
                q:term
            }
        })
        this.setState({videos: response.data.items, selectedVideo: response.data.items[0]})
        
    }
    onVideoSelect = (video)=>{
        this.setState({selectedVideo:video})
    }

    componentDidMount(){
        this.onTermSubmit('nature');
    }

    render(){


        return (
        <div className='ui container'>
            <SearchBar TryApi={this.onTermSubmit}/>  
            <div className = "ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail video = {this.state.selectedVideo}/> 
                    </div>
                    <div className='five wide column'>
                        <VideoList onVideoSelect={this.onVideoSelect} videos = {this.state.videos}/>
        </div>
        </div>
        </div>
        </div>
        );
    }
}
export default App;