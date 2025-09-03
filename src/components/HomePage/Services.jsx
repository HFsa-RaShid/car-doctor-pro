import React from "react";

import ServiceCard from "../cards/ServiceCard";

const getServices = async () =>{
  const res = await fetch('http://localhost:3000/services/api/get-all');
  const services = res.json()
  return services;
}
const Services =async () => {
  const {services} =await getServices()
  return (
    <div className="container mx-auto">
      <h3>Services</h3>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {
          services.length>0 && services?.map((service) => (
            <ServiceCard service={service} key={service._id}></ServiceCard>
          ))
        }
        </div>
    </div>
  );
};

export default Services;
