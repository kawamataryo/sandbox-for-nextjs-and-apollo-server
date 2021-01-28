# sandbox-for-nextjs-and-apollo-server
Sandbox for Next.js + Apollo server

## Architecture

![](https://i.gyazo.com/362aa902bc833ab00cd119dcf3a4bcda.png)


## Get started
Start dev server.

```
yarn dev
```

Build.

```
yarn build
```

Start Hasura GraphQL Server and create table.

```
docker-compose up -d
```

Access to http://localhost:8080/data/schema/public/table/add .

Add posts table with following schema.

![](https://i.gyazo.com/cc293b8fb1a947a898ca48a4b9213af4.png)

