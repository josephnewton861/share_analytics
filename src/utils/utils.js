import readXlsxFile from 'read-excel-file'

export const readFileData = (file) => {

    getAllSheetNames(file).then(sheets => {
        console.log(sheets, 'sheets')
    })
    
    readXlsxFile(file).then((rows) => {
        console.log(rows, 'here')
    });    
}


const getAllSheetNames = (file) =>  {
    return readXlsxFile(file, {
        getSheets: true
        }).then((sheets) => {
        return sheets.map((sheet) => {
            return sheet.name;
        });
    });
}

