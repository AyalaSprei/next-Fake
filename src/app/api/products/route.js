import { NextResponse } from 'next/server';

export async function GET() {
  const products = [
    {
      id: 1,
      title: "Smartphone",
      description: "High-end smartphone with 5G connectivity.",
      price: 699,
      rating: { rate: 4.5, count: 120 },
      category: "Electronics",
      image: "/path/to/smartphone.jpg",
    },
    // Add more products here
  ];

  return NextResponse.json(products);
}
