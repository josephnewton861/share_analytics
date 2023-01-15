import { useState } from "react";
import {readFileData} from '../utils/utils'


const FileUpload = () => {
    const [selectedFile, setSelectedFile] = useState();
    // const [isFileSelected, setIsFilePicked] = useState(false);

    const changeFile = (value) => {
        setSelectedFile(value[0]);
        console.log(value[0], 'file obj')
        // setIsFilePicked(true);
    }

    const handleSubmission = () => {
        readFileData(selectedFile);
    }
    return (
    <div className="FileUpload">
        <input type="file" name="file" onChange={e => changeFile(e.target.files)}/>
        <button onClick={handleSubmission}>Submit</button>
        
    </div>
    )
}

export default FileUpload;