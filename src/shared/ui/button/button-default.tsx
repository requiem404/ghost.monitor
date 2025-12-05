import { WithChildren, WithClassName } from "@/shared/types"
import { FC } from "react"
import { getClasses } from "./styles/get-classes";

export type ButtonDefaultProps = {} & WithChildren & WithClassName;

export const ButtonDefault: FC<ButtonDefaultProps> = ({ children, className }) => {
  const { cnRoot } = getClasses({ className });

  return (
    <button className={cnRoot}>{children}</button>
  )
}