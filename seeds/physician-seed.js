const { User } = require("../models")

const physicianData = [
    {
        id: 1224563780,
        first_name: "Kathy",
        last_name: "Long",
        email: "kathy.long@dochub.com",
        username: "",
        password: "",
        // npi: "1224563780",
    },
    {
        id: 5466789955,
        first_name: "Wassim",
        last_name: "Samra",
        email: "wassim.samra@dochub.com",
        username: "",
        password: "",
        // npi: "5466789955",
    },
    {
        id: 3356722334,
        first_name: "Miranda",
        last_name: "Diaz",
        email: "miranda.diaz@dochub.com",
        username: "",
        password: "",
        // npi: "3356722334",
    }
]
const seedPhysician = async () => {
    try {
      await User.bulkCreate(physicianData);
      console.log("Physicians were seeded!");
    } catch (error) {
      console.error("Error with seeding physicians", error);
    }
  };
  
  module.exports = seedPhysician;