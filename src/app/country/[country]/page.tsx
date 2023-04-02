import { api } from '@/services/api'
import React from 'react'
import styles from './style.module.css'
import { Country } from "../../../types/country"
import Link from 'next/link'
import Image from 'next/image'


interface PageProps {
  params: {
    country: string
  }
}

const CountryPage = async ({ params }: PageProps) => {
  const country: Country = await api.getCountryByName(params.country)

  const oficialCurrency = Object.values(country.currencies || {})[0].name
  const population = country.population.toLocaleString('en-US')

  return (
    <div>
      <Link href="/">Back</Link>
      <article className={styles.cardContainer}>
        <section>
          <Image width={500} height={300} src={country.flags.svg} alt={country.flags.alt as string} />
        </section>
        <section>
          {country.name.common}
          <div className={styles.detailsCountry}>
            <div>
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
            <div>
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
  )
}

export default CountryPage