export class Comment {
    // constructor(parseUser) {
    //     this.id = parseUser.id;
    //     this.title = parseUser.get("title");
    //     this.details = parseUser.get("details");
    //     this.priority = parseUser.get("priority");
    // }

    constructor(idOrObj, userId, createdAt, text) {
        if (arguments.length === 1) {
            // This means that idOrObj is Obj
            this.id = idOrObj.id;
            this.userId = idOrObj.userId;
            this.createdAt = idOrObj.createdAt;
            this.text = idOrObj.text;
        } else {
            // this means that idOrObj is brand
            this.id = idOrObj;
            this.userId = userId;
            this.createdAt = createdAt;
            this.text = text;
        }


    }
}