// A project class with four properties: Title, Description, ImageUrl, and ProjectUrl.
export class Project {
    projectTitle: string;
    projectDescription: string;
    projectImageUrl: string;
    projectUrl: string;

    constructor(projectTitle: string, description: string, projectImageUrl: string, projectUrl: string) {
        this.projectTitle = projectTitle;
        this.projectDescription = description;
        this.projectImageUrl = projectImageUrl;
        this.projectUrl = projectUrl;
    }
}