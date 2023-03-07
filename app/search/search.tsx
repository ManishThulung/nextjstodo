"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

function Search() {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch("");
    router.push(`/search/${search}`);
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          className="outline-none border"
          type="text"
          placeholder="Search.."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default Search;
