import React from "react";

import { Button, Col, Dropdown, Row } from "react-bootstrap";

import { Filter, RefreshCw } from "react-feather";

const Header = () => {
  return (
    <Row className="mb-2 mb-xl-3">
      <Col xs="auto" className="d-none d-sm-block">
        <h1>Rot_Fish_Bandit</h1>
      </Col>

      <Col xs="auto" className="ms-auto text-end mt-n1">
        <Dropdown className="d-inline me-2">
          <Dropdown.Toggle variant="light" className="bg-white shadow-sm">
            Game Category
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>PvP</Dropdown.Item>
            <Dropdown.Item>PvE</Dropdown.Item>
            <Dropdown.Item>Brawl</Dropdown.Item>
            <Dropdown.Item>Custom</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown className="d-inline me-2">
          <Dropdown.Toggle variant="light" className="bg-white shadow-sm">
            Game Mode
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item></Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown className="d-inline me-2">
          <Dropdown.Toggle variant="light" className="bg-white shadow-sm">
            Region
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item></Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown className="d-inline me-2">
          <Dropdown.Toggle variant="light" className="bg-white shadow-sm">
            Map
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item></Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown className="d-inline me-2">
          <Dropdown.Toggle variant="light" className="bg-white shadow-sm">
            Group Size
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item></Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Button variant="primary" className="shadow-sm me-1">
          <Filter className="feather" />
        </Button>
        <Button variant="primary" className="shadow-sm">
          <RefreshCw className="feather" />
        </Button>
      </Col>
    </Row>
  );
};

export default Header;
