import Image from "next/image";
import Link from "next/link";
import React from "react";
import { api } from "@/services/api";
import { Country } from "../../../types/country";

interface PageProps {
  params: {
    country: string;
  };
}

const CountryPage = async ({ params }: PageProps) => {
  const country: Country = await api.getCountryByName(params.country);

  const oficialCurrency = Object.values(country.currencies || {})[0].name;
  const population = country.population.toLocaleString("en-US");

  return (
    <div className="container py-14">
      <Link href="/" className="shadow-md px-6 py-2 hover:bg-gray-100">
      ← {" "}Back
      </Link>
      <article className="py-14 flex gap-x-20 flex-wrap mt-5">
        <section>
          <Image
            width={500}
            height={300}
            src={country.flags.svg}
            alt={`flag of ${country.name.common} country`}
          />
        </section>
        <section className="">
          <h2 className="text-4xl py-5 font-bold">{country.name.common}</h2>
          <div className="flex flex-row gap-10">
            <div className="flex flex-col gap-2">
              <p>
                <strong>Native Name:</strong> {country.name.common}
              </p>
              <p>
                <strong>Population:</strong> {population}
              </p>
              <p>
                <strong>Region: </strong> {country.region}
              </p>
              <p>
                <strong>Sub Region: </strong> {country.subregion}
              </p>
              <p>
                <strong>Capital: </strong> {country.capital}
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p>
                <strong>Top level Domain: </strong> {country.tld}
              </p>
              <p>
                <strong>Curriecies: </strong> {oficialCurrency}
              </p>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
};

export default CountryPage;
