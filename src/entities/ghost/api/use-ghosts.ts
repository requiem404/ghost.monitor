import { useQuery } from "@tanstack/react-query";
import { Ghost } from "./types";
import { ghostKeys } from "./keys";

async function fetchGhosts(): Promise<Ghost[]> {
  const response = await fetch('/api/ghost');
  if (!response.ok) {
    throw new Error('Failed to fetch spirits');
  }
  return response.json();
}

export const useGhosts = () => {
  return useQuery({
    queryKey: ghostKeys.all,
    queryFn: fetchGhosts,
    refetchOnWindowFocus: false,
  });
}

