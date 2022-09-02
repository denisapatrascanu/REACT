import React from "react";
import { ISongInfo, Song } from "../Song/Song"
import styles from "./Playlist.module.scss";
 import {IPrimary, IProps} from "../../slices/Song";
import { SliceLike, SliceZone, SliceZoneLike } from "@prismicio/react";
import {components} from "../../slices";
const songList = [
   {
      imageLink: "./assets/olivia.jpg",
      title: "Brutal",
      album: "Sour",
      duration: "2:54"
   },
   {
      imageLink: "./assets/chase atlantic.jpg",
      title: "Friends",
      album: "Nostalgia",
      duration: "3:51"
   },
   {
      imageLink: "./assets/theweeknd.jpg",
      title: "The hills",
      album: "Beauty behind madness",
      duration: "4:03"
   },
];
interface IPlaylist {
   slices: SliceZoneLike<SliceLike<string>>;
   setSong: (data: IPrimary) => void;
}
export const Playlist = (props : IPlaylist) => {

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
            {/* <Song index={1} songInfo={songList[0]} />
            {songList.map(function (details, index){return <Song index={index+1} songInfo={details} />})} */}
            <SliceZone slices={props.slices} components={components} />
         </div>
      </div>
   );
};