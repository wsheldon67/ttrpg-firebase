type Nation = 'Water'|'Earth'|'Fire'|'Air'
interface Location {
  cx:number, cy:number, name:string, url?:string, eras?:string[],
  nation?:Nation, blurb?:string
}
export const locations:Location[] = [
  {
    cx: 24.0625, cy: -284.625, name: "Agna Qel'a", url: "AgnaQela",
    nation: 'Water', blurb: `A city of ice with impenetrable walls housing the spirits of Moon and Ocean`
  },
  {
    cx: 243, cy: -167, name: "Ba Sing Se", url: "BaSingSe", nation: 'Earth',
    blurb: `A sprawling city rife with corruption protected by an impenetrable wall`
  },
  {
    cx: -81.3125, cy: -167.75, name: "Beifong Metalbending Academy",
    url: "BeifongMetalbendingAcademy", nation: 'Earth', eras: ['Aang'],
    blurb: `Located near Yu Dao in what used to be a firebending dojo, the world's first metalbenders were trained here by Toph Beifong.`
  },
  {
    cx: -132.812, cy: 5.0625, name: "Bhanti Island", url: "BhantiIsland",
    nation: 'Fire', blurb: `An island of Fire Sages with a magical healing pool`
  },
  {
    cx: 277.75, cy: -74, name: "Chameleon Bay", url: "ChameleonBay",
    blurb: `The location of the last chapter of the Flying Opera Company`
  },
  {
    cx: 52.375, cy: -231.5, name: "Chenbao", url: "Chenbao", eras: ['Roku'],
    blurb: `An Earth Kingdom state with historical tensions with the Northern Water Tribe`
  },
  {
    cx: -15, cy: -80, name: "Crescent Island", url: "CrescentIsland",
    blurb: `An island containing a Fire Temple and a volcano, both of which were involved in a disaster caused by Avatar Roku`
  },
  {
    cx: 358.75, cy: 12.75, name: "Eastern Air Temple", url: "EasternAirTemple", nation: 'Air',
    blurb: `A temple of significant spiritual power`
  },
  {
    cx: -158.125, cy: -57.625, name: "Ember Island", url: "EmberIsland",
    blurb: `A popular vacation spot, and home to the Ember Island Players`
  },
  {
    cx: -121.062, cy: -33.625, name: "Fire Fountain City", url: "FireFountainCity",
    nation: 'Fire', blurb: `An ancient city with mystical roots`
  },
  {
    cx: -87.0625, cy: -65.6875, name: "Fire Island Prison", url: "FireIslandPrison",
    eras: ['Hundred Year War'], blurb: `A prison located on a remote island, designed to contain Waterbenders by being brutally dry.`
  },
  {
    cx: 115.5, cy: 7.5, name: "Foggy Swamp", url: "FoggySwamp", nation: 'Water',
    blurb: `An isolated water tribe who can bend the water in plants`
  },
  {
    cx: 150.75, cy: 47.25, name: "Gaoling", url: "Gaoling",
    blurb: `Town in the Earth Kingdom, later home to the first democratic elections`
  },
  {
    cx: -251.188, cy: -47.3125, name: "Hari Bulkan", url: "HariBulkan", nation: 'Fire',
    blurb: `A sprawling city built atop and within an island volcano`
  },
  {
    cx: 106.25, cy: -25, name: "Kolau Mountain Range", url: "KolauMountainRange"
  },
  {
    cx: 84, cy: 75.25, name: "Kyoshi Island", url: "KyoshiIsland", nation: 'Earth',
    blurb: `A large island home to the renowned Kyoshi Warriors`
  },
  {
    cx: 270, cy: -154.25, name: "Lake Laogai", url: "LakeLaogai",
    blurb: `A high security prison in the Agrarian Zone of Ba Sing Se`
  },
  {
    cx: 4.5, cy: -70.5, name: "Natsuo Island", url: "NatsuoIsland", eras: ['Roku'],
    blurb: `An unclaimed - and later contested - island between the Fire Nation and the Earth Kingdom.`
  },
  {
    cx: 116.25, cy: -247.25, name: "Northern Air Temple", url: "NorthernAirTemple",
    nation: 'Air', blurb: `A towering temple only accessible through the air`
  },
  {
    cx: 38.875, cy: -312.312, name: "Northern Spirit Portal", url: "NorthernSpiritPortal",
    nation: 'Water', blurb: `Portals to the Spirit World located at either pole`
  },
  {
    cx: 94.25, cy: -7.75, name: "Omashu", url: "Omashu", nation: 'Earth',
    blurb: `A mountain-top city with unique technology operated by bending`
  },
  {
    cx: -10.5, cy: -159.25, name: "Republic City / Cranefish Town", url: "RepublicCity",
    eras: ['Korra', 'Aang'], blurb: `Beginning as a factory town, Cranefish Town eventually grows to become Republic City, the seat of the United Republic of Nations, and an important economic and cultural hub.`
  },
  {
    cx: 184.75, cy: -31.25, name: "Si Wong Desert", url: "SiWongDesert", nation: 'Earth',
    blurb: `A vast and deadly desert`
  },
  {
    cx: -25.25, cy: 116.75, name: "Southern Air Temple", url: "SouthernAirTemple",
    nation: 'Air', blurb: `An Air Nomad temple home to flying lemurs and sky bison`
  },
  {
    cx: 41, cy: 236.5, name: "Southern Spirit Portal", url: "SouthernSpiritPortal",
    nation: 'Water', blurb: `Portals to the Spirit World located at either pole`
  },
  {
    cx: -256.062, cy: -123.688, name: "Sun Warriors' Ancient City",
    url: "SunWarriorsAncientCity", nation: 'Fire',
    blurb: `A forgotten city and home to dragons`
  },
  {
    cx: -23.25, cy: -15.5, name: "Water Tribe Sacred Island", url: "WaterTribeSacredIsland",
    blurb: `The halfway point between the Water Tribes`
  },
  {
    cx: -148.688, cy: -181, name: "Western Air Temple", url: "WesternAirTemple",
    nation: 'Air', blurb: `An upside-down mountain temple located in a strategically important location`
  },
  {
    cx: 0.75, cy: 212.75, name: "Wolf Cove", url: "WolfCove", nation: 'Water',
    blurb: `The capital of the South Pole struggling to find its identity amidst turmoil`
  },
  {
    cx: -97.8125, cy: -161, name: "Yu Dao", url: "YuDao",
    blurb: `The oldest Fire Nation colony of the Hundred Year War`
  },
  {
    cx: -22.0625, cy: -215, name: "Zigan Village", url: "ZiganVillage", blurb: `A settlement 
    in the northwest of the kingdom brought to the brink of ruin 
    because of the Earth Kingdom’s lack of oversight and terrible 
    mismanagement`, nation: 'Earth', eras: ['Kyoshi']
  },
  {
    cx: 119.75, cy: 28.75, name: "Zaofu", url: "Zaofu", eras: ['Korra'],
    blurb: `A city that's home to many Metalbenders, collectively known as the Metal Clan.`
  },
]