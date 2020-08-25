'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert ("Profile", [{
      name: "Marc Berman",
      gender: "male",
      age: 37,
      friends_list: [],
      hobbies: ["softball", "bbq", "hiking", "shuffleboard", "snowboarding"],
      bio: "Subway tile hoodie cloud bread authentic twee 90's tilde williamsburg actually woke disrupt vaporware XOXO craft beer. Viral tofu edison bulb vaporware farm-to-table photo booth offal fixie heirloom cold-pressed seitan godard kale chips. Green juice art party mlkshk taxidermy tattooed. Literally locavore street art pabst, taxidermy ugh fixie austin helvetica PBR&B.",
      img_url: "https://images.pexels.com/photos/3014856/pexels-photo-3014856.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      name: "Cecilia Curry",
      gender: "female",
      age: 25,
      friends_list: [],
      hobbies: ["cooking", "rollerblading", "hiking", "dance"]
      bio: "Subway tile hoodie cloud bread authentic twee 90's tilde williamsburg actually woke disrupt vaporware XOXO craft beer. Viral tofu edison bulb vaporware farm-to-table photo booth offal fixie heirloom cold-pressed seitan godard kale chips. Green juice art party mlkshk taxidermy tattooed. Literally locavore street art pabst, taxidermy ugh fixie austin helvetica PBR&B.",
      img_url: "https://images.pexels.com/photos/3622643/pexels-photo-3622643.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      name: "Frank Bigelow",
      gender: "male",
      age: 52,
      friends_list: [],
      hobbies: ["cooking", "rodeo", "football", "coaching", "politics"],
      bio: "Subway tile hoodie cloud bread authentic twee 90's tilde williamsburg actually woke disrupt vaporware XOXO craft beer. Viral tofu edison bulb vaporware farm-to-table photo booth offal fixie heirloom cold-pressed seitan godard kale chips. Green juice art party mlkshk taxidermy tattooed. Literally locavore street art pabst, taxidermy ugh fixie austin helvetica PBR&B.",
      img_url: "https://www.assembly.ca.gov/sites/assembly.ca.gov/files/memberphotos/AD05-Frank_Bigelow.jpg",
    },
    {
      name: "Tasha Horvath",
      gender: "female",
      age: 45,
      friends_list: [],
      hobbies: ["cooking", "hiking", "rock climbing", "scale miniature building"],
      bio: "Subway tile hoodie cloud bread authentic twee 90's tilde williamsburg actually woke disrupt vaporware XOXO craft beer. Viral tofu edison bulb vaporware farm-to-table photo booth offal fixie heirloom cold-pressed seitan godard kale chips. Green juice art party mlkshk taxidermy tattooed. Literally locavore street art pabst, taxidermy ugh fixie austin helvetica PBR&B.",
      img_url: "https://images.pexels.com/photos/3014856/pexels-photo-3014856.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      name: "Autumn Burke",
      gender: "female",
      age: 27,
      friends_list: [],
      hobbies: ["cooking", "swimming", "snowboarding", "rock climbing", "reading"],
      bio: "Subway tile hoodie cloud bread authentic twee 90's tilde williamsburg actually woke disrupt vaporware XOXO craft beer. Viral tofu edison bulb vaporware farm-to-table photo booth offal fixie heirloom cold-pressed seitan godard kale chips. Green juice art party mlkshk taxidermy tattooed. Literally locavore street art pabst, taxidermy ugh fixie austin helvetica PBR&B.",
      img_url: "https://www.assembly.ca.gov/sites/assembly.ca.gov/files/memberphotos/ad62_burke2.jpg",
    },
    {
      name: "Ian Calderon",
      gender: "male",
      age: 22,
      friends_list: [],
      hobbies: ["cooking", "softball", "hiking", "running", "guitar"],
      bio: "Subway tile hoodie cloud bread authentic twee 90's tilde williamsburg actually woke disrupt vaporware XOXO craft beer. Viral tofu edison bulb vaporware farm-to-table photo booth offal fixie heirloom cold-pressed seitan godard kale chips. Green juice art party mlkshk taxidermy tattooed. Literally locavore street art pabst, taxidermy ugh fixie austin helvetica PBR&B.",
      img_url: "https://www.assembly.ca.gov/sites/assembly.ca.gov/files/memberphotos/AD57.jpg",
    },
    {
      name: "Cristina Garcia",
      gender: "female",
      age: 27,
      friends_list: [],
      hobbies: ["photography", "hiking", "skateboarding", "surfing", "snowboarding"],
      bio: "Subway tile hoodie cloud bread authentic twee 90's tilde williamsburg actually woke disrupt vaporware XOXO craft beer. Viral tofu edison bulb vaporware farm-to-table photo booth offal fixie heirloom cold-pressed seitan godard kale chips. Green juice art party mlkshk taxidermy tattooed. Literally locavore street art pabst, taxidermy ugh fixie austin helvetica PBR&B.",
      img_url: "https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      name: "Sabrina Cervantes",
      gender: "female",
      age: 29,
      friends_list: [],
      hobbies: ["music", "surfing", "snowboarding"],
      bio: "Subway tile hoodie cloud bread authentic twee 90's tilde williamsburg actually woke disrupt vaporware XOXO craft beer. Viral tofu edison bulb vaporware farm-to-table photo booth offal fixie heirloom cold-pressed seitan godard kale chips. Green juice art party mlkshk taxidermy tattooed. Literally locavore street art pabst, taxidermy ugh fixie austin helvetica PBR&B.",
      img_url: "https://www.assembly.ca.gov/sites/assembly.ca.gov/files/memberphotos/ad60_cervantes_roster150_20161205.jpg",
    },
    {
      name: "Ed Chau",
      gender: "male",
      age: 51,
      friends_list: [],
      hobbies: ["basketball", "theater", "fishing", "music"],
      bio: "Subway tile hoodie cloud bread authentic twee 90's tilde williamsburg actually woke disrupt vaporware XOXO craft beer. Viral tofu edison bulb vaporware farm-to-table photo booth offal fixie heirloom cold-pressed seitan godard kale chips. Green juice art party mlkshk taxidermy tattooed. Literally locavore street art pabst, taxidermy ugh fixie austin helvetica PBR&B.",
      img_url: "https://www.assembly.ca.gov/sites/assembly.ca.gov/files/memberphotos/AD49-Chau.jpg",
    },
    {
      name: "Laura Friedman",
      gender: "female",
      age: 25,
      friends_list: [],
      hobbies: ["theater", "dance", "reading", "wine tasting"],
      bio: "Subway tile hoodie cloud bread authentic twee 90's tilde williamsburg actually woke disrupt vaporware XOXO craft beer. Viral tofu edison bulb vaporware farm-to-table photo booth offal fixie heirloom cold-pressed seitan godard kale chips. Green juice art party mlkshk taxidermy tattooed. Literally locavore street art pabst, taxidermy ugh fixie austin helvetica PBR&B.",
      img_url: "https://www.assembly.ca.gov/sites/assembly.ca.gov/files/memberphotos/ad43_friedman.jpg",
    },
    {
      name: "Jesse Gabriel",
      gender: "male",
      age: 39,
      friends_list: [],
      hobbies: ["softball", "bbq", "hiking", "basketball", "snowboarding"],
      bio: "Subway tile hoodie cloud bread authentic twee 90's tilde williamsburg actually woke disrupt vaporware XOXO craft beer. Viral tofu edison bulb vaporware farm-to-table photo booth offal fixie heirloom cold-pressed seitan godard kale chips. Green juice art party mlkshk taxidermy tattooed. Literally locavore street art pabst, taxidermy ugh fixie austin helvetica PBR&B.",
      img_url: "https://www.assembly.ca.gov/sites/assembly.ca.gov/files/memberphotos/jgabriel.jpg",
    },
  ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Profile", null, {});
  }
};
