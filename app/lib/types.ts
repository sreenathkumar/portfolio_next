export interface ProjectType {
    _id: string;
    title: string;
    subtitle?: string;
    description: string;
    tags: string[];
    image: string;
    source: string;
    url: string;
}