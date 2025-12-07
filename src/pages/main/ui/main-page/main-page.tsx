'use client';

import { QueryClient, useQuery } from "@tanstack/react-query";
import { getClasses } from "./styles/get-classes"
import { Ghost, GhostCard } from "@/entities/ghost"

async function fetchGhosts(): Promise<Ghost[]> {
  const response = await fetch('/api/ghost');
  if (!response.ok) {
    throw new Error('Failed to fetch spirits');
  }
  return response.json();
}

export function useGhosts() {
  return useQuery({
    queryKey: ['ghosts'],
    queryFn: fetchGhosts,
    refetchOnWindowFocus: false,
  });
}
export const MainPage = () => {
  const { cnRoot, cnContainer } = getClasses()

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
  return (
    <div className={cnRoot}>
      <div className={cnContainer}>

        {ghosts.map(ghost => <GhostCard key={ghost.name} {...ghost} />)}
      </div>
    </div>
  )
}
