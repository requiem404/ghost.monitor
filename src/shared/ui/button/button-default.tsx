import { WithClassName } from "@/shared/types"
import { ButtonHTMLAttributes, FC } from "react"
import { getClasses } from "./styles/get-classes";

export type ButtonDefaultProps = {
  text: string
} & WithClassName & ButtonHTMLAttributes<HTMLButtonElement>;

export const ButtonDefault: FC<ButtonDefaultProps> = ({ text, className, ...props }) => {
  const { cnRoot } = getClasses({ className });

  return (
    <button className={cnRoot} {...props}>
      {text}
    </button>
  )
}