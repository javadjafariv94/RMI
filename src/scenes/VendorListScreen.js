import React, { Component } from "react";
import { View, StyleSheet,ListView } from "react-native";
import VendorItem from "../components/VendorItem";


const ds = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1 !== r2
});
export default class VendorListScreen extends Component {
    constructor(probs) {
        super(probs);

        this.state = {
            isLoading: true,
            dataSource: ds.cloneWithRows([])
        };
    }
    renderRow(rowData, ...rest) {

        const index = parseInt(rest[1], 10);
        return <VendorItem  navigation={this.props.screenProps.navigation} index={index} />;
    }
    render() {
        return (
            <View>

                <ListView
                    contentContainerStyle={styles.list}
                    dataSource={this.state.dataSource}
                    removeClippedSubviews={false}
                    renderRow={this.renderRow.bind(this)}
                />
            </View>
        );
    }

    componentWillMount() {

        // axios.get('http://RMInno.com/api/v1/rep/vendor/1')
        //     .then(response => this.setState({
        //         isLoading: false,
        //         dataSource: ds.cloneWithRows(response.data),
        //     }))
        //     .catch(error => console.log(error));
    }
}
const styles = StyleSheet.create({
    list: {
        justifyContent: "center",
        paddingBottom: 5
    }
}); 