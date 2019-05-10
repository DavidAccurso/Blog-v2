import { IPost } from './IPost';

export class Post implements IPost {
    constructor( ) {
        this._daysAgo = Math.random();
        this.daysAgo = "{{_daysAgo}} days ago.";
    }  
    ID: number;
    userId: number;
    title: string;
    body: string;
    daysAgo: string;
    private _daysAgo : number;
}
