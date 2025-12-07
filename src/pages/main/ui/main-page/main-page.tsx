'use client';

import { useQuery } from "@tanstack/react-query";
import { getClasses } from "./styles/get-classes"
import { Ghost, GhostCard } from "@/entities/ghost"
import { useCaptureGhost } from "@/features/ghost/capture";
import { ghostKeys } from "@/entities/ghost/api";

async function fetchGhosts(): Promise<Ghost[]> {
  const response = await fetch('/api/ghost');
  if (!response.ok) {
    throw new Error('Failed to fetch spirits');
  }
  return response.json();
}

export function useGhosts() {
  return useQuery({
    queryKey: ghostKeys.all,
    queryFn: fetchGhosts,
    refetchOnWindowFocus: false,
  });
}

export const MainPage = () => {
  const { cnRoot, cnContainer } = getClasses()

  const { mutate } = useCaptureGhost();
  const { data: ghosts, isLoading, error } = useGhosts();

  if (!ghosts || ghosts.length === 0) {
    return (
      <div className={cnRoot}>
        <div className={cnContainer}>
          <div>No spirits detected</div>
        </div>
      </div>
    );
  }

  const handleCapture = (captureId: string) => {
    console.log("🚀 ~ handleCapture ~ captureId:", captureId)
    mutate(captureId);
  }

  return (
    <div className={cnRoot}>
      <div className={cnContainer}>

        {ghosts.map(ghost => <GhostCard key={ghost.name} onCapture={() => handleCapture(ghost.id)} {...ghost} />)}
      </div>
    </div>
  )
}
