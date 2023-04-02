import { api } from "../services/api"
import Link from "next/link"
import styles from "./page.module.css"
import { Country } from "../types/country"
import Image from "next/image"

export default async function Home() {
  const data = await api.allCountry()

  return (
    <section className={styles.gridCounter}>
      {
        data.map((country: Country) => (
          <article key={country.name.common}>
            <Link href={`/country/${country.name.common}`}>
              <Image width={200} height={150} src={country.flags.svg} alt="" />
              <p>{country.name.common}</p>
            </Link>
          </article>
        ))
      }
    </section>
  )
}
