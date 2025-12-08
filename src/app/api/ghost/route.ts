import { Ghost } from "@/entities/ghost";
import { NextResponse } from "next/server";

const mockGhosts: Ghost[] = [
  { id: '0', name: 'Hideo', status: 'active', location: 'Shinjuku', dangerLevel: 'low' },
  { id: '1', name: 'Reiko', status: 'captured', location: 'Akihabara', dangerLevel: 'high' },
  { id: '2', name: 'Takumi', status: 'active', location: 'Shibuya', dangerLevel: 'medium' },
  { id: '3', name: 'Yuki', status: 'active', location: 'Harajuku', dangerLevel: 'low' },
  { id: '4', name: 'Kenji', status: 'captured', location: 'Asakusa', dangerLevel: 'high' },
  { id: '5', name: 'Aiko', status: 'active', location: 'Ueno', dangerLevel: 'medium' },
  { id: '6', name: 'Sora', status: 'captured', location: 'Ginza', dangerLevel: 'medium' },
  { id: '7', name: 'Mei', status: 'active', location: 'Roppongi', dangerLevel: 'low' },
  { id: '8', name: 'Kazuki', status: 'captured', location: 'Ikebukuro', dangerLevel: 'high' },
  { id: '9', name: 'Haru', status: 'active', location: 'Chiyoda', dangerLevel: 'medium' },
  { id: '10', name: 'Riku', status: 'active', location: 'Nihonbashi', dangerLevel: 'low' },
  { id: '11', name: 'Fumiko', status: 'captured', location: 'Shinagawa', dangerLevel: 'high' },
  { id: '12', name: 'Nari', status: 'active', location: 'Odaiba', dangerLevel: 'medium' },
  { id: '13', name: 'Taro', status: 'captured', location: 'Sumida', dangerLevel: 'high' },
  { id: '14', name: 'Rin', status: 'active', location: 'Kichijoji', dangerLevel: 'low' },
];

export async function GET() {
  return NextResponse.json(mockGhosts);
}