import React, { useEffect, useState } from "react";
import Dropdown from "./Dropdown";
import Card from "./Card";

const Filters = () => {
  const [FilteredData, setFilteredData] = useState([]);
  const [filtersData, setFiltersData] = useState({
    location: "All",
    title: "All",
    rating: "All",
  });

  const handleFilterChange = (name, value) => {
    setFiltersData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const gymData = [
    {
      id: 1,
      title: "Chiesel 2.0",
      image:
        "https://fitverse.fit/assets/avator/upload/gym/850355532img2331jpg.JPG",
      description:
        "Chisel fitness club welcomes you all to Amravati's Biggest & Advanced Unisex Cardio section. You will get access to Gym, Zumba and Steambath under one flexible membership. Apart from just being fitness center you will be the part of a family performing different activities.",
      rating: 4.5,
      location: "Radha Nagar",
    },
    {
      id: 2,
      title: "Chiesel Fitness ",
      image:
        "https://fitverse.fit/assets/avator/upload/gym/239470366img2424jpg.JPG",
      description:
        "Chisel fitness club welcomes you all to Amravati's Biggest & Advanced Unisex Cardio & Crossfit section. You will get access to Gym, Zumba and Steambath under one flexible membership.",
      rating: 4.6,
      location: "Radha Nagar",
    },
    {
      id: 3,
      title: "Oh Yes Fitness",
      image:
        "https://fitverse.fit/assets/avator/upload/gym/985026496img31441jpg.jpg",
      description:
        "Oh Yes Fitess welcomes you all to Amravati's Biggest & Advanced Unisex Cardio & Crossfit section. You will get access to Gym, Zumba and Steambath under one flexible membership.",
      rating: 4.7,
      location: "Radha Nagar",
    },
    {
      id: 4,
      title: "Talwalkars Gym",
      image:
        "https://fitverse.fit/assets/avator/upload/gym/918668304img0148jpg.JPG",
      description:
        "Talwalkars, is one of the India’s reputed chain of Gyms & Fitness centres providing high class fitness training & spreading fitness since 1932",
      rating: 4.8,
      location: "Next Level Mall",
    },
    {
      id: 5,
      title: "Fitness Arena",
      image:
        "https://fitverse.fit/assets/avator/upload/gym/650442482img0026jpg.JPG",
      description:
        "Fitness Arena ,Sadguru Sankul , Sadguru Dham Colony, Guruchhaya Colony, Sai Nagar, Amravati, Maharashtra 444606",
      rating: 4.9,
      location: "Sadguru Sankul",
    },
    {
      id: 6,
      title: "Sparta the Gym",
      image:
        "https://fitverse.fit/assets/avator/upload/gym/585471493039a3002jpg.JPG",
      description:
        "Sparta The Gym is the best fitness studio you will find in Amravati. We have 1800 sq ft of dedicated weight training section and top notch jerai equipments and machines to help you achieve your fitness goals.",
      rating: 4.9,
      location: "Kusumba Vihar",
    },
    {
      id: 7,
      title: "Raw Fitness Gym",
      image:
        "https://fitverse.fit/assets/avator/upload/gym/138071260whatsappimage2023-04-28at005207jpg.jpg",
      description:
        "At Amravati's premier fitness gym, we take pride in being the first choice for fitness enthusiasts like you. Our state-of-the-art facility is meticulously designed to empower you on your journey towards achieving your fitness goals. We understand that each person's fitness aspirations are unique, and that's why we offer a diverse range of cutting-edge equipment, expert trainers, and personalized programs tailored to your specific needs.",
      rating: 4.0,
      location: "New Cotton Market",
    },
    {
      id: 8,
      title: "Athlean Fitness",
      image:
        "https://fitverse.fit/assets/avator/upload/gym/90338292725a7852jpg.jpg",
      description:
        "Athlean Fitness World is excited to extend a warm welcome to all fitness enthusiasts in Amravati! Step into our facility and experience Amravati's largest and most advanced Unisex Cardio and Crossfit section. We've designed this space with your fitness goals in mind, offering state-of-the-art equipment and expert guidance to help you achieve your fitness aspirations. Our Cardio section boasts the latest machines and technology to optimize your cardiovascular health, while our Crossfit area is fully equipped with everything you need for intense and effective functional training. Join us on this incredible fitness journey and let Athlean Fitness World be your partner in achieving your health and wellness goals.",
      rating: 4.2,
      location: "Bhende Business Park",
    },

    {
      id: 10,
      title: "Welliesta Fitness",
      image:
        "https://fitverse.fit/assets/avator/upload/gym/359872073whatsappimage2023-06-17at085131jpg.jpg",
      description:
        "Raashi Trinity, Nalanda Colony, Guruchhaya Colony, Sai Nagar, Amravati, Maharashtra 444607, India",
      rating: 3.3,
      location: "Sai Nagar",
    },
  ];

  const [filters, setFilters] = useState([
    {
      name: "location",
      title: "Select Location",
      values: ["All"],
    },
    {
      name: "title",
      title: "Select Gym",
      values: ["All"],
    },
    {
      name: "rating",
      title: "Select Rating",
      values: ["All"],
    },
  ]);

  const handleSubmit = () => {
    console.log("Clicked")
    const filtered = gymData.filter((record) => {
      const fields = {
        location: record.location,
        title: record.title,
        rating: record.rating,
      };
      console.log(fields)
      return (
        (!filtersData.location ||
          (fields["location"] &&
            fields["location"]
              .toLowerCase()
              .includes(filtersData.location.toLowerCase())) ||filtersData["location"] === "All") &&
        (!filtersData["title"] ||
          fields["title"]
            .toLowerCase()
            .includes(filtersData["title"].toLowerCase()) || filtersData["title"] === "All") &&
          (!filtersData["rating"] ||
          parseFloat(fields["rating"]) ===  
            parseFloat( filtersData["rating"]) || filtersData["rating"] === "All" )
        
      );
    });
    setFilteredData(filtered);
  }
console.log(FilteredData)
  useEffect(() => {
    const updatedFilters = filters.map((filter) => {
      const newValues = new Set();

      gymData.forEach((record) => {
        const fields = {
          location: record.location,
          title: record.title,
          rating: record.rating,
        };
        const fieldTitle = filter.name;

        if (fields && fields[fieldTitle]) {
          const value = fields[fieldTitle];
          if (!filter.values.includes(value)) {
            newValues.add(value);
          }
        }
      });
      return {
        ...filter,
        values: filter.values.concat(Array.from(newValues)),
      };
    });

    setFilters(updatedFilters);

    setFilteredData(gymData);
  }, []);

  return (
    <div className="flex justify-center flex-col items-center -z-10">
      <div className="flex lg:flex-row flex-col w-full font-Inter lg:justify-center justify-start items-center gap-10">
        {filters.map((filter) => (
          <Dropdown
          Values={filter.values}
            title={filter.title}
            name={filter.name}
            selectedOption={filtersData[filter.name]}
            onChange={handleFilterChange}
            isViewSelect={false}
          />
        ))}
        <div>
          <button onClick={handleSubmit} className="bg-white text-[#858C94] font-medium text-lg border-2 border-[#E8E7E4] translate-y-3 font-Inter rounded-lg py-3 px-8">
            Submit
          </button>
        </div>
      </div>
<br/>
<br/>
<br/>
<br/>
      <div class="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 px-5 max-w-7xl ">
{FilteredData.map((data) => (



  <Card
    key={data.id}
    title={data.title}
    description={data.description}
    image={data.image}
    rating={data.rating}
  />
))
}

</div>
    </div>
  );
};

export default Filters;
