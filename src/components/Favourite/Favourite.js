import * as React from "react";
import { useState } from "react";
import { withRouter } from 'react-router-dom';

import styles from "./Favourite.module.css";

import Dropdown from "../../assets/icons/dropdown_primary.svg";
import Score from "../Common/Score/Score";
import ExpandedDiv from "../UI/AnimatedComponents/ExpandedDiv/ExpandedDiv";

const Favourite = (props) => {
   const [isMenuExpanded, setExpandMenu] = useState(false);

   const expandMenu = () => {
      setExpandMenu(!isMenuExpanded);
   };

   return (
      <div className={styles.Favourite}>
         <div className={styles.MainInfo} onClick={expandMenu}>
            <div className={styles.Image}>
               <img alt={props.caption} src={`data:image/png;base64,${props.image}`}/>
               <div className={styles.ImageFade} />
            </div>
            <div className={styles.Captions}>
               <div className={styles.Caption}>{props.caption}</div>
               {props.subcaption ? <div className={styles.Subcaption}>{props.subcaption}</div> : null}
            </div>
            <div className={styles.ExpandButton}>
               <img alt={"Dropdown"} src={Dropdown} />
            </div>
         </div>

         <ExpandedDiv isExpanded={isMenuExpanded}>
            <div className={styles.ExpandMenu}>
               <div className={styles.Score}>
                  <Score rating={props.rating} numberOfRatings={props.numberOfRatings} />
               </div>
               <div className={styles.ShowDetails} onClick={() => props.showDetails(props.identifier)}>
                  Zobacz książkę
               </div>
               <div className={styles.Delete} onClick={() => props.revmoeFromFavourites(props.identifier)}>
                  Usuń z ulubionych
               </div>
            </div>
         </ExpandedDiv>
      </div>
   );
};

export default withRouter(Favourite);
