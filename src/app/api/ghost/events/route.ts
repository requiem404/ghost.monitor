import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const stream = new TransformStream();
  const writer = stream.writable.getWriter();
  const encoder = new TextEncoder();

  const interval = setInterval(async () => {
    try {
      const randomSpiritId = Math.floor(Math.random() * 15).toString();
      const threatLevels = ['low', 'medium', 'high'];
      const newThreatLevel = threatLevels[Math.floor(Math.random() * threatLevels.length)];

      const event = {
        type: 'threat_update',
        data: {
          spiritId: randomSpiritId,
          newThreatLevel,
          timestamp: new Date().toISOString(),
        },
      };

      await writer.write(encoder.encode(`data: ${JSON.stringify(event)}\n\n`));
    } catch (error) {
      clearInterval(interval);
      writer.close();
    }
  }, 5000);

  request.signal.addEventListener('abort', () => {
    clearInterval(interval);
    writer.close();
  });

  return new Response(stream.readable, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
    },
  });
}