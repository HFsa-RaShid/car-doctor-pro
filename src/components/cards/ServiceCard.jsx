import Image from "next/image";
import Link from "next/link";
import React from "react";

const ServiceCard = ({service}) => {
  const {img,title,price,description,_id} = service || {};
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <Image height={120} width={384} src={img} alt={title}></Image>
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          
          <p>Price: {price}</p>
          <div className="card-actions justify-end">
            <Link href={`/services/${_id}`}>
            <button className="btn btn-primary">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
