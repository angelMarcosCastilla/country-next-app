import { Suspense } from "react";
import { api } from "../services/api";
import ListCountries from "./components/ListCountries";
import LoadingListCountries from "./components/LoadingListCountries";

async function ListOfCountries() {
  const countries = await api.allCountry();
  return (
    <section>
      <ListCountries countries={countries}></ListCountries>
    </section>
  );
}

export default function Home() {
  return (
    <section>
      <Suspense fallback={<LoadingListCountries />}>
        {/* @ts-expect-error Server Component */}
        <ListOfCountries />
      </Suspense>
    </section>
  );
}
