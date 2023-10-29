import React, { useState } from 'react';
import styles from './stylesplatform.module.css';
import { useNavigate } from 'react-router-dom';  // importing useNavigate hook

const API_KEY = 'AIzaSyCMUX2S8JzZo1YWTG3v9kRpMj7_CLjH2Ns';

function VideoPlatform() {
    const [searchTerm, setSearchTerm] = useState('');
    const [videos, setVideos] = useState([]);
    const navigate = useNavigate();  // using the hook to get the navigate function

    const handleLogout = () => {
        localStorage.removeItem('authToken');
        navigate('/login');
    };

    const searchVideos = () => {
        const url = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&q=${searchTerm}&part=snippet&type=video`;

        fetch(url)
            .then(response => response.json())
            .then(data => setVideos(data.items))
            .catch(error => console.error('Error', error));
    };

    return (
        <div>
            <header>
                <h1>Youtube API</h1>
                <button onClick={handleLogout} clasName={styles.logout}>Logout</button>
            </header>
            <input 
                type="text" 
                placeholder="Search for videos" 
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
            />
            <button onClick={searchVideos}>
                Click to search
            </button>
            <div>
                {videos.map(video => (
                    <div key={video.id.videoId} className="video-container">
                        <img src={video.snippet.thumbnails.high.url} alt={video.snippet.title} />
                        <h2>{video.snippet.title}</h2>
                        <p>{video.snippet.description}</p>
                        <a href={`https://www.youtube.com/watch?v=${video.id.videoId}`} target="_blank" rel="noopener noreferrer">Watch Video</a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default VideoPlatform;