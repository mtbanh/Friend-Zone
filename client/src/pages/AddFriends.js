import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Cards from "../Components/Cards"
// import axios from "axios"
import API from "../utils/API"



const Addfriends = () => {
  const [profile, setProfile] = useState([])
  const state = {
   

    // componentDidMount() {
    //   axios.get(`https://jsonplaceholder.typicode.com/users`)
    //     .then(res => {
    //       const friends = res.data;
    //       this.setState({ friends });
    //     })
    // },

    // class Addfriends extends React.Component {
    //   state = {
    //     friends: [
    //       {
    //         id: 1,
    //         name: "John",
    //         hobbies: ["cooking", "basketball", "hiking"],
    //         image: "https://www.biography.com/.image/t_share/MTE4MDAzNDEwNzg5ODI4MTEw/barack-obama-12782369-1-402.jpg"
    //       },
    //       {
    //         id: 2,
    //         name: "Bill",
    //         hobbies: ["cooking", "basketball", "hiking"],
    //         image: "https://cdn.britannica.com/s:800x450,c:crop/43/172743-138-545C299D/overview-Barack-Obama.jpg"
    //       },
    //       {
    //         id: 3,
    //         name: "Bill",
    //         hobbies: ["cooking", "basketball", "hiking"],
    //         image: "https://cdn.cnn.com/cnnnext/dam/assets/200818105342-obama-munich-large-169.jpg"
    //       },
    //       {
    //         id: 4,
    //         name: "Sue",
    //         hobbies: ["cooking", "basketball", "hiking"],
    //         image: "https://image.cnbcfm.com/api/v1/image/104656161-GettyImages-688156110.jpg?v=1532563778"
    //       },
    //       {
    //         id: 5,
    //         name: "Terry",
    //         hobbies: "cooking",
    //         image: "https://pbs.twimg.com/profile_images/822547732376207360/5g0FC8XX.jpg"
    //       },
    //       {
    //         id: 6,
    //         name: "Donald",
    //         hobbies: ["cooking", "basketball", "hiking"],
    //         image: "https://www.biography.com/.image/t_share/MTE4MDAzNDEwNzg5ODI4MTEw/barack-obama-12782369-1-402.jpg"
    //       }
    //     ],

    responsive: {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 3 // optional, default to 1.
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2 // optional, default to 1.
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
      }
    }
  }
  useEffect(() => {
    getProfiles()
  }, []);

  const getProfiles = () => {
    API.getProfiles()
      .then(res => {
        setProfile(res.data)
      })
  }

  const addBuddy = (id) => {
    console.log("friend id " + id)
    var userId = 1
    API.updateProfile(userId, { friendId: id })
      .then(function (response) {
        console.log(response)
      })
    // API.getProfile("LOGGED IN ID GOES HERE").then (res => {
    //   res.data.friends.push(id)
    //   API.updateProfile(id, res.data).then (res => {})})

  }

  return (
    <Carousel
      swipeable={false}
      draggable={false}
      showDots={true}
      responsive={state.responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      //   autoPlay={this.props.deviceType !== "mobile" ? true : false}
      autoPlaySpeed={10000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      //   removeArrowOnDeviceType={["tablet", "mobile"]}
      //   deviceType={this.props.deviceType}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      {
        profile.map((friend, i) => (
          <Cards
            name={friend.name}
            hobbies={friend.hobbies}
            image={friend.image}
            id={friend.id}
            addBuddy={addBuddy}
            key={i}
          />
        ))
      }
      {/* <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div> */}
    </Carousel>)
}

export default Addfriends;