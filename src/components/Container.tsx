import { ReactNode } from "react";
import { Padding } from "../controls";

type Props = {
  children: ReactNode;
};

function Container({ children }: Props) {
  return <Padding>{children}</Padding>;
}

export default Container;
