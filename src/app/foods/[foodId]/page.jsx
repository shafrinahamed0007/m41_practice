import Image from "next/image";

const FoodDetailPage = async ({ params }) => {
  const data = await fetch(
    "https://phi-lab-server.vercel.app/api/v1/lab/foods",
  ).then((res) => res.json());
  const foods = data.data;
  const { foodId } = await params;

  const expectedFood = foods.find((food) => food?.id == foodId);

  return (
    <div>
      <div className="card bg-base-100 shadow-sm">
        <figure>
          <Image
            src={expectedFood?.image_link}
            alt={expectedFood?.dish_name}
            width={200}
            height={300}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {expectedFood?.dish_name}
            <div className="badge badge-secondary">
              {expectedFood?.category}
            </div>
          </h2>

          <p className="text-xl font-semibold">
            {expectedFood?.price.toFixed(2)} Taka
          </p>
        </div>
      </div>
    </div>
  );
};

export default FoodDetailPage;
