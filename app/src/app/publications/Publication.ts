// A class that represents a publication, with a title, a series of tags, a preview image, a date of publication (month in letters and year) and a list of authors each author associated with a profile picture
export class Publication {
    // The title of the publication
    publicationTitle: string;
    // The tags associated with the publication
    publicationTags: string[];
    // The preview image of the publication
    publicationPreviewImage: string;
    // The date of publication
    publicationDate: string;
    // The authors of the publication
    publicationAuthors: Author[];

    constructor(publicationTitle: string, publicationTags: string[], publicationPreviewImage: string, publicationDate: string, publicationAuthors: Author[]) {
        this.publicationTitle = publicationTitle;
        this.publicationTags = publicationTags;
        this.publicationPreviewImage = publicationPreviewImage;
        this.publicationDate = publicationDate;
        this.publicationAuthors = publicationAuthors;
    }
}

export class Author {
    // The name of the author
    authorName: string;
    // The profile picture of the author
    authorProfilePicture: string;

    constructor(authorName: string, authorProfilePicture: string) {
        this.authorName = authorName;
        this.authorProfilePicture = authorProfilePicture;
    }
}
