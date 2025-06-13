import { TeamModule, TeamPageConfig, TeamLibraryConfig } from './types';

// Import team modules explicitly
import * as microsoftCopilotStudio from './teams/microsoftCopilotStudio';
import * as powerApps from './teams/powerApps';
import * as powerAutomate from './teams/powerAutomate';
import * as powerPages from './teams/powerPages';
import * as powerPlatformAdminCenter from './teams/powerPlatformAdminCenter';
import * as test from './teams/test';

interface LoadedTeamData {
  pages: TeamPageConfig[];
  libraries: TeamLibraryConfig[];
}

// Initialize data structures
const teamData: Map<string, LoadedTeamData> = new Map();
const discoveredTeamNames: string[] = [];

// Function to register a team module
function registerTeamModule(module: TeamModule) {
  console.log(`Registering team module: ${module.teamName}`);
  
  if (teamData.has(module.teamName)) {
    console.warn(`Duplicate team name "${module.teamName}". Skipping.`);
    return;
  }
  
  teamData.set(module.teamName, {
    pages: module.pages,
    libraries: module.libraries
  });
  
  discoveredTeamNames.push(module.teamName);
  console.log(`Added team ${module.teamName} with ${module.pages.length} pages and ${module.libraries.length} libraries`);
}

// Register all team modules
console.log('Registering team modules...');
registerTeamModule(microsoftCopilotStudio);
registerTeamModule(powerApps);
registerTeamModule(powerAutomate);
registerTeamModule(powerPages);
registerTeamModule(powerPlatformAdminCenter);
registerTeamModule(test);

// Sort team names for consistent UI display
discoveredTeamNames.sort();
console.log('Discovered team names:', discoveredTeamNames);
console.log('Team data map:', [...teamData.entries()].map(([name, data]) => 
  `${name}: ${data.pages.length} pages, ${data.libraries.length} libraries`
));

/**
 * Get a list of all available team names
 */
export const getAvailableTeams = (): string[] => discoveredTeamNames;

/**
 * Get all page configurations for a specific team
 * @param teamName The name of the team
 * @returns Array of page configurations or empty array if team not found
 */
export const getPagesForTeam = (teamName: string): TeamPageConfig[] => {
  const teamInfo = teamData.get(teamName);
  return teamInfo ? teamInfo.pages : [];
};

/**
 * Get all library configurations for a specific team
 * @param teamName The name of the team
 * @returns Array of library configurations or empty array if team not found
 */
export const getLibrariesForTeam = (teamName: string): TeamLibraryConfig[] => {
  const teamInfo = teamData.get(teamName);
  return teamInfo ? teamInfo.libraries : [];
};
