export class Message {
    // constructor(parseUser) {
    //     this.id = parseUser.id;
    //     this.title = parseUser.get("title");
    //     this.details = parseUser.get("details");
    //     this.priority = parseUser.get("priority");
    // }

    constructor(titleOrObj, details, priority, createdBy, createAt, comments) {
        if (arguments.length === 1) {
          // This means that titleOrObj is Obj
          this.title = titleOrObj.brand;
          this.details = titleOrObj.details;
          this.priority = titleOrObj.priority;    
          this.createdBy = new Date();
          this.createAt = titleOrObj.createAt; 
          this.comments = titleOrObj.comments;    
        } else {
          // this means that titleOrObj is brand
          this.title = titleOrObj;
          this.details = details;
          this.priority = priority;
          this.createdBy = createdBy;
          this.createAt = new Date();
          this.comments = comments;
        }
        
        
      }
}
export default Message;