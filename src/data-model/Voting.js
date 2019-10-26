export class Voting {
    // constructor(parseUser) {
    //     this.id = parseUser.id;
    //     this.title = parseUser.get("title");
    //     this.details = parseUser.get("details");
    //     this.priority = parseUser.get("priority");
    // }

    constructor(idOrObj, userId, createdAt, title, details, options,dueDate,  votes) {
        if (arguments.length === 1) {
            // This means that idOrObj is Obj
            this.id = idOrObj.id;
            this.userId = idOrObj.userId;
            this.createdAt = idOrObj.createdAt;
            this.title = idOrObj.title;
            this.details = idOrObj.details;
            this.options = idOrObj.options;
            this.dueDate = idOrObj.dueDate;
            this.votes = idOrObj.votes;
        } else {
            // this means that idOrObj is brand
            this.id = idOrObj;
            this.userId = userId;
            this.createdAt = createdAt;
            this.title = title;
            this.details = details;
            this.options = options;
            this.dueDate = dueDate;
            this.votes = votes;
        }


    }
}