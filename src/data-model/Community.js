export class Community {
    // constructor(parseUser) {
    //     this.id = parseUser.id;
    //     this.title = parseUser.get("title");
    //     this.details = parseUser.get("details");
    //     this.priority = parseUser.get("priority");
    // }

    constructor(idOrObj, address ,city) {
        if (arguments.length === 1) {
            // This means that idOrObj is Obj
            this.id = idOrObj.id;
            this.address = idOrObj.address;
            this.city = idOrObj.city;
        } else {
            // this means that idOrObj is brand
            this.id = id;
            this.address = address;
            this.city = city;
        }


    }
}