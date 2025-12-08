import { useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { ghostKeys } from "@/entities/ghost/api";
import { Ghost } from "@/entities/ghost";

export function useGhostEvents() {
  const queryClient = useQueryClient();

  useEffect(() => {
    let eventSource: EventSource | null = null;
    let reconnectTimeout: NodeJS.Timeout;

    const connect = () => {
      eventSource = new EventSource('/api/ghost/events');

      eventSource.onopen = () => {
        console.log('✅ SSE connection established');
      };

      eventSource.onmessage = (event) => {
        try {
          const parsedEvent = JSON.parse(event.data);

          if (parsedEvent.type === 'threat_update') {
            const { spiritId, newThreatLevel } = parsedEvent.data;

            console.log(`🔄 Real-time update: Spirit ${spiritId} -> ${newThreatLevel}`);

            queryClient.setQueryData<Ghost[]>(ghostKeys.all, (old) => {
              if (!old) return old;

              return old.map(ghost =>
                ghost.id === spiritId
                  ? {
                    ...ghost,
                    status: 'active',
                    dangerLevel: newThreatLevel,
                  }
                  : ghost
              );
            });
          }
        } catch (error) {
          console.error('Error processing SSE message:', error);
        }
      };

      eventSource.onerror = () => {
        console.error('❌ SSE connection error');
        if (eventSource) {
          eventSource.close();
        }

        reconnectTimeout = setTimeout(connect, 3000);
      };
    };

    connect();

    return () => {
      if (eventSource) {
        eventSource.close();
      }
      clearTimeout(reconnectTimeout);
    };
  }, [queryClient]);
}