export class Message {
    constructor(parseUser) {
        this.id = parseUser.id;
        this.title = parseUser.get("title");
        this.details = parseUser.get("details");
        this.priority = parseUser.get("priority");
    }
}