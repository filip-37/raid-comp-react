export const buffs_and_debuffs = {
  buffs: {
    '5_percent_primary_stats': {
      name: '5% Primary Stats (Str/Agi/Int)',
      sources: [
        { type: 'class', name: 'Druid', ability: 'Mark of the Wild' },
        { type: 'class', name: 'Monk', ability: 'Legacy of the Emperor' },
        { type: 'class', name: 'Paladin', ability: 'Blessing of Kings' },
        {
          type: 'hunter_pet',
          name: 'Shale Spider',
          ability: 'Embrace of the Shale Spider',
          exotic: true,
        },
      ],
    },
    '10_percent_attack_power': {
      name: '10% Attack Power',
      sources: [
        { type: 'class', name: 'Death Knight', ability: 'Horn of Winter' },
        { type: 'class', name: 'Hunter', ability: 'Trueshot Aura' },
        { type: 'class', name: 'Warrior', ability: 'Battle Shout' },
      ],
    },
    '10_percent_spell_power': {
      name: '10% Spell Power',
      sources: [
        { type: 'class', name: 'Mage', ability: 'Arcane Brilliance' },
        { type: 'class', name: 'Shaman', ability: 'Burning Wrath' },
        { type: 'class', name: 'Warlock', ability: 'Dark Intent' },
        {
          type: 'hunter_pet',
          name: 'Water Strider',
          ability: 'Still Water',
          exotic: true,
        },
      ],
    },
    '5_percent_critical_strike': {
      name: '5% Critical Strike Chance',
      sources: [
        {
          type: 'class',
          name: 'Druid',
          spec: ['Feral', 'Guardian'],
          ability: 'Leader of the Pack',
        },
        { type: 'class', name: 'Mage', ability: 'Arcane Brilliance' },
        {
          type: 'class',
          name: 'Monk',
          spec: ['Windwalker'],
          ability: 'Legacy of the White Tiger',
        },
        {
          type: 'hunter_pet',
          name: 'Devilsaur',
          ability: 'Terrifying Roar',
          exotic: true,
        },
        { type: 'hunter_pet', name: 'Wolf', ability: 'Furious Howl' },
        {
          type: 'hunter_pet',
          name: 'Quilen',
          ability: 'Fearless Roar',
          exotic: true,
        },
        {
          type: 'hunter_pet',
          name: 'Water Strider',
          ability: 'Still Water',
          exotic: true,
        },
      ],
    },
    '10_percent_stamina': {
      name: '10% Stamina',
      sources: [
        { type: 'class', name: 'Priest', ability: 'Power Word: Fortitude' },
        { type: 'class', name: 'Warlock', ability: 'Dark Intent' },
        { type: 'class', name: 'Warrior', ability: 'Commanding Shout' },
      ],
    },
    '10_percent_melee_ranged_attack_speed': {
      name: '10% Melee/Ranged Attack Speed',
      sources: [
        {
          type: 'class',
          name: 'Death Knight',
          spec: ['Frost', 'Unholy'],
          ability: 'Improved Icy Talons',
        },
        { type: 'class', name: 'Rogue', ability: "Swiftblade's Cunning" },
        {
          type: 'class',
          name: 'Shaman',
          spec: ['Enhancement'],
          ability: 'Unleashed Rage',
        },
        { type: 'hunter_pet', name: 'Hyena', ability: 'Cackling Howl' },
        {
          type: 'hunter_pet',
          name: 'Serpent',
          ability: "Serpent's Swiftness",
        },
      ],
    },
    '5_percent_spell_haste': {
      name: '5% Spell Haste',
      sources: [
        {
          type: 'class',
          name: 'Druid',
          spec: ['Balance'],
          ability: 'Moonkin Aura',
        },
        {
          type: 'class',
          name: 'Priest',
          spec: ['Shadow'],
          ability: 'Mind Quickening',
        },
        {
          type: 'class',
          name: 'Shaman',
          spec: ['Elemental'],
          ability: 'Elemental Oath',
        },
        {
          type: 'hunter_pet',
          name: 'Sporebat',
          ability: 'Energizing Spores',
        },
      ],
    },
    '3000_mastery_rating': {
      name: '3000 Mastery Rating',
      sources: [
        { type: 'class', name: 'Paladin', ability: 'Blessing of Might' },
        { type: 'class', name: 'Shaman', ability: 'Grace of Air' },
        { type: 'hunter_pet', name: 'Cat', ability: 'Roar of Courage' },
        {
          type: 'hunter_pet',
          name: 'Spirit Beast',
          ability: 'Spirit Beast Blessing',
          exotic: true,
        },
      ],
    },
    bloodlust_heroism_effect: {
      name: 'Bloodlust/Heroism/Time Warp',
      sources: [
        { type: 'class', name: 'Mage', ability: 'Time Warp' },
        { type: 'class', name: 'Shaman', ability: 'Bloodlust/Heroism' },
        {
          type: 'hunter_pet',
          name: 'Core Hound',
          ability: 'Bloodlust/Heroism',
          exotic: true,
        },
      ],
    },
  },
  debuffs: {
    '12_percent_armor_reduction': {
      name: '12% Armor Reduction (Weakened Armor)',
      sources: [
        { type: 'class', name: 'Druid', ability: 'Faerie Fire' },
        { type: 'class', name: 'Rogue', ability: 'Expose Armor' },
        { type: 'class', name: 'Warrior', ability: 'Sunder Armor' },
        { type: 'hunter_pet', name: 'Raptor', ability: 'Tear Armor' },
        { type: 'hunter_pet', name: 'Tallstrider', ability: 'Dust Cloud' },
      ],
    },
    '4_percent_physical_vulnerability': {
      name: '4% Physical Damage Taken (Physical Vulnerability)',
      sources: [
        {
          type: 'class',
          name: 'Death Knight',
          spec: ['Frost', 'Unholy'],
          ability: 'Brittle Bones/Ebon Plaguebringer',
        },
        {
          type: 'class',
          name: 'Paladin',
          spec: ['Retribution'],
          ability: 'Judgments of the Bold',
        },
        {
          type: 'class',
          name: 'Warrior',
          spec: ['Arms', 'Fury'],
          ability: 'Colossus Smash',
        },
        { type: 'hunter_pet', name: 'Boar', ability: 'Gore' },
        { type: 'hunter_pet', name: 'Ravager', ability: 'Ravage' },
        {
          type: 'hunter_pet',
          name: 'Rhino',
          ability: 'Stampede',
          exotic: true,
        },
        {
          type: 'hunter_pet',
          name: 'Worm',
          ability: 'Acid Spit',
          exotic: true,
        },
      ],
    },
    '5_percent_magic_vulnerability': {
      name: '5% Spell Damage Taken (Magic Vulnerability)',
      sources: [
        { type: 'class', name: 'Rogue', ability: 'Master Poisoner' },
        { type: 'class', name: 'Warlock', ability: 'Curse of the Elements' },
        { type: 'hunter_pet', name: 'Dragonhawk', ability: 'Fire Breath' },
        {
          type: 'hunter_pet',
          name: 'Wind Serpent',
          ability: 'Lightning Breath',
        },
      ],
    },
  },
};

export const classes = [
  {
    id: '1',
    class_name: 'Shaman',
    class_iconURL: 'classicon_shaman',
    specializations: [
      {
        id: '1_1',
        name: 'Elemental',
        iconURL: 'spell_nature_lightning', // Changed from lightning
        role: 'DPS',
      },
      {
        id: '1_2',
        name: 'Enhancement',
        iconURL: 'spell_shaman_improvedstormstrike', // Common Enhancement icon
        role: 'DPS',
      },
      {
        id: '1_3',
        name: 'Restoration',
        iconURL: 'spell_nature_healingwavegreater', // Common Restoration icon
        role: 'Healer',
      },
    ],
  },
  {
    id: '2',
    class_name: 'Warrior',
    class_iconURL: 'classicon_warrior',
    specializations: [
      {
        id: '2_1',
        name: 'Arms',
        iconURL: 'ability_warrior_savageblow', // Common Arms icon
        role: 'DPS',
      },
      {
        id: '2_2',
        name: 'Fury',
        iconURL: 'ability_warrior_innerrage',
        role: 'DPS',
      },
      {
        id: '2_3',
        name: 'Protection',
        iconURL: 'ability_warrior_defensivestance',
        role: 'Tank',
      },
    ],
  },
  {
    id: '3',
    class_name: 'Paladin',
    class_iconURL: 'classicon_paladin',
    specializations: [
      {
        id: '3_1',
        name: 'Holy',
        iconURL: 'spell_holy_holybolt',
        role: 'Healer',
      },
      {
        id: '3_2',
        name: 'Protection',
        iconURL: 'ability_paladin_shieldofthetemplar', // Common Protection icon
        role: 'Tank',
      },
      {
        id: '3_3',
        name: 'Retribution',
        iconURL: 'paladin_retribution', // Common Retribution icon
        role: 'DPS',
      },
    ],
  },
  {
    id: '4',
    class_name: 'Hunter',
    class_iconURL: 'classicon_hunter',
    specializations: [
      {
        id: '4_1',
        name: 'Beast Mastery',
        iconURL: 'ability_hunter_bestialdiscipline', // Common Beast Mastery icon
        role: 'DPS',
      },
      {
        id: '4_2',
        name: 'Marksmanship',
        iconURL: 'ability_hunter_focusedaim', // Common Marksmanship icon
        role: 'DPS',
      },
      {
        id: '4_3',
        name: 'Survival',
        iconURL: 'ability_hunter_camouflage', // Common Survival icon
        role: 'DPS',
      },
    ],
  },
  {
    id: '5',
    class_name: 'Rogue',
    class_iconURL: 'classicon_rogue',
    specializations: [
      {
        id: '5_1',
        name: 'Assassination',
        iconURL: 'ability_rogue_deadlybrew', // Common Assassination icon
        role: 'DPS',
      },
      {
        id: '5_2',
        name: 'Combat',
        iconURL: 'ability_backstab', // Common Combat (now Outlaw) icon
        role: 'DPS',
      },
      {
        id: '5_3',
        name: 'Subtlety',
        iconURL: 'ability_stealth',
        role: 'DPS',
      },
    ],
  },
  {
    id: '6',
    class_name: 'Priest',
    class_iconURL: 'classicon_priest',
    specializations: [
      {
        id: '6_1',
        name: 'Discipline',
        iconURL: 'spell_holy_powerwordshield', // Common Discipline icon
        role: 'Healer',
      },
      {
        id: '6_2',
        name: 'Holy',
        iconURL: 'spell_holy_guardianspirit', // Common Holy icon
        role: 'Healer',
      },
      {
        id: '6_3',
        name: 'Shadow',
        iconURL: 'spell_shadow_shadowwordpain',
        role: 'DPS',
      },
    ],
  },
  {
    id: '7',
    class_name: 'Death Knight',
    class_iconURL: 'classicon_deathknight',
    specializations: [
      {
        id: '7_1',
        name: 'Blood',
        iconURL: 'spell_deathknight_bloodpresence',
        role: 'Tank',
      },
      {
        id: '7_2',
        name: 'Frost',
        iconURL: 'spell_deathknight_frostpresence',
        role: 'DPS',
      },
      {
        id: '7_3',
        name: 'Unholy',
        iconURL: 'spell_deathknight_unholypresence',
        role: 'DPS',
      },
    ],
  },
  {
    id: '8',
    class_name: 'Mage',
    class_iconURL: 'classicon_mage',
    specializations: [
      {
        id: '8_1',
        name: 'Arcane',
        iconURL: 'spell_holy_magicalsentry', // Common Arcane icon
        role: 'DPS',
      },
      {
        id: '8_2',
        name: 'Fire',
        iconURL: 'spell_fire_firebolt02',
        role: 'DPS',
      },
      {
        id: '8_3',
        name: 'Frost',
        iconURL: 'spell_frost_frostbolt02',
        role: 'DPS',
      },
    ],
  },
  {
    id: '9',
    class_name: 'Warlock',
    class_iconURL: 'classicon_warlock',
    specializations: [
      {
        id: '9_1',
        name: 'Affliction',
        iconURL: 'spell_shadow_deathcoil', // Common Affliction icon
        role: 'DPS',
      },
      {
        id: '9_2',
        name: 'Demonology',
        iconURL: 'spell_shadow_metamorphosis', // Common Demonology icon
        role: 'DPS',
      },
      {
        id: '9_3',
        name: 'Destruction',
        iconURL: 'spell_shadow_rainoffire', // Common Destruction icon
        role: 'DPS',
      },
    ],
  },
  {
    id: '10',
    class_name: 'Monk',
    class_iconURL: 'classicon_monk',
    specializations: [
      {
        id: '10_1',
        name: 'Brewmaster',
        iconURL: 'spell_monk_brewmaster_spec', // Specific Monk spec icon
        role: 'Tank',
      },
      {
        id: '10_2',
        name: 'Mistweaver',
        iconURL: 'spell_monk_mistweaver_spec', // Specific Monk spec icon
        role: 'Healer',
      },
      {
        id: '10_3',
        name: 'Windwalker',
        iconURL: 'spell_monk_windwalker_spec', // Specific Monk spec icon
        role: 'DPS',
      },
    ],
  },
  {
    id: '11',
    class_name: 'Druid',
    class_iconURL: 'classicon_druid',
    specializations: [
      {
        id: '11_1',
        name: 'Balance',
        iconURL: 'spell_nature_starfall',
        role: 'DPS',
      },
      {
        id: '11_2',
        name: 'Feral',
        iconURL: 'ability_druid_catform',
        role: 'DPS',
      },
      {
        id: '11_3',
        name: 'Guardian',
        iconURL: 'ability_racial_bearform', // Common Guardian icon
        role: 'Tank',
      },
      {
        id: '11_4',
        name: 'Restoration',
        iconURL: 'spell_nature_healingtouch',
        role: 'Healer',
      },
    ],
  },
];

export const hunterPets = [
  {
    id: '2',
    name: 'Boar',
    iconURL: 'ability_hunter_pet_boar',
    description: 'Increases physical damage taken by the target by 4%.',
    bm_only: false,
  },
  {
    id: '4',
    name: 'Cat',
    iconURL: 'ability_hunter_pet_cat',
    description: 'Increases Mastery by 3000.',
    bm_only: false,
  },
  {
    id: '7',
    name: 'Dog',
    iconURL: 'inv_jewelry_necklace_22',
    description: 'Increases Mastery by 3000.',
    bm_only: false,
  },
  {
    id: '8',
    name: 'Dragonhawk',
    iconURL: 'ability_hunter_pet_dragonhawk',
    description: 'Increases magic damage taken by 5%.',
    bm_only: false,
  },
  {
    id: '11',
    name: 'Hyena',
    iconURL: 'ability_hunter_pet_hyena',
    description: 'Increases melee and ranged attack speed by 10%.',
    bm_only: false,
  },
  {
    id: '15',
    name: 'Raptor',
    iconURL: 'ability_hunter_pet_raptor',
    description: "Reduces target's armor by 12%.",
    bm_only: false,
  },
  {
    id: '16',
    name: 'Ravager',
    iconURL: 'ability_hunter_pet_ravager',
    description: 'Increases physical damage taken by the target by 4%.',
    bm_only: false,
  },
  {
    id: '17',
    name: 'Rhino',
    iconURL: 'ability_hunter_pet_rhino',
    description: 'Increases physical damage taken by the target by 4%.',
    bm_only: false,
  },
  {
    id: '19',
    name: 'Serpent',
    iconURL: 'spell_nature_guardianward',
    description: 'Increases melee and ranged attack speed by 10%.',
    bm_only: false,
  },
  {
    id: '21',
    name: 'Spirit Beast',
    iconURL: 'ability_druid_primalprecision',
    description: 'Increases Mastery by 3000.',
    bm_only: true,
  },
  {
    id: '22',
    name: 'Sporebat',
    iconURL: 'ability_hunter_pet_sporebat',
    description: 'Increases spell casting speed by 10%.',
    bm_only: false,
  },
  {
    id: '23',
    name: 'Tallstrider',
    iconURL: 'ability_hunter_pet_tallstrider',
    description: "Reduces target's armor by 12%.",
    bm_only: false,
  },
  {
    id: '26',
    name: 'Wind Serpent',
    iconURL: 'ability_hunter_pet_windserpent',
    description: 'Increases magic damage taken by 5%.',
    bm_only: false,
  },
  {
    id: '27',
    name: 'Wolf',
    iconURL: 'ability_hunter_pet_wolf',
    description: 'Increases Critical Strike chance by 5%.',
    bm_only: false,
  },
  {
    id: '28',
    name: 'Worm',
    iconURL: 'ability_hunter_pet_worm',
    description: 'Increases physical damage taken by the target by 4%.',
    bm_only: true,
  },
  {
    id: '33',
    name: 'Quilen',
    iconURL: 'achievement_moguraid_01',
    description: 'Can resurrect a fallen ally.',
    bm_only: true,
  },
  {
    id: '34',
    name: 'Water Strider',
    iconURL: 'inv_pet_waterstrider',
    description: 'Increases Spell Power and Critical Strike chance by 5%.',
    bm_only: true,
  },
  {
    id: '35',
    name: 'Core Hound',
    iconURL: 'ability_hunter_pet_corehound',
    description: 'Provides Bloodlust/Heroism effect.',
    bm_only: true,
  },
  {
    id: '36',
    name: 'Devilsaur',
    iconURL: 'ability_hunter_pet_devilsaur',
    description: 'Increases Critical Strike chance by 5%.',
    bm_only: true,
  },
  {
    id: '38',
    name: 'Shale Spider',
    iconURL: 'ability_hunter_pet_spider',
    description: 'Increases all stats by 5%.',
    bm_only: true,
  },
];
