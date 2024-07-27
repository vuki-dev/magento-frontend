import { useQuery } from "@apollo/client";
import client from "@/lib/apolloClient";
import { GET_CATEGORIES } from "@/lib/queries";

interface Category {
  id: string;
  name: string;
}

interface CategoriesData {
  categories: {
    items: Category[];
  };
}

export default function Navigation() {
  const { loading, error, data } = useQuery<CategoriesData>(GET_CATEGORIES, {
    client,
  });

  console.log(data)

  return (
    <nav className="h-10 md:border-t md:border-b md:border-t-gray-300 md:border-b-gray-300"></nav>
  );
}
