import { useState } from "react";
import {readFileData} from '../utils/utils'


const FileUpload = () => {
    const [selectedFile, setSelectedFile] = useState();
    // const [isFileSelected, setIsFilePicked] = useState(false);

    const changeFile = (value) => {
        setSelectedFile(value);
        // setIsFilePicked(true);
    }

    const handleSubmission = () => {
        readFileData(selectedFile);
    }
    return (
    <div className="FileUpload">
        <input type="file" name="file" onChange={e => changeFile(e.target.value)}/>
        <button onClick={handleSubmission}>Submit</button>
        
    </div>
    )
}

export default FileUpload;