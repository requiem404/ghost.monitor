'use client';

import { getClasses } from "./styles/get-classes"
import { GhostCard } from "@/entities/ghost"
import { useCaptureGhost } from "@/features/ghost/capture";
import { useGhosts } from "@/entities/ghost/api";
import { useGhostEvents } from "@/features/ghost/realtime-updates";

export const MainPage = () => {
  const { cnRoot, cnInfo, cnTitle, cnContainer } = getClasses()

  const { mutate } = useCaptureGhost();
  const { data: ghosts, isLoading } = useGhosts();

  useGhostEvents();

  const handleCapture = (captureId: string) => {
    mutate(captureId);
  }


  return (
    <div className={cnRoot}>
      <div className={cnContainer}>
        <h2 className={cnTitle}>Ghost monitor</h2>
        {isLoading && <p className={cnInfo}>Loading...</p>}

        {!ghosts || ghosts.length <= 0 && !isLoading && <p className={cnInfo}>No spirits detected</p>}

        {ghosts && ghosts.length > 0 && ghosts.map(ghost => <GhostCard key={ghost.name} onCapture={() => handleCapture(ghost.id)} {...ghost} />)}
      </div>
    </div>
  )
}
