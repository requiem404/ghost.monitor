export type GhostStatus = 'active' | 'captured'
export type GhostDangerLevel = 'low' | 'medium' | 'high'

export type Ghost = {
  id: string;
  name: string;
  status: GhostStatus;
  location: string;
  dangerLevel: GhostDangerLevel;
}

export type CaptureResponse = {
  success: boolean;
  ghost: Ghost;
  message?: string;
}
