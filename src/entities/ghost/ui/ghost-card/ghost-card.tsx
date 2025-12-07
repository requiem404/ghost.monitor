import { FC } from "react"
import { ButtonDefault } from "@/shared/ui/button"
import { WithClassName } from "@/shared/types"

import { Ghost } from "../../api"
import { getClasses } from "./styles/get-classes"

export type GhostCardProps = {
  onCapture: () => void;
} & Ghost & WithClassName



export const GhostCard: FC<GhostCardProps> = ({ name, location, status, dangerLevel, className, onCapture }) => {
  const { cnRoot, cnTitle, cnStatus, cnLocation, cnTitleWrapper, cnDangerStatus } = getClasses({ className, dangerLevel });

  const isCaptured = status === "captured";

  return (
    <div className={cnRoot}>
      <div>
        <div className={cnTitleWrapper}>
          <h3 className={cnTitle}>{name}</h3>
          <span className={cnDangerStatus} />
        </div>
        <span className={cnStatus}>{status}</span>
      </div>
      <span className={cnLocation}>{location}</span>
      <ButtonDefault text={isCaptured ? "Captured" : "Capture"} disabled={isCaptured} onClick={onCapture} />
    </div>
  )
}
