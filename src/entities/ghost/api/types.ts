export type GhostStatus = 'active' | 'caught'
export type GhostDangerLevel = 'low' | 'medium' | 'high'

export type Ghost = {
  name: string;
  status: GhostStatus;
  location: string;
  dangerLevel: GhostDangerLevel;
}