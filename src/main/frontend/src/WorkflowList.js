import React, { Component } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import AppNavBar from './AppNavBar';
import { Link, withRouter } from 'react-router-dom';
import Modal from 'react-modal';

class WorkflowList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            closedworkflows: []
        };
    }

    componentDidMount() {
            fetch('/workflow/closedwf')
            .then(response => response.json())
            .then(data => this.setState({closedworkflows: data}));
    }
 
    
    render() {
        const {closedworkflows, isLoading} = this.state;
    
        if (isLoading) {
            return <p>Loading...</p>;
        }
    
        

        const closedworkflowList = closedworkflows.map(closedworkflows => {
            return <tr key={closedworkflows.id}>
                <td>{closedworkflows.id}</td>
                <td style={{whiteSpace: 'nowrap'}}>{closedworkflows.workflowtype}</td>
                <td>{closedworkflows.tradecenter}</td>
                <td>{closedworkflows.branchcode}</td>
                <td>{closedworkflows.refid}</td>
                <td>{closedworkflows.queue}</td>
                <td>{closedworkflows.productcode}</td>
                <td>{closedworkflows.currency}{closedworkflows.amount}</td>
                <td>{closedworkflows.closuretype}</td>
            </tr>
        });
    
        return (
            <div>
                <Container fluid>
                    <Table className="mt-4">
                        <thead>
                        <tr>
                            <th width="10%">Won ID</th>
                            <th width="10%">Workflow Type</th>
                            <th width="10%">Trade Center</th>
                            <th width="10%">Branch Code</th>
                            <th width="10%">Ref ID</th>
                            <th width="10%">Queue</th>
                            <th width="10%">Product Code</th>
                            <th width="10%">Event Type</th>
                            <th width="10%">Transaction Amt</th>
                            <th width="10%">Closure Type</th>
                        </tr>
                        </thead>
                        <tbody>
                        {closedworkflowList}
                        </tbody>
                    </Table>
                </Container>
            </div>
        );
    }
}


export default WorkflowList;