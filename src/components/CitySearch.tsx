import { useState } from "react";

type Props = {
  onSearch: (city: string) => void;
};

function CitySearch({ onSearch }: Props) {
  const [city, setCity] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!city.trim()) return;

    onSearch(city.trim());
    setCity("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        className="border p-2 rounded"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        type="submit"
      >
        Search
      </button>
    </form>
  );
}

export default CitySearch;
