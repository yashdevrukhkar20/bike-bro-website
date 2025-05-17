export const featuredCars = [
  {
    id: 1,
    make: "Toyota",
    model: "Camry",
    year: 2023,
    price: 28999,
    images: ["/1.png"],
    transmission: "Automatic",
    fuelType: "Gasoline",
    bodyType: "Sedan",
    mileage: 15000,
    color: "White",
    wishlisted: false,
  },
  {
    id: 2,
    make: "Honda",
    model: "Civic",
    year: 2023,
    price: 26499,
    images: ["/2.webp"],
    transmission: "Manual",
    fuelType: "Gasoline",
    bodyType: "Sedan",
    mileage: 12000,
    color: "Blue",
    wishlisted: true,
  },
  {
    id: 3,
    make: "Tesla",
    model: "Model 3",
    year: 2022,
    price: 42999,
    images: ["/3.jpg"],
    transmission: "Automatic",
    fuelType: "Electric",
    bodyType: "Sedan",
    mileage: 8000,
    color: "Red",
    wishlisted: false,
  },
];

export const carMakes = [
  { id: 1, name: "RE", image: "/make/re.webp" },
  { id: 2, name: "Yamaha", image: "/make/yamaha.webp" },
  { id: 3, name: "BMW", image: "/make/bmw.webp" },
  // { id: 4, name: "Bajaj", image: "/make/bajaj.webp" },
  { id: 5, name: "KTM", image: "/make/ktm.webp" },
  { id: 6, name: "Hero", image: "/make/hero.webp" },
];

export const bodyTypes = [
  { id: 1, name: "Premium", image: "/body/premium.webp" },
  { id: 2, name: "Sports", image: "/body/sports.webp" },
  { id: 3, name: "Scooter", image: "/body/scooter.webp" },
  { id: 4, name: "Commuter", image: "/body/commuter.webp" },
];

export const faqItems = [
  {
    question: "How does the test drive booking work?",
    answer:
      "Simply find a bike you're interested in, click the 'Test Drive' button, and select an available time slot. Our system will confirm your booking and provide all necessary details.",
  },
  {
    question: "Can I search for bike using an image?",
    answer:
      "Yes! Our AI-powered image search lets you upload a photo of a bike you like, and we'll find similar models in our inventory.",
  },
  {
    question: "Are all bikes certified and verified?",
    answer:
      "All bikes listed on our platform undergo a verification process. We are a trusted dealerships and verified private seller.",
  },
  {
    question: "What happens after I book a test drive?",
    answer:
      "After booking, you'll receive a confirmation email with all the details. We will also contact you to confirm and provide any additional information.",
  },
];
