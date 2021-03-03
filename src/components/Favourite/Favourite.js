import * as React from "react";
import {useState} from "react";

import styles from "./Favourite.module.css";

import Dropdown from "../../assets/icons/dropdown_primary.svg";
import Score from "../Common/Score/Score";
import ExpandedDiv from "../UI/AnimatedComponents/ExpandedDiv/ExpandedDiv";

const Favourite = (props) => {
    const [isMenuExpanded, setExpandMenu] = useState(false);

    const expandMenu = () => {
        setExpandMenu(!isMenuExpanded);
    };

    const showBookDetails = () => {
        console.log("Show book details");
    };

    const deleteFromFavourites = () => {
        console.log("Delete from favourites");
    };

    const shareBook = () => {
        console.log("Share book");
    };

    return (
        <div className={styles.Favourite}>
            <div className={styles.MainInfo} onClick={expandMenu}>
                <div className={styles.Image}>
                    <img alt={props.caption} src={props.image}/>
                    <div className={styles.ImageFade}/>
                </div>
                <div className={styles.Captions}>
                    <div className={styles.Caption}>{props.caption}</div>
                    {props.subcaption ? (
                        <div className={styles.Subcaption}>{props.subcaption}</div>
                    ) : null}
                </div>
                <div className={styles.ExpandButton}>
                    <img alt={"Dropdown"} src={Dropdown}/>
                </div>
            </div>

            <ExpandedDiv isExpanded={isMenuExpanded}>
                <div className={styles.ExpandMenu}>
                    <div className={styles.Score}>
                        <Score
                            rating={props.rating}
                            numberOfRatings={props.numberOfRatings}
                        />
                    </div>
                    <div className={styles.ShowDetails} onClick={showBookDetails}>
                        Zobacz książkę
                    </div>
                    <div className={styles.Delete} onClick={deleteFromFavourites}>Usuń z ulubionych</div>
                    <div className={styles.Share} onClick={shareBook}>Udostępnij</div>
                </div>
            </ExpandedDiv>
        </div>
    );
};

export default Favourite;
