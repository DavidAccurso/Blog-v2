import { IPost } from '../app/IPost';

export class Post implements IPost {
    userId: number;
    id: number;
    title: string;
    body: string;
    daysAgo: string;
    constructor
    (
        userId: number,
        id: number,
        title: string,
        body: string,
        daysAgo: string
    ) {
        this.userId = userId;
        this.id = id;
        this.title = title;
        this.body = body;
        this.daysAgo = daysAgo;
    }
}
