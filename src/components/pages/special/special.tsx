import { useDispatch } from "react-redux";
import { actions as appActions } from "../../../state/reducers/app";
import { Statistic } from "antd";
import { messages } from "./messages";
import { useState } from "react";

const DEFAULT_SECONDS = 10;

const { Countdown } = Statistic;

export const SpecialPage = () => {
  const dispatch = useDispatch();
  const deadline = Date.now() + 1000 * DEFAULT_SECONDS;

  const [ isTimeOver, setIsTimeOver ] = useState<boolean>(false);

  const onFinish = () => {
    dispatch(appActions.setAboutPageAccess(false));
    setIsTimeOver(true);
  };

  return (
    <div>
      {messages.description(DEFAULT_SECONDS)}
      <Countdown title="Countdown" value={isTimeOver ? 0 : deadline} onFinish={onFinish} />
      {isTimeOver && messages.additionalInfo}
    </div>
  )
}