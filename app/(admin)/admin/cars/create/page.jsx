import { AddCarForm } from "./_components/add-car-form";

export const metadata = {
  title: "Add New Bike | Bike Bro Admin",
  description: "Add a new bike to the marketplace",
};

export default function AddCarPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Add New Bike</h1>
      <AddCarForm />
    </div>
  );
}
