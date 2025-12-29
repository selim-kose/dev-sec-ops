# dev-sec-ops

## Info

Projektet är en simpel fullstack-app som kan CRUD:a Users och är en del av kursen DevSecOps där vi övar på CI/CD workflows.

Detta projekt är byggt med:

- **Frontend:** Angular
- **Backend:** Java Spring Boot
- **Databas:** PostgreSQL hostat hos <https://www.supabase.com>

## Instruktioner

### Start backend

``` bash
cd backend
./mvnw spring-boot:run
```

### Start frontend

``` bash
cd frontend
npm install
npm run start
```

## Test

Projektet har tre olika testyper, enhetstester, api-tester och E2E tester.
E2E-tester körs mot frontend och API och enhetstester körs mot backend.

### Kör E2E-tester

``` bash
cd frontend
npm run e2e
```

### Kör API-tester

``` bash
cd frontend
npm run test:api
```

### Kör enhetstest-tester

``` bash
cd backend
./mvnw test
```
