"use client";
import { Country } from "@/types/country";
import Image from "next/image";
import Link from "next/link";
import React, { useMemo, useState } from "react";
import styles from "../page.module.css";
import Select from "@/components/Select";
import useFilterCountry from "@/hooks/useFilterCountry";

interface PropsI {
  countries: Country[];
}

export default function ListCountries({ countries }: PropsI) {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");
  const filterCountries = useFilterCountry({ countries, search, region });

  const optionsRegions = useMemo(() => {
    const regions = countries.map((country) => country.region);
    const option = new Set(regions);
    //devolver un array de {value: region, label: region}
    return Array.from(option).map((region) => ({
      value: region,
      label: region,
    }));
  }, [countries]);

  return (
    <section className="container pt-5">
      <section className="mb-8 flex justify-between items-center flex-wrap gap-2">
        <input
          className="border border-gray-300 rounded-md px-4 py-2 w-[350px] outline-none focus:border-gray-500"
          type="text"
          placeholder="search for a country..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Select
          options={optionsRegions}
          value={region}
          onChange={setRegion}
          placeholder="Filter by region"
        />
      </section>
      <section className={styles.gridCounter}>
        {filterCountries.map((country: Country) => (
          <article key={country.name.common} className="bg-white">
            <Link href={`/country/${country.name.common}`}>
              <Image width={200} height={150} src={country.flags.svg} alt="" />
              <footer className="pl-3 mb-2 pb-4">
                <h2 className="text-xl py-3 font-bold">{country.name.common}</h2>
                <div className="text-sm ">
                  <p className="mb-1">
                    <strong>Population: </strong>
                    {country.population.toLocaleString("en-US")}
                  </p>
                  <p className="mb-1">
                    <strong>Region: </strong>
                    {country.region}
                  </p>
                  <p className="mb-1">
                    <strong>Capital: </strong>
                    {country.capital}
                  </p>
                </div>
              </footer>
            </Link>
          </article>
        ))}
      </section>
    </section>
  );
}
