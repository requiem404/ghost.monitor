import { WithChildren, WithClassName } from "@/shared/types"
import { FC } from "react"
import { getClasses } from "./styles/get-classes";

export type ButtonDefaultProps = {
  text: string
} & WithClassName;

export const ButtonDefault: FC<ButtonDefaultProps> = ({ text, className }) => {
  const { cnRoot } = getClasses({ className });

  return (
    <button className={cnRoot}>
      {text}
    </button>
  )
}