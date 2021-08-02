import { items } from "./constants/items"
import styles from "./navigation.module.css"
import { Button } from 'antd';
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { actions as appActions } from "../../state/reducers/app";

interface IItemNavigation {
  id: number;
  name: string;
  route: string;
}

export const Navigation = () => {
  const history = useHistory();
  const dispatch = useDispatch();  


  const handleClick = (route: string) => {
    dispatch(appActions.setPage(route));

    history.push(route);
  }

  return (
    <div className={styles.navigationContainer}>
      {items.map((navigationItem: IItemNavigation) => 
        <Button type="primary" className={styles.buttonContainer} onClick={() => handleClick(navigationItem.route)}>{navigationItem.name}</Button>)
      }
    </div>
  )
}