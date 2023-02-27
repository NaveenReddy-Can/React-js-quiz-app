import React, { useState, useEffect } from "react";
import Feeding from "./Videos/Feeding Canada.mp4";
import Feedin from "./Videos/Food Safety.mp4";
import Feedi from "./Videos/Food Safety1.mp4";

const VideoTracker = () => {
    const [currentVideo, setCurrentVideo] = useState(0);
    const [videoProgress, setVideoProgress] = useState(0);
    const videos = [
        { id: 1, title: "Feeding" },
        { id: 2, title: "Feedin" },
        { id: 3, title: "Feedi" },

    ];

    useEffect(() => {
        const savedVideoProgress = localStorage.getItem("videoProgress");
        if (savedVideoProgress) {
            const progress = JSON.parse(savedVideoProgress);
            setCurrentVideo(progress.currentVideo);
            setVideoProgress(progress.videoProgress);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem(
            "videoProgress",
            JSON.stringify({ currentVideo, videoProgress })
        );
    }, [currentVideo, videoProgress]);

    const handleVideoChange = (index) => {
        setCurrentVideo(index);
        setVideoProgress(0);
    };

    const handleVideoProgress = (progress) => {
        setVideoProgress(progress);
    };

    return (
        <div>
            <h1>Video Tracker</h1>
            <ul>
                {videos.map((video, index) => (
                    <li key={video.id}>
                        <button onClick={() => handleVideoChange(index)}>
                            {video.title}
                        </button>
                        {currentVideo === index && (
                            <div>
                                Video Progress: {videoProgress}%
                                <br />
                                <button onClick={() => handleVideoProgress(50)}>
                                    Set Progress to 50%
                                </button>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default VideoTracker;
