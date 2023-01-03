import { useQuery } from "@tanstack/react-query";
const Home = () => {
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["people"],
    queryFn: fetchPeople,
  });

  if (isLoading) return <div>Laster inn rooms</div>;

  if (isError) return <div>Noe gikk galt</div>;

  return <div>Home</div>;
};

export default Home;
