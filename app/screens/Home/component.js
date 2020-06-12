/* eslint-disable no-plusplus */
/* eslint-disable no-console */
import React from 'react';
import { Container, Content, Header, Text, Title, Left, Right, View, Spinner } from 'native-base';
import styles from './styles';
import { FONT_HEADLINE5_PRIMARY } from '../../styles';
import Card from '../../components/elements/Card';
import { ENDPOINT } from '../../configs';
import images from '../../configs/images';

export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: '',
      loading: true
    };
  }
  componentDidMount() {
    this.fetchApi();
  }
  async fetchApi() {
    try {
      const result = await ENDPOINT.listMenu();
      this.setState({
        loading: false,
        items: result.data
      });
    } catch (error) {
      console.log(error);
    }
  }
  navigate(title) {
    // eslint-disable-next-line react/prop-types
    this.props.navigation.navigate('ListMenu', {
      title
    });
  }
  randomHeight() {
    return Math.floor(Math.random() * 80) + 150;
  }
  render() {
    if (this.state.loading) {
      return <Spinner color="#87CAFE" />;
    }
    const { items } = this.state;
    return (
      <Container>
        <Header style={styles.header}>
          <Left>
            <Title>
              <Text style={{ ...FONT_HEADLINE5_PRIMARY, fontWeight: 'bold' }}>Menu</Text>
            </Title>
          </Left>
          <Right />
        </Header>
        <Content>
          <View style={styles.menu}>
            <View style={styles.col_1}>
              <Card
                title={Object.keys(items)[0]}
                item={items[Object.keys(items)[0]]}
                imageURL={images.pizza}
                height={this.randomHeight()}
                onPress={() => this.navigate(Object.keys(items)[0])}
              />
              <Card
                title={Object.keys(items)[2]}
                item={items[Object.keys(items)[2]]}
                imageURL={images.sushi}
                height={this.randomHeight()}
                onPress={() => this.navigate(Object.keys(items)[2])}
              />
              <Card
                title={Object.keys(items)[4]}
                item={items[Object.keys(items)[4]]}
                imageURL={images.lunch}
                height={this.randomHeight()}
                onPress={() => this.navigate(Object.keys(items)[4])}
              />
            </View>
            <View style={styles.col_2}>
              <Card
                title={Object.keys(items)[3]}
                item={items[Object.keys(items)[3]]}
                imageURL={images.juice}
                height={this.randomHeight()}
                onPress={() => this.navigate(Object.keys(items)[3])}
              />
              <Card
                title={Object.keys(items)[1]}
                item={items[Object.keys(items)[1]]}
                imageURL={images.icecream}
                height={this.randomHeight()}
                onPress={() => this.navigate(Object.keys(items)[1])}
              />
              <Card
                title={Object.keys(items)[5]}
                item={items[Object.keys(items)[5]]}
                imageURL={images.salad}
                height={this.randomHeight()}
                onPress={() => this.navigate(Object.keys(items)[5])}
              />
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}
