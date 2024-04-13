import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import axios from 'axios';
import LaptopDetail from './LaptopDetail';

class LaptopList extends Component {
    state = {
        cars: [],
        loading: true
    };

    componentDidMount() {
        axios.get('https://my-json-server.typicode.com/rohitpatil03/mockapi/laptops')
            .then((res) => {
                this.setState({ cars: res.data, loading: false });
            })
            .catch((error) => {
                console.error('Error fetching data: ', error);
                this.setState({ loading: false });
            });
    }

    render() {
        const { cars, loading } = this.state;
        //console.log(this.state)
        if (loading) {
            return (
                <View>
                    <Text>Loading..</Text>
                </View>
            );
        }

        return (
            <ScrollView>
                <View>
                    {cars.map((carBrand, index) => (
                        <View key={index}>
                            <LaptopDetail
                                {...carBrand}
                            />
                        </View>
                    ))}
                </View>
            </ScrollView>
        );
    }
}


export default LaptopList;