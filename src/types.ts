/**
 * Interface for a page template configuration specific to a team
 */
export interface TeamPageConfig {
  id: string; // Unique identifier for the page within this team (e.g., "cover", "shipped-designs")
  pageName: string; // Name to display in UI and for the Figma page
  componentKey: string; // The Figma component key for this page's template (specific to this team)
  description: string;
  displayPageName?: string; // Optional "pretty" name for Figma page
}

/**
 * Interface for a design library configuration specific to a team
 */
export interface TeamLibraryConfig {
  name: string;
  description: string;
  fileKey: string;
}

/**
 * Interface for the expected exports from each team file
 */
export interface TeamModule {
  teamName: string;
  pages: TeamPageConfig[];
  libraries: TeamLibraryConfig[];
}
