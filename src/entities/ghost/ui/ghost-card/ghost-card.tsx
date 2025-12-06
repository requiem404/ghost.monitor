import { FC } from "react"
import { ButtonDefault } from "@/shared/ui/button"
import { WithClassName } from "@/shared/types"

import { Ghost } from "../../api"
import { getClasses } from "./styles/get-classes"

export type GhostCardProps = Ghost & WithClassName

export const GhostCard: FC<GhostCardProps> = ({ name, location, status, dangerLevel, className }) => {
  const { cnRoot, cnTitle, cnStatus, cnLocation, cnTitleWrapper, cnDangerStatus } = getClasses({ className, dangerLevel });

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
      <ButtonDefault text="Capture" />
    </div>
  )
}
