import React, { Component } from "react";
import Pdf from "../components/Resume.pdf";
import "../App.css";

class Download extends Component {
  render() {
    return (
      <div id="Resume">
        <h1 id="resumeHeader">Sam Horne's Resume</h1>

        <div className="Container" id="resumeContainer">
          <div className="App">
            <a href={Pdf} target="_blank" id="DocLink">
            <img
              src={require("../Images/Document.png")}
              alt="phone icon"
              id="DocumentLink"
            />
            </a>
            <a href={Pdf} target="_blank" id="ResumeLink">
            Click here to download.
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Download;

// function Resume() {
//     const [numPages, setNumPages] = useState(null);
//     const [pageNumber, setPageNumber] = useState(1);

//     function onDocumentLoadSuccess({ numPages }) {
//       setNumPages(numPages);
//       setPageNumber(pageNumber);
//     }

//   return (
//     <div id="Resume">
//       <h1 id="resumeHeader">Sam Horne's Resume</h1>
//       <div className="Container" id="resumeContainer">
//         <Document file="./Resume.pdf" id="samResume"onLoadSuccess={onDocumentLoadSuccess}
//       >
//         <Page pageNumber={pageNumber} />
//       </Document>
//       <p>Page {pageNumber} of {numPages}</p>
//       </div>
//     </div>
//   );
// }

// export default Resume;
