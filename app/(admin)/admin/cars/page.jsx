import { CarsList } from "./_components/car-list";

export const metadata = {
  title: "Bikes | Bike Bro Admin",
  description: "Manage bikes in your marketplace",
};

export default function CarsPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Bike Management</h1>
      <CarsList />
    </div>
  );
}
