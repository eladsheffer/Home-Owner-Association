import React from 'react'
import { Accordion } from 'react-bootstrap'
import TenantComp from '../components/TenantComp';


class TenantList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0,
        }


    }

    render() {
        const { tenants,activeUser } = this.props;

        // let tenantCards = [];
        // for (var i = 0; i < tenant.length; i++) {

        //     let messageCard = <TenantComp dataKey={i} tenantData={tenants[i]}  />
        //     tenantCards.push(tenantCard);

        // }

        const tenantCards = tenants.map((tenant, index) => <TenantComp dataKey={index} tenantData={tenant}  deleteTenant={this.props.deleteTenant} updateTenant={this.props.updateTenant} activeUser={activeUser} />)

        return (
            <div>
                <Accordion defaultActiveKey="0">
                    {tenantCards}
                </Accordion>  
            </div>

        );
    }
}


export default TenantList;
