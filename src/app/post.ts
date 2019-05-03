export class PostComponent {
    constructor() {
        this._daysAgo = Math.random();
        this.daysAgo = "{{_daysAgo}} days ago.";
    }
    
    title: string;
    body: string;
    daysAgo: string;
    private _daysAgo : number;
}
