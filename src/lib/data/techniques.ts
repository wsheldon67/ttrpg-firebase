

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
  },
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
  },
  {
    name: 'Blood Twisting',
    url: 'Waterbending/BloodTwisting',
    tags: ['Waterbending', 'Advance & Attack', 'Blood', 'Rare']
  },
  {
    name: 'Breath Of Ice',
    url: 'Waterbending/BreathOfIce',
    tags: ['Waterbending', 'Defend & Maneuver']
  },
  {
    name: 'Creeping Ice',
    url: 'Waterbending/CreepingIce',
    tags: ['Waterbending', 'Evade & Observe']
  },
  {
    name: 'Crushing Grip Of Seas',
    url: 'Waterbending/CrushingGripOfSeas',
    tags: ['Waterbending', 'Advance & Attack', 'Rare']
  },
  {
    name: 'Flow As Water',
    url: 'Waterbending/FlowAsWater',
    tags: ['Waterbending', 'Defend & Maneuver']
  },
  {
    name: 'Freeze Blood',
    url: 'Waterbending/FreezeBlood',
    tags: ['Waterbending', 'Advance & Attack', 'Rare', 'Blood']
  },
  {
    name: 'Ice Guantlet',
    url: 'Waterbending/IceGuantlet',
    tags: ['Waterbending', 'Defend & Maneuver']
  },
  {
    name: 'Ice Prison',
    url: 'Waterbending/IcePrison',
    tags: ['Waterbending', 'Advance & Attack', 'Rare']
  },
  {
    name: 'Refresh',
    url: 'Waterbending/Refresh',
    tags: ['Waterbending', 'Evade & Observe', 'Heal']
  },
  {
    name: 'Stream The Water',
    url: 'Waterbending/StreamTheWater',
    tags: ['Waterbending', 'Advance & Attack']
  },
  {
    name: 'Slip Over Ice',
    url: 'Waterbending/SlipOverIce',
    tags: ['Waterbending', 'Advance & Attack']
  },
  {
    name: 'Water Cloak',
    url: 'Waterbending/WaterCloak',
    tags: ['Waterbending', 'Defend & Maneuver', 'Rare']
  },
  {
    name: 'Water Whip',
    url: 'Waterbending/WaterWhip',
    tags: ['Waterbending', 'Defend & Maneuver']
  },
  {
    name: 'Detect The Heavy Step',
    url: 'Earthbending/DetectTheHeavyStep',
    tags: ['Earthbending']
  },
  {
    name: 'Dust Stepping',
    url: 'Earthbending/DustStepping',
    tags: ['Earthbending']
  },
  {
    name: 'Earth Armor',
    url: 'Earthbending/EarthArmor',
    tags: ['Earthbending']
  },
  {
    name: 'Earth Guantlet',
    url: 'Earthbending/EarthGuantlet',
    tags: ['Earthbending']
  },
  {
    name: 'Earth Launch',
    url: 'Earthbending/EarthLaunch',
    tags: ['Earthbending']
  },
  {
    name: 'Earth Sinking',
    url: 'Earthbending/EarthSinking',
    tags: ['Earthbending']
  },
  {
    name: 'Eat Dirt',
    url: 'Earthbending/EatDirt',
    tags: ['Earthbending']
  },
  {
    name: 'Ground Shift',
    url: 'Earthbending/GroundShift',
    tags: ['Earthbending']
  },
  {
    name: 'Lava Star',
    url: 'Earthbending/LavaStar',
    tags: ['Earthbending']
  },
  {
    name: 'Metal Bindings',
    url: 'Earthbending/MetalBindings',
    tags: ['Earthbending']
  },
  {
    name: 'Rock Column',
    url: 'Earthbending/RockColumn',
    tags: ['Earthbending']
  },
  {
    name: 'Stone Shield',
    url: 'Earthbending/StoneShield',
    tags: ['Earthbending']
  },
  {
    name: 'Thick Mud',
    url: 'Earthbending/ThickMud',
    tags: ['Earthbending']
  },
  {
    name: 'A Single Spark',
    url: 'Firebending/ASingleSpark',
    tags: ['Firebending']
  },
  {
    name: 'Arc Lightning',
    url: 'Firebending/ArcLightning',
    tags: ['Firebending']
  },
  {
    name: 'Breath Of Fire',
    url: 'Firebending/BreathOfFire',
    tags: ['Firebending']
  },
  {
    name: 'Explosive Blast',
    url: 'Firebending/ExplosiveBlast',
    tags: ['Firebending']
  },
  {
    name: 'Fire Blade',
    url: 'Firebending/FireBlade',
    tags: ['Firebending']
  },
  {
    name: 'Fire Pinwheel',
    url: 'Firebending/FirePinwheel',
    tags: ['Firebending']
  },
  {
    name: 'Fire Stream',
    url: 'Firebending/FireStream',
    tags: ['Firebending']
  },
  {
    name: 'Fire Whip',
    url: 'Firebending/FireWhip',
    tags: ['Firebending']
  },
  {
    name: 'Flame Knives',
    url: 'Firebending/FlameKnives',
    tags: ['Firebending']
  },
  {
    name: 'Jet Stepping',
    url: 'Firebending/JetStepping',
    tags: ['Firebending']
  },
  {
    name: 'Lightning Blast',
    url: 'Firebending/LightningBlast',
    tags: ['Firebending']
  },
  {
    name: 'Spiral Flare Kick',
    url: 'Firebending/SpiralFlareKick',
    tags: ['Firebending']
  },
  {
    name: 'Wall Of Fiery Breath',
    url: 'Firebending/WallOfFieryBreath',
    tags: ['Firebending']
  },
  {
    name: 'Air Cushion',
    url: 'Airbending/AirCushion',
    tags: ['Airbending']
  },
  {
    name: 'Air Scooter',
    url: 'Airbending/AirScooter',
    tags: ['Airbending']
  },
  {
    name: 'Air Swipe',
    url: 'Airbending/AirSwipe',
    tags: ['Airbending']
  },
  {
    name: 'Breath Of Wind',
    url: 'Airbending/BreathOfWind',
    tags: ['Airbending']
  },
  {
    name: 'Cannonball',
    url: 'Airbending/Cannonball',
    tags: ['Airbending']
  },
  {
    name: 'Cushion The Forceful Fist',
    url: 'Airbending/CushionTheForcefulFist',
    tags: ['Airbending']
  },
  {
    name: 'Directed Funnel',
    url: 'Airbending/DirectedFunnel',
    tags: ['Airbending']
  },
  {
    name: 'Reed In The Wind',
    url: 'Airbending/ReedInTheWind',
    tags: ['Airbending']
  },
  {
    name: 'Shockwave',
    url: 'Airbending/Shockwave',
    tags: ['Airbending']
  },
  {
    name: 'Small Vortex',
    url: 'Airbending/SmallVortex',
    tags: ['Airbending']
  },
  {
    name: 'Suction',
    url: 'Airbending/Suction',
    tags: ['Airbending']
  },
  {
    name: 'Twisting Wind',
    url: 'Airbending/TwistingWind',
    tags: ['Airbending']
  },
  {
    name: 'Wind Run',
    url: 'Airbending/WindRun',
    tags: ['Airbending']
  },
  {
    name: 'Boom',
    url: 'Weapons/Boom',
    tags: ['Weapons']
  },
  {
    name: 'Chi Blocking Jabs',
    url: 'Weapons/ChiBlockingJabs',
    tags: ['Weapons']
  },
  {
    name: 'Chart A Course',
    url: 'Weapons/ChartACourse',
    tags: ['Weapons']
  },
  {
    name: 'Counterstrike',
    url: 'Weapons/Counterstrike',
    tags: ['Weapons']
  },
  {
    name: 'Disarm',
    url: 'Weapons/Disarm',
    tags: ['Weapons']
  },
  {
    name: 'Feint',
    url: 'Weapons/Feint',
    tags: ['Weapons']
  },
  {
    name: 'Parry',
    url: 'Weapons/Parry',
    tags: ['Weapons']
  },
  {
    name: 'Pin A Fly To A Tree',
    url: 'Weapons/PinAFlyToATree',
    tags: ['Weapons']
  },
  {
    name: 'Pinpoint Thrust',
    url: 'Weapons/PinpointThrust',
    tags: ['Weapons']
  },
  {
    name: 'Switch It Up',
    url: 'Weapons/SwitchItUp',
    tags: ['Weapons']
  },
  {
    name: 'Take The High Ground',
    url: 'Weapons/TakeTheHighGround',
    tags: ['Weapons']
  },
  {
    name: 'Turn The Tables',
    url: 'Weapons/TurnTheTables',
    tags: ['Weapons']
  },
  {
    name: 'Better Faster Stronger',
    url: 'Technology/BetterFasterStronger',
    tags: ['Technology']
  },
  {
    name: 'Blinded By Science',
    url: 'Technology/BlindedByScience',
    tags: ['Technology']
  },
  {
    name: 'Collect Material',
    url: 'Technology/CollectMaterial',
    tags: ['Technology']
  },
  {
    name: 'Entangler',
    url: 'Technology/Entangler',
    tags: ['Technology']
  },
  {
    name: 'Full Power Attack',
    url: 'Technology/FullPowerAttack',
    tags: ['Technology']
  },
  {
    name: 'Jolt',
    url: 'Technology/Jolt',
    tags: ['Technology']
  },
  {
    name: 'Jury Rig',
    url: 'Technology/JuryRig',
    tags: ['Technology']
  },
  {
    name: 'Pinpoint Flaws',
    url: 'Technology/PinpointFlaws',
    tags: ['Technology']
  },
  {
    name: 'Plant Trap',
    url: 'Technology/PlantTrap',
    tags: ['Technology']
  },
  {
    name: 'Rebuild',
    url: 'Technology/Rebuild',
    tags: ['Technology']
  },
  {
    name: 'Smoke Bomb',
    url: 'Technology/SmokeBomb',
    tags: ['Technology']
  },
  {
    name: 'Wind Up',
    url: 'Technology/WindUp',
    tags: ['Technology']
  },
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
  },
  {
    name: 'Tag Team',
    url: 'Playbook/TagTeam',
    tags: ['Playbook']
  },
  {
    name: 'Divert',
    url: 'Playbook/Divert',
    tags: ['Playbook']
  },
  {
    name: 'Overwhelm',
    url: 'Playbook/Overwhelm',
    tags: ['Playbook']
  },
  {
    name: 'Wall of Perfection',
    url: 'Playbook/WallofPerfection',
    tags: ['Playbook']
  },
  {
    name: 'Disorient',
    url: 'Playbook/Disorient',
    tags: ['Playbook']
  },
  {
    name: 'Slide Around the Blow',
    url: 'Playbook/SlideAroundTheBlow',
    tags: ['Playbook']
  },
  {
    name: 'Steady Stance',
    url: 'Playbook/SteadyStance',
    tags: ['Playbook']
  },
  {
    name: 'Sweep The Leg',
    url: 'Playbook/SweepTheLeg',
    tags: ['Playbook']
  },
  {
    name: 'Break',
    url: 'Playbook/Break',
    tags: ['Playbook']
  },
  {
    name: 'Anticipate',
    url: 'Playbook/Anticipate',
    tags: ['Playbook']
  },
  {
    name: 'Patience',
    url: 'Playbook/Patience',
    tags: ['Playbook']
  },
  {
    name: 'Feel The Flow',
    url: 'Playbook/FeelTheFlow',
    tags: ['Playbook']
  },
  {
    name: 'Lure',
    url: 'Playbook/Lure',
    tags: ['Playbook']
  }
]