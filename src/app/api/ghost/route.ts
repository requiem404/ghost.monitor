import { Ghost } from "@/entities/ghost";
import { NextResponse } from "next/server";

const mockGhosts: Ghost[] = [
  { id: '0', name: 'Yokai Hideo', status: 'active', location: 'Shinjuku', dangerLevel: 'low' },
  { id: '1', name: 'Yokai Reiko', status: 'captured', location: 'Akihabara', dangerLevel: 'high' },
  { id: '2', name: 'Yokai Takumi', status: 'active', location: 'Shibuya', dangerLevel: 'medium' },
  { id: '3', name: 'Yokai Yuki', status: 'active', location: 'Harajuku', dangerLevel: 'low' },
  { id: '4', name: 'Yokai Kenji', status: 'captured', location: 'Asakusa', dangerLevel: 'high' },
  { id: '5', name: 'Yokai Aiko', status: 'active', location: 'Ueno', dangerLevel: 'medium' },
  { id: '6', name: 'Yokai Sora', status: 'captured', location: 'Ginza', dangerLevel: 'medium' },
  { id: '7', name: 'Yokai Mei', status: 'active', location: 'Roppongi', dangerLevel: 'low' },
  { id: '8', name: 'Yokai Kazuki', status: 'captured', location: 'Ikebukuro', dangerLevel: 'high' },
  { id: '9', name: 'Yokai Haru', status: 'active', location: 'Chiyoda', dangerLevel: 'medium' },
  { id: '10', name: 'Yokai Riku', status: 'active', location: 'Nihonbashi', dangerLevel: 'low' },
  { id: '11', name: 'Yokai Fumiko', status: 'captured', location: 'Shinagawa', dangerLevel: 'high' },
  { id: '12', name: 'Yokai Nari', status: 'active', location: 'Odaiba', dangerLevel: 'medium' },
  { id: '13', name: 'Yokai Taro', status: 'captured', location: 'Sumida', dangerLevel: 'high' },
  { id: '14', name: 'Yokai Rin', status: 'active', location: 'Kichijoji', dangerLevel: 'low' },
];

export async function GET() {
  return NextResponse.json(mockGhosts);
}