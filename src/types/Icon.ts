export type ClassIconData = {
  id: string;
  class_name: string;
  class_iconURL: string;
  specializations: IconData[];
};

export type IconData = {
  id: string;
  iconURL: string;
  name: string;
  role: 'DPS' | 'Healer' | 'Tank';
  class?: string;
};

export type IconProps = {
  name: string;
  iconURL: string;
  size: IconSize;
  onSelect?: (name: string, c: ClassIconData) => void;
  c?: ClassIconData;
};

export type IconSize = 'tiny' | 'small' | 'medium' | 'large';

export type HunterPet = {
  id: string;
  family_name: string;
  iconURL: string; // This will be the base icon name, e.g., "ability_hunter_pet_bear"
  pet_spec: 'Ferocity' | 'Tenacity' | 'Cunning'; // Explicitly defined pet specializations
  role_buff: string; // A short, descriptive name for the main buff/utility
  role_description: string; // A longer description of what the buff/utility does
  bm_only: boolean; // True if only Beast Mastery hunters can tame this pet family
};

export type Source = {
  type: 'class' | 'hunter_pet';
  name: string; // For class: Class Name (e.g., "Druid"); For hunter_pet: Pet Family Name (e.g., "Shale Spider")
  ability: string;
  spec?: string[]; // Only for class type, if a specific spec is required for the buff
  exotic?: boolean; // Only for hunter_pet type, if it's an exotic pet
};

export type SelectedSpecialization = {
  id: string;
  name: string; // Specialization name (e.g., "Guardian")
  iconURL: string;
  role: string;
  class: string; // The parent class name (e.g., "Druid")
};
