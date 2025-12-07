import { Ghost } from "@/entities/ghost";
import { NextResponse } from "next/server";

const mockGhosts: Ghost[] = [
  { name: 'Yokai Hideo', status: 'active', location: 'Shinjuku', dangerLevel: 'low' },
  { name: 'Yokai Reiko', status: 'caught', location: 'Akihabara', dangerLevel: 'high' },
  { name: 'Yokai Takumi', status: 'active', location: 'Shibuya', dangerLevel: 'medium' },
  { name: 'Yokai Yuki', status: 'active', location: 'Harajuku', dangerLevel: 'low' },
  { name: 'Yokai Kenji', status: 'caught', location: 'Asakusa', dangerLevel: 'high' },
  { name: 'Yokai Aiko', status: 'active', location: 'Ueno', dangerLevel: 'medium' },
  { name: 'Yokai Sora', status: 'caught', location: 'Ginza', dangerLevel: 'medium' },
  { name: 'Yokai Mei', status: 'active', location: 'Roppongi', dangerLevel: 'low' },
  { name: 'Yokai Kazuki', status: 'caught', location: 'Ikebukuro', dangerLevel: 'high' },
  { name: 'Yokai Haru', status: 'active', location: 'Chiyoda', dangerLevel: 'medium' },
  { name: 'Yokai Riku', status: 'active', location: 'Nihonbashi', dangerLevel: 'low' },
  { name: 'Yokai Fumiko', status: 'caught', location: 'Shinagawa', dangerLevel: 'high' },
  { name: 'Yokai Nari', status: 'active', location: 'Odaiba', dangerLevel: 'medium' },
  { name: 'Yokai Taro', status: 'caught', location: 'Sumida', dangerLevel: 'high' },
  { name: 'Yokai Rin', status: 'active', location: 'Kichijoji', dangerLevel: 'low' },
];

export async function GET() {
  return NextResponse.json(mockGhosts);
}