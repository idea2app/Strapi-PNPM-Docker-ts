# Strapi scaffold with TypeScript, PNPM & Docker

Strapi comes with a full featured [Command Line Interface][1] (CLI) which lets you scaffold and manage your project in seconds.

[![Deploy to Production environment](https://github.com/idea2app/Strapi-PNPM-Docker-ts/actions/workflows/deploy-production.yml/badge.svg)][2]

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)][3]
[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)][4]

## 🎮 Stack

- Programming Language: [TypeScript][5] v5+
- Package Manager: [PNPM][6] v7+
- Headless CMS: [Strapi][7] v4+
- API specification: [Swagger][8]
- Deployment Engine: [Docker][9]
- CI/CD platform: [GitHub actions][10]

## 🔌 Pre-installed plugins

### Back-end

1.  [Content Type explorer][11]
2.  [Data transformer][12]
3.  [Swagger document][13]

### Front-end

1.  [Color picker][14]
2.  [Multiple selector][15]
3.  [React Icons picker][16]
4.  [CKEditor 5][17]

## 🚀 Scripts

### `develop`

Start your Strapi application with autoReload enabled. [Learn more][18]

```shell
npm i pnpm -g
pnpm i
pnpm develop
```

### `start`

Start your Strapi application with autoReload disabled. [Learn more][19]

```shell
npm start
```

### `build`

Build your admin panel. [Learn more][20]

```shell
pnpm build
```

### `pack-image`

Build your Docker image locally.

```shell
pnpm pack-image
```

### `container`

Run your Docker image locally.

```shell
pnpm container
```

## ⚙️ Deployment

Strapi gives you many possible deployment options for your project including [Strapi Cloud][21]. Browse the [deployment section of the documentation][22] to find the best solution for your use case.

## 📚 Learn more

- [Resource center][23] - Strapi resource center.
- [Strapi documentation][24] - Official Strapi documentation.
- [Strapi tutorials][25] - List of tutorials made by the core team and the community.
- [Strapi blog][26] - Official Strapi blog containing articles made by the Strapi team and the community.
- [Changelog][27] - Find out about the Strapi product updates, new features and general improvements.

Feel free to check out the [Strapi GitHub repository][28]. Your feedback and contributions are welcome!

## ✨ Community

- [Discord][29] - Come chat with the Strapi community including the core team.
- [Forum][30] - Place to discuss, ask questions and find answers, show your Strapi project and get feedback or just talk with other Community members.
- [Awesome Strapi][31] - A curated list of awesome things related to Strapi.

---

🤫 Psst! [Strapi is hiring][32].

[1]: https://docs.strapi.io/dev-docs/cli
[2]: https://github.com/idea2app/Strapi-PNPM-Docker-ts/actions/workflows/deploy-production.yml
[3]: https://codespaces.new/idea2app/Strapi-PNPM-Docker-ts
[4]: https://gitpod.io/?autostart=true#https://github.com/idea2app/Strapi-PNPM-Docker-ts
[5]: https://www.typescriptlang.org/
[6]: https://pnpm.io/
[7]: https://strapi.io/
[8]: https://swagger.io/
[9]: https://www.docker.com/
[10]: https://github.com/features/actions
[11]: https://github.com/shahriarkh/strapi-content-type-explorer
[12]: https://github.com/ComfortablyCoding/strapi-plugin-transformer
[13]: https://github.com/strapi/strapi/tree/develop/packages/plugins/documentation
[14]: https://github.com/strapi/strapi/tree/develop/packages/plugins/color-picker
[15]: https://github.com/Zaydme/strapi-plugin-multi-select
[16]: https://github.com/DanielPantle/strapi-plugin-react-icons
[17]: https://github.com/ckeditor/strapi-plugin-ckeditor
[18]: https://docs.strapi.io/dev-docs/cli#strapi-develop
[19]: https://docs.strapi.io/dev-docs/cli#strapi-start
[20]: https://docs.strapi.io/dev-docs/cli#strapi-build
[21]: https://cloud.strapi.io/
[22]: https://docs.strapi.io/dev-docs/deployment
[23]: https://strapi.io/resource-center
[24]: https://docs.strapi.io/
[25]: https://strapi.io/tutorials
[26]: https://strapi.io/blog
[27]: https://strapi.io/changelog
[28]: https://github.com/strapi/strapi
[29]: https://discord.strapi.io/
[30]: https://forum.strapi.io/
[31]: https://github.com/strapi/awesome-strapi
[32]: https://strapi.io/careers
