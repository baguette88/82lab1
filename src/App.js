import React, { Component } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";

import birdName from "./data.js";

// const birds = [
//   {
//     birdName: "Royal Flycatcher",
//     image: "http://media.galaxant.com/000/072/608/desktop-1410170762.png",
//     user: "Veloria",
//     approved: false,
//   },
//   {
//     birdName: "Resplendent Quetzal",
//     image: "http://media.galaxant.com/000/072/604/desktop-1410170753.png",
//     user: "Allison",
//     approved: false,
//   },
//   {
//     birdName: "Livingstone's Turaco",
//     image: "http://media.galaxant.com/000/072/594/desktop-1410170731.png",
//     user: "Rosa",
//     approved: true,
//   },
//   {
//     birdName: "Superb Bird-of-paradise",
//     image:
//       "http://www.funcage.com/blog/wp-content/uploads/2011/08/Superb-Bird-of-paradise.jpg",
//     user: "Alexander",
//     approved: false,
//   },
//   {
//     birdName: "Tweet_r",
//     image: "https://i.imgur.com/VGAxKX1.png",
//     user: "Debbie",
//     approved: false,
//   },
//   {
//     birdName: "King Vulture",
//     image:
//       "https://kids.nationalgeographic.com/content/dam/kids/photos/articles/Other%20Explore%20Photos/R-Z/Wacky%20Weekend/Strange%20Birds/ww-birds-king-vulture.adapt.945.1.jpg",
//     user: "Gibson",
//     approved: true,
//   },
//   {
//     birdName: "Secretary Bird",
//     image:
//       "https://kids.nationalgeographic.com/content/dam/kids/photos/articles/Other%20Explore%20Photos/R-Z/Wacky%20Weekend/Strange%20Birds/ww-birds-secretary-bird.jpg",
//     user: "Harold",
//     approved: true,
//   },
//   {
//     birdName: "Frilled Coquette Hummingbird",
//     image:
//       "https://78.media.tumblr.com/10ad7398c6cabffe666159b09bf50e57/tumblr_nzt5dl55QF1u38l26o1_500.jpg",
//     user: "Maude",
//     approved: false,
//   },
//   {
//     birdName: "Boat-billed Heron",
//     image:
//       "https://i.redditmedia.com/sl3adn3eXY65Y4yNLxMRO_O4y-Pf1EYCxPuHpV34WqI.jpg?fit=crop&crop=faces%2Centropy&arh=2&w=640&s=f461fa6cd525892f85eb89268550867a",
//     user: "Bill",
//     approved: true,
//   },
//   {
//     birdName: "Ex-Parrot",
//     image:
//       "https://static.independent.co.uk/s3fs-public/thumbnails/image/2014/07/14/15/MPP.jpg?w968h681",
//     user: "Monty",
//     approved: false,
//   },
// ];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      birdName: birdName,
      image: "",
      user: "",
      approved: "0:00",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    const newBird = {
      image: this.state.image,
      user: this.state.user,
      approved: this.state.approved,
    };

    const updatedBirds = [...this.state.birdName, newBird];

    this.setState({
      birdName: updatedBirds,
      image: "",
      user: "",
      approved: "0:00",
    });
  }

  render() {
    return (
      <div>
        <Header />
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="image">
            Bird
            <input
              type="text"
              id="image"
              value={this.state.image}
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor="user">
            user
            <input
              type="text"
              id="user"
              value={this.state.user}
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor="approved">
            approved
            <input
              type="boolean"
              id="approved"
              value={this.state.approved}
              onChange={this.handleChange}
            />
          </label>
          <label>
            <input type="submit" />
          </label>
        </form>
        <main>
          <div>
            <h3>B1rd3</h3>
            <table>
              <thead>
                <tr>
                  <th>Bird</th>
                  <th>Name</th>
                  <th>User</th>
                </tr>
              </thead>
              <tbody>
                {this.state.birdName.map((Bird, index) => {
                  return (
                    <tr key={index}>
                      <td>
                        {" "}
                        <img src={Bird.image} alt="boopnpm start"></img>{" "}
                      </td>
                      <td>{Bird.birdName}</td>
                      <td>{Bird.user}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
