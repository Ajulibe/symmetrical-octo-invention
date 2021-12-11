import { useRef, useState, useEffect } from "react";

export const AudioPlayer = () => {
  const [trackIndex, setTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const tracks = ["", "/audio/Ayra-babby.mp3", "/audio/Peruzzi.mp3", "/audio/Phyno.mp3"];
  const audioSrc = tracks[trackIndex];

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  }, [isPlaying]);

  // Handle setup when changing tracks
  useEffect(() => {
    if (trackIndex === 0) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    } else {
      audioRef.current = new Audio(audioSrc);
      setIsPlaying(true);
    }
  }, [trackIndex, audioSrc]);

  const playTrack = () => {
    if (trackIndex < tracks.length - 1) {
      setTrackIndex((prev) => prev + 1);
    } else {
      setTrackIndex(1);
    }
  };

  const stopTrack = () => {
    setIsPlaying(false);
  };

  const audioRef = useRef(new Audio(audioSrc));

  return { playTrack, stopTrack, isPlaying };
};
