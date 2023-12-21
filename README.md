<div style="margin:30px 0;">
    <img src='./src/assets/icons/brands/scalaspace-color.svg' alt="Scala Space" width="234" height="93" />
</div>

## Intro

This website is built using [Docusaurus 3](https://docusaurus.io/), a modern static website generator.

The website can be viewed at: https://scalaspace.virtuslab.com/

<div style="margin-bottom:50px;"></div>

## Installation

```
yarn
```

<div style="margin-bottom:50px;"></div>

## Prerequisites

In the root folder, create an `.env` file. Notice that there is a dot (`.`) before the words `env`.

Paste the following environment variables and fill them with the appropriate values.

```
MAPBOX_ACCESS_TOKEN=
HUBSPOT_PORTAL_ID=
HUBSPOT_FORM_ID=
```

<div style="margin-bottom:50px;"></div>

## Local Development

The following command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

```
yarn start
```

<div style="margin-bottom:50px;"></div>

## Build

The following command generates static content into the `build` directory and can be served using any static contents hosting service.

```
yarn build
```

<div style="margin-bottom:50px;"></div>

## Deployment

The project uses the **Git** version control system.

Changes should be made on the **feature branch**. After making changes to the code, commit the changes and push them to the **remote feature branch**. Then make a `Pull Request` to the `main` branch.

Merging to the `main` branch automatically starts the build process on [Netlify](https://www.netlify.com/).

<div style="margin-bottom:50px;"></div>

## Adding subpages

Each new subpage is added to the `src/pages` folder.

Here you need to add a folder with the name of the subpage and in this folder create an `index.tsx` file with the content of the newly created page. The name of the subpage folder is important because the `url` address is created on this basis.

For example: if you want to create an `about` subpage (the link to such a subpage would be: `https://scalaspace.virtuslab.com/about`), you should create an `about` folder in the `src/pages` folder. And in this `about` folder you should create an `index.tsx` file. The structure will then look like this:

`src/`  
&emsp;`pages/`  
&emsp;&emsp;`about/`  
&emsp;&emsp;&emsp;`index.tsx`

<div style="margin-bottom:50px;"></div>

## Adding data

All website data such as links, socials icons in the footer, links in the navbar, links in the sidebar, events on the home page, events on the events page or Scalar conferences are located in the `src/source` folder and are saved in the `JSON` format.

Changing, deleting or adding data in any of these files will automatically be reflected in the application views.

For the application to function properly, the structure of each `.json` file must be maintained.

For example: to add another Scalar conference, add another object in the `src/source/scala-events.json` file with the structure:

```json
{
  "id": 1,
  "coordinates": [21.0051, 52.2146],
  "title": "Scalar Conference",
  "date": "05 APR 2050",
  "description": "Get ready for two days of immersive functional programming experience with the great community.",
  "link": "https://old.scalar-conf.com/2050/"
}
```

where:

- `id` must be the next identifier in turn,
- `coordinates` is an array of two numbers in the order `[longitude, latitude]`.

The rest of the data are texts to be displayed as you wish.

In the case of this particular file, based on `coordinates`, a marker will be automatically added to the map on the `/events` subpage in the indicated location, and after clicking it, a popup with data such as title, description, etc. will appear.
