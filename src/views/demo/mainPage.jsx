import React from "react";
import PropTypes from "prop-types";
// react plugin for creating charts
//import ChartistGraph from "react-chartist";
// @material-ui/core
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons

// core components
import Table from "components/Table/Table.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";

import { bugs, website, server } from "variables/general.jsx";

import mainStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx";

class MainPage extends React.Component {
    state = {
        value : 0,
        data : []
    };
    componentDidMount(){
        fetch('http://localhost:3001/board',{
            method: 'post',
            dataType: 'json',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            response.json().then((responseData) => {
                let tdata = [];
                responseData.userData.forEach(data => {
                    tdata.push([data.name, data.country, data.city, '$' + data.salary]);
                });
                this.setState({data: tdata});
            }).catch((error) => {
                console.log('Error fetching man',error);
            });
        });
    }
    handleChange = (event, value) => {
        this.setState({ value });
    };

    handleChangeIndex = index => {
        this.setState({ value: index });
    };
    render() {
        const { classes } = this.props;

        return (
            <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                    <Card>
                        <CardHeader color="primary">
                            <h4 className={classes.cardTitleWhite}>테스트 게시판</h4>
                            <p className={classes.cardCategoryWhite}>
                                nodejs를 사용한 데이터 가져오기
                            </p>
                        </CardHeader>
                        <CardBody>
                            <Table
                                tableHeaderColor="primary"
                                tableHead={["Name", "Country", "City", "Salary"]}
                                tableData={this.state.data}
                            />
                        </CardBody>
                    </Card>
                </GridItem>
            </GridContainer>
        );
    }
}

MainPage.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(mainStyle)(MainPage);
