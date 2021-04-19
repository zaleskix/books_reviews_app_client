import React from "react";

import styles from "./FullSizePhoto.module.css";

const fullSizePhoto = (props) => {
   return (
      <div className={styles.FullSizePhoto}>
         <img alt={props.name} src={`data:image/jpg;base64,${props.image}`} />
      </div>
   );
};

export default fullSizePhoto;
