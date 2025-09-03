import React from "react";
import {services} from '../../lib/services'
import ServiceCard from "../cards/ServiceCard";
const Services = () => {
  return (
    <div className="container mx-auto">
      <h3>Services</h3>
      <div className="grid grid-cols-1 lg:grid-cols-3">
        {
          services.map((service) => (
            <ServiceCard service={service} key={service._id}></ServiceCard>
          ))
        }
        </div>
    </div>
  );
};

export default Services;
