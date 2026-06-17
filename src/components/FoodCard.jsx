import Image from "next/image";
import Link from "next/link";

const FoodCard = ({ food }) => {
  return (
    <div>
      <div className="card bg-base-100 shadow-sm">
        <figure>
          <Image
            src={food?.image_link}
            alt={food?.dish_name}
            width={200}
            height={300}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {food?.dish_name}
            <div className="badge badge-secondary">{food?.category}</div>
          </h2>

          <p className="text-xl font-semibold">{food?.price.toFixed(2)} Taka</p>

          <div className="card-actions justify-end">
            <button className="btn btn-primary">Add To Cart...</button>
           <Link href={`/foods/${food?.id}`}> <button className="btn bg-green-500">Show Details...</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
