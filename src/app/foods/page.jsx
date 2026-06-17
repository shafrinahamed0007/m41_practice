import FoodCard from "@/components/FoodCard";

const FoodsPage = async () => {
  const data = await fetch(
    "https://phi-lab-server.vercel.app/api/v1/lab/foods",
  ).then((res) => res.json());
  const foods = data.data;
//   console.log("All Foods: ", foods);
  return (
    <div>
      Total Foods: {foods.length}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {foods.map((food) => (
          <FoodCard key={food.id} food={food} />
        ))}
      </div>
    </div>
  );
};

export default FoodsPage;
