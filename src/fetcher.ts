import type { TimelineEvent } from "./types";
import events from "../data/events.json";

export function fetchTimelineData(): TimelineEvent[] {
  return (events as unknown as any[]).map(item => ({
    year: String(item.year ?? ""),
    id: String(item.id ?? ""),
    title: String(item.title ?? ""),
    description: String(item.description ?? ""),
    imageURL: String(item.imageURL ?? ""),
    category: String(item.category ?? ""),
    link: String(item.link ?? "#"),
  }));
}

