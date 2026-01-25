import { useEffect, useState } from "react";

type Props = {
  onSearch: (city: string) => void;
  isLoading?: boolean;
};

type LocationOption = {
  name: string;
  country: string;
  state?: string;
};

function CitySearch({ onSearch, isLoading = false }: Props) {
  const [query, setQuery] = useState("");
  const [options, setOptions] = useState<LocationOption[]>([]);

  const API_KEY = "b95036906081f2d653626c50a0e0ec51";

  // Fetch location suggestions while typing
  useEffect(() => {
    if (query.trim().length < 2) {
      setOptions([]);
      return;
    }

    const fetchSuggestions = async () => {
      try {
        const res = await fetch(
          `https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=${API_KEY}`,
        );

        if (!res.ok) return;

        const data: LocationOption[] = await res.json();
        setOptions(data);
      } catch {
        setOptions([]);
      }
    };

    fetchSuggestions();
  }, [query]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const trimmed = query.trim();
    if (!trimmed || isLoading) return;

    onSearch(trimmed);
    setQuery("");
    setOptions([]);
  };

  return (
    <div className="relative w-full max-w-sm">
      <form onSubmit={handleSubmit} className="flex gap-2 items-center">
        <input
          className="border p-2 rounded w-full"
          placeholder="Enter city name"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          disabled={isLoading}
        />
        <button disabled={isLoading} type="submit">
          {isLoading ? "Searching…" : "Search"}
        </button>
      </form>

      {options.length > 0 && (
        <ul className="absolute z-10 mt-1 w-full bg-white border rounded shadow">
          {options.map((opt, index) => {
            const label = opt.state
              ? `${opt.name}, ${opt.state}, ${opt.country}`
              : `${opt.name}, ${opt.country}`;

            return (
              <li
                key={`${opt.name}-${index}`}
                className="p-2 cursor-pointer hover:bg-gray-100"
                onClick={() => {
                  onSearch(label);
                  setQuery("");
                  setOptions([]);
                }}
              >
                {label}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default CitySearch;
