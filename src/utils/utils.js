export const readFileData = (file) => {

    const reader = require('xlsx');
    const readFile = reader.readFile(file)


    console.log(readFile);


}

