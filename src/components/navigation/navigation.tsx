import { IItemNavigation, items } from "./constants/items";
import styles from "./navigation.module.css";
import { Button } from 'antd';
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { SystemState } from "../../state/reducers";
import { PageNames } from "../../constants/page-names";

export const Navigation = () => {
  const history = useHistory();
  const isAboutPageAvaliable = useSelector((state: SystemState) => state.app.isAboutPageAvaliable);

  const handleClick = (route: string) => {
    history.push(route);
  };

  return (
    <div className={styles.navigationContainer}>
      {items.map((navigationItem: IItemNavigation) => 
        <Button
          type="primary"
          className={styles.buttonContainer}
          onClick={() => handleClick(navigationItem.route)}
          disabled={navigationItem.name === PageNames.About && !isAboutPageAvaliable}
        >
            {navigationItem.name}
        </Button>
      )}
    </div>
  );
};