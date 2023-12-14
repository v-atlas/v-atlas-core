import { type SpotifyPlaylistItem } from "~/stores/spotify/schemas"

export { type SpotifyPlaylistItem } from "~/stores/spotify/schemas"


export type SpotifyPlaylistAPIResponse = {
  href: string;
  limit: number;
  next: string;
  offset: number;
  previous: string;
  total: number;
  items: SpotifyPlaylistItem[];
};

export type SpotifyTracksAPIResponse = {
  href: string;
  items: SpotifyTrackItem[];
  limit: number;
  next: string;
  offset: number;
  previous: string;
  total: number;
};

export type SpotifyTrackItem = {
  added_at: string;
  added_by: AddedBy;
  is_local: boolean;
  primary_color: null;
  track: Track;
  video_thumbnail: VideoThumbnail;
};

export type AddedBy = {
  external_urls: ExternalUrls;
  href: string;
  id: string;
  type: string;
  uri: string;
  name?: string;
};

export type ExternalUrls = {
  spotify: string;
};

export type Track = {
  album: Album;
  artists: AddedBy[];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  episode: boolean;
  explicit: boolean;
  external_ids: ExternalIDS;
  external_urls: ExternalUrls;
  href: string;
  id: string;
  is_local: boolean;
  name: string;
  popularity: number;
  preview_url: string;
  track: boolean;
  track_number: number;
  type: string;
  uri: string;
};

export type Album = {
  album_type: string;
  artists: AddedBy[];
  available_markets: string[];
  external_urls: ExternalUrls;
  href: string;
  id: string;
  images: Image[];
  name: string;
  release_date: string;
  release_date_precision: string;
  total_tracks: number;
  type: string;
  uri: string;
};

export type Image = {
  height: number;
  url: string;
  width: number;
};

export type ExternalIDS = {
  isrc: string;
};

export type VideoThumbnail = {
  url: null;
};

export const SupportedApps = {
  Spotify: "Spotify",
  GoogleDrive: "Google Drive",
} as const

export type SupportedApps = typeof SupportedApps[keyof typeof SupportedApps]

export type ConnectedApp = {
  type: SupportedApps;
  description: string;
  link: string;
};
