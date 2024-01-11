import React from 'react';
import resume from "../assets/VIVEK SINGH.pdf";

function DownloadButton() {
  // Function to handle the button click event
  const handleDownload = () => {
    // Create a link element
    const link = document.createElement('a');
    link.href = resume; // Replace with the actual path to your resume.pdf file
    link.target = '_blank';
    link.download = 'VIVEK SINGH.pdf'; // The name you want the file to be saved as

    // Trigger a click event on the link to initiate the download
    link.click();
  };

  return (
    <button className='button' onClick={handleDownload}>Download Resume  </button>
  );
}

export default DownloadButton;