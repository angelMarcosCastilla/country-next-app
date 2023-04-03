import { api } from "../services/api";
import ListCountries from "./components/ListCountries";

export default async function Home() {
  const countries = await api.allCountry();

  return (
    <section>
      <ListCountries countries={countries}></ListCountries>
    </section>
  );
}
