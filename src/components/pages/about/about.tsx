import { useSelector } from "react-redux";
import { SystemState } from "../../../state/reducers";

export const AboutPage = () => {
  const page = useSelector((state: SystemState) => state.app.page);

  return (
  <>{page}</>
  )
}