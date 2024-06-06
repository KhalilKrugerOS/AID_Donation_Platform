import { BADGE_CRITERIA } from "@/constants/constants";

export interface SearchParamsProps {
  searchParams: { [key: string]: string | undefined };
}

export interface URLProps {
  params: { id: string };
  searchParams: { [key: string]: string | undefined };
}

export interface ParamsProps {
  params: { id: string };
}

export interface BadgeCounts {
  GOLD: number;
  SILVER: number;
  BRONZE: number;
  SILVER: number;
  GOLD: numbr;
  PLATINUM: number;
  DIAMOND: number;

  FREQUENT: number;
  REGULAR: number;
  DEDICATED: number;

  HEALTH: number;
  ANIMAUX: number;
  environnement: number;
}

export type BadgeCriteriaType = keyof typeof BADGE_CRITERIA;

// In your types file (e.g., types.d.ts or index.d.ts)
export type BadgeCriteria =
  | {
      type: "TOTAL_DONATION_AMOUNT" | "NUMBER_OF_DONATIONS";
      count: number;
    }
  | {
      type: "SPECIFIC_CAMPAIGN";
      campaigns: string[]; // Assuming campaigns is an array of strings
    };

export interface BadgeParam {
  criteria: BadgeCriteria[];
}
