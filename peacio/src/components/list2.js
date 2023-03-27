import { Tab, Row, Col, ListGroup } from 'react-bootstrap';
import ContractDetails from './ContractDetails';

function ContractList(props) {
  // state to keep track of selected contract number
  const [selectedContract, setSelectedContract] = useState(null);

  const handleSelect = (contractNum) => {
    // update the selected contract number
    setSelectedContract(contractNum);
  };

  return (
    <Tab.Container id="contracts-tab" defaultActiveKey="buyers">
      <Row>
        <Col sm={3}>
          <ListGroup>
            <ListGroup.Item action eventKey="buyers">
              Buyers
            </ListGroup.Item>
            <ListGroup.Item action eventKey="sellers">
              Sellers
            </ListGroup.Item>
            {props.contracts.map((contractNum) => (
              <ListGroup.Item
                key={contractNum}
                action
                onClick={() => handleSelect(contractNum)}
              >
                {contractNum}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="buyers">
              {props.buyerContracts.length > 0 && (
                <ContractDetails
                  address={props.address}
                  contractType="buyer"
                  contracts={props.buyerContracts}
                />
              )}
            </Tab.Pane>
            <Tab.Pane eventKey="sellers">
              {props.sellerContracts.length > 0 && (
                <ContractDetails
                  address={props.address}
                  contractType="seller"
                  contracts={props.sellerContracts}
                />
              )}
            </Tab.Pane>
            {selectedContract && (
              <Tab.Pane eventKey={selectedContract}>
                <ContractDetails
                  address={props.address}
                  contractType={
                    props.buyerContracts.includes(selectedContract)
                      ? 'buyer'
                      : 'seller'
                  }
                  contractNum={selectedContract}
                />
              </Tab.Pane>
            )}
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}

export default ContractList;
