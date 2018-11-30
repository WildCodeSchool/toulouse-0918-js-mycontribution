import React, { Component } from 'react';
import avatarprojet from './test1.jpeg';
import {Col, Row} from 'reactstrap';

const List =
({ id, projectType, userId, name, logo, sumary, description, sponsor, price, wantedSkill, contact, team, startDate, endDate }) => (
  <div>
    <Row className="p-3 bg-secondary mb-2">
            <Col lg="2">
              <img
                style={{ width: '120px' }}
                className="rounded"
                src={avatarprojet}
                alt={avatarprojet}>
              </img>
            </Col>
            <Col lg="9" className="text-white">
              <p>
                <i className="fas fa-edit mr-3"></i>
                {startDate}-{endDate}
                </p>
              <h4>{name}</h4>
              <p style={{ fontSize: '0.9em' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  <span className="font-weight-bold">
                  ... Lire plus
                  </span>
              </p>
            </Col>
            <p className='bg-warning p-2 ml-2 mr-2 rounded'>
              Compétence 1
            </p>
            <p className='bg-warning p-2 ml-2 mr-2 rounded'>
              Compétence 2
            </p>
            <p className='bg-warning p-2 ml-2 mr-2 rounded'>
              Compétence 3
            </p>
          </Row>
    </div>
  )

export default List;