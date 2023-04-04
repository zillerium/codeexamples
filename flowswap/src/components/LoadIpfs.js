import React, { useRef, useContext, useState } from 'react';
import { Button } from 'react-bootstrap';
import jsPDF from 'jspdf';
import { ContractContext } from './ContractContext';

function LoadIpfs() {
  const {
    ipfsHash, setIpfsHash,
  } = useContext(ContractContext);

	function loadIpfsPdf() {


	}

  const [pdf, setPdf] = useState(null);

  const onChangePdf = (e) => {
    setPdf(e.target.files[0]);
  };



  return (
    <div>
	  <div>Load PDF to Ipfs</div>
      <div>
	   <input
          type="file"
          name="pdfFile"
          onChange={onChangePdf}
          accept="pdf"
        />
        <Button variant="primary" onClick={loadIpfsPdf}>
          Load Pdf to Ipfs
        </Button>
      </div>

    </div>
  );
}

export default LoadIpfs;
