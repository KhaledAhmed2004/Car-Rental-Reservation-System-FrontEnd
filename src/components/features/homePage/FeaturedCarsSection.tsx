import React from "react";
import ShowcaseCard from "../../common/molecules/ShowcaseCard";
import Heading from "../../common/atoms/Heading";
import { useGetAllCarsQuery } from "../../../redux/features/car/carApi";

const FeaturedCarsSection = () => {
  const { data: cars, error, isLoading } = useGetAllCarsQuery();
  cars?.data?.map((item) => {
    console.log(item._id);
  });
  return (
    <div>
      <Heading>Our Feature Cars</Heading>
      <div className="gap-6 grid xl:grid-cols-3 md:grid-cols-2 px-4">
        {cars?.data.slice(0, 6).map((car) => (
          <ShowcaseCard
            carId={car._id}
            key={car._id}
            brand={car.brand}
            model={car.model}
            status={car.status}
            mileage={car.mileage}
            fuelType={car.fuelType}
            pricePerHour={car.pricePerHour}
            // carName={car.name}
            rating={car.rating}
            doors={car.doors}
            luggageCapacity={car.luggageCapacity}
            seats={car.seats}
            transmission={car.transmission}
            image={car.images[0]}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedCarsSection;
