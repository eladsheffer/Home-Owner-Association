export class Message {
    // constructor(parseUser) {
    //     this.id = parseUser.id;
    //     this.title = parseUser.get("title");
    //     this.details = parseUser.get("details");
    //     this.priority = parseUser.get("priority");
    // }

    constructor(titleOrObj, details, priority) {
        if (arguments.length === 1) {
          // This means that brandOrObj is Obj
          this.title = titleOrObj.brand;
          this.details = titleOrObj.details;
          this.priority = titleOrObj.priority;       
        } else {
          // this means that brandOrObj is brand
          this.title = titleOrObj;
          this.details = details;
          this.priority = priority;
        }
        
        
      }
}
export default Message;