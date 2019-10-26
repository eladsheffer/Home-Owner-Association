export class User {
    // constructor(parseUser) {
    //     this.id = parseUser.id;
    //     this.title = parseUser.get("title");
    //     this.details = parseUser.get("details");
    //     this.priority = parseUser.get("priority");
    // }

    constructor(idOrObj, communityId, name, email, password, appartment, isCommitteeMember) {
        if (arguments.length === 1) {
            // This means that idOrObj is Obj
            this.id = idOrObj.id;
            this.communityId = idOrObj.community;
            this.name = idOrObj.name;
            this.email = idOrObj.email;
            this.password = idOrObj.password;
            this.appartment = idOrObj.appartment;
            this.isCommitteeMember = idOrObj.isCommitteeMember;
        } else {
            // this means that idOrObj is brand
            this.id = idOrObj;
            this.communityId = communityId;
            this.name = name;
            this.email = email;
            this.password = password;
            this.appartment = appartment;
            this.isCommitteeMember = isCommitteeMember;
        }


    }
}