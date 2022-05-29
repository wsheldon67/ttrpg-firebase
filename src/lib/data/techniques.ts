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
    tags: ['Water', 'Advance & Attack', 'Blood', 'Rare']
  },
  {
    name: 'Breath Of Ice',
    url: 'Water/BreathOfIce',
    tags: ['Water', 'Defend & Maneuver']
  },
  {
    name: 'Creeping Ice',
    url: 'Water/CreepingIce',
    tags: ['Water', 'Evade & Observe']
  },
  {
    name: 'Crushing Grip Of Seas',
    url: 'Water/CrushingGripOfSeas',
    tags: ['Water', 'Advance & Attack', 'Rare']
  },
  {
    name: 'Flow As Water',
    url: 'Water/FlowAsWater',
    tags: ['Water', 'Defend & Maneuver']
  },
  {
    name: 'Freeze Blood',
    url: 'Water/FreezeBlood',
    tags: ['Water', 'Advance & Attack', 'Rare', 'Blood']
  },
  {
    name: 'Ice Guantlet',
    url: 'Water/IceGuantlet',
    tags: ['Water', 'Defend & Maneuver']
  },
  {
    name: 'Ice Prison',
    url: 'Water/IcePrison',
    tags: ['Water', 'Advance & Attack', 'Rare']
  },
  {
    name: 'Refresh',
    url: 'Water/Refresh',
    tags: ['Water', 'Evade & Observe', 'Heal']
  },
  {
    name: 'Stream The Water',
    url: 'Water/StreamTheWater',
    tags: ['Water', 'Advance & Attack']
  },
  {
    name: 'Slip Over Ice',
    url: 'Water/SlipOverIce',
    tags: ['Water', 'Advance & Attack']
  },
  {
    name: 'Water Cloak',
    url: 'Water/WaterCloak',
    tags: ['Water', 'Defend & Maneuver', 'Rare']
  },
  {
    name: 'Water Whip',
    url: 'Water/WaterWhip',
    tags: ['Water', 'Defend & Maneuver']
  },/*
  {
    name: 'Detect The Heavy Step',
    url: 'Earth/DetectTheHeavyStep',
    tags: ['Earth']
  },
  {
    name: 'Dust Stepping',
    url: 'Earth/DustStepping',
    tags: ['Earth']
  },
  {
    name: 'Earth Armor',
    url: 'Earth/EarthArmor',
    tags: ['Earth']
  },
  {
    name: 'Earth Guantlet',
    url: 'Earth/EarthGuantlet',
    tags: ['Earth']
  },
  {
    name: 'Earth Launch',
    url: 'Earth/EarthLaunch',
    tags: ['Earth']
  },
  {
    name: 'Earth Sinking',
    url: 'Earth/EarthSinking',
    tags: ['Earth']
  },
  {
    name: 'Eat Dirt',
    url: 'Earth/EatDirt',
    tags: ['Earth']
  },
  {
    name: 'Ground Shift',
    url: 'Earth/GroundShift',
    tags: ['Earth']
  },
  {
    name: 'Lava Star',
    url: 'Earth/LavaStar',
    tags: ['Earth']
  },
  {
    name: 'Metal Bindings',
    url: 'Earth/MetalBindings',
    tags: ['Earth']
  },
  {
    name: 'Rock Column',
    url: 'Earth/RockColumn',
    tags: ['Earth']
  },
  {
    name: 'Stone Shield',
    url: 'Earth/StoneShield',
    tags: ['Earth']
  },
  {
    name: 'Thick Mud',
    url: 'Earth/ThickMud',
    tags: ['Earth']
  },
  {
    name: 'A Single Spark',
    url: 'Fire/ASingleSpark',
    tags: ['Fire']
  },
  {
    name: 'Arc Lightning',
    url: 'Fire/ArcLightning',
    tags: ['Fire']
  },
  {
    name: 'Breath Of Fire',
    url: 'Fire/BreathOfFire',
    tags: ['Fire']
  },
  {
    name: 'Explosive Blast',
    url: 'Fire/ExplosiveBlast',
    tags: ['Fire']
  },
  {
    name: 'Fire Blade',
    url: 'Fire/FireBlade',
    tags: ['Fire']
  },
  {
    name: 'Fire Pinwheel',
    url: 'Fire/FirePinwheel',
    tags: ['Fire']
  },
  {
    name: 'Fire Stream',
    url: 'Fire/FireStream',
    tags: ['Fire']
  },
  {
    name: 'Fire Whip',
    url: 'Fire/FireWhip',
    tags: ['Fire']
  },
  {
    name: 'Flame Knives',
    url: 'Fire/FlameKnives',
    tags: ['Fire']
  },
  {
    name: 'Jet Stepping',
    url: 'Fire/JetStepping',
    tags: ['Fire']
  },
  {
    name: 'Lightning Blast',
    url: 'Fire/LightningBlast',
    tags: ['Fire']
  },
  {
    name: 'Spiral Flare Kick',
    url: 'Fire/SpiralFlareKick',
    tags: ['Fire']
  },
  {
    name: 'Wall Of Fiery Breath',
    url: 'Fire/WallOfFieryBreath',
    tags: ['Fire']
  },
  {
    name: 'Air Cushion',
    url: 'Air/AirCushion',
    tags: ['Air']
  },
  {
    name: 'Air Scooter',
    url: 'Air/AirScooter',
    tags: ['Air']
  },
  {
    name: 'Air Swipe',
    url: 'Air/AirSwipe',
    tags: ['Air']
  },
  {
    name: 'Breath Of Wind',
    url: 'Air/BreathOfWind',
    tags: ['Air']
  },
  {
    name: 'Cannonball',
    url: 'Air/Cannonball',
    tags: ['Air']
  },
  {
    name: 'Cushion The Forceful Fist',
    url: 'Air/CushionTheForcefulFist',
    tags: ['Air']
  },
  {
    name: 'Directed Funnel',
    url: 'Air/DirectedFunnel',
    tags: ['Air']
  },
  {
    name: 'Reed In The Wind',
    url: 'Air/ReedInTheWind',
    tags: ['Air']
  },
  {
    name: 'Shockwave',
    url: 'Air/Shockwave',
    tags: ['Air']
  },
  {
    name: 'Small Vortex',
    url: 'Air/SmallVortex',
    tags: ['Air']
  },
  {
    name: 'Suction',
    url: 'Air/Suction',
    tags: ['Air']
  },
  {
    name: 'Twisting Wind',
    url: 'Air/TwistingWind',
    tags: ['Air']
  },
  {
    name: 'Wind Run',
    url: 'Air/WindRun',
    tags: ['Air']
  },
  {
    name: 'Boom',
    url: 'Weapon/Boom',
    tags: ['Weapon']
  },
  {
    name: 'Chi Blocking Jabs',
    url: 'Weapon/ChiBlockingJabs',
    tags: ['Weapon']
  },
  {
    name: 'Chart A Course',
    url: 'Weapon/ChartACourse',
    tags: ['Weapon']
  },
  {
    name: 'Counterstrike',
    url: 'Weapon/Counterstrike',
    tags: ['Weapon']
  },
  {
    name: 'Disarm',
    url: 'Weapon/Disarm',
    tags: ['Weapon']
  },
  {
    name: 'Feint',
    url: 'Weapon/Feint',
    tags: ['Weapon']
  },
  {
    name: 'Parry',
    url: 'Weapon/Parry',
    tags: ['Weapon']
  },
  {
    name: 'Pin A Fly To A Tree',
    url: 'Weapon/PinAFlyToATree',
    tags: ['Weapon']
  },
  {
    name: 'Pinpoint Thrust',
    url: 'Weapon/PinpointThrust',
    tags: ['Weapon']
  },
  {
    name: 'Switch It Up',
    url: 'Weapon/SwitchItUp',
    tags: ['Weapon']
  },
  {
    name: 'Take The High Ground',
    url: 'Weapon/TakeTheHighGround',
    tags: ['Weapon']
  },
  {
    name: 'Turn The Tables',
    url: 'Weapon/TurnTheTables',
    tags: ['Weapon']
  },
  {
    name: 'Better Faster Stronger',
    url: 'Tech/BetterFasterStronger',
    tags: ['Tech']
  },
  {
    name: 'Blinded By Science',
    url: 'Tech/BlindedByScience',
    tags: ['Tech']
  },
  {
    name: 'Collect Material',
    url: 'Tech/CollectMaterial',
    tags: ['Tech']
  },
  {
    name: 'Entangler',
    url: 'Tech/Entangler',
    tags: ['Tech']
  },
  {
    name: 'Full Power Attack',
    url: 'Tech/FullPowerAttack',
    tags: ['Tech']
  },
  {
    name: 'Jolt',
    url: 'Tech/Jolt',
    tags: ['Tech']
  },
  {
    name: 'Jury Rig',
    url: 'Tech/JuryRig',
    tags: ['Tech']
  },
  {
    name: 'Pinpoint Flaws',
    url: 'Tech/PinpointFlaws',
    tags: ['Tech']
  },
  {
    name: 'Plant Trap',
    url: 'Tech/PlantTrap',
    tags: ['Tech']
  },
  {
    name: 'Rebuild',
    url: 'Tech/Rebuild',
    tags: ['Tech']
  },
  {
    name: 'Smoke Bomb',
    url: 'Tech/SmokeBomb',
    tags: ['Tech']
  },
  {
    name: 'Wind Up',
    url: 'Tech/WindUp',
    tags: ['Tech']
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

]