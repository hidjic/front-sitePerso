export class ArtistSpotify {
    id: string;
    name: string;
    popularity: number;
    type: string;
    genres: Array<string>;
    followers: Followers;
    href: string;
    images: Array<ImageSearchSpotify>;
    externalUrls: ExternalUrls;
}

export class Followers {
    href: string;
    total: number;
}

export class ImageSearchSpotify {
    height: number;
    width: number;
    url: string;
}

export class ExternalUrls {
    spotify: string;
}
