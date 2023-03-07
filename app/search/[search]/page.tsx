import Link from "next/link";

type Params = {
  params: {
    search: string;
  };
};

async function Search({ params: { search } }: Params) {
  const res = await fetch(
    `https://serpapi.com/search.json?q=${search}&api_key=de9e24b73d3d1756ff2892a89c1c58318d3fdae4e7a5eaa51c9d9655e7a7831d`
  );
  const { organic_results } = await res.json();
  console.log(organic_results);

  return (
    <div>
      {organic_results.map((item: any) => (
        <div key={item.position} className="p-6 border-black">
          <Link href={item.link}>
            <h3 className="font-bold">{item.title}</h3>
            <p>{item.snippet}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Search;
