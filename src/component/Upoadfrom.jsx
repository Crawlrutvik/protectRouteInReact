import React, { useEffect, useId, useState } from 'react';

const Upoadfrom = () => {
  const [date, setDate] = useState();
  const [selectFile, setSelectFiles] = useState([])
  const [selectShowFile, setShowSelectFiles] = useState([])
  const passwordHintId = useId();
  console.log('passwordHintId : ', passwordHintId );
  const getFormattedDate = () => {
    const currentDate = new Date();
    const options = {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    };
    return currentDate.toLocaleString('en-US', options);
  }
  useEffect(() => {
    const intervalId = setInterval(() => {
      // setDate(getFormattedDate());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);
  console.log("i am rendering", Math.random())
  const UploadDocument = (e) => {
    setSelectFiles([...selectFile, ...e.target.files])
  }
  const validateSelectedFile = (e) => {

    e.preventDefault()
    setShowSelectFiles(selectFile)
    const MIN_FILE_SIZE = 1024 // 1MB
    const MAX_FILE_SIZE = 5120 // 5MB
    let fileSizeKiloBytes;
    selectShowFile.map((value) => {
      fileSizeKiloBytes = value.size / 1024

      if (fileSizeKiloBytes < MIN_FILE_SIZE) {
        alert("File size is less than 1MB");
      }
      if (fileSizeKiloBytes > MAX_FILE_SIZE) {
        alert("File size is greater than 5 MB");
      }
    })
    console.log('selectFile: ', selectFile);
  }
  return (
    <>
      <div className='card'>
        <h3>{date}</h3>

        <form action="" onSubmit={validateSelectedFile}>
          {/* <input type="file" onChange={UploadDocument} accept="image/jpeg, image/png , image/svg" />upload document
          <button type="submit"> submit</button> */}
          <div class="file-input">
            <input
              type="file"
              name="file-input"
              id="file-input"
              class="file-input__input"
              onChange={UploadDocument}
              accept="image/jpeg, image/png , image/svg"
            />
            <label class="file-input__label" for="file-input">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="upload"
                class="svg-inline--fa fa-upload fa-w-16"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M296 384h-80c-13.3 0-24-10.7-24-24V192h-87.7c-17.8 0-26.7-21.5-14.1-34.1L242.3 5.7c7.5-7.5 19.8-7.5 27.3 0l152.2 152.2c12.6 12.6 3.7 34.1-14.1 34.1H320v168c0 13.3-10.7 24-24 24zm216-8v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h136v8c0 30.9 25.1 56 56 56h80c30.9 0 56-25.1 56-56v-8h136c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"
                ></path>
              </svg>
              <span>Upload file</span>
            </label>
          </div>
              <button type="submit"> submit</button> 
        </form>
        <ul>
          {
            selectShowFile.map((file, index) => {
              return <li key={index}>{index + 1 + "=>"} {file.name}</li>
            })
          }
        </ul>
      </div>
    </>
  );
};

export default Upoadfrom;
