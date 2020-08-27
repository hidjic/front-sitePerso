import { ImageSpotify } from './image-spotify';

export class ArtistSpotify {
    id: string;
    name: string;
    popularity: number;
    type: string;
    genres: Array<string>;
    followers: Followers;
    href: string;
    images: Array<ImageSpotify>;
    externalUrls: ExternalUrls;
}

export class Followers {
    href: string;
    total: number;
}

export class ExternalUrls {
    spotify: string;
}
