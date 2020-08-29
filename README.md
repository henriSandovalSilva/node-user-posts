<h1 align="center">
    <img alt="Node" title="Node" src="https://nodejs.org/static/images/logos/nodejs-new-black.svg" width="150px" />
</h1>

<h2>:rocket: Tecnologias utilizadas</h2>
<ul>
  <li>Node.js</li>
  <li>Express.js</li>
  <li>Typescript</li>
  <li>Axios</li>
  <li>PM2</li>
  <li>Digital Ocean</li>
  <li>Docker</li>
  <li>Docker Compose</li>
  <li>Nginx</li>
  <li>Repository Pattern</li>
  <li>ESLint + Prettier + EditorConfig</li>
</ul>

<h2>💻 Projeto</h2>

Uma API que lista usuários de empresas e seus posts.

<h2>:arrows_counterclockwise: Endpoints </h2>

`/users/[companyName]`<br>
`/users/[userId]/posts`<br>

<h2>:question: Instruções para testar o projeto</h2>

Pré-requisitos: 
 <a href="https://docs.docker.com/engine/install/ubuntu/" target="_blank">Docker</a>, 
<a href="https://docs.docker.com/compose/install/" target="_blank">Docker Compose</a>, 
<a href="https://github.com/nodesource/distributions/blob/master/README.md#debinstall" target="_blank">Node.js 12.x</a>, 
<a href="https://classic.yarnpkg.com/pt-BR/docs/install/#debian-stable" target="_blank">Yarn</a>

`git clone https://github.com/henriSandovalSilva/node-user-posts.git`

`cd node-user-posts`<br>

`yarn`<br>

`yarn tsc`<br>

`cp .default.example .default`<br>

`docker-compose up -d`<br>

A API irá executar em: [http://localhost](http://localhost)

A API está rodando na <b>Digital Ocean</b> em: http://api.usersposts.tech/

Agora é necessário seguir as instruções do [frontend](https://github.com/henriSandovalSilva/react-user-posts).

## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.
