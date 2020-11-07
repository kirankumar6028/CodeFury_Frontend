import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView } from 'react-native'
import { Header,SearchBar, cardList,Icon,ListItem,Card } from 'react-native-elements';
import cards from "./Cards";


export default class Home extends Component {

    

    state = {
        search: '',
      };

      //updating value of search bar
      updateSearch = (search) => {
        this.setState({ search });
      };
    
    
    render() {
        const { search } = this.state;
        
 
        return (
            <ScrollView>
                <View>
                    <Header
                        leftComponent={{ icon: 'menu', color: '#fff' }}
                        centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
                        rightComponent={{ icon: 'home', color: '#fff' }}
                    />
                    <SearchBar
                        placeholder="Search Here..."
                        onChangeText={this.updateSearch}
                        value={search}
                    />

                    <Card.Title style={{marginTop:10}}>Workers</Card.Title>
                
                    <Card containerStyle={{padding: 0}} >
                    {
                        cards.map((u, i) => {
                        return (
                            <ListItem
                            key={i}
                            roundAvatar
                            title={u.name}
                            leftAvatar={{ source: { uri: u.avatar } }}
                            />
                        );
                        })
                    }
                    </Card>

                </View> 
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
      }
})
