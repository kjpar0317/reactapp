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
        value: 0
    };
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
                                tableData={[
                                    ["Dakota Rice", "Niger", "Oud-Turnhout", "$36,738"],
                                    ["Minerva Hooper", "Curaçao", "Sinaai-Waas", "$23,789"],
                                    ["Sage Rodriguez", "Netherlands", "Baileux", "$56,142"],
                                    ["Philip Chaney", "Korea, South", "Overland Park", "$38,735"],
                                    ["Doris Greene", "Malawi", "Feldkirchen in Kärnten", "$63,542"],
                                    ["Mason Porter", "Chile", "Gloucester", "$78,615"]
                                ]}
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
