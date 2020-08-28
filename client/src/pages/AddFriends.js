import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"
import Cards from "../Components/Cards";
import LogoutBtn from "../Components/LogoutBtn"
// import axios from "axios"
import API from "../utils/API"




const Addfriends = () => {
  let userData = window.localStorage.getItem('user')
  // let userID = userData.id;
  // const {id} = (userData.id) 
  console.log(userData, userData.id)
  const [profile, setProfile] = useState([])
  const state = {


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
        console.log(res.data)
        setProfile(res.data)
      })
  }

  const addBuddy = (id) => {
    console.log("friend id " + id)
    // let friends = {
    //   // user: userID,
    //   friend: id
    // }
    API.updateProfile(id) 
      .then(function (response) {
        console.log(response)
      })
      .catch(err => console.log(err))
  }

  return (
    <> <LogoutBtn />
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
            <>
              <Cards
                name={friend.firstName + " " + friend.lastName}
                hobby={friend.hobby}
                image={friend.files}
                id={friend.id}
                key={i}

              addBuddy={addBuddy}
              />
              {/* <button onClick={addBuddy} className="btn btn-info add">
                Add to Friend Zone!
        </button> */}
            </>

          ))
        }
      </Carousel>
    </>
  )
}

export default Addfriends;


 // const responsive = {
  //           desktop: {
  //             breakpoint: { max: 3000, min: 1024 },
  //             items: 3,
  //             slidesToSlide: 3 // optional, default to 1.
  //           },
  //           tablet: {
  //             breakpoint: { max: 1024, min: 464 },
  //             items: 2,
  //             slidesToSlide: 2 // optional, default to 1.
  //           },
  //           mobile: {
  //             breakpoint: { max: 464, min: 0 },
  //             items: 1,
  //             slidesToSlide: 1 // optional, default to 1.
  //           }
  //         };
  // return (
  //     <> <LogoutBtn />
  //       <Carousel
  //         swipeable={false}
  //         draggable={false}
  //         showDots={true}
  //         responsive={responsive}
  //         ssr={true} // means to render carousel on server-side.
  //         infinite={true}
  //         //   autoPlay={this.props.deviceType !== "mobile" ? true : false}
  //         autoPlaySpeed={10000}
  //         keyBoardControl={true}
  //         customTransition="all .5"
  //         transitionDuration={500}
  //         containerClass="carousel-container"
  //         //   removeArrowOnDeviceType={["tablet", "mobile"]}
  //         //   deviceType={this.props.deviceType}
  //         dotListClass="custom-dot-list-style"
  //         itemClass="carousel-item-padding-40-px"
  //       >
          // {friends.map((friend, i) => 