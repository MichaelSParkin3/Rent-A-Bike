/*
News Component:
Component that generates Card Components filled with data from JSON and showcases them in a container.
*/

import React, { Component } from 'react';
import Card from './Card';

//Dummy JSON data
var newsJSON = [
  {
    id: '1',
    author: 'Dan Newman',
    img: '/img/news1.jpg',
    info:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi aliquet erat sit amet neque tristique, eu sodales justo eleifend. Duis nibh urna, imperdiet at ligula accumsan, vulputate maximus nisl.',
    tags: ['Rental', 'Bikes'],
    name: 'Bike Renting and Touring '
  },
  {
    id: '2',
    author: 'Trish Pahn',
    img: '/img/news2.jpg',
    info:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi aliquet erat sit amet neque tristique, eu sodales justo eleifend. Duis nibh urna, imperdiet at ligula accumsan, vulputate maximus nisl.',
    tags: ['Sport', 'Bikes'],
    name: 'Long-distance Biking'
  },
  {
    id: '3',
    author: 'Kyle Elm',
    img: '/img/news3.jpg',
    info:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi aliquet erat sit amet neque tristique, eu sodales justo eleifend. Duis nibh urna, imperdiet at ligula accumsan, vulputate maximus nisl.',
    tags: ['Rental', 'Bikes'],
    name: '10 Reasons To Start Biking'
  }
];

export default class News extends Component {
  render() {
    return (
      <div classNameName="news">
        <div className="card-deck">
          {newsJSON.map(x => (
            <Card
              id={x.id}
              author={x.author}
              img={x.img}
              name={x.name}
              info={x.info}
              tags={x.tags}
            />
          ))}
        </div>
      </div>
    );
  }
}
