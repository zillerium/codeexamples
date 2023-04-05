import React, { useRef, useContext, useState } from 'react';
import { Button } from 'react-bootstrap';
import jsPDF from 'jspdf';
import { create } from 'ipfs-http-client';
import { ContractContext } from './ContractContext';
import { IpfsContext } from './IpfsContext';

function LoadIpfs() {

  const [pdf, setPdf] = useState(null);
const {ipfsHash, setIpfsHash } = useContext(IpfsContext);
	const [ipfsUrl, setIpfsUrl] = useState(null);

  const onChangePdf = (e) => {
    setPdf(e.target.files[0]);
  };

	const handleViewIpfs = () =>  {

		if (ipfsHash) {
                    setIpfsUrl(`https://ipfs.io/ipfs/${ipfsHash}`);
		}
	}

  const loadIpfsPdf = async () => {
const ipfs = create({
  host: 'ipfs.infura.io',
  port: 5001,
  protocol: 'https',
  headers: {
    authorization: `Basic ${Buffer.from(`${process.env.REACT_APP_INFURA_PROJECT_ID}:${process.env.REACT_APP_INFURA_API_KEY}`).toString('base64'
)}`,
  },
});
console.log("checking now ==");
   const pdfFile = await pdf.arrayBuffer();
    const { cid } = await ipfs.add(pdfFile, {pin: true});
console.log("cid ==", cid.toString());
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
      {ipfsHash && (<div>IPFS hash1:{' '} <a href={ipfsUrl} target="_blank" rel="noopener noreferrer" onClick={handleViewIpfs}>{ipfsHash}</a></div>)}
    </div>
  );
}

export default LoadIpfs;
