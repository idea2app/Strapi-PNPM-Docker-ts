# Strapi-PNPM-Docker-ts

[Strapi][7] scaffold with [TypeScript][5], [PNPM][6] & [Docker][9], which is made with ❤️ by [idea2app][1].

[![Deploy to Production environment](https://github.com/idea2app/Strapi-PNPM-Docker-ts/actions/workflows/deploy-production.yml/badge.svg)][2]

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)][3]
[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)][4]

## 🎮 Stack

- Programming Language: [TypeScript][5] v5+
- Package Manager: [PNPM][6] v10+
- Headless CMS: [Strapi][7] v5+
- API specification: [Swagger][8]
- Deployment Engine: [Docker][9]
- CI/CD platform: [GitHub actions][10]

## 🔌 Pre-installed plugins

### for Developer

1.  [Swagger document][11]
2.  [CloudFlare R2 uploader][12]
3.  [Config Sync][13]

### for User

1.  [Color picker][14]
2.  [Multiple selector][15]
3.  [IconHub][16]
4.  [CKEditor 5][17]
5.  [Location picker][18]

## 💾 Preset schema

### Data components

1. [Location Address](src/components/location/address.json)

## 💡 Best practice

1.  Install **[Settings][19] GitHub app** in your account or organization

2.  Click the **[Use this template][20] button** on the top of this GitHub repository's home page, then create your own repository in the app-installed namespace above

3.  Click the **[Open in GitHub codespaces][21] button** on the top of ReadMe file, then an **online VS Code development environment** will be started immediately

4.  Recommend to add a [Notification step in GitHub actions][22] for your Team IM app

5.  Remind the PMs & users of your product to submit **Feature/Enhancement** requests or **Bug** reports with [Issue forms][23] instead of IM messages or Mobile Phone calls

6.  Collect all these issues into [Project kanbans][24], then create **Pull requests** & add `closes #issue_number` into its description for automation

## 🚀 Scripts

### `develop`

Start your Strapi application with autoReload enabled. [Learn more][25]

```shell
npm i pnpm -g
pnpm i
pnpm develop
```

### `start`

Start your Strapi application with autoReload disabled. [Learn more][26]

```shell
npm start
```

### `build`

Build your admin panel. [Learn more][27]

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

Strapi gives you many possible deployment options for your project including [Strapi Cloud][28]. Browse the [deployment section of the documentation][29] to find the best solution for your use case.

```shell
pnpm strapi deploy
```

## 🚀 Releasing

### Deploy Application

```shell
git checkout master
git tag v1.0.0  # this version tag comes from ./package.json
git push origin master --tags
```

### Publish Type Package

```shell
git checkout master
git tag type-v1.0.0  # this version tag comes from ./types/package.json
git push origin master --tags
```

## 📚 Learn more

- [Resource center][30] - Strapi resource center.
- [Strapi documentation][31] - Official Strapi documentation.
- [Strapi tutorials][32] - List of tutorials made by the core team and the community.
- [Strapi blog][33] - Official Strapi blog containing articles made by the Strapi team and the community.
- [Changelog][34] - Find out about the Strapi product updates, new features and general improvements.

Feel free to check out the [Strapi GitHub repository][35]. Your feedback and contributions are welcome!

## ✨ Community

- [Discord][36] - Come chat with the Strapi community including the core team.
- [Forum][37] - Place to discuss, ask questions and find answers, show your Strapi project and get feedback or just talk with other Community members.
- [Awesome Strapi][38] - A curated list of awesome things related to Strapi.

---

<sub>🤫 Psst! [Strapi is hiring][39].</sub>

[1]: https://idea2.app/
[2]: https://github.com/idea2app/Strapi-PNPM-Docker-ts/actions/workflows/deploy-production.yml
[3]: https://codespaces.new/idea2app/Strapi-PNPM-Docker-ts
[4]: https://gitpod.io/?autostart=true#https://github.com/idea2app/Strapi-PNPM-Docker-ts
[5]: https://www.typescriptlang.org/
[6]: https://pnpm.io/
[7]: https://strapi.io/
[8]: https://swagger.io/
[9]: https://www.docker.com/
[10]: https://github.com/features/actions
[11]: https://github.com/strapi/strapi/tree/develop/packages/plugins/documentation
[12]: https://github.com/trieb-work/strapi-provider-cloudflare-r2
[13]: https://github.com/pluginpal/strapi-plugin-config-sync
[14]: https://github.com/strapi/strapi/tree/develop/packages/plugins/color-picker
[15]: https://github.com/Zaydme/strapi-plugin-multi-select
[16]: https://github.com/Arshiash80/strapi-plugin-iconhub
[17]: https://github.com/ckeditor/strapi-plugin-ckeditor
[18]: https://github.com/wisnuwiry/strapi-geodata
[19]: https://github.com/apps/settings
[20]: https://github.com/new?template_name=Strapi-PNPM-Docker-ts&template_owner=idea2app
[21]: https://codespaces.new/idea2app/Strapi-PNPM-Docker-ts
[22]: https://github.com/FreeCodeCamp-Chengdu/FreeCodeCamp-Chengdu.github.io/blob/8df9944449002758f7ec809deeb260ce08182259/.github/workflows/main.yml#L34-L63
[23]: https://github.com/idea2app/Strapi-PNPM-Docker-ts/issues/new/choose
[24]: https://github.com/idea2app/Strapi-PNPM-Docker-ts/projects
[25]: https://docs.strapi.io/dev-docs/cli#strapi-develop
[26]: https://docs.strapi.io/dev-docs/cli#strapi-start
[27]: https://docs.strapi.io/dev-docs/cli#strapi-build
[28]: https://cloud.strapi.io/
[29]: https://docs.strapi.io/dev-docs/deployment
[30]: https://strapi.io/resource-center
[31]: https://docs.strapi.io/
[32]: https://strapi.io/tutorials
[33]: https://strapi.io/blog
[34]: https://strapi.io/changelog
[35]: https://github.com/strapi/strapi
[36]: https://discord.strapi.io/
[37]: https://forum.strapi.io/
[38]: https://github.com/strapi/awesome-strapi
[39]: https://strapi.io/careers
