import { ArtistSpotify } from './artist-spotify';
import { ImageSpotify } from './image-spotify';

export class AlbumSpotify {
    albumGroup: string;
    albumType: string;
    artist: ArtistSpotify;
    availableMarkets: Array<string>;
    externalUrls: ExternalUrls;
    href: string;
    id: string;
    images: Array<ImageSpotify>;
    name: string;
    releaseDate: string;
    releaseDatePrecision: string;
    restriction: string;
    type: string;
    uri: string;
}

export class ExternalUrls {
    spotify: string;
}
