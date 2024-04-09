import type { ImageMetadata } from "astro";

export interface FooterLink {
  description: string;
  icon?: string;
  url: string;
}

export interface NavItem {
  title: string;
  url: string;
}

export interface TimeTableItem {
  title: string;
  started_at: string;
  ended_at: string;
  icon?: string;
  description?: string;
}
export interface SuponsorSessionItem  {
  speaker: Speaker;
  documentUrl?: string;
  movieUrl?: string;
  suponsorId: number;
}
export interface SuponsorSession extends TimeTableItem {
  suponsors: SuponsorSessionItem[];
}
export interface PanelDiscussion extends TimeTableItem {
  speakers: Speaker[];
}

export interface Session extends TimeTableItem {
  speaker?: Speaker;
  documentUrl?: string;
  movieUrl?: string;
}


export interface Speaker {
  name: string;
  description?: string;
  twitter?: string;
  link?: string;
  image?: ImageMetadata
}