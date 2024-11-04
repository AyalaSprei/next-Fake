import { NextResponse } from 'next/server';

export async function GET() {
    const Books = [
        {
          id: 1,
          title: "The_Great_Gatsby",
          price: 100,
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/The_Great_Gatsby_Cover_1925_Retouched.jpg/330px-The_Great_Gatsby_Cover_1925_Retouched.jpg",
          description: "A gripping tale that explores the complexities of life.",
          rating: {
            rate: 0,
            count: Math.floor(Math.random() * 100),
          },
        },
        {
          id: 2,
          title: "Great Escape",
          price: 150,
          image: "https://marloesdevries.com/wp-content/uploads/2022/05/greatescapewoodlandsnursinghome-754x1024.jpg",
          description: "An insightful book that encourages innovative thinking.",
          rating: {
            rate: 0,
            count: Math.floor(Math.random() * 100),
          },
        },
        {
            id: 4,
            title: "George Orwell",
            price: 120,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc51b2tA0JUQvvGd3oSQCMZesmRGIW3KRsAPdVxQtJzenVrOSJCHj2d3BfCq4T5kziaow&usqp=CAU",
            description: "A thought-provoking story about solitude and self-discovery.",
            rating: {
              rate: 0,
              count: Math.floor(Math.random() * 100),
            },
          },
    ];
    

  return NextResponse.json(Books);
}
