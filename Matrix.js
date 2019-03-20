class Matrix {
    constructor() {
    }

    create(input) {
        let matrix = new Array(1); // Empty row of elements
        let row = 0; // current row index
        let idx = 0; // first index
        let parsedNumber;
        matrix[0] = []; 
        while(idx < input.length) { 
            while(input[idx] === " ") idx++;
            parsedNumber = parseFloat(input.substr(idx));
            matrix[row].push(parsedNumber);
            idx += ('' + parsedNumber).length;
            while(input[idx] === " ") idx++; // skip spaces        
            if(input[idx] === ";") {                 
                row++;
                idx++;
                if(idx < input.length - 1) {
                    matrix.push([]);
                    matrix[row] = [];    
                }        
            } // no protection against trailing ;;;s
        }
        return matrix;
    }

    transpose(input) {
        let matrix = []; // Empty row of elements
        let rows = input[0].length;
        let cols = input.length;

        for(let i = 0; i < cols; i++) {
            matrix.push(new Array(1));
            matrix[i] = [];
            for(let j = 0; j < rows; j++) {
                matrix[i].push(input[j][i]);
            }
        }          
        return matrix;
    }
}
let m = new Matrix;
let matrix = m.create("9 8 7; 6 5 4; 3 2 1");

