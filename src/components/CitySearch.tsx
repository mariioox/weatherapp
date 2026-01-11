import { useState } from "react";

type Props = {
  onSearch: (city: string) => void;
  isLoading?: boolean;
};

function CitySearch({ onSearch, isLoading = false }: Props) {
  const [city, setCity] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const trimmed = city.trim();
    if (!trimmed || isLoading) return;

    onSearch(trimmed);
    setCity("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 items-center">
      <input
        className="border p-2 rounded"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        disabled={isLoading}
      />
      <button disabled={isLoading} className="text-white" type="submit">
        {isLoading ? "Searching…" : "Search"}
      </button>
    </form>
  );
}

export default CitySearch;
