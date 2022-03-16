import { AppRoutes } from "../../../constants/app-routes";
import styles from "./main.module.css";
import { messages } from "./messages";
import { actions as appActions } from "../../../state/reducers/app";
import {ReactComponent as AboutImage } from "../../../images/about.svg";
import {ReactComponent as SpecialImage } from "../../../images/special.svg";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { SystemState } from "../../../state/reducers";

enum PageItems {
  About = AppRoutes.About,
  Special = AppRoutes.Special,
};

export const MainPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const isAboutPageAvaliable = useSelector((state: SystemState) => state.app.isAboutPageAvaliable);

  if (!isAboutPageAvaliable) {
    dispatch(appActions.setAboutPageAccess(true));
  };

  const itemImage = {
    [PageItems.Special]: <SpecialImage />,
    [PageItems.About]: <AboutImage />,
  };

  const itemLink = {
    [PageItems.Special]: AppRoutes.Special,
    [PageItems.About]: AppRoutes.About,
  };

  const renderItemInfo = (title: string, description: string, route: PageItems) => (
    <div className={styles.mainPageItem} onClick={() => history.push(itemLink[route])}>
      {itemImage[route]}
      <div className={styles.itemDescription}>
        <h1 className={styles.title}>
          {title}
        </h1>
        <p className={styles.description}>
          {description}
        </p>
      </div>
    </div>
  );

  return (
    <div className={styles.mainPageContainer}>
      {renderItemInfo(messages.tickets.title, messages.tickets.description, PageItems.Special)}
      {renderItemInfo(messages.about.title, messages.about.description, PageItems.About)}
    </div>
  );
};
