import React from "react";
import {ISongInfo,Song} from "../Song/Song"
import styles from "./Playlist.module.scss";

const songList = [
    {
    imageLink:"./assets/olivia.jpg",
    title:"Brutal",
    album:"Sour",
    duration:"2:54"
    },
    {
        imageLink:"./assets/chase atlantic.jpg",
        title:"Friends",
        album:"Nostalgia",
        duration:"3:51"
    },
    {
        imageLink:"./assets/theweeknd.jpg",
        title:"The hills",
        album:"Beauty behind madness",
        duration:"4:03"
    },
    ];

 export const Playlist = () => {
  
    return (
    <div className={styles.playlist}>
        <div className={styles["table-header"]}>
                  <span className={styles["song-nr"]}>
                     #
                  </span>
                  <span className={styles["song-cover"]}>
                     Cover
                  </span>
                  <span className={styles["song-title"]}>
                     Title
                  </span>
                  <span className={styles["song-album"]}>
                     Album
                  </span>
                  <span className={styles["song-duration"]}>
                     Duration
                  </span>
              </div>
              <div id="songs-wrapper" className={styles["songs"]}>
                <Song index={1} songInfo={songList[0]} />
              </div>
    </div>
    );
};