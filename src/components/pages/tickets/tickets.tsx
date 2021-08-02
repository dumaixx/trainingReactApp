import { useSelector } from "react-redux";
import { SystemState } from "../../../state/reducers";

export const TicketsPage = () => {
  const page = useSelector((state: SystemState) => state.app.page);

  return (
    <>{page}</>
  )
}