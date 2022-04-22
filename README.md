# MedMCQ [![Build Status](https://travis-ci.com/thjendk/medmcq.svg?branch=master)](https://travis-ci.com/thjendk/medmcq)

Dette er en webapp bygget som en Express-server med React ovenpå. Den er lavet af studerende fra Medicin (lægevidenskab) på Aarhus Universitet, og bruges af studerende til repetition af multiple choice question (MCQ) eksaminer fra Aarhus Universitet. Spørgsmålene i appen er fra tidligere eksamenssæt, som udvikles af Institut for Klinisk Medicin (Aarhus Universitet).

Siden er lavet med tilladelse fra Institut for Klinisk Medicin, Health, Aarhus Universitet.

## Opsætning

For at køre appen, skal du placere en fil med navnet ".env.development" med følgende environmental variables i server mappen:

```
SECRET=thisisasecret
DB_URL=mysql://user:password@ip:port/schema
```

Se mere om omsætningen i dokumentation for dotenv-flow.

Derefter skal du køre `npm install`, efterfulgt af `cd server && knex migrate:latest` og derefter `npm run dev` for at starte dit development workflow. Held og lykke!

## Development

I `/server` findes en graphQL api der er forbundet til en mySQL database. Databasen kan opsættes ved brug af migrations, som findes under server. Denne server serverer vores client.

I `/src` findes hjemmesiden, der er bygget i React. Denne henter data fra api'en og viser spørgsmålene.

Når du redigerer i typeDefs på graphQL API'en, skal du køre `npm run generate` for at opdatere typescript typer på både backend og frontend. Dette bruger graphql-code-generator.

## Mappe-struktur

* **.vscode** - filer oprettet af Visual Studio Code
* **build** - filer oprettet, når `npm build` er kørt
* **cypress** - filer brugt til testing
* **guides** - nogle guides til brugerne
* **images** - evt. billeder til spørgsmål er gemt her
* **node_modules** - Node's moduler oprettes her
* **public** - standard-filer brugt af REACT til at skabe indhold
* **server** - alt som har med backend at gøre - startes fra filen server.ts
  * **config** - her konfigureres og startes Apollo og objection på server
  * **graphql** - her konfigureres GraphQL
    * **dataloaders** - jaa, hvad fanden gør de?
    * **types** - øverst defineres de skemaer, som data hentes ud fra, nederst de SQL-metoder som anvendes
  * **jobs** - her ligger cronjobs, bl.a. til opdatering af procenter
  * **migrations** - Knex' migrationsfiler brugt til at oprette kolonner i databasen (oprettes via `knex migrate:make`)
  * **misc** - dunno?
  * **models** - her defineres types for de variabler, som objection bruger
  * **routes** - definition af API
  * **seeds** - Knex' seedfiler brugt til at fylde databasen
  * **types** - nogle resolvers - vist nok oprettet, når man kører `npm run generate`??
* **src** - alt som har med frontend at gøre - startes fra filen App.tsx
  * **classes** - classes brugt af GraphQL på frontend
  * **component** - de enkelte React-komponenter inddelt i kategorier efter funktion på siden
  * **hooks** - React hooks, fx ved resize af vinduet
  * **images** - vist bare standard-grafik?
  * **proto** - no idea hvad det er
  * **queries** - her defineres nogle standard-kald til GraphQL-serveren
  * **redux** - konfiguration for redux
    * **actions** - hmm, vist noget med oversættelse?
    * **reducers** - her defineres nogle metoder til at udføre database-handlinger
  * **styles** - css osv.
  * **types** - nogle types muligvis oprettet, når man kører `npm run generate`
  * **utils** - overordnede menustruktur, javascript til smoothscrolling i quiz, validering
* docker-compose.yml - definerer det miljø som Docker åbner inkl hvilke porte og volumes
* Dockerfile - kommandoerne som køres ved `docker-compose up`

# "Quick" and dirty crash course
## For at opdatere database-kald:
1. **/server/graphql/types**
	- øverst ligger typedefs, som bestemmer types for det data, der hentes - refererer til definitionerne lavet i **/server/models/**
	- nederst ligger de SQL-metoder, som anvendes ind i databasen - disse afhænger af models lavet i objection i **/server/models/**, inkl. mulighed for nesting i den enkelte graph
2. **/server/models/** - her kan nye kolonner tilføjes til objection
3. **/server/types/resolvers-types.js** - vær obs på at dette er opdateret!!
4. **/src/classes/** - her defineres de graphql-kald, som foretages + referencer til reducers, som kan ændre databasen
5. **/src/queries/** - også nogle graphQL-kald - måske er det dem, der kaldes af API'en??
6. **/src/components/** - selve indholdet omsættes til HTML her
