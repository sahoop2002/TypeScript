// String literal types
let direction: "north" | "south" | "east" | "west" = "north";
direction = "north"; 

// Numeric literal types
let diceRoll : 1 | 2 | 3 | 4 | 5 | 6 | 7;

// combining with other types 
type SuccessResponse = { 
    status : "success"
    data: any 
};
type ErrorResponse = { 
    status : "error"
    message: string 
};
type ApiResponse = SuccessResponse | ErrorResponse;
