

interface Technique {
  name: string
  url: string
  tags: string[]
}

export const techniques: Technique[] = [
  {
    name: 'Attack Weakness',
    url: 'Universal/AttackWeakness',
    tags: ['Universal', 'Advance & Attack']
  },
  {
    name: 'Charge',
    url: 'Universal/Charge',
    tags: ['Universal', 'Advance & Attack']
  },
  {
    name: 'Duck And Twist',
    url: 'Universal/DuckAndTwist',
    tags: ['Universal', 'Evade & Observe']
  },
  {
    name: 'Forceful Blow',
    url: 'Universal/ForcefulBlow',
    tags: ['Universal', 'Advance & Attack']
  },
  {
    name: 'Furious Assault',
    url: 'Universal/FuriousAssault',
    tags: ['Universal', 'Advance & Attack', 'Rare']
  },
  {
    name: 'Pounce',
    url: 'Universal/Pounce',
    tags: ['Universal', 'Advance & Attack', 'Rare']
  },
  {
    name: 'Protect',
    url: 'Universal/Protect',
    tags: ['Universal', 'Defend & Maneuver']
  },
  {
    name: 'Rapid Assessment',
    url: 'Universal/RapidAssessment',
    tags: ['Universal', 'Evade & Observe']
  },
  {
    name: 'Seek Vulnerabilities',
    url: 'Universal/SeekVulnerabilities',
    tags: ['Universal', 'Evade & Observe']
  },
  {
    name: 'Sense Environment',
    url: 'Universal/SenseEnvironment',
    tags: ['Universal', 'Evade & Observe']
  },
  {
    name: 'Stand Strong',
    url: 'Universal/StandStrong',
    tags: ['Universal', 'Defend & Maneuver']
  },
  {
    name: 'Suck It Up',
    url: 'Universal/SuckItUp',
    tags: ['Universal', 'Defend & Maneuver']
  },
  {
    name: 'Take Cover',
    url: 'Universal/TakeCover',
    tags: ['Universal', 'Defend & Maneuver']
  },/*
  {
    name: 'Attend To Commands',
    url: 'Group/AttendToCommands',
    tags: ['Group']
  },
  {
    name: 'Coordination',
    url: 'Group/Coordination',
    tags: ['Group']
  },
  {
    name: 'Draw Foe',
    url: 'Group/DrawFoe',
    tags: ['Group']
  },
  {
    name: 'Engulf',
    url: 'Group/Engulf',
    tags: ['Group']
  },
  {
    name: 'Focused Fire',
    url: 'Group/FocusedFire',
    tags: ['Group']
  },
  {
    name: 'Overwhelm',
    url: 'Group/Overwhelm',
    tags: ['Group']
  },
  {
    name: 'Scatter And Regroup',
    url: 'Group/ScatterAndRegroup',
    tags: ['Group']
  },
  {
    name: 'Shield Wall',
    url: 'Group/ShieldWall',
    tags: ['Group']
  },
  {
    name: 'Spread Out',
    url: 'Group/SpreadOut',
    tags: ['Group']
  },
  {
    name: 'Surround',
    url: 'Group/Surround',
    tags: ['Group']
  },
  {
    name: 'Swarm',
    url: 'Group/Swarm',
    tags: ['Group']
  },
  {
    name: 'Test Defenses',
    url: 'Group/TestDefenses',
    tags: ['Group']
  },
  {
    name: 'Protect Objective',
    url: 'Group/ProtectObjective',
    tags: ['Group']
  },*/
  {
    name: 'Blood Twisting',
    url: 'Water/BloodTwisting',
    tags: ['Waterbending', 'Advance & Attack', 'Blood', 'Rare']
  },
  {
    name: 'Breath Of Ice',
    url: 'Water/BreathOfIce',
    tags: ['Waterbending', 'Defend & Maneuver']
  },
  {
    name: 'Creeping Ice',
    url: 'Water/CreepingIce',
    tags: ['Waterbending', 'Evade & Observe']
  },
  {
    name: 'Crushing Grip Of Seas',
    url: 'Water/CrushingGripOfSeas',
    tags: ['Waterbending', 'Advance & Attack', 'Rare']
  },
  {
    name: 'Flow As Water',
    url: 'Water/FlowAsWater',
    tags: ['Waterbending', 'Defend & Maneuver']
  },
  {
    name: 'Freeze Blood',
    url: 'Water/FreezeBlood',
    tags: ['Waterbending', 'Advance & Attack', 'Rare', 'Blood']
  },
  {
    name: 'Ice Guantlet',
    url: 'Water/IceGuantlet',
    tags: ['Waterbending', 'Defend & Maneuver']
  },
  {
    name: 'Ice Prison',
    url: 'Water/IcePrison',
    tags: ['Waterbending', 'Advance & Attack', 'Rare']
  },
  {
    name: 'Refresh',
    url: 'Water/Refresh',
    tags: ['Waterbending', 'Evade & Observe', 'Heal']
  },
  {
    name: 'Stream The Water',
    url: 'Water/StreamTheWater',
    tags: ['Waterbending', 'Advance & Attack']
  },
  {
    name: 'Slip Over Ice',
    url: 'Water/SlipOverIce',
    tags: ['Waterbending', 'Advance & Attack']
  },
  {
    name: 'Water Cloak',
    url: 'Water/WaterCloak',
    tags: ['Waterbending', 'Defend & Maneuver', 'Rare']
  },
  {
    name: 'Water Whip',
    url: 'Water/WaterWhip',
    tags: ['Waterbending', 'Defend & Maneuver']
  },/*
  {
    name: 'Detect The Heavy Step',
    url: 'Earth/DetectTheHeavyStep',
    tags: ['Earthbending']
  },
  {
    name: 'Dust Stepping',
    url: 'Earth/DustStepping',
    tags: ['Earthbending']
  },
  {
    name: 'Earth Armor',
    url: 'Earth/EarthArmor',
    tags: ['Earthbending']
  },
  {
    name: 'Earth Guantlet',
    url: 'Earth/EarthGuantlet',
    tags: ['Earthbending']
  },
  {
    name: 'Earth Launch',
    url: 'Earth/EarthLaunch',
    tags: ['Earthbending']
  },
  {
    name: 'Earth Sinking',
    url: 'Earth/EarthSinking',
    tags: ['Earthbending']
  },
  {
    name: 'Eat Dirt',
    url: 'Earth/EatDirt',
    tags: ['Earthbending']
  },
  {
    name: 'Ground Shift',
    url: 'Earth/GroundShift',
    tags: ['Earthbending']
  },
  {
    name: 'Lava Star',
    url: 'Earth/LavaStar',
    tags: ['Earthbending']
  },
  {
    name: 'Metal Bindings',
    url: 'Earth/MetalBindings',
    tags: ['Earthbending']
  },
  {
    name: 'Rock Column',
    url: 'Earth/RockColumn',
    tags: ['Earthbending']
  },
  {
    name: 'Stone Shield',
    url: 'Earth/StoneShield',
    tags: ['Earthbending']
  },
  {
    name: 'Thick Mud',
    url: 'Earth/ThickMud',
    tags: ['Earthbending']
  },
  {
    name: 'A Single Spark',
    url: 'Fire/ASingleSpark',
    tags: ['Firebending']
  },
  {
    name: 'Arc Lightning',
    url: 'Fire/ArcLightning',
    tags: ['Firebending']
  },
  {
    name: 'Breath Of Fire',
    url: 'Fire/BreathOfFire',
    tags: ['Firebending']
  },
  {
    name: 'Explosive Blast',
    url: 'Fire/ExplosiveBlast',
    tags: ['Firebending']
  },
  {
    name: 'Fire Blade',
    url: 'Fire/FireBlade',
    tags: ['Firebending']
  },
  {
    name: 'Fire Pinwheel',
    url: 'Fire/FirePinwheel',
    tags: ['Firebending']
  },
  {
    name: 'Fire Stream',
    url: 'Fire/FireStream',
    tags: ['Firebending']
  },
  {
    name: 'Fire Whip',
    url: 'Fire/FireWhip',
    tags: ['Firebending']
  },
  {
    name: 'Flame Knives',
    url: 'Fire/FlameKnives',
    tags: ['Firebending']
  },
  {
    name: 'Jet Stepping',
    url: 'Fire/JetStepping',
    tags: ['Firebending']
  },
  {
    name: 'Lightning Blast',
    url: 'Fire/LightningBlast',
    tags: ['Firebending']
  },
  {
    name: 'Spiral Flare Kick',
    url: 'Fire/SpiralFlareKick',
    tags: ['Firebending']
  },
  {
    name: 'Wall Of Fiery Breath',
    url: 'Fire/WallOfFieryBreath',
    tags: ['Firebending']
  },
  {
    name: 'Air Cushion',
    url: 'Air/AirCushion',
    tags: ['Airbending']
  },
  {
    name: 'Air Scooter',
    url: 'Air/AirScooter',
    tags: ['Airbending']
  },
  {
    name: 'Air Swipe',
    url: 'Air/AirSwipe',
    tags: ['Airbending']
  },
  {
    name: 'Breath Of Wind',
    url: 'Air/BreathOfWind',
    tags: ['Airbending']
  },
  {
    name: 'Cannonball',
    url: 'Air/Cannonball',
    tags: ['Airbending']
  },
  {
    name: 'Cushion The Forceful Fist',
    url: 'Air/CushionTheForcefulFist',
    tags: ['Airbending']
  },
  {
    name: 'Directed Funnel',
    url: 'Air/DirectedFunnel',
    tags: ['Airbending']
  },
  {
    name: 'Reed In The Wind',
    url: 'Air/ReedInTheWind',
    tags: ['Airbending']
  },
  {
    name: 'Shockwave',
    url: 'Air/Shockwave',
    tags: ['Airbending']
  },
  {
    name: 'Small Vortex',
    url: 'Air/SmallVortex',
    tags: ['Airbending']
  },
  {
    name: 'Suction',
    url: 'Air/Suction',
    tags: ['Airbending']
  },
  {
    name: 'Twisting Wind',
    url: 'Air/TwistingWind',
    tags: ['Airbending']
  },
  {
    name: 'Wind Run',
    url: 'Air/WindRun',
    tags: ['Airbending']
  },
  {
    name: 'Boom',
    url: 'Weapon/Boom',
    tags: ['Weapons']
  },
  {
    name: 'Chi Blocking Jabs',
    url: 'Weapon/ChiBlockingJabs',
    tags: ['Weapons']
  },
  {
    name: 'Chart A Course',
    url: 'Weapon/ChartACourse',
    tags: ['Weapons']
  },
  {
    name: 'Counterstrike',
    url: 'Weapon/Counterstrike',
    tags: ['Weapons']
  },
  {
    name: 'Disarm',
    url: 'Weapon/Disarm',
    tags: ['Weapons']
  },
  {
    name: 'Feint',
    url: 'Weapon/Feint',
    tags: ['Weapons']
  },
  {
    name: 'Parry',
    url: 'Weapon/Parry',
    tags: ['Weapons']
  },
  {
    name: 'Pin A Fly To A Tree',
    url: 'Weapon/PinAFlyToATree',
    tags: ['Weapons']
  },
  {
    name: 'Pinpoint Thrust',
    url: 'Weapon/PinpointThrust',
    tags: ['Weapons']
  },
  {
    name: 'Switch It Up',
    url: 'Weapon/SwitchItUp',
    tags: ['Weapons']
  },
  {
    name: 'Take The High Ground',
    url: 'Weapon/TakeTheHighGround',
    tags: ['Weapons']
  },
  {
    name: 'Turn The Tables',
    url: 'Weapon/TurnTheTables',
    tags: ['Weapons']
  },
  {
    name: 'Better Faster Stronger',
    url: 'Tech/BetterFasterStronger',
    tags: ['Technology']
  },
  {
    name: 'Blinded By Science',
    url: 'Tech/BlindedByScience',
    tags: ['Technology']
  },
  {
    name: 'Collect Material',
    url: 'Tech/CollectMaterial',
    tags: ['Technology']
  },
  {
    name: 'Entangler',
    url: 'Tech/Entangler',
    tags: ['Technology']
  },
  {
    name: 'Full Power Attack',
    url: 'Tech/FullPowerAttack',
    tags: ['Technology']
  },
  {
    name: 'Jolt',
    url: 'Tech/Jolt',
    tags: ['Technology']
  },
  {
    name: 'Jury Rig',
    url: 'Tech/JuryRig',
    tags: ['Technology']
  },
  {
    name: 'Pinpoint Flaws',
    url: 'Tech/PinpointFlaws',
    tags: ['Technology']
  },
  {
    name: 'Plant Trap',
    url: 'Tech/PlantTrap',
    tags: ['Technology']
  },
  {
    name: 'Rebuild',
    url: 'Tech/Rebuild',
    tags: ['Technology']
  },
  {
    name: 'Smoke Bomb',
    url: 'Tech/SmokeBomb',
    tags: ['Technology']
  },
  {
    name: 'Wind Up',
    url: 'Tech/WindUp',
    tags: ['Technology']
  },*/
  {
    name: 'Ready',
    url: 'Basic/Ready',
    tags: ['Basic', 'Defend & Maneuver']
  },
  {
    name: 'Retaliate',
    url: 'Basic/Retaliate',
    tags: ['Basic', 'Defend & Maneuver']
  },
  {
    name: 'Seize A Position',
    url: 'Basic/SeizeAPosition',
    tags: ['Basic', 'Defend & Maneuver']
  },
  {
    name: 'Strike',
    url: 'Basic/Strike',
    tags: ['Basic', 'Advance & Attack']
  },
  {
    name: 'Pressure',
    url: 'Basic/Pressure',
    tags: ['Basic', 'Advance & Attack']
  },
  {
    name: 'Smash',
    url: 'Basic/Smash',
    tags: ['Basic', 'Advance & Attack']
  },
  {
    name: 'Test Balance',
    url: 'Basic/TestBalance',
    tags: ['Basic', 'Evade & Observe']
  },
  {
    name: 'Bolster Or Hinder',
    url: 'Basic/BolsterOrHinder',
    tags: ['Basic', 'Evade & Observe']
  },
  {
    name: 'Commit',
    url: 'Basic/Commit',
    tags: ['Basic', 'Evade & Observe']
  },
  {
    name: 'Pinpoint Aim',
    url: 'Playbook/PinpointAim',
    tags: ['Playbook']
  }
]