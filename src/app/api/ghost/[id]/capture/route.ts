import { NextRequest, NextResponse } from 'next/server';

export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await new Promise(resolve => setTimeout(resolve, 500)); // Simulating a delay

    const id = params.id;

    const shouldFail = Math.random() < 0.3;

    if (shouldFail) {
      return NextResponse.json(
        {
          success: false,
          message: 'Ghost escaped! Capture failed.',
        },
        { status: 500 }
      );
    }


    const mockUpdatedGhost = {
      id,
      status: 'captured' as const,
    };

    return NextResponse.json({
      ghost: mockUpdatedGhost,
    });

  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}