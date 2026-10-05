"use strict";
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 8] = "Up";
    Direction[Direction["Down"] = 9] = "Down";
    Direction[Direction["Left"] = 10] = "Left";
    Direction[Direction["Right"] = 11] = "Right";
})(Direction || (Direction = {}));
let dir = Direction.Right;
// String enum
var Status1;
(function (Status1) {
    Status1["Pending"] = "PENDING";
    Status1["Approved"] = "APPROVED";
    Status1["Rejected"] = "REJECTED";
})(Status1 || (Status1 = {}));
let stat = Status1.Approved;
function handleResponse(Status) {
    if (Status === 200 /* HttpStatus.OK */) {
        console.log("Success!");
    }
}
