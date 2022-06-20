import React from "react";

const Services = () => {
  const services = [
    {
      id: 1,
      head: "Development",
      icon: "M7 42Q5.8 42 4.9 41.1Q4 40.2 4 39V14.35Q4 13.15 4.9 12.25Q5.8 11.35 7 11.35H16.5V7Q16.5 5.8 17.4 4.9Q18.3 4 19.5 4H28.5Q29.7 4 30.6 4.9Q31.5 5.8 31.5 7V11.35H41Q42.2 11.35 43.1 12.25Q44 13.15 44 14.35V39Q44 40.2 43.1 41.1Q42.2 42 41 42ZM19.5 11.35H28.5V7Q28.5 7 28.5 7Q28.5 7 28.5 7H19.5Q19.5 7 19.5 7Q19.5 7 19.5 7ZM7 39H41Q41 39 41 39Q41 39 41 39V14.35Q41 14.35 41 14.35Q41 14.35 41 14.35H7Q7 14.35 7 14.35Q7 14.35 7 14.35V39Q7 39 7 39Q7 39 7 39ZM7 39Q7 39 7 39Q7 39 7 39V14.35Q7 14.35 7 14.35Q7 14.35 7 14.35Q7 14.35 7 14.35Q7 14.35 7 14.35V39Q7 39 7 39Q7 39 7 39Z",
      body: "Create a platform with the best and coolest quality from us.",
      bg: "blue",
      color: "#5454D4",
    },
    {
      id: 2,
      head: "UI/UX Designer",
      icon: "M16.45 13V35ZM36.05 38V10H42V38ZM13.45 38V10H34.55V38ZM6 38V10H11.95V38ZM16.45 35H31.55V13H16.45Z",
      body: "We provide UI/UX Design services, and of course with the best quality",
      color: "#F04037",
      bg: "red",
    },
    {
      id: 3,
      head: "Graphik Designer",
      icon: "M7 42Q5.8 42 4.9 41.1Q4 40.2 4 39V14.35Q4 13.15 4.9 12.25Q5.8 11.35 7 11.35H16.5V7Q16.5 5.8 17.4 4.9Q18.3 4 19.5 4H28.5Q29.7 4 30.6 4.9Q31.5 5.8 31.5 7V11.35H41Q42.2 11.35 43.1 12.25Q44 13.15 44 14.35V39Q44 40.2 43.1 41.1Q42.2 42 41 42ZM19.5 11.35H28.5V7Q28.5 7 28.5 7Q28.5 7 28.5 7H19.5Q19.5 7 19.5 7Q19.5 7 19.5 7ZM7 39H41Q41 39 41 39Q41 39 41 39V14.35Q41 14.35 41 14.35Q41 14.35 41 14.35H7Q7 14.35 7 14.35Q7 14.35 7 14.35V39Q7 39 7 39Q7 39 7 39ZM7 39Q7 39 7 39Q7 39 7 39V14.35Q7 14.35 7 14.35Q7 14.35 7 14.35Q7 14.35 7 14.35Q7 14.35 7 14.35V39Q7 39 7 39Q7 39 7 39Z",
      body: "We provide Graphic Design services, with the best designers",
      bg: "yellow",
      color: "#FEDC5A",
    },
    {
      id: 4,
      head: "Motion Graphik",
      icon: "M7 43.95Q5.8 43.95 4.9 43.075Q4 42.2 4 40.95V11Q4 9.8 4.9 8.9Q5.8 8 7 8H16L24 -0.05L32 8H41Q42.2 8 43.1 8.9Q44 9.8 44 11V40.95Q44 42.2 43.1 43.075Q42.2 43.95 41 43.95ZM7 40.95H41Q41 40.95 41 40.95Q41 40.95 41 40.95V11Q41 11 41 11Q41 11 41 11H30.75L24 4.25L17.25 11H7Q7 11 7 11Q7 11 7 11V40.95Q7 40.95 7 40.95Q7 40.95 7 40.95ZM12 35.95V16H36V35.95ZM15 32.95V19V32.95ZM15 32.95H33V19H15Z",
      body: "Create a platform with the best and coolest quality from us.",
      bg: "yellow",
      color: "#FEDC5A",
    },
    {
      id: 5,
      head: "Photography",
      icon: "M24 35Q27.6 35 30.225 32.4Q32.85 29.8 32.85 26.15Q32.85 22.55 30.225 19.925Q27.6 17.3 24 17.3Q20.35 17.3 17.75 19.925Q15.15 22.55 15.15 26.15Q15.15 29.8 17.75 32.4Q20.35 35 24 35ZM24 33.35 21.75 28.25 16.8 26.2 21.75 24.1 24 19 26.2 24.1 31.15 26.2 26.2 28.25ZM7 42Q5.8 42 4.9 41.1Q4 40.2 4 39V13.35Q4 12.2 4.9 11.275Q5.8 10.35 7 10.35H14.35L18 6H30L33.65 10.35H41Q42.15 10.35 43.075 11.275Q44 12.2 44 13.35V39Q44 40.2 43.075 41.1Q42.15 42 41 42ZM41 39Q41 39 41 39Q41 39 41 39V13.35Q41 13.35 41 13.35Q41 13.35 41 13.35H32.25L28.6 9H19.4L15.75 13.35H7Q7 13.35 7 13.35Q7 13.35 7 13.35V39Q7 39 7 39Q7 39 7 39ZM24 26.15Q24 26.15 24 26.15Q24 26.15 24 26.15Q24 26.15 24 26.15Q24 26.15 24 26.15Q24 26.15 24 26.15Q24 26.15 24 26.15Q24 26.15 24 26.15Q24 26.15 24 26.15Z",
      body: "We provide Photography services, and of course with the best quality",
      bg: "blue",
      color: "#5454D4",
    },
    {
      id: 6,
      head: "Videography",
      icon: "M18.3 22.1 16.6 26 12.7 27.7 16.6 29.4 18.3 33.3 20 29.4 23.9 27.7 20 26ZM31.6 21.5 30.35 24.2 27.65 25.45 30.35 26.7 31.6 29.4 32.85 26.7 35.55 25.45 32.85 24.2ZM7 8 10.7 15.6H17.2L13.5 8H17.95L21.65 15.6H28.15L24.45 8H28.9L32.6 15.6H39.1L35.4 8H41Q42.2 8 43.1 8.9Q44 9.8 44 11V37Q44 38.2 43.1 39.1Q42.2 40 41 40H7Q5.8 40 4.9 39.1Q4 38.2 4 37V11Q4 9.8 4.9 8.9Q5.8 8 7 8ZM7 18.6V37Q7 37 7 37Q7 37 7 37H41Q41 37 41 37Q41 37 41 37V18.6ZM7 18.6V37Q7 37 7 37Q7 37 7 37Q7 37 7 37Q7 37 7 37Z",
      body: "Create a platform with the best and coolest quality from us.",
      color: "#F04037",
      bg: "red",
    },
  ];
  return (
    <div className="services">
      <div className="headWord">The service we provide for you</div>
      <div className="body">
        {services.map((service) => (
          <div className="flex" key={service.id}>
            <div className={service.bg}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="45"
                fill={service.color}
              >
                <path d={service.icon} />
              </svg>
            </div>
            <div className="head c-cwb">{service.head}</div>
            <div className="innerbody c-cwl f-f20">{service.body}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
