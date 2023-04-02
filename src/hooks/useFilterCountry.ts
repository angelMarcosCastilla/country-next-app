import { Country } from "@/types/country";
import { useMemo } from "react";

interface UseFilterCountryI {
  countries: Country[];
  search: string;
  region: string;
}
export default function useFilterCountry({ countries, search, region} : UseFilterCountryI) {

  const filterCountries: Country[] = useMemo(() => {
    if (search === "" && region === "") return countries;
    return countries.filter((country) => {
      return (
        country.name.common.toLowerCase().includes(search.toLowerCase()) &&
        country.region.includes(region)
      );
    });
  }, [countries, search, region]);

  return filterCountries
}
