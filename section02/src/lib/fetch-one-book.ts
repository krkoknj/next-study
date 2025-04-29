import { BookData } from "@/types";

export default async function fetchOneBook(
  id: number
): Promise<BookData | null> {
  const url = `https://onebite-books-server-zeta-one.vercel.app/book/${id}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch book data");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching book:", error);
    return null;
  }
}
