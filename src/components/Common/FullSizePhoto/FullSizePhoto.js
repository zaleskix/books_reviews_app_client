import React from "react";

import styles from "./FullSizePhoto.module.css";

const fullSizePhoto = (props) => {
   return (
      <div className={styles.FullSizePhoto}>
         <img alt={props.name} src={props.image} />
      </div>
   );
};

export default fullSizePhoto;
