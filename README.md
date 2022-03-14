# SpaceX-API
Esta é uma api que mostra os próximos lançamentos da SpaceX em um intervalo de 6 meses contando a partir da data que é feita a requisição.

Foi usada as seguintes tecnologias 

- Typescript
- Node.js
- Luxon
- Express
- Axios
- Jest

# Instalação
Para efetuar a instalação digite no seu terminal o comando:
``` 
npm i
```

para iniciar o servidor:
```
npm start
```

# Jest
para rodar a rotina de teste digite:

```
npm jest
```
No momento apenas foi testada a classe src/Business/ValidateLaunch.ts
```
 PASS  src/Business/ValidateLaunch.spec.ts

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        2.985 s, estimated 4 s

```

É possivel visualizar o resultado no seu Postman com o servidor iniciado, chamando uma requisição do tipo GET com a URL:
```
http://localhost:3001/upcoming-launches
```

Requisição feita no dia 22/08/2021:

``` JSON
 "launches": [
        {
            "nome": "Axiom Space Mission 1",
            "description": "This is a Crew Dragon flight for a private company Axiom Space. The mission will carry a commander professionally trained by Axiom alongside three private astronauts to and from the International Space Station. This crew will stay aboard space station for  at least eight days.",
            "from": "Kennedy Space Center, FL, USA",
            "to": "Low Earth Orbit",
            "windowStart": "30/03/2022"
        },
        {
            "nome": "Axiom Space Mission 1",
            "description": "This is a Crew Dragon flight for a private company Axiom Space. The mission will carry a commander professionally trained by Axiom alongside three private astronauts to and from the International Space Station. This crew will stay aboard space station for  at least eight days.",
            "from": "Kennedy Space Center, FL, USA",
            "to": "Low Earth Orbit",
            "windowStart": "30/03/2022"
        },
        {
            "nome": "Axiom Space Mission 1",
            "description": "This is a Crew Dragon flight for a private company Axiom Space. The mission will carry a commander professionally trained by Axiom alongside three private astronauts to and from the International Space Station. This crew will stay aboard space station for  at least eight days.",
            "from": "Kennedy Space Center, FL, USA",
            "to": "Low Earth Orbit",
            "windowStart": "30/03/2022"
        },
        {
            "nome": "Crew-4",
            "description": "SpaceX Crew-4 is the fourth crewed operational flight of a Crew Dragon spacecraft to the International Space Station as part of NASA's Commercial Crew Program.",
            "from": "Kennedy Space Center, FL, USA",
            "to": "Low Earth Orbit",
            "windowStart": "15/04/2022"
        }
    ]
}
```

