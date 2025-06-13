# Figma template generator

![banner](.github/banner.png?raw=true)

## Why?

This plugin aims to improve consistency across the team by generating a starting page structure and templates to work from. It offers flexibility in the creative process by allowing a designer to opt-in to generating a structure suitable for the project at hand.

Additionally, the plugin provides easy access to all team design libraries, ensuring teams can quickly find and use the right components and resources for their projects.

## Features

- Generate consistent page structures and templates
- Choose from various pre-defined templates
- Quick access to all team design libraries
- Organized by team (Power Apps, Power Pages, etc.)
- Copy library names with one click
- **NEW**: Dynamically configurable teams with their own page templates and libraries

## How to use

### Templates
- Create a new Figma file, make it a library.
- Add `master` components for each page template. You are basically creating a template layout and making the entire thing 1 master component (so it easily be inserted into a new project file).
- Enable this library by default for all of your current/future projects. This ensures the templates are accessible to insert anywhere in your org. It's important that the file is accessible and not "private" or "hidden" in any way.
- Run the plugin, select the page templates you want to generate.

### Libraries
- Switch to the Libraries tab to view available design libraries.
- Libraries are organized by team.
- Click on a library to open it in a new tab.
- Use the copy button to quickly copy library names.

## How to update

### 1. Add/Remove Teams

Teams are now defined in individual files within the `src/teams/` directory. To add a new team:

1. Create a new file in the `src/teams/` directory (e.g., `myNewTeam.ts`).
2. Export the required properties:
   - `teamName` (string): The display name of the team
   - `pages` (array): A list of page templates specific to this team
   - `libraries` (array): A list of libraries specific to this team
3. Rebuild the plugin (`yarn build:watch` or `yarn build`).

Example team file structure:
```typescript
import { TeamPageConfig, TeamLibraryConfig } from '../types';

export const teamName: string = "My New Team";

export const pages: TeamPageConfig[] = [
  {
    id: "cover",
    pageName: "📋 Cover",
    componentKey: "your_component_key_here",
    description: "Cover page description"
  },
  // Add more pages as needed
];

export const libraries: TeamLibraryConfig[] = [
  {
    name: "My Team UI Kit",
    description: "Core UI components",
    fileKey: "figma_file_key_here"
  },
  // Add more libraries as needed
];
```

### 2. Add/Remove Pages for a Team

To add or modify pages for a specific team:

1. Open the team's file in `src/teams/` (e.g., `powerApps.ts`).
2. Add, modify, or remove entries in the `pages` array.
3. Each page needs:
   - `id`: Unique identifier for the page
   - `pageName`: Name displayed in the UI and used for the Figma page
   - `componentKey`: The Figma component key for this page's template
   - `description`: A brief description of the page
   - `displayPageName` (optional): An optional "pretty" name for the Figma page

### 3. Add/Remove Libraries for a Team

To add or modify libraries for a specific team:

1. Open the team's file in `src/teams/` (e.g., `powerApps.ts`).
2. Add, modify, or remove entries in the `libraries` array.
3. Each library needs:
   - `name`: The display name of the library
   - `description`: A brief description of the library
   - `fileKey`: The Figma file key for the library

### 4. Update Templates

The pages that are generated are based off of template pages in the library you created. These page templates can be updated to however the team see's fit, remember to publish when done. Upon next use of the plugin, it will reference and generate from the latest updated template.

## Development

- Run `yarn` to install dependencies.
- Run `yarn build:watch` to start webpack in watch mode.
- Open `Figma` -> `Plugins` -> `Development` -> `New Plugin...` and choose `manifest.json` file from this repo.

## Build

- Run `yarn build` to build a production version.
