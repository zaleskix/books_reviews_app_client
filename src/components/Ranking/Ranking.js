import React from "react";

import styles from "./Ranking.module.css";
import Dropdown from "../../assets/icons/dropdown_primary.svg";
import RankingItem from "./RankingItem/RankingItem";
import TextButton from "../../components/UI/Buttons/TextButton/TextButton";

const ranking = (props) => {
   let rankingItems = props.items.map((item) => (
      <RankingItem identifier={item.identifier} position={item.ranking} name={item.name} image={item.image} />
   ));

   return (
      <div className={styles.Ranking}>
         <div className={styles.NavHeader}>
            <div className={styles.Active}> {props.activeTableHeader}</div>
            <div className={styles.NonActive} onClick={props.secondClicked}>
               {props.secondTableHeader}
            </div>
         </div>
         <div className={styles.TableAdditionalElements}>
            <div className={styles.TableHeader}>
               <div className={styles.TableCaption}> {props.tableCaption}</div>
               <TextButton isPrimary text={props.addButton.text} clicked={props.addButton.clicked} />
            </div>
            <div className={styles.Sort}>
               <div className={styles.SortCaption}> Sortuj według :</div>
               <div className={styles.SortDropdown}>
                  <div className={styles.SortDropdownCaption}>Najlepsze w tym tygodniu</div>
                  <div className={styles.SortDropdownIcon}>
                     <img alt="dropdown" src={Dropdown} />
                  </div>
               </div>
            </div>
         </div>
         <div className={styles.TableContent}>{rankingItems}</div>
      </div>
   );
};

export default ranking;
