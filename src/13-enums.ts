enum Direction {
    Up = 8 ,
    Down,
    Left,
    Right,
}

let dir : Direction = Direction.Right;

// String enum
enum Status1 {
    Pending = "PENDING",
    Approved = "APPROVED",
    Rejected = "REJECTED"
}

let stat: Status1 = Status1.Approved;

// const enum (more performant)
const enum HttpStatus {
  OK = 200,
  NotFound = 404,
  ServerError = 500,
}

function handleResponse (Status : HttpStatus) : void {
    if(Status === HttpStatus.OK) {
        console.log("Success!")
    }
}



