import React, { useRef, useContext, useState } from 'react';
import { Button } from 'react-bootstrap';
import jsPDF from 'jspdf';
import { create } from 'ipfs-http-client';
import { ContractContext } from './ContractContext';

function LoadIpfs() {
  const {
    ipfsHash, setIpfsHash,
  } = useContext(ContractContext);

  const [pdf, setPdf] = useState(null);

  const onChangePdf = (e) => {
    setPdf(e.target.files[0]);
  };

  const loadIpfsPdf = async () => {
    const ipfs = create({
      host: 'ipfs.infura.io',
      port: 5001,
      protocol: 'https',
    });

    const pdfFile = await pdf.arrayBuffer();
    const { cid } = await ipfs.add(pdfFile);

    setIpfsHash(cid.toString());
  };

  return (
    <div>
      <div>Load PDF to Ipfs</div>
      <div>
        <input
          type="file"
          name="pdfFile"
          onChange={onChangePdf}
          accept=".pdf"
        />
        <Button variant="primary" onClick={loadIpfsPdf}>
          Load Pdf to Ipfs
        </Button>
      </div>
      {ipfsHash && <div>IPFS hash: {ipfsHash}</div>}
    </div>
  );
}

export default LoadIpfs;
