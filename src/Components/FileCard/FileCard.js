/** @format */

import React from "react";
import "./style.module.css";

const FileCard = ()  => {

  const changeHandler = () => {};
  const handleSubmission = () => {};
  
  return (
    <>
    
    return (
        <div>
			<input type="file" name="file" onChange={changeHandler} />
			<div>
				<button onClick={handleSubmission}>Submit</button>
                <div>
                    {/* <p>File: {selectedFile.name}</p>
                    <p>FileType: {selectedFile.type}</p> */}
                </div>
                
            </div>
		</div>
    )
    </>
  )
};

export default FileCard;