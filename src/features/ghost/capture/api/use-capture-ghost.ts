import { CaptureResponse, Ghost, ghostKeys } from "@/entities/ghost/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

async function captureGhost(id: string): Promise<CaptureResponse> {
  const response = await fetch(`/api/ghost/${id}/capture`, {
    method: 'POST',
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Capture failed');
  }

  return response.json();
}

export function useCaptureGhost() {
  const queryClient = useQueryClient();


  return useMutation({
    mutationFn: captureGhost,
    onMutate: async (id) => {
      await queryClient.cancelQueries({ queryKey: ghostKeys.all });

      const previousGhosts = queryClient.getQueryData<Ghost[]>(ghostKeys.all);

      queryClient.setQueryData<Ghost[]>(ghostKeys.all, (old) =>
        old?.map(ghost =>
          ghost.id === id ? { ...ghost, status: 'captured' } : ghost
        )
      );

      return { previousGhosts };
    },
    onError: (err, id, context) => {
      if (context?.previousGhosts) {
        queryClient.setQueryData(ghostKeys.all, context.previousGhosts);
      }

      alert(`Capture failed: ${err.message}`);
    },
    onSuccess: (data) => {
      console.log("🚀 ~ useCaptureGhost ~ data:", data)
      queryClient.setQueryData<Ghost[]>(ghostKeys.all, (old) =>
        old?.map(ghost =>
          ghost.id === data.ghost.id ? data.ghost : ghost
        )
      );
    },
  });
}
