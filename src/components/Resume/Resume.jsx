import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import "../../App.css";

function Resume() {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
   
    function onDocumentLoadSuccess({ numPages }) {
      setNumPages(numPages);
    }

  return (
    <div id="Resume">
      <h1 id="resumeHeader">Sam Horne's Resume</h1>
      <div className="Container" id="resumeContainer">
        <Document file="./Resume.pdf" id="samResume"onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <p>Page {pageNumber} of {numPages}</p>
      </div>
    </div>
  );
}

export default Resume;
