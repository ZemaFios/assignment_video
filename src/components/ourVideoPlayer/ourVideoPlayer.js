'use client';
import { useRef, useState } from 'react';
import styles from './ourVideoPlayer.module.css';
const OurVideoPlayer = ({ path }) => {
  const [isMuted, setIsMuted] = useState(true);

  const videoRef = useRef(null);

  const playVideo = () => {
    videoRef.current.play();
  };

  const pauseVideo = () => {
    videoRef.current.pause();
  };

  const changeVolume = (e) => {
    videoRef.current.volume = e.target.value;
  };

  const toggleMute = () => {
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const fullScreenVideo = () => {
    videoRef.current.requestFullscreen();
  };

  return (
    <div className={styles.container}>
      <div className={styles.ourVideo}>
        <video src={path} ref={videoRef} controls muted></video>
      </div>

      <div className={styles.ourControls}>
        <div className={styles.ourCtrlBtn} onClick={playVideo}>
          Play
        </div>
        <div className={styles.ourCtrlBtn} onClick={pauseVideo}>
          Pause
        </div>
        <div className={styles.ourCtrlBtn} onClick={toggleMute}>
          {isMuted ? 'Unmute' : 'Mute'}
        </div>
        <div className={styles.ourCtrlBtn} onClick={fullScreenVideo}>
          Fullscreen
        </div>

        <input type="range" min="0" max="1" step="0.01" onChange={changeVolume} />
      </div>
    </div>
  );
};
export default OurVideoPlayer;
