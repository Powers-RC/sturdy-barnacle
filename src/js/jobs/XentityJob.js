import React, { Component } from 'react';

export class XentityJob extends Component{
    render(){
        return(
            <div className="work-details-section">
                <h3>Data Analyst</h3>
                <h4>December 2017 - January 2020</h4>
                <ul>
                    <li>
                        Assisted in the design and implementation of an enterprise framework through the
                        collection, classification, and database implementation of CDOT organizational information. 
                        <br/>
                        <br/>
                        (Posgresql/Neo4j, Liquibase/Liquigraph, Python)
                        <br/>
                        <br/>
                    </li>
                    <li>
                        Developed several reports and metrics to update stakeholders on progress of information collection over time.
                        <br/>
                        <br/>
                        (PowerBI, Qlik) 
                        <br/>
                        <br/>
                    </li>
                    <li>
                        Helped develop a data management tool to better serve our team in the audit and updating of collected 
                        information.
                        <br/>
                        <br/>
                        (React, Apollo, GraphQL)
                        <br/>
                        <br/>
                    </li>
                </ul>
            </div>
        )
    }
}
