function dataset() {
    const data = [{
        national_dex_number: 1,
        name: "Bulbasaur",
        type: [
          "Grass",
          "Poison"
        ],
        height: "0.7 m",
        weight: "6.9 kg",
        ability: [
          "Overgrow",
          "Chlorophyll (HIDDEN)"
        ],
        egg_groups: [
          "Monster",
          "Grass"
        ],
        base_stats: {
          "HP": 45,
          "Attack": 49,
          "Defense": 49,
          "Special Attack": 65,
          "Special Defense": 65,
          "Speed": 45
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/001.png",
        evolution: {
          "next": [
            [
              "2",
              "Level 16"
            ]
          ]
        },
        ev_yield_quantity: [1],
        ev_yield_type: ["Special Attack"],
        catch_rate: 45,
        growth_rate: "Medium Slow",
        lvl_up_moves: ["Growl - 1", "Tackle - 1", "Vine Whip - 3", "Growth - 6", "Leech Seed - 9", "Razor Leaf - 12", "Poison Powder - 15", "Sleep Powder - 15", "Seed Bomb - 18", "Take Down - 21", "Sweet Scent - 24", "Synthesis - 27", "Worry Seed - 30", "Double Edge - 33", "Solar Beam - 36"],
        tm_moves: ["Magical Leaf", "Solar Beam", "Light Screen", "Safeguard", "Rest", "Snore", "Protect", "Giga Drain", "Charm", "Attract", "Sunny Day", "Facade", "Helping Hand", "Weather Ball", "Bullet Seed", "Venoshock", "Round", "Grassy Terrain", "False Swipe"], 
        tr_moves: ["Swords Dance", "Body Slam", "Amnesia", "Substitute", "Sludge Bomb", "Endure", "Sleep Talk", "Seed Bomb", "Energy Ball", "Leaf Storm", "Power Whip", "Grass Knot", "Work Up"], 
        egg_moves: ["Curse", "Ingrain", "Nature Power", "Petal Dance", "Skull Bash", "Toxic"],
        move_tutor_moves: ["Grassy Glide"]
      },{
        national_dex_number: 2,
        name: "Ivysaur",
        type: [
          "Grass",
          "Poison"
        ],
        height: "1 m",
        weight: "13 kg",
        ability: [
          "Overgrow",
          "Chlorophyll (HIDDEN)"
        ],
        egg_groups: [
          "Monster",
          "Grass"
        ],
        base_stats: {
          "HP": 60,
          "Attack": 62,
          "Defense": 63,
          "Special Attack": 80,
          "Special Defense": 80,
          "Speed": 60
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/002.png",
        evolution: {
          "prev": [
            "1",
            "Level 16"
          ],
          "next": [
            [
              "3",
              "Level 32"
            ]
          ]
        },
        ev_yield_quantity: [1,1],
        ev_yield_type: ["Special Attack", "Special Defence"],
        catch_rate: 45,
        growth_rate: "Medium Slow",
        lvl_up_moves: ["Growl - 1", "Tackle - 1", "Growth - 1", "Vine Whip - 1", "Leech Seed - 9", "Razor Leaf - 12", "Poison Powder - 15", "Sleep Powder - 15", "Seed Bomb - 20", "Take Down - 25", "Sweet Scent - 30", "Synthesis - 35", "Worry Seed - 40", "Double Edge - 45", "Solar Beam - 50"], 
        tm_moves: ["Toxic", "Bullet Seed", "Work Up", "Sunny Day", "Light Screen", "Protect", "Giga Drain", "Safeguard", "Solar Beam", "Double Edge", "Sludge Bomb", "Facade", "Rest", "Attract", "Energy Ball", "False Swipe", "Endure", "Flash", "Swords Dance", "Sleep Talk", "Grass Knot", "Swagger", "Substitute", "Cut", "Strength", "Rock Smash"],
        tr_moves: ["Swords Dance", "Body Slam", "Amnesia", "Substitute", "Sludge Bomb", "Endure", "Sleep Talk", "Seed Bomb", "Energy Ball", "Leaf Storm", "Power Whip", "Grass Knot", "Work Up"], 
        egg_moves: ["Curse", "Ingrain", "Nature Power", "Petal Dance", "Skull Bash", "Toxic", "Amnesia", "Charm", "Grassy Terrain", "Leaf Storm", "Magical Leaf", "Power Whip", "Sludge"],
        move_tutor_moves: ["Grassy Glide"]
      },{
        national_dex_number: 3,
        name: "Venusaur",
        type: [
          "Grass",
          "Poison"
        ],
        height: "2 m",
        weight: "100 kg",
        ability: [
          "Overgrow",
          "Chlorophyll (HIDDEN)"
        ],
        egg_groups: [
          "Monster",
          "Grass"
        ],
        base_stats: {
          "HP": 80,
          "Attack": 82,
          "Defense": 83,
          "Special Attack": 100,
          "Special Defense": 100,
          "Speed": 80
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/003.png",
        evolution: {
          "prev": [
            "2",
            "Level 32"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 4,
        name: "Charmander",
        type: [
          "Fire"
        ],
        height: "0.6 m",
        weight: "8.5 kg",
        ability: [
          "Blaze",
          "Solar Power (HIDDEN)"
        ],
        egg_groups: [
          "Monster",
          "Dragon"
        ],
        base_stats: {
          "HP": 39,
          "Attack": 52,
          "Defense": 43,
          "Special Attack": 60,
          "Special Defense": 50,
          "Speed": 65
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/004.png",
        evolution: {
          "next": [
            [
              "5",
              "Level 16"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 5,
        name: "Charmeleon",
        type: [
          "Fire"
        ],
        height: "1.1 m",
        weight: "19 kg",
        ability: [
          "Blaze",
          "Solar Power (HIDDEN)"
        ],
        egg_groups: [
          "Monster",
          "Dragon"
        ],
        base_stats: {
          "HP": 58,
          "Attack": 64,
          "Defense": 58,
          "Special Attack": 80,
          "Special Defense": 65,
          "Speed": 80
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/005.png",
        evolution: {
          "prev": [
            "4",
            "Level 16"
          ],
          "next": [
            [
              "6",
              "Level 36"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 6,
        name: "Charizard",
        type: [
          "Fire",
          "Flying"
        ],
        height: "1.7 m",
        weight: "90.5 kg",
        ability: [
          "Blaze",
          "Solar Power (HIDDEN)"
        ],
        egg_groups: [
          "Monster",
          "Dragon"
        ],
        base_stats: {
          "HP": 78,
          "Attack": 84,
          "Defense": 78,
          "Special Attack": 109,
          "Special Defense": 85,
          "Speed": 100
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/006.png",
        evolution: {
          "prev": [
            "5",
            "Level 36"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 7,
        name: "Squirtle",
        type: [
          "Water"
        ],
        height: "0.5 m",
        weight: "9 kg",
        ability: [
          "Torrent",
          "Rain Dish (HIDDEN)"
        ],
        egg_groups: [
          "Monster",
          "Water 1"
        ],
        base_stats: {
          "HP": 44,
          "Attack": 48,
          "Defense": 65,
          "Special Attack": 50,
          "Special Defense": 64,
          "Speed": 43
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/007.png",
        evolution: {
          "next": [
            [
              "8",
              "Level 16"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 8,
        name: "Wartortle",
        type: [
          "Water"
        ],
        height: "1 m",
        weight: "22.5 kg",
        ability: [
          "Torrent",
          "Rain Dish (HIDDEN)"
        ],
        egg_groups: [
          "Monster",
          "Water 1"
        ],
        base_stats: {
          "HP": 59,
          "Attack": 63,
          "Defense": 80,
          "Special Attack": 65,
          "Special Defense": 80,
          "Speed": 58
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/008.png",
        evolution: {
          "prev": [
            "7",
            "Level 16"
          ],
          "next": [
            [
              "9",
              "Level 36"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 9,
        name: "Blastoise",
        type: [
          "Water"
        ],
        height: "1.6 m",
        weight: "85.5 kg",
        ability: [
          "Torrent",
          "Rain Dish (HIDDEN)"
        ],
        egg_groups: [
          "Monster",
          "Water 1"
        ],
        base_stats: {
          "HP": 79,
          "Attack": 83,
          "Defense": 100,
          "Special Attack": 85,
          "Special Defense": 105,
          "Speed": 78
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/009.png",
        evolution: {
          "prev": [
            "8",
            "Level 36"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 10,
        name: "Caterpie",
        type: [
          "Bug"
        ],
        height: "0.3 m",
        weight: "2.9 kg",
        ability: [
          "Shield Dust",
          "Run Away (HIDDEN)"
        ],
        egg_groups: [
          "Bug"
        ],
        base_stats: {
          "HP": 45,
          "Attack": 30,
          "Defense": 35,
          "Special Attack": 20,
          "Special Defense": 20,
          "Speed": 45
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/010.png",
        evolution: {
          "next": [
            [
              "11",
              "Level 7"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 11,
        name: "Metapod",
        type: [
          "Bug"
        ],
        height: "0.7 m",
        weight: "9.9 kg",
        ability: [
          "Shed Skin"
        ],
        egg_groups: [
          "Bug"
        ],
        base_stats: {
          "HP": 50,
          "Attack": 20,
          "Defense": 55,
          "Special Attack": 25,
          "Special Defense": 25,
          "Speed": 30
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/011.png",
        evolution: {
          "prev": [
            "10",
            "Level 7"
          ],
          "next": [
            [
              "12",
              "Level 10"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 12,
        name: "Butterfree",
        type: [
          "Bug",
          "Flying"
        ],
        height: "1.1 m",
        weight: "32 kg",
        ability: [
          "Compound Eyes",
          "Tinted Lens (HIDDEN)"
        ],
        egg_groups: [
          "Bug"
        ],
        base_stats: {
          "HP": 60,
          "Attack": 45,
          "Defense": 50,
          "Special Attack": 90,
          "Special Defense": 80,
          "Speed": 70
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/012.png",
        evolution: {
          "prev": [
            "11",
            "Level 10"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 13,
        name: "Weedle",
        type: [
          "Bug",
          "Poison"
        ],
        height: "0.3 m",
        weight: "3.2 kg",
        ability: [
          "Shield Dust",
          "Run Away (HIDDEN)"
        ],
        egg_groups: [
          "Bug"
        ],
        base_stats: {
          "HP": 40,
          "Attack": 35,
          "Defense": 30,
          "Special Attack": 20,
          "Special Defense": 20,
          "Speed": 50
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/013.png",
        evolution: {
          "next": [
            [
              "14",
              "Level 7"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 14,
        name: "Kakuna",
        type: [
          "Bug",
          "Poison"
        ],
        height: "0.6 m",
        weight: "10 kg",
        ability: [
          "Shed Skin"
        ],
        egg_groups: [
          "Bug"
        ],
        base_stats: {
          "HP": 45,
          "Attack": 25,
          "Defense": 50,
          "Special Attack": 25,
          "Special Defense": 25,
          "Speed": 35
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/014.png",
        evolution: {
          "prev": [
            "13",
            "Level 7"
          ],
          "next": [
            [
              "15",
              "Level 10"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 15,
        name: "Beedrill",
        type: [
          "Bug",
          "Poison"
        ],
        height: "1 m",
        weight: "29.5 kg",
        ability: [
          "Swarm",
          "Sniper (HIDDEN)"
        ],
        egg_groups: [
          "Bug"
        ],
        base_stats: {
          "HP": 65,
          "Attack": 90,
          "Defense": 40,
          "Special Attack": 45,
          "Special Defense": 80,
          "Speed": 75
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/015.png",
        evolution: {
          "prev": [
            "14",
            "Level 10"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 16,
        name: "Pidgey",
        type: [
          "Normal",
          "Flying"
        ],
        height: "0.3 m",
        weight: "1.8 kg",
        ability: [
          "Keen Eye",
          "Tangled Feet",
          "Big Pecks (HIDDEN)"
        ],
        egg_groups: [
          "Flying"
        ],
        base_stats: {
          "HP": 40,
          "Attack": 45,
          "Defense": 40,
          "Special Attack": 35,
          "Special Defense": 35,
          "Speed": 56
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/016.png",
        evolution: {
          "next": [
            [
              "17",
              "Level 18"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 17,
        name: "Pidgeotto",
        type: [
          "Normal",
          "Flying"
        ],
        height: "1.1 m",
        weight: "30 kg",
        ability: [
          "Keen Eye",
          "Tangled Feet",
          "Big Pecks (HIDDEN)"
        ],
        egg_groups: [
          "Flying"
        ],
        base_stats: {
          "HP": 63,
          "Attack": 60,
          "Defense": 55,
          "Special Attack": 50,
          "Special Defense": 50,
          "Speed": 71
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/017.png",
        evolution: {
          "prev": [
            "16",
            "Level 18"
          ],
          "next": [
            [
              "18",
              "Level 36"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 18,
        name: "Pidgeot",
        type: [
          "Normal",
          "Flying"
        ],
        height: "1.5 m",
        weight: "39.5 kg",
        ability: [
          "Keen Eye",
          "Tangled Feet",
          "Big Pecks (HIDDEN)"
        ],
        egg_groups: [
          "Flying"
        ],
        base_stats: {
          "HP": 83,
          "Attack": 80,
          "Defense": 75,
          "Special Attack": 70,
          "Special Defense": 70,
          "Speed": 101
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/018.png",
        evolution: {
          "prev": [
            "17",
            "Level 36"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 19,
        name: "Rattata",
        type: [
          "Normal"
        ],
        height: "0.3 m",
        weight: "3.5 kg",
        ability: [
          "Run Away",
          "Guts",
          "Hustle (HIDDEN)"
        ],
        egg_groups: [
          "Field"
        ],
        base_stats: {
          "HP": 30,
          "Attack": 56,
          "Defense": 35,
          "Special Attack": 25,
          "Special Defense": 35,
          "Speed": 72
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/019.png",
        evolution: {
          "next": [
            [
              "20",
              "Level 20"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 20,
        name: "Raticate",
        type: [
          "Normal"
        ],
        height: "0.7 m",
        weight: "18.5 kg",
        ability: [
          "Run Away",
          "Guts",
          "Hustle (HIDDEN)"
        ],
        egg_groups: [
          "Field"
        ],
        base_stats: {
          "HP": 55,
          "Attack": 81,
          "Defense": 60,
          "Special Attack": 50,
          "Special Defense": 70,
          "Speed": 97
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/020.png",
        evolution: {
          "prev": [
            "19",
            "Level 20"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 21,
        name: "Spearow",
        type: [
          "Normal",
          "Flying"
        ],
        height: "0.3 m",
        weight: "2 kg",
        ability: [
          "Keen Eye",
          "Sniper (HIDDEN)"
        ],
        egg_groups: [
          "Flying"
        ],
        base_stats: {
          "HP": 40,
          "Attack": 60,
          "Defense": 30,
          "Special Attack": 31,
          "Special Defense": 31,
          "Speed": 70
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/021.png",
        evolution: {
          "next": [
            [
              "22",
              "Level 20"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 22,
        name: "Fearow",
        type: [
          "Normal",
          "Flying"
        ],
        height: "1.2 m",
        weight: "38 kg",
        ability: [
          "Keen Eye",
          "Sniper (HIDDEN)"
        ],
        egg_groups: [
          "Flying"
        ],
        base_stats: {
          "HP": 65,
          "Attack": 90,
          "Defense": 65,
          "Special Attack": 61,
          "Special Defense": 61,
          "Speed": 100
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/022.png",
        evolution: {
          "prev": [
            "21",
            "Level 20"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 23,
        name: "Ekans",
        type: [
          "Poison"
        ],
        height: "2 m",
        weight: "6.9 kg",
        ability: [
          "Intimidate",
          "Shed Skin",
          "Unnerve (HIDDEN)"
        ],
        egg_groups: [
          "Field",
          "Dragon"
        ],
        base_stats: {
          "HP": 35,
          "Attack": 60,
          "Defense": 44,
          "Special Attack": 40,
          "Special Defense": 54,
          "Speed": 55
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/023.png",
        evolution: {
          "next": [
            [
              "24",
              "Level 22"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 24,
        name: "Arbok",
        type: [
          "Poison"
        ],
        height: "3.5 m",
        weight: "65 kg",
        ability: [
          "Intimidate",
          "Shed Skin",
          "Unnerve (HIDDEN)"
        ],
        egg_groups: [
          "Field",
          "Dragon"
        ],
        base_stats: {
          "HP": 60,
          "Attack": 95,
          "Defense": 69,
          "Special Attack": 65,
          "Special Defense": 79,
          "Speed": 80
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/024.png",
        evolution: {
          "prev": [
            "23",
            "Level 22"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 25,
        name: "Pikachu",
        type: [
          "Electric"
        ],
        height: "0.4 m",
        weight: "6 kg",
        ability: [
          "Static",
          "Lightning Rod (HIDDEN)"
        ],
        egg_groups: [
          "Field",
          "Fairy"
        ],
        base_stats: {
          "HP": 35,
          "Attack": 55,
          "Defense": 40,
          "Special Attack": 50,
          "Special Defense": 50,
          "Speed": 90
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/025.png",
        evolution: {
          "prev": [
            "172",
            "high Friendship"
          ],
          "next": [
            [
              "26",
              "use Thunder Stone"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 26,
        name: "Raichu",
        type: [
          "Electric"
        ],
        height: "0.8 m",
        weight: "30 kg",
        ability: [
          "Static",
          "Lightning Rod (HIDDEN)"
        ],
        egg_groups: [
          "Field",
          "Fairy"
        ],
        base_stats: {
          "HP": 60,
          "Attack": 90,
          "Defense": 55,
          "Special Attack": 90,
          "Special Defense": 80,
          "Speed": 110
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/026.png",
        evolution: {
          "prev": [
            "25",
            "use Thunder Stone"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 27,
        name: "Sandshrew",
        type: [
          "Ground"
        ],
        height: "0.6 m",
        weight: "12 kg",
        ability: [
          "Sand Veil",
          "Sand Rush (HIDDEN)"
        ],
        egg_groups: [
          "Field"
        ],
        base_stats: {
          "HP": 50,
          "Attack": 75,
          "Defense": 85,
          "Special Attack": 20,
          "Special Defense": 30,
          "Speed": 40
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/027.png",
        evolution: {
          "next": [
            [
              "28",
              "Level 22"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 28,
        name: "Sandslash",
        type: [
          "Ground"
        ],
        height: "1 m",
        weight: "29.5 kg",
        ability: [
          "Sand Veil",
          "Sand Rush (HIDDEN)"
        ],
        egg_groups: [
          "Field"
        ],
        base_stats: {
          "HP": 75,
          "Attack": 100,
          "Defense": 110,
          "Special Attack": 45,
          "Special Defense": 55,
          "Speed": 65
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/028.png",
        evolution: {
          "prev": [
            "27",
            "Level 22"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 29,
        name: "Nidoran♀",
        type: [
          "Poison"
        ],
        height: "0.4 m",
        weight: "7 kg",
        ability: [
          "Poison Point",
          "Rivalry",
          "Hustle (HIDDEN)"
        ],
        egg_groups: [
          "Monster",
          "Field"
        ],
        base_stats: {
          "HP": 55,
          "Attack": 47,
          "Defense": 52,
          "Special Attack": 40,
          "Special Defense": 40,
          "Speed": 41
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/029.png",
        evolution: {
          "next": [
            [
              "30",
              "Level 16"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 30,
        name: "Nidorina",
        type: [
          "Poison"
        ],
        height: "0.8 m",
        weight: "20 kg",
        ability: [
          "Poison Point",
          "Rivalry",
          "Hustle (HIDDEN)"
        ],
        egg_groups: [
          "Undiscovered"
        ],
        base_stats: {
          "HP": 70,
          "Attack": 62,
          "Defense": 67,
          "Special Attack": 55,
          "Special Defense": 55,
          "Speed": 56
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/030.png",
        evolution: {
          "prev": [
            "29",
            "Level 16"
          ],
          "next": [
            [
              "31",
              "use Moon Stone"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 31,
        name: "Nidoqueen",
        type: [
          "Poison",
          "Ground"
        ],
        height: "1.3 m",
        weight: "60 kg",
        ability: [
          "Poison Point",
          "Rivalry",
          "Sheer Force (HIDDEN)"
        ],
        egg_groups: [
          "Undiscovered"
        ],
        base_stats: {
          "HP": 90,
          "Attack": 92,
          "Defense": 87,
          "Special Attack": 75,
          "Special Defense": 85,
          "Speed": 76
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/031.png",
        evolution: {
          "prev": [
            "30",
            "use Moon Stone"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 32,
        name: "Nidoran♂",
        type: [
          "Poison"
        ],
        height: "0.5 m",
        weight: "9 kg",
        ability: [
          "Poison Point",
          "Rivalry",
          "Hustle (HIDDEN)"
        ],
        egg_groups: [
          "Monster",
          "Field"
        ],
        base_stats: {
          "HP": 46,
          "Attack": 57,
          "Defense": 40,
          "Special Attack": 40,
          "Special Defense": 40,
          "Speed": 50
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/032.png",
        evolution: {
          "next": [
            [
              "33",
              "Level 16"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 33,
        name: "Nidorino",
        type: [
          "Poison"
        ],
        height: "0.9 m",
        weight: "19.5 kg",
        ability: [
          "Poison Point",
          "Rivalry",
          "Hustle (HIDDEN)"
        ],
        egg_groups: [
          "Monster",
          "Field"
        ],
        base_stats: {
          "HP": 61,
          "Attack": 72,
          "Defense": 57,
          "Special Attack": 55,
          "Special Defense": 55,
          "Speed": 65
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/033.png",
        evolution: {
          "prev": [
            "32",
            "Level 16"
          ],
          "next": [
            [
              "34",
              "use Moon Stone"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 34,
        name: "Nidoking",
        type: [
          "Poison",
          "Ground"
        ],
        height: "1.4 m",
        weight: "62 kg",
        ability: [
          "Poison Point",
          "Rivalry",
          "Sheer Force (HIDDEN)"
        ],
        egg_groups: [
          "Monster",
          "Field"
        ],
        base_stats: {
          "HP": 81,
          "Attack": 102,
          "Defense": 77,
          "Special Attack": 85,
          "Special Defense": 75,
          "Speed": 85
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/034.png",
        evolution: {
          "prev": [
            "33",
            "use Moon Stone"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 35,
        name: "Clefairy",
        type: [
          "Fairy"
        ],
        height: "0.6 m",
        weight: "7.5 kg",
        ability: [
          "Cute Charm",
          "Magic Guard",
          "Friend Guard (HIDDEN)"
        ],
        egg_groups: [
          "Fairy"
        ],
        base_stats: {
          "HP": 70,
          "Attack": 45,
          "Defense": 48,
          "Special Attack": 60,
          "Special Defense": 65,
          "Speed": 35
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/035.png",
        evolution: {
          "prev": [
            "173",
            "high Friendship"
          ],
          "next": [
            [
              "36",
              "use Moon Stone"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 36,
        name: "Clefable",
        type: [
          "Fairy"
        ],
        height: "1.3 m",
        weight: "40 kg",
        ability: [
          "Cute Charm",
          "Magic Guard",
          "Unaware (HIDDEN)"
        ],
        egg_groups: [
          "Fairy"
        ],
        base_stats: {
          "HP": 95,
          "Attack": 70,
          "Defense": 73,
          "Special Attack": 95,
          "Special Defense": 90,
          "Speed": 60
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/036.png",
        evolution: {
          "prev": [
            "35",
            "use Moon Stone"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 37,
        name: "Vulpix",
        type: [
          "Fire"
        ],
        height: "0.6 m",
        weight: "9.9 kg",
        ability: [
          "Flash Fire",
          "Drought (HIDDEN)"
        ],
        egg_groups: [
          "Field"
        ],
        base_stats: {
          "HP": 38,
          "Attack": 41,
          "Defense": 40,
          "Special Attack": 50,
          "Special Defense": 65,
          "Speed": 65
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/037.png",
        evolution: {
          "next": [
            [
              "38",
              "use Fire Stone"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 38,
        name: "Ninetales",
        type: [
          "Fire"
        ],
        height: "1.1 m",
        weight: "19.9 kg",
        ability: [
          "Flash Fire",
          "Drought (HIDDEN)"
        ],
        egg_groups: [
          "Field"
        ],
        base_stats: {
          "HP": 73,
          "Attack": 76,
          "Defense": 75,
          "Special Attack": 81,
          "Special Defense": 100,
          "Speed": 100
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/038.png",
        evolution: {
          "prev": [
            "37",
            "use Fire Stone"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 39,
        name: "Jigglypuff",
        type: [
          "Normal",
          "Fairy"
        ],
        height: "0.5 m",
        weight: "5.5 kg",
        ability: [
          "Cute Charm",
          "Competitive",
          "Friend Guard (HIDDEN)"
        ],
        egg_groups: [
          "Fairy"
        ],
        base_stats: {
          "HP": 115,
          "Attack": 45,
          "Defense": 20,
          "Special Attack": 45,
          "Special Defense": 25,
          "Speed": 20
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/039.png",
        evolution: {
          "prev": [
            "174",
            "high Friendship"
          ],
          "next": [
            [
              "40",
              "use Moon Stone"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 40,
        name: "Wigglytuff",
        type: [
          "Normal",
          "Fairy"
        ],
        height: "1 m",
        weight: "12 kg",
        ability: [
          "Cute Charm",
          "Competitive",
          "Frisk (HIDDEN)"
        ],
        egg_groups: [
          "Fairy"
        ],
        base_stats: {
          "HP": 140,
          "Attack": 70,
          "Defense": 45,
          "Special Attack": 85,
          "Special Defense": 50,
          "Speed": 45
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/040.png",
        evolution: {
          "prev": [
            "39",
            "use Moon Stone"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 41,
        name: "Zubat",
        type: [
          "Poison",
          "Flying"
        ],
        height: "0.8 m",
        weight: "7.5 kg",
        ability: [
          "Inner Focus",
          "Infiltrator (HIDDEN)"
        ],
        egg_groups: [
          "Flying"
        ],
        base_stats: {
          "HP": 40,
          "Attack": 45,
          "Defense": 35,
          "Special Attack": 30,
          "Special Defense": 40,
          "Speed": 55
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/041.png",
        evolution: {
          "next": [
            [
              "42",
              "Level 22"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 42,
        name: "Golbat",
        type: [
          "Poison",
          "Flying"
        ],
        height: "1.6 m",
        weight: "55 kg",
        ability: [
          "Inner Focus",
          "Infiltrator (HIDDEN)"
        ],
        egg_groups: [
          "Flying"
        ],
        base_stats: {
          "HP": 75,
          "Attack": 80,
          "Defense": 70,
          "Special Attack": 65,
          "Special Defense": 75,
          "Speed": 90
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/042.png",
        evolution: {
          "prev": [
            "41",
            "Level 22"
          ],
          "next": [
            [
              "169",
              "high Friendship"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 43,
        name: "Oddish",
        type: [
          "Grass",
          "Poison"
        ],
        height: "0.5 m",
        weight: "5.4 kg",
        ability: [
          "Chlorophyll",
          "Run Away (HIDDEN)"
        ],
        egg_groups: [
          "Grass"
        ],
        base_stats: {
          "HP": 45,
          "Attack": 50,
          "Defense": 55,
          "Special Attack": 75,
          "Special Defense": 65,
          "Speed": 30
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/043.png",
        evolution: {
          "next": [
            [
              "44",
              "Level 21"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 44,
        name: "Gloom",
        type: [
          "Grass",
          "Poison"
        ],
        height: "0.8 m",
        weight: "8.6 kg",
        ability: [
          "Chlorophyll",
          "Stench (HIDDEN)"
        ],
        egg_groups: [
          "Grass"
        ],
        base_stats: {
          "HP": 60,
          "Attack": 65,
          "Defense": 70,
          "Special Attack": 85,
          "Special Defense": 75,
          "Speed": 40
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/044.png",
        evolution: {
          "prev": [
            "43",
            "Level 21"
          ],
          "next": [
            [
              "45",
              "use Leaf Stone"
            ],
            [
              "182",
              "use Sun Stone"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 45,
        name: "Vileplume",
        type: [
          "Grass",
          "Poison"
        ],
        height: "1.2 m",
        weight: "18.6 kg",
        ability: [
          "Chlorophyll",
          "Effect Spore (HIDDEN)"
        ],
        egg_groups: [
          "Grass"
        ],
        base_stats: {
          "HP": 75,
          "Attack": 80,
          "Defense": 85,
          "Special Attack": 110,
          "Special Defense": 90,
          "Speed": 50
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/045.png",
        evolution: {
          "prev": [
            "44",
            "use Leaf Stone"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 46,
        name: "Paras",
        type: [
          "Bug",
          "Grass"
        ],
        height: "0.3 m",
        weight: "5.4 kg",
        ability: [
          "Effect Spore",
          "Dry Skin",
          "Damp (HIDDEN)"
        ],
        egg_groups: [
          "Bug",
          "Grass"
        ],
        base_stats: {
          "HP": 35,
          "Attack": 70,
          "Defense": 55,
          "Special Attack": 45,
          "Special Defense": 55,
          "Speed": 25
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/046.png",
        evolution: {
          "next": [
            [
              "47",
              "Level 24"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 47,
        name: "Parasect",
        type: [
          "Bug",
          "Grass"
        ],
        height: "1 m",
        weight: "29.5 kg",
        ability: [
          "Effect Spore",
          "Dry Skin",
          "Damp (HIDDEN)"
        ],
        egg_groups: [
          "Bug",
          "Grass"
        ],
        base_stats: {
          "HP": 60,
          "Attack": 95,
          "Defense": 80,
          "Special Attack": 60,
          "Special Defense": 80,
          "Speed": 30
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/047.png",
        evolution: {
          "prev": [
            "46",
            "Level 24"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 48,
        name: "Venonat",
        type: [
          "Bug",
          "Poison"
        ],
        height: "1 m",
        weight: "30 kg",
        ability: [
          "Compound Eyes",
          "Tinted Lens",
          "Run Away (HIDDEN)"
        ],
        egg_groups: [
          "Bug"
        ],
        base_stats: {
          "HP": 60,
          "Attack": 55,
          "Defense": 50,
          "Special Attack": 40,
          "Special Defense": 55,
          "Speed": 45
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/048.png",
        evolution: {
          "next": [
            [
              "49",
              "Level 31"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 49,
        name: "Venomoth",
        type: [
          "Bug",
          "Poison"
        ],
        height: "1.5 m",
        weight: "12.5 kg",
        ability: [
          "Shield Dust",
          "Tinted Lens",
          "Wonder Skin (HIDDEN)"
        ],
        egg_groups: [
          "Bug"
        ],
        base_stats: {
          "HP": 70,
          "Attack": 65,
          "Defense": 60,
          "Special Attack": 90,
          "Special Defense": 75,
          "Speed": 90
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/049.png",
        evolution: {
          "prev": [
            "48",
            "Level 31"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 50,
        name: "Diglett",
        type: [
          "Ground"
        ],
        height: "0.2 m",
        weight: "0.8 kg",
        ability: [
          "Sand Veil",
          "Arena Trap",
          "Sand Force (HIDDEN)"
        ],
        egg_groups: [
          "Field"
        ],
        base_stats: {
          "HP": 10,
          "Attack": 55,
          "Defense": 25,
          "Special Attack": 35,
          "Special Defense": 45,
          "Speed": 95
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/050.png",
        evolution: {
          "next": [
            [
              "51",
              "Level 26"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 51,
        name: "Dugtrio",
        type: [
          "Ground"
        ],
        height: "0.7 m",
        weight: "33.3 kg",
        ability: [
          "Sand Veil",
          "Arena Trap",
          "Sand Force (HIDDEN)"
        ],
        egg_groups: [
          "Field"
        ],
        base_stats: {
          "HP": 35,
          "Attack": 100,
          "Defense": 50,
          "Special Attack": 50,
          "Special Defense": 70,
          "Speed": 120
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/051.png",
        evolution: {
          "prev": [
            "50",
            "Level 26"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 52,
        name: "Meowth",
        type: [
          "Normal"
        ],
        height: "0.4 m",
        weight: "4.2 kg",
        ability: [
          "Pickup",
          "Technician",
          "Unnerve (HIDDEN)"
        ],
        egg_groups: [
          "Field"
        ],
        base_stats: {
          "HP": 40,
          "Attack": 45,
          "Defense": 35,
          "Special Attack": 40,
          "Special Defense": 40,
          "Speed": 90
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/052.png",
        evolution: {
          "next": [
            [
              "53",
              "Level 28"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 53,
        name: "Persian",
        type: [
          "Normal"
        ],
        height: "1 m",
        weight: "32 kg",
        ability: [
          "Limber",
          "Technician",
          "Unnerve (HIDDEN)"
        ],
        egg_groups: [
          "Field"
        ],
        base_stats: {
          "HP": 65,
          "Attack": 70,
          "Defense": 60,
          "Special Attack": 65,
          "Special Defense": 65,
          "Speed": 115
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/053.png",
        evolution: {
          "prev": [
            "52",
            "Level 28"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 54,
        name: "Psyduck",
        type: [
          "Water"
        ],
        height: "0.8 m",
        weight: "19.6 kg",
        ability: [
          "Damp",
          "Cloud Nine",
          "Swift Swim (HIDDEN)"
        ],
        egg_groups: [
          "Water 1",
          "Field"
        ],
        base_stats: {
          "HP": 50,
          "Attack": 52,
          "Defense": 48,
          "Special Attack": 65,
          "Special Defense": 50,
          "Speed": 55
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/054.png",
        evolution: {
          "next": [
            [
              "55",
              "Level 33"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 55,
        name: "Golduck",
        type: [
          "Water"
        ],
        height: "1.7 m",
        weight: "76.6 kg",
        ability: [
          "Damp",
          "Cloud Nine",
          "Swift Swim (HIDDEN)"
        ],
        egg_groups: [
          "Water 1",
          "Field"
        ],
        base_stats: {
          "HP": 80,
          "Attack": 82,
          "Defense": 78,
          "Special Attack": 95,
          "Special Defense": 80,
          "Speed": 85
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/055.png",
        evolution: {
          "prev": [
            "54",
            "Level 33"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 56,
        name: "Mankey",
        type: [
          "Fighting"
        ],
        height: "0.5 m",
        weight: "28 kg",
        ability: [
          "Vital Spirit",
          "Anger Point",
          "Defiant (HIDDEN)"
        ],
        egg_groups: [
          "Field"
        ],
        base_stats: {
          "HP": 40,
          "Attack": 80,
          "Defense": 35,
          "Special Attack": 35,
          "Special Defense": 45,
          "Speed": 70
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/056.png",
        evolution: {
          "next": [
            [
              "57",
              "Level 28"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 57,
        name: "Primeape",
        type: [
          "Fighting"
        ],
        height: "1 m",
        weight: "32 kg",
        ability: [
          "Vital Spirit",
          "Anger Point",
          "Defiant (HIDDEN)"
        ],
        egg_groups: [
          "Field"
        ],
        base_stats: {
          "HP": 65,
          "Attack": 105,
          "Defense": 60,
          "Special Attack": 60,
          "Special Defense": 70,
          "Speed": 95
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/057.png",
        evolution: {
          "prev": [
            "56",
            "Level 28"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 58,
        name: "Growlithe",
        type: [
          "Fire"
        ],
        height: "0.7 m",
        weight: "19 kg",
        ability: [
          "Intimidate",
          "Flash Fire",
          "Justified (HIDDEN)"
        ],
        egg_groups: [
          "Field"
        ],
        base_stats: {
          "HP": 55,
          "Attack": 70,
          "Defense": 45,
          "Special Attack": 70,
          "Special Defense": 50,
          "Speed": 60
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/058.png",
        evolution: {
          "next": [
            [
              "59",
              "use Fire Stone"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 59,
        name: "Arcanine",
        type: [
          "Fire"
        ],
        height: "1.9 m",
        weight: "155 kg",
        ability: [
          "Intimidate",
          "Flash Fire",
          "Justified (HIDDEN)"
        ],
        egg_groups: [
          "Field"
        ],
        base_stats: {
          "HP": 90,
          "Attack": 110,
          "Defense": 80,
          "Special Attack": 100,
          "Special Defense": 80,
          "Speed": 95
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/059.png",
        evolution: {
          "prev": [
            "58",
            "use Fire Stone"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 60,
        name: "Poliwag",
        type: [
          "Water"
        ],
        height: "0.6 m",
        weight: "12.4 kg",
        ability: [
          "Water Absorb",
          "Damp",
          "Swift Swim (HIDDEN)"
        ],
        egg_groups: [
          "Water 1"
        ],
        base_stats: {
          "HP": 40,
          "Attack": 50,
          "Defense": 40,
          "Special Attack": 40,
          "Special Defense": 40,
          "Speed": 90
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/060.png",
        evolution: {
          "next": [
            [
              "61",
              "Level 25"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 61,
        name: "Poliwhirl",
        type: [
          "Water"
        ],
        height: "1 m",
        weight: "20 kg",
        ability: [
          "Water Absorb",
          "Damp",
          "Swift Swim (HIDDEN)"
        ],
        egg_groups: [
          "Water 1"
        ],
        base_stats: {
          "HP": 65,
          "Attack": 65,
          "Defense": 65,
          "Special Attack": 50,
          "Special Defense": 50,
          "Speed": 90
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/061.png",
        evolution: {
          "prev": [
            "60",
            "Level 25"
          ],
          "next": [
            [
              "62",
              "use Water Stone"
            ],
            [
              "186",
              "trade holding Kings Rock"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 62,
        name: "Poliwrath",
        type: [
          "Water",
          "Fighting"
        ],
        height: "1.3 m",
        weight: "54 kg",
        ability: [
          "Water Absorb",
          "Damp",
          "Swift Swim (HIDDEN)"
        ],
        egg_groups: [
          "Water 1"
        ],
        base_stats: {
          "HP": 90,
          "Attack": 95,
          "Defense": 95,
          "Special Attack": 70,
          "Special Defense": 90,
          "Speed": 70
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/062.png",
        evolution: {
          "prev": [
            "61",
            "use Water Stone"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 63,
        name: "Abra",
        type: [
          "Psychic"
        ],
        height: "0.9 m",
        weight: "19.5 kg",
        ability: [
          "Synchronize",
          "Inner Focus",
          "Magic Guard (HIDDEN)"
        ],
        egg_groups: [
          "Human-Like"
        ],
        base_stats: {
          "HP": 25,
          "Attack": 20,
          "Defense": 15,
          "Special Attack": 105,
          "Special Defense": 55,
          "Speed": 90
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/063.png",
        evolution: {
          "next": [
            [
              "64",
              "Level 16"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 64,
        name: "Kadabra",
        type: [
          "Psychic"
        ],
        height: "1.3 m",
        weight: "56.5 kg",
        ability: [
          "Synchronize",
          "Inner Focus",
          "Magic Guard (HIDDEN)"
        ],
        egg_groups: [
          "Human-Like"
        ],
        base_stats: {
          "HP": 40,
          "Attack": 35,
          "Defense": 30,
          "Special Attack": 120,
          "Special Defense": 70,
          "Speed": 105
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/064.png",
        evolution: {
          "prev": [
            "63",
            "Level 16"
          ],
          "next": [
            [
              "65",
              "Trade"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 65,
        name: "Alakazam",
        type: [
          "Psychic"
        ],
        height: "1.5 m",
        weight: "48 kg",
        ability: [
          "Synchronize",
          "Inner Focus",
          "Magic Guard (HIDDEN)"
        ],
        egg_groups: [
          "Human-Like"
        ],
        base_stats: {
          "HP": 55,
          "Attack": 50,
          "Defense": 45,
          "Special Attack": 135,
          "Special Defense": 95,
          "Speed": 120
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/065.png",
        evolution: {
          "prev": [
            "64",
            "Trade"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 66,
        name: "Machop",
        type: [
          "Fighting"
        ],
        height: "0.8 m",
        weight: "19.5 kg",
        ability: [
          "Guts",
          "No Guard",
          "Steadfast (HIDDEN)"
        ],
        egg_groups: [
          "Human-Like"
        ],
        base_stats: {
          "HP": 70,
          "Attack": 80,
          "Defense": 50,
          "Special Attack": 35,
          "Special Defense": 35,
          "Speed": 35
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/066.png",
        evolution: {
          "next": [
            [
              "67",
              "Level 28"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 67,
        name: "Machoke",
        type: [
          "Fighting"
        ],
        height: "1.5 m",
        weight: "70.5 kg",
        ability: [
          "Guts",
          "No Guard",
          "Steadfast (HIDDEN)"
        ],
        egg_groups: [
          "Human-Like"
        ],
        base_stats: {
          "HP": 80,
          "Attack": 100,
          "Defense": 70,
          "Special Attack": 50,
          "Special Defense": 60,
          "Speed": 45
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/067.png",
        evolution: {
          "prev": [
            "66",
            "Level 28"
          ],
          "next": [
            [
              "68",
              "Trade"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 68,
        name: "Machamp",
        type: [
          "Fighting"
        ],
        height: "1.6 m",
        weight: "130 kg",
        ability: [
          "Guts",
          "No Guard",
          "Steadfast (HIDDEN)"
        ],
        egg_groups: [
          "Human-Like"
        ],
        base_stats: {
          "HP": 90,
          "Attack": 130,
          "Defense": 80,
          "Special Attack": 65,
          "Special Defense": 85,
          "Speed": 55
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/068.png",
        evolution: {
          "prev": [
            "67",
            "Trade"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 69,
        name: "Bellsprout",
        type: [
          "Grass",
          "Poison"
        ],
        height: "0.7 m",
        weight: "4 kg",
        ability: [
          "Chlorophyll",
          "Gluttony (HIDDEN)"
        ],
        egg_groups: [
          "Grass"
        ],
        base_stats: {
          "HP": 50,
          "Attack": 75,
          "Defense": 35,
          "Special Attack": 70,
          "Special Defense": 30,
          "Speed": 40
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/069.png",
        evolution: {
          "next": [
            [
              "70",
              "Level 21"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 70,
        name: "Weepinbell",
        type: [
          "Grass",
          "Poison"
        ],
        height: "1 m",
        weight: "6.4 kg",
        ability: [
          "Chlorophyll",
          "Gluttony (HIDDEN)"
        ],
        egg_groups: [
          "Grass"
        ],
        base_stats: {
          "HP": 65,
          "Attack": 90,
          "Defense": 50,
          "Special Attack": 85,
          "Special Defense": 45,
          "Speed": 55
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/070.png",
        evolution: {
          "prev": [
            "69",
            "Level 21"
          ],
          "next": [
            [
              "71",
              "use Leaf Stone"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 71,
        name: "Victreebel",
        type: [
          "Grass",
          "Poison"
        ],
        height: "1.7 m",
        weight: "15.5 kg",
        ability: [
          "Chlorophyll",
          "Gluttony (HIDDEN)"
        ],
        egg_groups: [
          "Grass"
        ],
        base_stats: {
          "HP": 80,
          "Attack": 105,
          "Defense": 65,
          "Special Attack": 100,
          "Special Defense": 70,
          "Speed": 70
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/071.png",
        evolution: {
          "prev": [
            "70",
            "use Leaf Stone"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 72,
        name: "Tentacool",
        type: [
          "Water",
          "Poison"
        ],
        height: "0.9 m",
        weight: "45.5 kg",
        ability: [
          "Clear Body",
          "Liquid Ooze",
          "Rain Dish (HIDDEN)"
        ],
        egg_groups: [
          "Water 3"
        ],
        base_stats: {
          "HP": 40,
          "Attack": 40,
          "Defense": 35,
          "Special Attack": 50,
          "Special Defense": 100,
          "Speed": 70
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/072.png",
        evolution: {
          "next": [
            [
              "73",
              "Level 30"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 73,
        name: "Tentacruel",
        type: [
          "Water",
          "Poison"
        ],
        height: "1.6 m",
        weight: "55 kg",
        ability: [
          "Clear Body",
          "Liquid Ooze",
          "Rain Dish (HIDDEN)"
        ],
        egg_groups: [
          "Water 3"
        ],
        base_stats: {
          "HP": 80,
          "Attack": 70,
          "Defense": 65,
          "Special Attack": 80,
          "Special Defense": 120,
          "Speed": 100
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/073.png",
        evolution: {
          "prev": [
            "72",
            "Level 30"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 74,
        name: "Geodude",
        type: [
          "Rock",
          "Ground"
        ],
        height: "0.4 m",
        weight: "20 kg",
        ability: [
          "Rock Head",
          "Sturdy",
          "Sand Veil (HIDDEN)"
        ],
        egg_groups: [
          "Mineral"
        ],
        base_stats: {
          "HP": 40,
          "Attack": 80,
          "Defense": 100,
          "Special Attack": 30,
          "Special Defense": 30,
          "Speed": 20
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/074.png",
        evolution: {
          "next": [
            [
              "75",
              "Level 25"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 75,
        name: "Graveler",
        type: [
          "Rock",
          "Ground"
        ],
        height: "1 m",
        weight: "105 kg",
        ability: [
          "Rock Head",
          "Sturdy",
          "Sand Veil (HIDDEN)"
        ],
        egg_groups: [
          "Mineral"
        ],
        base_stats: {
          "HP": 55,
          "Attack": 95,
          "Defense": 115,
          "Special Attack": 45,
          "Special Defense": 45,
          "Speed": 35
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/075.png",
        evolution: {
          "prev": [
            "74",
            "Level 25"
          ],
          "next": [
            [
              "76",
              "Trade"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 76,
        name: "Golem",
        type: [
          "Rock",
          "Ground"
        ],
        height: "1.4 m",
        weight: "300 kg",
        ability: [
          "Rock Head",
          "Sturdy",
          "Sand Veil (HIDDEN)"
        ],
        egg_groups: [
          "Mineral"
        ],
        base_stats: {
          "HP": 80,
          "Attack": 120,
          "Defense": 130,
          "Special Attack": 55,
          "Special Defense": 65,
          "Speed": 45
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/076.png",
        evolution: {
          "prev": [
            "75",
            "Trade"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 77,
        name: "Ponyta",
        type: [
          "Fire"
        ],
        height: "1 m",
        weight: "30 kg",
        ability: [
          "Run Away",
          "Flash Fire",
          "Flame Body (HIDDEN)"
        ],
        egg_groups: [
          "Field"
        ],
        base_stats: {
          "HP": 50,
          "Attack": 85,
          "Defense": 55,
          "Special Attack": 65,
          "Special Defense": 65,
          "Speed": 90
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/077.png",
        evolution: {
          "next": [
            [
              "78",
              "Level 40"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 78,
        name: "Rapidash",
        type: [
          "Fire"
        ],
        height: "1.7 m",
        weight: "95 kg",
        ability: [
          "Run Away",
          "Flash Fire",
          "Flame Body (HIDDEN)"
        ],
        egg_groups: [
          "Field"
        ],
        base_stats: {
          "HP": 65,
          "Attack": 100,
          "Defense": 70,
          "Special Attack": 80,
          "Special Defense": 80,
          "Speed": 105
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/078.png",
        evolution: {
          "prev": [
            "77",
            "Level 40"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 79,
        name: "Slowpoke",
        type: [
          "Water",
          "Psychic"
        ],
        height: "1.2 m",
        weight: "36 kg",
        ability: [
          "Oblivious",
          "Own Tempo",
          "Regenerator (HIDDEN)"
        ],
        egg_groups: [
          "Monster",
          "Water 1"
        ],
        base_stats: {
          "HP": 90,
          "Attack": 65,
          "Defense": 65,
          "Special Attack": 40,
          "Special Defense": 40,
          "Speed": 15
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/079.png",
        evolution: {
          "next": [
            [
              "80",
              "Level 37"
            ],
            [
              "199",
              "trade holding Kings Rock"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 80,
        name: "Slowbro",
        type: [
          "Water",
          "Psychic"
        ],
        height: "1.6 m",
        weight: "78.5 kg",
        ability: [
          "Oblivious",
          "Own Tempo",
          "Regenerator (HIDDEN)"
        ],
        egg_groups: [
          "Monster",
          "Water 1"
        ],
        base_stats: {
          "HP": 95,
          "Attack": 75,
          "Defense": 110,
          "Special Attack": 100,
          "Special Defense": 80,
          "Speed": 30
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/080.png",
        evolution: {
          "prev": [
            "79",
            "Level 37"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 81,
        name: "Magnemite",
        type: [
          "Electric",
          "Steel"
        ],
        height: "0.3 m",
        weight: "6 kg",
        ability: [
          "Magnet Pull",
          "Sturdy",
          "Analytic (HIDDEN)"
        ],
        egg_groups: [
          "Mineral"
        ],
        base_stats: {
          "HP": 25,
          "Attack": 35,
          "Defense": 70,
          "Special Attack": 95,
          "Special Defense": 55,
          "Speed": 45
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/081.png",
        evolution: {
          "next": [
            [
              "82",
              "Level 30"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 82,
        name: "Magneton",
        type: [
          "Electric",
          "Steel"
        ],
        height: "1 m",
        weight: "60 kg",
        ability: [
          "Magnet Pull",
          "Sturdy",
          "Analytic (HIDDEN)"
        ],
        egg_groups: [
          "Mineral"
        ],
        base_stats: {
          "HP": 50,
          "Attack": 60,
          "Defense": 95,
          "Special Attack": 120,
          "Special Defense": 70,
          "Speed": 70
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/082.png",
        evolution: {
          "prev": [
            "81",
            "Level 30"
          ],
          "next": [
            [
              "462",
              "level up in a Magnetic Field area"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 83,
        name: "Farfetch'd",
        type: [
          "Normal",
          "Flying"
        ],
        height: "0.8 m",
        weight: "15 kg",
        ability: [
          "Keen Eye",
          "Inner Focus",
          "Defiant (HIDDEN)"
        ],
        egg_groups: [
          "Flying",
          "Field"
        ],
        base_stats: {
          "HP": 52,
          "Attack": 90,
          "Defense": 55,
          "Special Attack": 58,
          "Special Defense": 62,
          "Speed": 60
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/083.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 84,
        name: "Doduo",
        type: [
          "Normal",
          "Flying"
        ],
        height: "1.4 m",
        weight: "39.2 kg",
        ability: [
          "Run Away",
          "Early Bird",
          "Tangled Feet (HIDDEN)"
        ],
        egg_groups: [
          "Flying"
        ],
        base_stats: {
          "HP": 35,
          "Attack": 85,
          "Defense": 45,
          "Special Attack": 35,
          "Special Defense": 35,
          "Speed": 75
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/084.png",
        evolution: {
          "next": [
            [
              "85",
              "Level 31"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 85,
        name: "Dodrio",
        type: [
          "Normal",
          "Flying"
        ],
        height: "1.8 m",
        weight: "85.2 kg",
        ability: [
          "Run Away",
          "Early Bird",
          "Tangled Feet (HIDDEN)"
        ],
        egg_groups: [
          "Flying"
        ],
        base_stats: {
          "HP": 60,
          "Attack": 110,
          "Defense": 70,
          "Special Attack": 60,
          "Special Defense": 60,
          "Speed": 110
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/085.png",
        evolution: {
          "prev": [
            "84",
            "Level 31"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 86,
        name: "Seel",
        type: [
          "Water"
        ],
        height: "1.1 m",
        weight: "90 kg",
        ability: [
          "Thick Fat",
          "Hydration",
          "Ice Body (HIDDEN)"
        ],
        egg_groups: [
          "Water 1",
          "Field"
        ],
        base_stats: {
          "HP": 65,
          "Attack": 45,
          "Defense": 55,
          "Special Attack": 45,
          "Special Defense": 70,
          "Speed": 45
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/086.png",
        evolution: {
          "next": [
            [
              "87",
              "Level 34"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 87,
        name: "Dewgong",
        type: [
          "Water",
          "Ice"
        ],
        height: "1.7 m",
        weight: "120 kg",
        ability: [
          "Thick Fat",
          "Hydration",
          "Ice Body (HIDDEN)"
        ],
        egg_groups: [
          "Water 1",
          "Field"
        ],
        base_stats: {
          "HP": 90,
          "Attack": 70,
          "Defense": 80,
          "Special Attack": 70,
          "Special Defense": 95,
          "Speed": 70
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/087.png",
        evolution: {
          "prev": [
            "86",
            "Level 34"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 88,
        name: "Grimer",
        type: [
          "Poison"
        ],
        height: "0.9 m",
        weight: "30 kg",
        ability: [
          "Stench",
          "Sticky Hold",
          "Poison Touch (HIDDEN)"
        ],
        egg_groups: [
          "Amorphous"
        ],
        base_stats: {
          "HP": 80,
          "Attack": 80,
          "Defense": 50,
          "Special Attack": 40,
          "Special Defense": 50,
          "Speed": 25
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/088.png",
        evolution: {
          "next": [
            [
              "89",
              "Level 38"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 89,
        name: "Muk",
        type: [
          "Poison"
        ],
        height: "1.2 m",
        weight: "30 kg",
        ability: [
          "Stench",
          "Sticky Hold",
          "Poison Touch (HIDDEN)"
        ],
        egg_groups: [
          "Amorphous"
        ],
        base_stats: {
          "HP": 105,
          "Attack": 105,
          "Defense": 75,
          "Special Attack": 65,
          "Special Defense": 100,
          "Speed": 50
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/089.png",
        evolution: {
          "prev": [
            "88",
            "Level 38"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 90,
        name: "Shellder",
        type: [
          "Water"
        ],
        height: "0.3 m",
        weight: "4 kg",
        ability: [
          "Shell Armor",
          "Skill Link",
          "Overcoat (HIDDEN)"
        ],
        egg_groups: [
          "Water 3"
        ],
        base_stats: {
          "HP": 30,
          "Attack": 65,
          "Defense": 100,
          "Special Attack": 45,
          "Special Defense": 25,
          "Speed": 40
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/090.png",
        evolution: {
          "next": [
            [
              "91",
              "use Water Stone"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 91,
        name: "Cloyster",
        type: [
          "Water",
          "Ice"
        ],
        height: "1.5 m",
        weight: "132.5 kg",
        ability: [
          "Shell Armor",
          "Skill Link",
          "Overcoat (HIDDEN)"
        ],
        egg_groups: [
          "Water 3"
        ],
        base_stats: {
          "HP": 50,
          "Attack": 95,
          "Defense": 180,
          "Special Attack": 85,
          "Special Defense": 45,
          "Speed": 70
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/091.png",
        evolution: {
          "prev": [
            "90",
            "use Water Stone"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 92,
        name: "Gastly",
        type: [
          "Ghost",
          "Poison"
        ],
        height: "1.3 m",
        weight: "0.1 kg",
        ability: [
          "Levitate"
        ],
        egg_groups: [
          "Amorphous"
        ],
        base_stats: {
          "HP": 30,
          "Attack": 35,
          "Defense": 30,
          "Special Attack": 100,
          "Special Defense": 35,
          "Speed": 80
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/092.png",
        evolution: {
          "next": [
            [
              "93",
              "Level 25"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 93,
        name: "Haunter",
        type: [
          "Ghost",
          "Poison"
        ],
        height: "1.6 m",
        weight: "0.1 kg",
        ability: [
          "Levitate"
        ],
        egg_groups: [
          "Amorphous"
        ],
        base_stats: {
          "HP": 45,
          "Attack": 50,
          "Defense": 45,
          "Special Attack": 115,
          "Special Defense": 55,
          "Speed": 95
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/093.png",
        evolution: {
          "prev": [
            "92",
            "Level 25"
          ],
          "next": [
            [
              "94",
              "Trade"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 94,
        name: "Gengar",
        type: [
          "Ghost",
          "Poison"
        ],
        height: "1.5 m",
        weight: "40.5 kg",
        ability: [
          "Cursed Body"
        ],
        egg_groups: [
          "Amorphous"
        ],
        base_stats: {
          "HP": 60,
          "Attack": 65,
          "Defense": 60,
          "Special Attack": 130,
          "Special Defense": 75,
          "Speed": 110
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/094.png",
        evolution: {
          "prev": [
            "93",
            "Trade"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 95,
        name: "Onix",
        type: [
          "Rock",
          "Ground"
        ],
        height: "8.8 m",
        weight: "210 kg",
        ability: [
          "Rock Head",
          "Sturdy",
          "Weak Armor (HIDDEN)"
        ],
        egg_groups: [
          "Mineral"
        ],
        base_stats: {
          "HP": 35,
          "Attack": 45,
          "Defense": 160,
          "Special Attack": 30,
          "Special Defense": 45,
          "Speed": 70
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/095.png",
        evolution: {
          "next": [
            [
              "208",
              "trade holding Metal Coat"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 96,
        name: "Drowzee",
        type: [
          "Psychic"
        ],
        height: "1 m",
        weight: "32.4 kg",
        ability: [
          "Insomnia",
          "Forewarn",
          "Inner Focus (HIDDEN)"
        ],
        egg_groups: [
          "Human-Like"
        ],
        base_stats: {
          "HP": 60,
          "Attack": 48,
          "Defense": 45,
          "Special Attack": 43,
          "Special Defense": 90,
          "Speed": 42
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/096.png",
        evolution: {
          "next": [
            [
              "97",
              "Level 26"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 97,
        name: "Hypno",
        type: [
          "Psychic"
        ],
        height: "1.6 m",
        weight: "75.6 kg",
        ability: [
          "Insomnia",
          "Forewarn",
          "Inner Focus (HIDDEN)"
        ],
        egg_groups: [
          "Human-Like"
        ],
        base_stats: {
          "HP": 85,
          "Attack": 73,
          "Defense": 70,
          "Special Attack": 73,
          "Special Defense": 115,
          "Speed": 67
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/097.png",
        evolution: {
          "prev": [
            "96",
            "Level 26"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 98,
        name: "Krabby",
        type: [
          "Water"
        ],
        height: "0.4 m",
        weight: "6.5 kg",
        ability: [
          "Hyper Cutter",
          "Shell Armor",
          "Sheer Force (HIDDEN)"
        ],
        egg_groups: [
          "Water 3"
        ],
        base_stats: {
          "HP": 30,
          "Attack": 105,
          "Defense": 90,
          "Special Attack": 25,
          "Special Defense": 25,
          "Speed": 50
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/098.png",
        evolution: {
          "next": [
            [
              "99",
              "Level 28"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 99,
        name: "Kingler",
        type: [
          "Water"
        ],
        height: "1.3 m",
        weight: "60 kg",
        ability: [
          "Hyper Cutter",
          "Shell Armor",
          "Sheer Force (HIDDEN)"
        ],
        egg_groups: [
          "Water 3"
        ],
        base_stats: {
          "HP": 55,
          "Attack": 130,
          "Defense": 115,
          "Special Attack": 50,
          "Special Defense": 50,
          "Speed": 75
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/099.png",
        evolution: {
          "prev": [
            "98",
            "Level 28"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 100,
        name: "Voltorb",
        type: [
          "Electric"
        ],
        height: "0.5 m",
        weight: "10.4 kg",
        ability: [
          "Soundproof",
          "Static",
          "Aftermath (HIDDEN)"
        ],
        egg_groups: [
          "Mineral"
        ],
        base_stats: {
          "HP": 40,
          "Attack": 30,
          "Defense": 50,
          "Special Attack": 55,
          "Special Defense": 55,
          "Speed": 100
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/100.png",
        evolution: {
          "next": [
            [
              "101",
              "Level 30"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 101,
        name: "Electrode",
        type: [
          "Electric"
        ],
        height: "1.2 m",
        weight: "66.6 kg",
        ability: [
          "Soundproof",
          "Static",
          "Aftermath (HIDDEN)"
        ],
        egg_groups: [
          "Mineral"
        ],
        base_stats: {
          "HP": 60,
          "Attack": 50,
          "Defense": 70,
          "Special Attack": 80,
          "Special Defense": 80,
          "Speed": 150
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/101.png",
        evolution: {
          "prev": [
            "100",
            "Level 30"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 102,
        name: "Exeggcute",
        type: [
          "Grass",
          "Psychic"
        ],
        height: "0.4 m",
        weight: "2.5 kg",
        ability: [
          "Chlorophyll",
          "Harvest (HIDDEN)"
        ],
        egg_groups: [
          "Grass"
        ],
        base_stats: {
          "HP": 60,
          "Attack": 40,
          "Defense": 80,
          "Special Attack": 60,
          "Special Defense": 45,
          "Speed": 40
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/102.png",
        evolution: {
          "next": [
            [
              "103",
              "use Leaf Stone"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 103,
        name: "Exeggutor",
        type: [
          "Grass",
          "Psychic"
        ],
        height: "2 m",
        weight: "120 kg",
        ability: [
          "Chlorophyll",
          "Harvest (HIDDEN)"
        ],
        egg_groups: [
          "Grass"
        ],
        base_stats: {
          "HP": 95,
          "Attack": 95,
          "Defense": 85,
          "Special Attack": 125,
          "Special Defense": 75,
          "Speed": 55
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/103.png",
        evolution: {
          "prev": [
            "102",
            "use Leaf Stone"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 104,
        name: "Cubone",
        type: [
          "Ground"
        ],
        height: "0.4 m",
        weight: "6.5 kg",
        ability: [
          "Rock Head",
          "Lightning Rod",
          "Battle Armor (HIDDEN)"
        ],
        egg_groups: [
          "Monster"
        ],
        base_stats: {
          "HP": 50,
          "Attack": 50,
          "Defense": 95,
          "Special Attack": 40,
          "Special Defense": 50,
          "Speed": 35
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/104.png",
        evolution: {
          "next": [
            [
              "105",
              "Level 28"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 105,
        name: "Marowak",
        type: [
          "Ground"
        ],
        height: "1 m",
        weight: "45 kg",
        ability: [
          "Rock Head",
          "Lightning Rod",
          "Battle Armor (HIDDEN)"
        ],
        egg_groups: [
          "Monster"
        ],
        base_stats: {
          "HP": 60,
          "Attack": 80,
          "Defense": 110,
          "Special Attack": 50,
          "Special Defense": 80,
          "Speed": 45
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/105.png",
        evolution: {
          "prev": [
            "104",
            "Level 28"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 106,
        name: "Hitmonlee",
        type: [
          "Fighting"
        ],
        height: "1.5 m",
        weight: "49.8 kg",
        ability: [
          "Limber",
          "Reckless",
          "Unburden (HIDDEN)"
        ],
        egg_groups: [
          "Human-Like"
        ],
        base_stats: {
          "HP": 50,
          "Attack": 120,
          "Defense": 53,
          "Special Attack": 35,
          "Special Defense": 110,
          "Speed": 87
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/106.png",
        evolution: {
          "prev": [
            "236",
            "Level 20, Attack > Defense"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 107,
        name: "Hitmonchan",
        type: [
          "Fighting"
        ],
        height: "1.4 m",
        weight: "50.2 kg",
        ability: [
          "Keen Eye",
          "Iron Fist",
          "Inner Focus (HIDDEN)"
        ],
        egg_groups: [
          "Human-Like"
        ],
        base_stats: {
          "HP": 50,
          "Attack": 105,
          "Defense": 79,
          "Special Attack": 35,
          "Special Defense": 110,
          "Speed": 76
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/107.png",
        evolution: {
          "prev": [
            "236",
            "Level 20, Attack < Defense"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 108,
        name: "Lickitung",
        type: [
          "Normal"
        ],
        height: "1.2 m",
        weight: "65.5 kg",
        ability: [
          "Own Tempo",
          "Oblivious",
          "Cloud Nine (HIDDEN)"
        ],
        egg_groups: [
          "Monster"
        ],
        base_stats: {
          "HP": 90,
          "Attack": 55,
          "Defense": 75,
          "Special Attack": 60,
          "Special Defense": 75,
          "Speed": 30
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/108.png",
        evolution: {
          "next": [
            [
              "463",
              "after Rollout learned"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 109,
        name: "Koffing",
        type: [
          "Poison"
        ],
        height: "0.6 m",
        weight: "1 kg",
        ability: [
          "Levitate"
        ],
        egg_groups: [
          "Amorphous"
        ],
        base_stats: {
          "HP": 40,
          "Attack": 65,
          "Defense": 95,
          "Special Attack": 60,
          "Special Defense": 45,
          "Speed": 35
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/109.png",
        evolution: {
          "next": [
            [
              "110",
              "Level 35"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 110,
        name: "Weezing",
        type: [
          "Poison"
        ],
        height: "1.2 m",
        weight: "9.5 kg",
        ability: [
          "Levitate"
        ],
        egg_groups: [
          "Amorphous"
        ],
        base_stats: {
          "HP": 65,
          "Attack": 90,
          "Defense": 120,
          "Special Attack": 85,
          "Special Defense": 70,
          "Speed": 60
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/110.png",
        evolution: {
          "prev": [
            "109",
            "Level 35"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 111,
        name: "Rhyhorn",
        type: [
          "Ground",
          "Rock"
        ],
        height: "1 m",
        weight: "115 kg",
        ability: [
          "Lightning Rod",
          "Rock Head",
          "Reckless (HIDDEN)"
        ],
        egg_groups: [
          "Monster",
          "Field"
        ],
        base_stats: {
          "HP": 80,
          "Attack": 85,
          "Defense": 95,
          "Special Attack": 30,
          "Special Defense": 30,
          "Speed": 25
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/111.png",
        evolution: {
          "next": [
            [
              "112",
              "Level 42"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 112,
        name: "Rhydon",
        type: [
          "Ground",
          "Rock"
        ],
        height: "1.9 m",
        weight: "120 kg",
        ability: [
          "Lightning Rod",
          "Rock Head",
          "Reckless (HIDDEN)"
        ],
        egg_groups: [
          "Monster",
          "Field"
        ],
        base_stats: {
          "HP": 105,
          "Attack": 130,
          "Defense": 120,
          "Special Attack": 45,
          "Special Defense": 45,
          "Speed": 40
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/112.png",
        evolution: {
          "prev": [
            "111",
            "Level 42"
          ],
          "next": [
            [
              "464",
              "trade holding Protector"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 113,
        name: "Chansey",
        type: [
          "Normal"
        ],
        height: "1.1 m",
        weight: "34.6 kg",
        ability: [
          "Natural Cure",
          "Serene Grace",
          "Healer (HIDDEN)"
        ],
        egg_groups: [
          "Fairy"
        ],
        base_stats: {
          "HP": 250,
          "Attack": 5,
          "Defense": 5,
          "Special Attack": 35,
          "Special Defense": 105,
          "Speed": 50
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/113.png",
        evolution: {
          "prev": [
            "440",
            "hold Oval Stone, Daytime"
          ],
          "next": [
            [
              "242",
              "high Friendship"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 114,
        name: "Tangela",
        type: [
          "Grass"
        ],
        height: "1 m",
        weight: "35 kg",
        ability: [
          "Chlorophyll",
          "Leaf Guard",
          "Regenerator (HIDDEN)"
        ],
        egg_groups: [
          "Grass"
        ],
        base_stats: {
          "HP": 65,
          "Attack": 55,
          "Defense": 115,
          "Special Attack": 100,
          "Special Defense": 40,
          "Speed": 60
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/114.png",
        evolution: {
          "next": [
            [
              "465",
              "after Ancient Power learned"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 115,
        name: "Kangaskhan",
        type: [
          "Normal"
        ],
        height: "2.2 m",
        weight: "80 kg",
        ability: [
          "Early Bird",
          "Scrappy",
          "Inner Focus (HIDDEN)"
        ],
        egg_groups: [
          "Monster"
        ],
        base_stats: {
          "HP": 105,
          "Attack": 95,
          "Defense": 80,
          "Special Attack": 40,
          "Special Defense": 80,
          "Speed": 90
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/115.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 116,
        name: "Horsea",
        type: [
          "Water"
        ],
        height: "0.4 m",
        weight: "8 kg",
        ability: [
          "Swift Swim",
          "Sniper",
          "Damp (HIDDEN)"
        ],
        egg_groups: [
          "Water 1",
          "Dragon"
        ],
        base_stats: {
          "HP": 30,
          "Attack": 40,
          "Defense": 70,
          "Special Attack": 70,
          "Special Defense": 25,
          "Speed": 60
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/116.png",
        evolution: {
          "next": [
            [
              "117",
              "Level 32"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 117,
        name: "Seadra",
        type: [
          "Water"
        ],
        height: "1.2 m",
        weight: "25 kg",
        ability: [
          "Poison Point",
          "Sniper",
          "Damp (HIDDEN)"
        ],
        egg_groups: [
          "Water 1",
          "Dragon"
        ],
        base_stats: {
          "HP": 55,
          "Attack": 65,
          "Defense": 95,
          "Special Attack": 95,
          "Special Defense": 45,
          "Speed": 85
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/117.png",
        evolution: {
          "prev": [
            "116",
            "Level 32"
          ],
          "next": [
            [
              "230",
              "trade holding Dragon Scale"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 118,
        name: "Goldeen",
        type: [
          "Water"
        ],
        height: "0.6 m",
        weight: "15 kg",
        ability: [
          "Swift Swim",
          "Water Veil",
          "Lightning Rod (HIDDEN)"
        ],
        egg_groups: [
          "Water 2"
        ],
        base_stats: {
          "HP": 45,
          "Attack": 67,
          "Defense": 60,
          "Special Attack": 35,
          "Special Defense": 50,
          "Speed": 63
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/118.png",
        evolution: {
          "next": [
            [
              "119",
              "Level 33"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 119,
        name: "Seaking",
        type: [
          "Water"
        ],
        height: "1.3 m",
        weight: "39 kg",
        ability: [
          "Swift Swim",
          "Water Veil",
          "Lightning Rod (HIDDEN)"
        ],
        egg_groups: [
          "Water 2"
        ],
        base_stats: {
          "HP": 80,
          "Attack": 92,
          "Defense": 65,
          "Special Attack": 65,
          "Special Defense": 80,
          "Speed": 68
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/119.png",
        evolution: {
          "prev": [
            "118",
            "Level 33"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 120,
        name: "Staryu",
        type: [
          "Water"
        ],
        height: "0.8 m",
        weight: "34.5 kg",
        ability: [
          "Illuminate",
          "Natural Cure",
          "Analytic (HIDDEN)"
        ],
        egg_groups: [
          "Water 3"
        ],
        base_stats: {
          "HP": 30,
          "Attack": 45,
          "Defense": 55,
          "Special Attack": 70,
          "Special Defense": 55,
          "Speed": 85
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/120.png",
        evolution: {
          "next": [
            [
              "121",
              "use Water Stone"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 121,
        name: "Starmie",
        type: [
          "Water",
          "Psychic"
        ],
        height: "1.1 m",
        weight: "80 kg",
        ability: [
          "Illuminate",
          "Natural Cure",
          "Analytic (HIDDEN)"
        ],
        egg_groups: [
          "Water 3"
        ],
        base_stats: {
          "HP": 60,
          "Attack": 75,
          "Defense": 85,
          "Special Attack": 100,
          "Special Defense": 85,
          "Speed": 115
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/121.png",
        evolution: {
          "prev": [
            "120",
            "use Water Stone"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 122,
        name: "Mr. Mime",
        type: [
          "Psychic",
          "Fairy"
        ],
        height: "1.3 m",
        weight: "54.5 kg",
        ability: [
          "Soundproof",
          "Filter",
          "Technician (HIDDEN)"
        ],
        egg_groups: [
          "Human-Like"
        ],
        base_stats: {
          "HP": 40,
          "Attack": 45,
          "Defense": 65,
          "Special Attack": 100,
          "Special Defense": 120,
          "Speed": 90
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/122.png",
        evolution: {
          "prev": [
            "439",
            "after Mimic learned"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 123,
        name: "Scyther",
        type: [
          "Bug",
          "Flying"
        ],
        height: "1.5 m",
        weight: "56 kg",
        ability: [
          "Swarm",
          "Technician",
          "Steadfast (HIDDEN)"
        ],
        egg_groups: [
          "Bug"
        ],
        base_stats: {
          "HP": 70,
          "Attack": 110,
          "Defense": 80,
          "Special Attack": 55,
          "Special Defense": 80,
          "Speed": 105
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/123.png",
        evolution: {
          "next": [
            [
              "212",
              "trade holding Metal Coat"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 124,
        name: "Jynx",
        type: [
          "Ice",
          "Psychic"
        ],
        height: "1.4 m",
        weight: "40.6 kg",
        ability: [
          "Oblivious",
          "Forewarn",
          "Dry Skin (HIDDEN)"
        ],
        egg_groups: [
          "Human-Like"
        ],
        base_stats: {
          "HP": 65,
          "Attack": 50,
          "Defense": 35,
          "Special Attack": 115,
          "Special Defense": 95,
          "Speed": 95
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/124.png",
        evolution: {
          "prev": [
            "238",
            "Level 30"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 125,
        name: "Electabuzz",
        type: [
          "Electric"
        ],
        height: "1.1 m",
        weight: "30 kg",
        ability: [
          "Static",
          "Vital Spirit (HIDDEN)"
        ],
        egg_groups: [
          "Human-Like"
        ],
        base_stats: {
          "HP": 65,
          "Attack": 83,
          "Defense": 57,
          "Special Attack": 95,
          "Special Defense": 85,
          "Speed": 105
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/125.png",
        evolution: {
          "prev": [
            "239",
            "Level 30"
          ],
          "next": [
            [
              "466",
              "trade holding Electirizer"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 126,
        name: "Magmar",
        type: [
          "Fire"
        ],
        height: "1.3 m",
        weight: "44.5 kg",
        ability: [
          "Flame Body",
          "Vital Spirit (HIDDEN)"
        ],
        egg_groups: [
          "Human-Like"
        ],
        base_stats: {
          "HP": 65,
          "Attack": 95,
          "Defense": 57,
          "Special Attack": 100,
          "Special Defense": 85,
          "Speed": 93
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/126.png",
        evolution: {
          "prev": [
            "240",
            "Level 30"
          ],
          "next": [
            [
              "467",
              "trade holding Magmarizer"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 127,
        name: "Pinsir",
        type: [
          "Bug"
        ],
        height: "1.5 m",
        weight: "55 kg",
        ability: [
          "Hyper Cutter",
          "Mold Breaker",
          "Moxie (HIDDEN)"
        ],
        egg_groups: [
          "Bug"
        ],
        base_stats: {
          "HP": 65,
          "Attack": 125,
          "Defense": 100,
          "Special Attack": 55,
          "Special Defense": 70,
          "Speed": 85
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/127.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 128,
        name: "Tauros",
        type: [
          "Normal"
        ],
        height: "1.4 m",
        weight: "88.4 kg",
        ability: [
          "Intimidate",
          "Anger Point",
          "Sheer Force (HIDDEN)"
        ],
        egg_groups: [
          "Field"
        ],
        base_stats: {
          "HP": 75,
          "Attack": 100,
          "Defense": 95,
          "Special Attack": 40,
          "Special Defense": 70,
          "Speed": 110
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/128.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 129,
        name: "Magikarp",
        type: [
          "Water"
        ],
        height: "0.9 m",
        weight: "10 kg",
        ability: [
          "Swift Swim",
          "Rattled (HIDDEN)"
        ],
        egg_groups: [
          "Water 2",
          "Dragon"
        ],
        base_stats: {
          "HP": 20,
          "Attack": 10,
          "Defense": 55,
          "Special Attack": 15,
          "Special Defense": 20,
          "Speed": 80
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/129.png",
        evolution: {
          "next": [
            [
              "130",
              "Level 20"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 130,
        name: "Gyarados",
        type: [
          "Water",
          "Flying"
        ],
        height: "6.5 m",
        weight: "235 kg",
        ability: [
          "Intimidate",
          "Moxie (HIDDEN)"
        ],
        egg_groups: [
          "Water 2",
          "Dragon"
        ],
        base_stats: {
          "HP": 95,
          "Attack": 125,
          "Defense": 79,
          "Special Attack": 60,
          "Special Defense": 100,
          "Speed": 81
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/130.png",
        evolution: {
          "prev": [
            "129",
            "Level 20"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 131,
        name: "Lapras",
        type: [
          "Water",
          "Ice"
        ],
        height: "2.5 m",
        weight: "220 kg",
        ability: [
          "Water Absorb",
          "Shell Armor",
          "Hydration (HIDDEN)"
        ],
        egg_groups: [
          "Monster",
          "Water 1"
        ],
        base_stats: {
          "HP": 130,
          "Attack": 85,
          "Defense": 80,
          "Special Attack": 85,
          "Special Defense": 95,
          "Speed": 60
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/131.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 132,
        name: "Ditto",
        type: [
          "Normal"
        ],
        height: "0.3 m",
        weight: "4 kg",
        ability: [
          "Limber",
          "Imposter (HIDDEN)"
        ],
        egg_groups: [
          "Ditto"
        ],
        base_stats: {
          "HP": 48,
          "Attack": 48,
          "Defense": 48,
          "Special Attack": 48,
          "Special Defense": 48,
          "Speed": 48
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/132.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 133,
        name: "Eevee",
        type: [
          "Normal"
        ],
        height: "0.3 m",
        weight: "6.5 kg",
        ability: [
          "Run Away",
          "Adaptability",
          "Anticipation (HIDDEN)"
        ],
        egg_groups: [
          "Field"
        ],
        base_stats: {
          "HP": 55,
          "Attack": 55,
          "Defense": 50,
          "Special Attack": 45,
          "Special Defense": 65,
          "Speed": 55
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/133.png",
        evolution: {
          "next": [
            [
              "134",
              "use Water Stone"
            ],
            [
              "135",
              "use Thunder Stone"
            ],
            [
              "136",
              "use Fire Stone"
            ],
            [
              "196",
              "high Friendship, Daytime"
            ],
            [
              "197",
              "high Friendship, Nighttime"
            ],
            [
              "470",
              "level up near a Mossy Rock"
            ],
            [
              "471",
              "level up near an Icy Rock"
            ],
            [
              "700",
              "High Affection and knowing Fairy move"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 134,
        name: "Vaporeon",
        type: [
          "Water"
        ],
        height: "1 m",
        weight: "29 kg",
        ability: [
          "Water Absorb",
          "Hydration (HIDDEN)"
        ],
        egg_groups: [
          "Field"
        ],
        base_stats: {
          "HP": 130,
          "Attack": 65,
          "Defense": 60,
          "Special Attack": 110,
          "Special Defense": 95,
          "Speed": 65
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/134.png",
        evolution: {
          "prev": [
            "133",
            "use Water Stone"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 135,
        name: "Jolteon",
        type: [
          "Electric"
        ],
        height: "0.8 m",
        weight: "24.5 kg",
        ability: [
          "Volt Absorb",
          "Quick Feet (HIDDEN)"
        ],
        egg_groups: [
          "Field"
        ],
        base_stats: {
          "HP": 65,
          "Attack": 65,
          "Defense": 60,
          "Special Attack": 110,
          "Special Defense": 95,
          "Speed": 130
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/135.png",
        evolution: {
          "prev": [
            "133",
            "use Thunder Stone"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 136,
        name: "Flareon",
        type: [
          "Fire"
        ],
        height: "0.9 m",
        weight: "25 kg",
        ability: [
          "Flash Fire",
          "Guts (HIDDEN)"
        ],
        egg_groups: [
          "Field"
        ],
        base_stats: {
          "HP": 65,
          "Attack": 130,
          "Defense": 60,
          "Special Attack": 95,
          "Special Defense": 110,
          "Speed": 65
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/136.png",
        evolution: {
          "prev": [
            "133",
            "use Fire Stone"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 137,
        name: "Porygon",
        type: [
          "Normal"
        ],
        height: "0.8 m",
        weight: "36.5 kg",
        ability: [
          "Trace",
          "Download",
          "Analytic (HIDDEN)"
        ],
        egg_groups: [
          "Mineral"
        ],
        base_stats: {
          "HP": 65,
          "Attack": 60,
          "Defense": 70,
          "Special Attack": 85,
          "Special Defense": 75,
          "Speed": 40
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/137.png",
        evolution: {
          "next": [
            [
              "233",
              "trade holding Upgrade"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 138,
        name: "Omanyte",
        type: [
          "Rock",
          "Water"
        ],
        height: "0.4 m",
        weight: "7.5 kg",
        ability: [
          "Swift Swim",
          "Shell Armor",
          "Weak Armor (HIDDEN)"
        ],
        egg_groups: [
          "Water 1",
          "Water 3"
        ],
        base_stats: {
          "HP": 35,
          "Attack": 40,
          "Defense": 100,
          "Special Attack": 90,
          "Special Defense": 55,
          "Speed": 35
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/138.png",
        evolution: {
          "next": [
            [
              "139",
              "Level 40"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 139,
        name: "Omastar",
        type: [
          "Rock",
          "Water"
        ],
        height: "1 m",
        weight: "35 kg",
        ability: [
          "Swift Swim",
          "Shell Armor",
          "Weak Armor (HIDDEN)"
        ],
        egg_groups: [
          "Water 1",
          "Water 3"
        ],
        base_stats: {
          "HP": 70,
          "Attack": 60,
          "Defense": 125,
          "Special Attack": 115,
          "Special Defense": 70,
          "Speed": 55
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/139.png",
        evolution: {
          "prev": [
            "138",
            "Level 40"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 140,
        name: "Kabuto",
        type: [
          "Rock",
          "Water"
        ],
        height: "0.5 m",
        weight: "11.5 kg",
        ability: [
          "Swift Swim",
          "Battle Armor",
          "Weak Armor (HIDDEN)"
        ],
        egg_groups: [
          "Water 1",
          "Water 3"
        ],
        base_stats: {
          "HP": 30,
          "Attack": 80,
          "Defense": 90,
          "Special Attack": 55,
          "Special Defense": 45,
          "Speed": 55
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/140.png",
        evolution: {
          "next": [
            [
              "141",
              "Level 40"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 141,
        name: "Kabutops",
        type: [
          "Rock",
          "Water"
        ],
        height: "1.3 m",
        weight: "40.5 kg",
        ability: [
          "Swift Swim",
          "Battle Armor",
          "Weak Armor (HIDDEN)"
        ],
        egg_groups: [
          "Water 1",
          "Water 3"
        ],
        base_stats: {
          "HP": 60,
          "Attack": 115,
          "Defense": 105,
          "Special Attack": 65,
          "Special Defense": 70,
          "Speed": 80
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/141.png",
        evolution: {
          "prev": [
            "140",
            "Level 40"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 142,
        name: "Aerodactyl",
        type: [
          "Rock",
          "Flying"
        ],
        height: "1.8 m",
        weight: "59 kg",
        ability: [
          "Rock Head",
          "Pressure",
          "Unnerve (HIDDEN)"
        ],
        egg_groups: [
          "Flying"
        ],
        base_stats: {
          "HP": 80,
          "Attack": 105,
          "Defense": 65,
          "Special Attack": 60,
          "Special Defense": 75,
          "Speed": 130
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/142.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 143,
        name: "Snorlax",
        type: [
          "Normal"
        ],
        height: "2.1 m",
        weight: "460 kg",
        ability: [
          "Immunity",
          "Thick Fat",
          "Gluttony (HIDDEN)"
        ],
        egg_groups: [
          "Monster"
        ],
        base_stats: {
          "HP": 160,
          "Attack": 110,
          "Defense": 65,
          "Special Attack": 65,
          "Special Defense": 110,
          "Speed": 30
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/143.png",
        evolution: {
          "prev": [
            "446",
            "high Friendship"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 144,
        name: "Articuno",
        type: [
          "Ice",
          "Flying"
        ],
        height: "1.7 m",
        weight: "55.4 kg",
        ability: [
          "Pressure",
          "Snow Cloak (HIDDEN)"
        ],
        egg_groups: [
          "Undiscovered"
        ],
        base_stats: {
          "HP": 90,
          "Attack": 85,
          "Defense": 100,
          "Special Attack": 95,
          "Special Defense": 125,
          "Speed": 85
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/144.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 145,
        name: "Zapdos",
        type: [
          "Electric",
          "Flying"
        ],
        height: "1.6 m",
        weight: "52.6 kg",
        ability: [
          "Pressure",
          "Static (HIDDEN)"
        ],
        egg_groups: [
          "Undiscovered"
        ],
        base_stats: {
          "HP": 90,
          "Attack": 90,
          "Defense": 85,
          "Special Attack": 125,
          "Special Defense": 90,
          "Speed": 100
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/145.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 146,
        name: "Moltres",
        type: [
          "Fire",
          "Flying"
        ],
        height: "2 m",
        weight: "60 kg",
        ability: [
          "Pressure",
          "Flame Body (HIDDEN)"
        ],
        egg_groups: [
          "Undiscovered"
        ],
        base_stats: {
          "HP": 90,
          "Attack": 100,
          "Defense": 90,
          "Special Attack": 125,
          "Special Defense": 85,
          "Speed": 90
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/146.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 147,
        name: "Dratini",
        type: [
          "Dragon"
        ],
        height: "1.8 m",
        weight: "3.3 kg",
        ability: [
          "Shed Skin",
          "Marvel Scale (HIDDEN)"
        ],
        egg_groups: [
          "Water 1",
          "Dragon"
        ],
        base_stats: {
          "HP": 41,
          "Attack": 64,
          "Defense": 45,
          "Special Attack": 50,
          "Special Defense": 50,
          "Speed": 50
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/147.png",
        evolution: {
          "next": [
            [
              "148",
              "Level 30"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 148,
        name: "Dragonair",
        type: [
          "Dragon"
        ],
        height: "4 m",
        weight: "16.5 kg",
        ability: [
          "Shed Skin",
          "Marvel Scale (HIDDEN)"
        ],
        egg_groups: [
          "Water 1",
          "Dragon"
        ],
        base_stats: {
          "HP": 61,
          "Attack": 84,
          "Defense": 65,
          "Special Attack": 70,
          "Special Defense": 70,
          "Speed": 70
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/148.png",
        evolution: {
          "prev": [
            "147",
            "Level 30"
          ],
          "next": [
            [
              "149",
              "Level 55"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 149,
        name: "Dragonite",
        type: [
          "Dragon",
          "Flying"
        ],
        height: "2.2 m",
        weight: "210 kg",
        ability: [
          "Inner Focus",
          "Multiscale (HIDDEN)"
        ],
        egg_groups: [
          "Water 1",
          "Dragon"
        ],
        base_stats: {
          "HP": 91,
          "Attack": 134,
          "Defense": 95,
          "Special Attack": 100,
          "Special Defense": 100,
          "Speed": 80
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/149.png",
        evolution: {
          "prev": [
            "148",
            "Level 55"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 150,
        name: "Mewtwo",
        type: [
          "Psychic"
        ],
        height: "2 m",
        weight: "122 kg",
        ability: [
          "Pressure",
          "Unnerve (HIDDEN)"
        ],
        egg_groups: [
          "Undiscovered"
        ],
        base_stats: {
          "HP": 106,
          "Attack": 110,
          "Defense": 90,
          "Special Attack": 154,
          "Special Defense": 90,
          "Speed": 130
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/150.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 151,
        name: "Mew",
        type: [
          "Psychic"
        ],
        height: "0.4 m",
        weight: "4 kg",
        ability: [
          "Synchronize"
        ],
        egg_groups: [
          "Undiscovered"
        ],
        base_stats: {
          "HP": 100,
          "Attack": 100,
          "Defense": 100,
          "Special Attack": 100,
          "Special Defense": 100,
          "Speed": 100
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/151.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 152,
        name: "Chikorita",
        type: [
          "Grass"
        ],
        height: "0.9 m",
        weight: "6.4 kg",
        ability: [
          "Overgrow",
          "Leaf Guard (HIDDEN)"
        ],
        egg_groups: [
          "Monster",
          "Grass"
        ],
        base_stats: {
          "HP": 45,
          "Attack": 49,
          "Defense": 65,
          "Special Attack": 49,
          "Special Defense": 65,
          "Speed": 45
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/152.png",
        evolution: {
          "next": [
            [
              "153",
              "Level 16"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 153,
        name: "Bayleef",
        type: [
          "Grass"
        ],
        height: "1.2 m",
        weight: "15.8 kg",
        ability: [
          "Overgrow",
          "Leaf Guard (HIDDEN)"
        ],
        egg_groups: [
          "Monster",
          "Grass"
        ],
        base_stats: {
          "HP": 60,
          "Attack": 62,
          "Defense": 80,
          "Special Attack": 63,
          "Special Defense": 80,
          "Speed": 60
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/153.png",
        evolution: {
          "prev": [
            "152",
            "Level 16"
          ],
          "next": [
            [
              "154",
              "Level 32"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 154,
        name: "Meganium",
        type: [
          "Grass"
        ],
        height: "1.8 m",
        weight: "100.5 kg",
        ability: [
          "Overgrow",
          "Leaf Guard (HIDDEN)"
        ],
        egg_groups: [
          "Monster",
          "Grass"
        ],
        base_stats: {
          "HP": 80,
          "Attack": 82,
          "Defense": 100,
          "Special Attack": 83,
          "Special Defense": 100,
          "Speed": 80
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/154.png",
        evolution: {
          "prev": [
            "153",
            "Level 32"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 155,
        name: "Cyndaquil",
        type: [
          "Fire"
        ],
        height: "0.5 m",
        weight: "7.9 kg",
        ability: [
          "Blaze",
          "Flash Fire (HIDDEN)"
        ],
        egg_groups: [
          "Field"
        ],
        base_stats: {
          "HP": 39,
          "Attack": 52,
          "Defense": 43,
          "Special Attack": 60,
          "Special Defense": 50,
          "Speed": 65
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/155.png",
        evolution: {
          "next": [
            [
              "156",
              "Level 14"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 156,
        name: "Quilava",
        type: [
          "Fire"
        ],
        height: "0.9 m",
        weight: "19 kg",
        ability: [
          "Blaze",
          "Flash Fire (HIDDEN)"
        ],
        egg_groups: [
          "Field"
        ],
        base_stats: {
          "HP": 58,
          "Attack": 64,
          "Defense": 58,
          "Special Attack": 80,
          "Special Defense": 65,
          "Speed": 80
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/156.png",
        evolution: {
          "prev": [
            "155",
            "Level 14"
          ],
          "next": [
            [
              "157",
              "Level 36"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 157,
        name: "Typhlosion",
        type: [
          "Fire"
        ],
        height: "1.7 m",
        weight: "79.5 kg",
        ability: [
          "Blaze",
          "Flash Fire (HIDDEN)"
        ],
        egg_groups: [
          "Field"
        ],
        base_stats: {
          "HP": 78,
          "Attack": 84,
          "Defense": 78,
          "Special Attack": 109,
          "Special Defense": 85,
          "Speed": 100
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/157.png",
        evolution: {
          "prev": [
            "156",
            "Level 36"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 158,
        name: "Totodile",
        type: [
          "Water"
        ],
        height: "0.6 m",
        weight: "9.5 kg",
        ability: [
          "Torrent",
          "Sheer Force (HIDDEN)"
        ],
        egg_groups: [
          "Monster",
          "Water 1"
        ],
        base_stats: {
          "HP": 50,
          "Attack": 65,
          "Defense": 64,
          "Special Attack": 44,
          "Special Defense": 48,
          "Speed": 43
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/158.png",
        evolution: {
          "next": [
            [
              "159",
              "Level 18"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 159,
        name: "Croconaw",
        type: [
          "Water"
        ],
        height: "1.1 m",
        weight: "25 kg",
        ability: [
          "Torrent",
          "Sheer Force (HIDDEN)"
        ],
        egg_groups: [
          "Monster",
          "Water 1"
        ],
        base_stats: {
          "HP": 65,
          "Attack": 80,
          "Defense": 80,
          "Special Attack": 59,
          "Special Defense": 63,
          "Speed": 58
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/159.png",
        evolution: {
          "prev": [
            "158",
            "Level 18"
          ],
          "next": [
            [
              "160",
              "Level 30"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 160,
        name: "Feraligatr",
        type: [
          "Water"
        ],
        height: "2.3 m",
        weight: "88.8 kg",
        ability: [
          "Torrent",
          "Sheer Force (HIDDEN)"
        ],
        egg_groups: [
          "Monster",
          "Water 1"
        ],
        base_stats: {
          "HP": 85,
          "Attack": 105,
          "Defense": 100,
          "Special Attack": 79,
          "Special Defense": 83,
          "Speed": 78
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/160.png",
        evolution: {
          "prev": [
            "159",
            "Level 30"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 161,
        name: "Sentret",
        type: [
          "Normal"
        ],
        height: "0.8 m",
        weight: "6 kg",
        ability: [
          "Run Away",
          "Keen Eye",
          "Frisk (HIDDEN)"
        ],
        egg_groups: [
          "Field"
        ],
        base_stats: {
          "HP": 35,
          "Attack": 46,
          "Defense": 34,
          "Special Attack": 35,
          "Special Defense": 45,
          "Speed": 20
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/161.png",
        evolution: {
          "next": [
            [
              "162",
              "Level 15"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 162,
        name: "Furret",
        type: [
          "Normal"
        ],
        height: "1.8 m",
        weight: "32.5 kg",
        ability: [
          "Run Away",
          "Keen Eye",
          "Frisk (HIDDEN)"
        ],
        egg_groups: [
          "Field"
        ],
        base_stats: {
          "HP": 85,
          "Attack": 76,
          "Defense": 64,
          "Special Attack": 45,
          "Special Defense": 55,
          "Speed": 90
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/162.png",
        evolution: {
          "prev": [
            "161",
            "Level 15"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 163,
        name: "Hoothoot",
        type: [
          "Normal",
          "Flying"
        ],
        height: "0.7 m",
        weight: "21.2 kg",
        ability: [
          "Insomnia",
          "Keen Eye",
          "Tinted Lens (HIDDEN)"
        ],
        egg_groups: [
          "Flying"
        ],
        base_stats: {
          "HP": 60,
          "Attack": 30,
          "Defense": 30,
          "Special Attack": 36,
          "Special Defense": 56,
          "Speed": 50
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/163.png",
        evolution: {
          "next": [
            [
              "164",
              "Level 20"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 164,
        name: "Noctowl",
        type: [
          "Normal",
          "Flying"
        ],
        height: "1.6 m",
        weight: "40.8 kg",
        ability: [
          "Insomnia",
          "Keen Eye",
          "Tinted Lens (HIDDEN)"
        ],
        egg_groups: [
          "Flying"
        ],
        base_stats: {
          "HP": 100,
          "Attack": 50,
          "Defense": 50,
          "Special Attack": 86,
          "Special Defense": 96,
          "Speed": 70
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/164.png",
        evolution: {
          "prev": [
            "163",
            "Level 20"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 165,
        name: "Ledyba",
        type: [
          "Bug",
          "Flying"
        ],
        height: "1 m",
        weight: "10.8 kg",
        ability: [
          "Swarm",
          "Early Bird",
          "Rattled (HIDDEN)"
        ],
        egg_groups: [
          "Bug"
        ],
        base_stats: {
          "HP": 40,
          "Attack": 20,
          "Defense": 30,
          "Special Attack": 40,
          "Special Defense": 80,
          "Speed": 55
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/165.png",
        evolution: {
          "next": [
            [
              "166",
              "Level 18"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 166,
        name: "Ledian",
        type: [
          "Bug",
          "Flying"
        ],
        height: "1.4 m",
        weight: "35.6 kg",
        ability: [
          "Swarm",
          "Early Bird",
          "Iron Fist (HIDDEN)"
        ],
        egg_groups: [
          "Bug"
        ],
        base_stats: {
          "HP": 55,
          "Attack": 35,
          "Defense": 50,
          "Special Attack": 55,
          "Special Defense": 110,
          "Speed": 85
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/166.png",
        evolution: {
          "prev": [
            "165",
            "Level 18"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 167,
        name: "Spinarak",
        type: [
          "Bug",
          "Poison"
        ],
        height: "0.5 m",
        weight: "8.5 kg",
        ability: [
          "Swarm",
          "Insomnia",
          "Sniper (HIDDEN)"
        ],
        egg_groups: [
          "Bug"
        ],
        base_stats: {
          "HP": 40,
          "Attack": 60,
          "Defense": 40,
          "Special Attack": 40,
          "Special Defense": 40,
          "Speed": 30
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/167.png",
        evolution: {
          "next": [
            [
              "168",
              "Level 22"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 168,
        name: "Ariados",
        type: [
          "Bug",
          "Poison"
        ],
        height: "1.1 m",
        weight: "33.5 kg",
        ability: [
          "Swarm",
          "Insomnia",
          "Sniper (HIDDEN)"
        ],
        egg_groups: [
          "Bug"
        ],
        base_stats: {
          "HP": 70,
          "Attack": 90,
          "Defense": 70,
          "Special Attack": 60,
          "Special Defense": 70,
          "Speed": 40
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/168.png",
        evolution: {
          "prev": [
            "167",
            "Level 22"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 169,
        name: "Crobat",
        type: [
          "Poison",
          "Flying"
        ],
        height: "1.8 m",
        weight: "75 kg",
        ability: [
          "Inner Focus",
          "Infiltrator (HIDDEN)"
        ],
        egg_groups: [
          "Flying"
        ],
        base_stats: {
          "HP": 85,
          "Attack": 90,
          "Defense": 80,
          "Special Attack": 70,
          "Special Defense": 80,
          "Speed": 130
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/169.png",
        evolution: {
          "prev": [
            "42",
            "high Friendship"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 170,
        name: "Chinchou",
        type: [
          "Water",
          "Electric"
        ],
        height: "0.5 m",
        weight: "12 kg",
        ability: [
          "Volt Absorb",
          "Illuminate",
          "Water Absorb (HIDDEN)"
        ],
        egg_groups: [
          "Water 2"
        ],
        base_stats: {
          "HP": 75,
          "Attack": 38,
          "Defense": 38,
          "Special Attack": 56,
          "Special Defense": 56,
          "Speed": 67
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/170.png",
        evolution: {
          "next": [
            [
              "171",
              "Level 27"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 171,
        name: "Lanturn",
        type: [
          "Water",
          "Electric"
        ],
        height: "1.2 m",
        weight: "22.5 kg",
        ability: [
          "Volt Absorb",
          "Illuminate",
          "Water Absorb (HIDDEN)"
        ],
        egg_groups: [
          "Water 2"
        ],
        base_stats: {
          "HP": 125,
          "Attack": 58,
          "Defense": 58,
          "Special Attack": 76,
          "Special Defense": 76,
          "Speed": 67
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/171.png",
        evolution: {
          "prev": [
            "170",
            "Level 27"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 172,
        name: "Pichu",
        type: [
          "Electric"
        ],
        height: "0.3 m",
        weight: "2 kg",
        ability: [
          "Static",
          "Lightning Rod (HIDDEN)"
        ],
        egg_groups: [
          "Undiscovered"
        ],
        base_stats: {
          "HP": 20,
          "Attack": 40,
          "Defense": 15,
          "Special Attack": 35,
          "Special Defense": 35,
          "Speed": 60
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/172.png",
        evolution: {
          "next": [
            [
              "25",
              "high Friendship"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 173,
        name: "Cleffa",
        type: [
          "Fairy"
        ],
        height: "0.3 m",
        weight: "3 kg",
        ability: [
          "Cute Charm",
          "Magic Guard",
          "Friend Guard (HIDDEN)"
        ],
        egg_groups: [
          "Undiscovered"
        ],
        base_stats: {
          "HP": 50,
          "Attack": 25,
          "Defense": 28,
          "Special Attack": 45,
          "Special Defense": 55,
          "Speed": 15
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/173.png",
        evolution: {
          "next": [
            [
              "35",
              "high Friendship"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 174,
        name: "Igglybuff",
        type: [
          "Normal",
          "Fairy"
        ],
        height: "0.3 m",
        weight: "1 kg",
        ability: [
          "Cute Charm",
          "Competitive",
          "Friend Guard (HIDDEN)"
        ],
        egg_groups: [
          "Undiscovered"
        ],
        base_stats: {
          "HP": 90,
          "Attack": 30,
          "Defense": 15,
          "Special Attack": 40,
          "Special Defense": 20,
          "Speed": 15
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/174.png",
        evolution: {
          "next": [
            [
              "39",
              "high Friendship"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 175,
        name: "Togepi",
        type: [
          "Fairy"
        ],
        height: "0.3 m",
        weight: "1.5 kg",
        ability: [
          "Hustle",
          "Serene Grace",
          "Super Luck (HIDDEN)"
        ],
        egg_groups: [
          "Undiscovered"
        ],
        base_stats: {
          "HP": 35,
          "Attack": 20,
          "Defense": 65,
          "Special Attack": 40,
          "Special Defense": 65,
          "Speed": 20
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/175.png",
        evolution: {
          "next": [
            [
              "176",
              "high Friendship"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 176,
        name: "Togetic",
        type: [
          "Fairy",
          "Flying"
        ],
        height: "0.6 m",
        weight: "3.2 kg",
        ability: [
          "Hustle",
          "Serene Grace",
          "Super Luck (HIDDEN)"
        ],
        egg_groups: [
          "Flying",
          "Fairy"
        ],
        base_stats: {
          "HP": 55,
          "Attack": 40,
          "Defense": 85,
          "Special Attack": 80,
          "Special Defense": 105,
          "Speed": 40
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/176.png",
        evolution: {
          "prev": [
            "175",
            "high Friendship"
          ],
          "next": [
            [
              "468",
              "use Shiny Stone"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 177,
        name: "Natu",
        type: [
          "Psychic",
          "Flying"
        ],
        height: "0.2 m",
        weight: "2 kg",
        ability: [
          "Synchronize",
          "Early Bird",
          "Magic Bounce (HIDDEN)"
        ],
        egg_groups: [
          "Flying"
        ],
        base_stats: {
          "HP": 40,
          "Attack": 50,
          "Defense": 45,
          "Special Attack": 70,
          "Special Defense": 45,
          "Speed": 70
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/177.png",
        evolution: {
          "next": [
            [
              "178",
              "Level 25"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 178,
        name: "Xatu",
        type: [
          "Psychic",
          "Flying"
        ],
        height: "1.5 m",
        weight: "15 kg",
        ability: [
          "Synchronize",
          "Early Bird",
          "Magic Bounce (HIDDEN)"
        ],
        egg_groups: [
          "Flying"
        ],
        base_stats: {
          "HP": 65,
          "Attack": 75,
          "Defense": 70,
          "Special Attack": 95,
          "Special Defense": 70,
          "Speed": 95
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/178.png",
        evolution: {
          "prev": [
            "177",
            "Level 25"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 179,
        name: "Mareep",
        type: [
          "Electric"
        ],
        height: "0.6 m",
        weight: "7.8 kg",
        ability: [
          "Static",
          "Plus (HIDDEN)"
        ],
        egg_groups: [
          "Monster",
          "Field"
        ],
        base_stats: {
          "HP": 55,
          "Attack": 40,
          "Defense": 40,
          "Special Attack": 65,
          "Special Defense": 45,
          "Speed": 35
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/179.png",
        evolution: {
          "next": [
            [
              "180",
              "Level 15"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 180,
        name: "Flaaffy",
        type: [
          "Electric"
        ],
        height: "0.8 m",
        weight: "13.3 kg",
        ability: [
          "Static",
          "Plus (HIDDEN)"
        ],
        egg_groups: [
          "Monster",
          "Field"
        ],
        base_stats: {
          "HP": 70,
          "Attack": 55,
          "Defense": 55,
          "Special Attack": 80,
          "Special Defense": 60,
          "Speed": 45
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/180.png",
        evolution: {
          "prev": [
            "179",
            "Level 15"
          ],
          "next": [
            [
              "181",
              "Level 30"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 181,
        name: "Ampharos",
        type: [
          "Electric"
        ],
        height: "1.4 m",
        weight: "61.5 kg",
        ability: [
          "Static",
          "Plus (HIDDEN)"
        ],
        egg_groups: [
          "Monster",
          "Field"
        ],
        base_stats: {
          "HP": 90,
          "Attack": 75,
          "Defense": 85,
          "Special Attack": 115,
          "Special Defense": 90,
          "Speed": 55
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/181.png",
        evolution: {
          "prev": [
            "180",
            "Level 30"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 182,
        name: "Bellossom",
        type: [
          "Grass"
        ],
        height: "0.4 m",
        weight: "5.8 kg",
        ability: [
          "Chlorophyll",
          "Healer (HIDDEN)"
        ],
        egg_groups: [
          "Grass"
        ],
        base_stats: {
          "HP": 75,
          "Attack": 80,
          "Defense": 95,
          "Special Attack": 90,
          "Special Defense": 100,
          "Speed": 50
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/182.png",
        evolution: {
          "prev": [
            "44",
            "use Sun Stone"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 183,
        name: "Marill",
        type: [
          "Water",
          "Fairy"
        ],
        height: "0.4 m",
        weight: "8.5 kg",
        ability: [
          "Thick Fat",
          "Huge Power",
          "Sap Sipper (HIDDEN)"
        ],
        egg_groups: [
          "Water 1",
          "Fairy"
        ],
        base_stats: {
          "HP": 70,
          "Attack": 20,
          "Defense": 50,
          "Special Attack": 20,
          "Special Defense": 50,
          "Speed": 40
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/183.png",
        evolution: {
          "prev": [
            "298",
            "high Friendship"
          ],
          "next": [
            [
              "184",
              "Level 18"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 184,
        name: "Azumarill",
        type: [
          "Water",
          "Fairy"
        ],
        height: "0.8 m",
        weight: "28.5 kg",
        ability: [
          "Thick Fat",
          "Huge Power",
          "Sap Sipper (HIDDEN)"
        ],
        egg_groups: [
          "Water 1",
          "Fairy"
        ],
        base_stats: {
          "HP": 100,
          "Attack": 50,
          "Defense": 80,
          "Special Attack": 60,
          "Special Defense": 80,
          "Speed": 50
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/184.png",
        evolution: {
          "prev": [
            "183",
            "Level 18"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 185,
        name: "Sudowoodo",
        type: [
          "Rock"
        ],
        height: "1.2 m",
        weight: "38 kg",
        ability: [
          "Sturdy",
          "Rock Head",
          "Rattled (HIDDEN)"
        ],
        egg_groups: [
          "Mineral"
        ],
        base_stats: {
          "HP": 70,
          "Attack": 100,
          "Defense": 115,
          "Special Attack": 30,
          "Special Defense": 65,
          "Speed": 30
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/185.png",
        evolution: {
          "prev": [
            "438",
            "after Mimic learned"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 186,
        name: "Politoed",
        type: [
          "Water"
        ],
        height: "1.1 m",
        weight: "33.9 kg",
        ability: [
          "Water Absorb",
          "Damp",
          "Drizzle (HIDDEN)"
        ],
        egg_groups: [
          "Water 1"
        ],
        base_stats: {
          "HP": 90,
          "Attack": 75,
          "Defense": 75,
          "Special Attack": 90,
          "Special Defense": 100,
          "Speed": 70
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/186.png",
        evolution: {
          "prev": [
            "61",
            "trade holding Kings Rock"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 187,
        name: "Hoppip",
        type: [
          "Grass",
          "Flying"
        ],
        height: "0.4 m",
        weight: "0.5 kg",
        ability: [
          "Chlorophyll",
          "Leaf Guard",
          "Infiltrator (HIDDEN)"
        ],
        egg_groups: [
          "Fairy",
          "Grass"
        ],
        base_stats: {
          "HP": 35,
          "Attack": 35,
          "Defense": 40,
          "Special Attack": 35,
          "Special Defense": 55,
          "Speed": 50
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/187.png",
        evolution: {
          "next": [
            [
              "188",
              "Level 18"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 188,
        name: "Skiploom",
        type: [
          "Grass",
          "Flying"
        ],
        height: "0.6 m",
        weight: "1 kg",
        ability: [
          "Chlorophyll",
          "Leaf Guard",
          "Infiltrator (HIDDEN)"
        ],
        egg_groups: [
          "Fairy",
          "Grass"
        ],
        base_stats: {
          "HP": 55,
          "Attack": 45,
          "Defense": 50,
          "Special Attack": 45,
          "Special Defense": 65,
          "Speed": 80
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/188.png",
        evolution: {
          "prev": [
            "187",
            "Level 18"
          ],
          "next": [
            [
              "189",
              "Level 27"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 189,
        name: "Jumpluff",
        type: [
          "Grass",
          "Flying"
        ],
        height: "0.8 m",
        weight: "3 kg",
        ability: [
          "Chlorophyll",
          "Leaf Guard",
          "Infiltrator (HIDDEN)"
        ],
        egg_groups: [
          "Fairy",
          "Grass"
        ],
        base_stats: {
          "HP": 75,
          "Attack": 55,
          "Defense": 70,
          "Special Attack": 55,
          "Special Defense": 95,
          "Speed": 110
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/189.png",
        evolution: {
          "prev": [
            "188",
            "Level 27"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 190,
        name: "Aipom",
        type: [
          "Normal"
        ],
        height: "0.8 m",
        weight: "11.5 kg",
        ability: [
          "Run Away",
          "Pickup",
          "Skill Link (HIDDEN)"
        ],
        egg_groups: [
          "Field"
        ],
        base_stats: {
          "HP": 55,
          "Attack": 70,
          "Defense": 55,
          "Special Attack": 40,
          "Special Defense": 55,
          "Speed": 85
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/190.png",
        evolution: {
          "next": [
            [
              "424",
              "after Double Hit learned"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 191,
        name: "Sunkern",
        type: [
          "Grass"
        ],
        height: "0.3 m",
        weight: "1.8 kg",
        ability: [
          "Chlorophyll",
          "Solar Power",
          "Early Bird (HIDDEN)"
        ],
        egg_groups: [
          "Grass"
        ],
        base_stats: {
          "HP": 30,
          "Attack": 30,
          "Defense": 30,
          "Special Attack": 30,
          "Special Defense": 30,
          "Speed": 30
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/191.png",
        evolution: {
          "next": [
            [
              "192",
              "use Sun Stone"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 192,
        name: "Sunflora",
        type: [
          "Grass"
        ],
        height: "0.8 m",
        weight: "8.5 kg",
        ability: [
          "Chlorophyll",
          "Solar Power",
          "Early Bird (HIDDEN)"
        ],
        egg_groups: [
          "Grass"
        ],
        base_stats: {
          "HP": 75,
          "Attack": 75,
          "Defense": 55,
          "Special Attack": 105,
          "Special Defense": 85,
          "Speed": 30
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/192.png",
        evolution: {
          "prev": [
            "191",
            "use Sun Stone"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 193,
        name: "Yanma",
        type: [
          "Bug",
          "Flying"
        ],
        height: "1.2 m",
        weight: "38 kg",
        ability: [
          "Speed Boost",
          "Compound Eyes",
          "Frisk (HIDDEN)"
        ],
        egg_groups: [
          "Bug"
        ],
        base_stats: {
          "HP": 65,
          "Attack": 65,
          "Defense": 45,
          "Special Attack": 75,
          "Special Defense": 45,
          "Speed": 95
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/193.png",
        evolution: {
          "next": [
            [
              "469",
              "after Ancient Power learned"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 194,
        name: "Wooper",
        type: [
          "Water",
          "Ground"
        ],
        height: "0.4 m",
        weight: "8.5 kg",
        ability: [
          "Damp",
          "Water Absorb",
          "Unaware (HIDDEN)"
        ],
        egg_groups: [
          "Water 1",
          "Field"
        ],
        base_stats: {
          "HP": 55,
          "Attack": 45,
          "Defense": 45,
          "Special Attack": 25,
          "Special Defense": 25,
          "Speed": 15
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/194.png",
        evolution: {
          "next": [
            [
              "195",
              "Level 20"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 195,
        name: "Quagsire",
        type: [
          "Water",
          "Ground"
        ],
        height: "1.4 m",
        weight: "75 kg",
        ability: [
          "Damp",
          "Water Absorb",
          "Unaware (HIDDEN)"
        ],
        egg_groups: [
          "Water 1",
          "Field"
        ],
        base_stats: {
          "HP": 95,
          "Attack": 85,
          "Defense": 85,
          "Special Attack": 65,
          "Special Defense": 65,
          "Speed": 35
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/195.png",
        evolution: {
          "prev": [
            "194",
            "Level 20"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 196,
        name: "Espeon",
        type: [
          "Psychic"
        ],
        height: "0.9 m",
        weight: "26.5 kg",
        ability: [
          "Synchronize",
          "Magic Bounce (HIDDEN)"
        ],
        egg_groups: [
          "Field"
        ],
        base_stats: {
          "HP": 65,
          "Attack": 65,
          "Defense": 60,
          "Special Attack": 130,
          "Special Defense": 95,
          "Speed": 110
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/196.png",
        evolution: {
          "prev": [
            "133",
            "high Friendship, Daytime"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 197,
        name: "Umbreon",
        type: [
          "Dark"
        ],
        height: "1 m",
        weight: "27 kg",
        ability: [
          "Synchronize",
          "Inner Focus (HIDDEN)"
        ],
        egg_groups: [
          "Field"
        ],
        base_stats: {
          "HP": 95,
          "Attack": 65,
          "Defense": 110,
          "Special Attack": 60,
          "Special Defense": 130,
          "Speed": 65
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/197.png",
        evolution: {
          "prev": [
            "133",
            "high Friendship, Nighttime"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 198,
        name: "Murkrow",
        type: [
          "Dark",
          "Flying"
        ],
        height: "0.5 m",
        weight: "2.1 kg",
        ability: [
          "Insomnia",
          "Super Luck",
          "Prankster (HIDDEN)"
        ],
        egg_groups: [
          "Flying"
        ],
        base_stats: {
          "HP": 60,
          "Attack": 85,
          "Defense": 42,
          "Special Attack": 85,
          "Special Defense": 42,
          "Speed": 91
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/198.png",
        evolution: {
          "next": [
            [
              "430",
              "use Dusk Stone"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 199,
        name: "Slowking",
        type: [
          "Water",
          "Psychic"
        ],
        height: "2 m",
        weight: "79.5 kg",
        ability: [
          "Oblivious",
          "Own Tempo",
          "Regenerator (HIDDEN)"
        ],
        egg_groups: [
          "Monster",
          "Water 1"
        ],
        base_stats: {
          "HP": 95,
          "Attack": 75,
          "Defense": 80,
          "Special Attack": 100,
          "Special Defense": 110,
          "Speed": 30
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/199.png",
        evolution: {
          "prev": [
            "79",
            "trade holding Kings Rock"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 200,
        name: "Misdreavus",
        type: [
          "Ghost"
        ],
        height: "0.7 m",
        weight: "1 kg",
        ability: [
          "Levitate"
        ],
        egg_groups: [
          "Amorphous"
        ],
        base_stats: {
          "HP": 60,
          "Attack": 60,
          "Defense": 60,
          "Special Attack": 85,
          "Special Defense": 85,
          "Speed": 85
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/200.png",
        evolution: {
          "next": [
            [
              "429",
              "use Dusk Stone"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 201,
        name: "Unown",
        type: [
          "Psychic"
        ],
        height: "0.5 m",
        weight: "5 kg",
        ability: [
          "Levitate"
        ],
        egg_groups: [
          "Undiscovered"
        ],
        base_stats: {
          "HP": 48,
          "Attack": 72,
          "Defense": 48,
          "Special Attack": 72,
          "Special Defense": 48,
          "Speed": 48
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/201.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 202,
        name: "Wobbuffet",
        type: [
          "Psychic"
        ],
        height: "1.3 m",
        weight: "28.5 kg",
        ability: [
          "Shadow Tag",
          "Telepathy (HIDDEN)"
        ],
        egg_groups: [
          "Amorphous"
        ],
        base_stats: {
          "HP": 190,
          "Attack": 33,
          "Defense": 58,
          "Special Attack": 33,
          "Special Defense": 58,
          "Speed": 33
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/202.png",
        evolution: {
          "prev": [
            "360",
            "Level 15"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 203,
        name: "Girafarig",
        type: [
          "Normal",
          "Psychic"
        ],
        height: "1.5 m",
        weight: "41.5 kg",
        ability: [
          "Inner Focus",
          "Early Bird",
          "Sap Sipper (HIDDEN)"
        ],
        egg_groups: [
          "Field"
        ],
        base_stats: {
          "HP": 70,
          "Attack": 80,
          "Defense": 65,
          "Special Attack": 90,
          "Special Defense": 65,
          "Speed": 85
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/203.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 204,
        name: "Pineco",
        type: [
          "Bug"
        ],
        height: "0.6 m",
        weight: "7.2 kg",
        ability: [
          "Sturdy",
          "Overcoat (HIDDEN)"
        ],
        egg_groups: [
          "Bug"
        ],
        base_stats: {
          "HP": 50,
          "Attack": 65,
          "Defense": 90,
          "Special Attack": 35,
          "Special Defense": 35,
          "Speed": 15
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/204.png",
        evolution: {
          "next": [
            [
              "205",
              "Level 31"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 205,
        name: "Forretress",
        type: [
          "Bug",
          "Steel"
        ],
        height: "1.2 m",
        weight: "125.8 kg",
        ability: [
          "Sturdy",
          "Overcoat (HIDDEN)"
        ],
        egg_groups: [
          "Bug"
        ],
        base_stats: {
          "HP": 75,
          "Attack": 90,
          "Defense": 140,
          "Special Attack": 60,
          "Special Defense": 60,
          "Speed": 40
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/205.png",
        evolution: {
          "prev": [
            "204",
            "Level 31"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 206,
        name: "Dunsparce",
        type: [
          "Normal"
        ],
        height: "1.5 m",
        weight: "14 kg",
        ability: [
          "Serene Grace",
          "Run Away",
          "Rattled (HIDDEN)"
        ],
        egg_groups: [
          "Field"
        ],
        base_stats: {
          "HP": 100,
          "Attack": 70,
          "Defense": 70,
          "Special Attack": 65,
          "Special Defense": 65,
          "Speed": 45
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/206.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 207,
        name: "Gligar",
        type: [
          "Ground",
          "Flying"
        ],
        height: "1.1 m",
        weight: "64.8 kg",
        ability: [
          "Hyper Cutter",
          "Sand Veil",
          "Immunity (HIDDEN)"
        ],
        egg_groups: [
          "Bug"
        ],
        base_stats: {
          "HP": 65,
          "Attack": 75,
          "Defense": 105,
          "Special Attack": 35,
          "Special Defense": 65,
          "Speed": 85
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/207.png",
        evolution: {
          "next": [
            [
              "472",
              "hold Razor Fang, Nighttime"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 208,
        name: "Steelix",
        type: [
          "Steel",
          "Ground"
        ],
        height: "9.2 m",
        weight: "400 kg",
        ability: [
          "Rock Head",
          "Sturdy",
          "Sheer Force (HIDDEN)"
        ],
        egg_groups: [
          "Mineral"
        ],
        base_stats: {
          "HP": 75,
          "Attack": 85,
          "Defense": 200,
          "Special Attack": 55,
          "Special Defense": 65,
          "Speed": 30
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/208.png",
        evolution: {
          "prev": [
            "95",
            "trade holding Metal Coat"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 209,
        name: "Snubbull",
        type: [
          "Fairy"
        ],
        height: "0.6 m",
        weight: "7.8 kg",
        ability: [
          "Intimidate",
          "Run Away",
          "Rattled (HIDDEN)"
        ],
        egg_groups: [
          "Field",
          "Fairy"
        ],
        base_stats: {
          "HP": 60,
          "Attack": 80,
          "Defense": 50,
          "Special Attack": 40,
          "Special Defense": 40,
          "Speed": 30
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/209.png",
        evolution: {
          "next": [
            [
              "210",
              "Level 23"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 210,
        name: "Granbull",
        type: [
          "Fairy"
        ],
        height: "1.4 m",
        weight: "48.7 kg",
        ability: [
          "Intimidate",
          "Quick Feet",
          "Rattled (HIDDEN)"
        ],
        egg_groups: [
          "Field",
          "Fairy"
        ],
        base_stats: {
          "HP": 90,
          "Attack": 120,
          "Defense": 75,
          "Special Attack": 60,
          "Special Defense": 60,
          "Speed": 45
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/210.png",
        evolution: {
          "prev": [
            "209",
            "Level 23"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 211,
        name: "Qwilfish",
        type: [
          "Water",
          "Poison"
        ],
        height: "0.5 m",
        weight: "3.9 kg",
        ability: [
          "Poison Point",
          "Swift Swim",
          "Intimidate (HIDDEN)"
        ],
        egg_groups: [
          "Water 2"
        ],
        base_stats: {
          "HP": 65,
          "Attack": 95,
          "Defense": 85,
          "Special Attack": 55,
          "Special Defense": 55,
          "Speed": 85
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/211.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 212,
        name: "Scizor",
        type: [
          "Bug",
          "Steel"
        ],
        height: "1.8 m",
        weight: "118 kg",
        ability: [
          "Swarm",
          "Technician",
          "Light Metal (HIDDEN)"
        ],
        egg_groups: [
          "Bug"
        ],
        base_stats: {
          "HP": 70,
          "Attack": 130,
          "Defense": 100,
          "Special Attack": 55,
          "Special Defense": 80,
          "Speed": 65
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/212.png",
        evolution: {
          "prev": [
            "123",
            "trade holding Metal Coat"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 213,
        name: "Shuckle",
        type: [
          "Bug",
          "Rock"
        ],
        height: "0.6 m",
        weight: "20.5 kg",
        ability: [
          "Sturdy",
          "Gluttony",
          "Contrary (HIDDEN)"
        ],
        egg_groups: [
          "Bug"
        ],
        base_stats: {
          "HP": 20,
          "Attack": 10,
          "Defense": 230,
          "Special Attack": 10,
          "Special Defense": 230,
          "Speed": 5
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/213.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 214,
        name: "Heracross",
        type: [
          "Bug",
          "Fighting"
        ],
        height: "1.5 m",
        weight: "54 kg",
        ability: [
          "Swarm",
          "Guts",
          "Moxie (HIDDEN)"
        ],
        egg_groups: [
          "Bug"
        ],
        base_stats: {
          "HP": 80,
          "Attack": 125,
          "Defense": 75,
          "Special Attack": 40,
          "Special Defense": 95,
          "Speed": 85
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/214.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 215,
        name: "Sneasel",
        type: [
          "Dark",
          "Ice"
        ],
        height: "0.9 m",
        weight: "28 kg",
        ability: [
          "Inner Focus",
          "Keen Eye",
          "Pickpocket (HIDDEN)"
        ],
        egg_groups: [
          "Field"
        ],
        base_stats: {
          "HP": 55,
          "Attack": 95,
          "Defense": 55,
          "Special Attack": 35,
          "Special Defense": 75,
          "Speed": 115
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/215.png",
        evolution: {
          "next": [
            [
              "461",
              "hold Razor Claw, Nighttime"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 216,
        name: "Teddiursa",
        type: [
          "Normal"
        ],
        height: "0.6 m",
        weight: "8.8 kg",
        ability: [
          "Pickup",
          "Quick Feet",
          "Honey Gather (HIDDEN)"
        ],
        egg_groups: [
          "Field"
        ],
        base_stats: {
          "HP": 60,
          "Attack": 80,
          "Defense": 50,
          "Special Attack": 50,
          "Special Defense": 50,
          "Speed": 40
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/216.png",
        evolution: {
          "next": [
            [
              "217",
              "Level 30"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 217,
        name: "Ursaring",
        type: [
          "Normal"
        ],
        height: "1.8 m",
        weight: "125.8 kg",
        ability: [
          "Guts",
          "Quick Feet",
          "Unnerve (HIDDEN)"
        ],
        egg_groups: [
          "Field"
        ],
        base_stats: {
          "HP": 90,
          "Attack": 130,
          "Defense": 75,
          "Special Attack": 75,
          "Special Defense": 75,
          "Speed": 55
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/217.png",
        evolution: {
          "prev": [
            "216",
            "Level 30"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 218,
        name: "Slugma",
        type: [
          "Fire"
        ],
        height: "0.7 m",
        weight: "35 kg",
        ability: [
          "Magma Armor",
          "Flame Body",
          "Weak Armor (HIDDEN)"
        ],
        egg_groups: [
          "Amorphous"
        ],
        base_stats: {
          "HP": 40,
          "Attack": 40,
          "Defense": 40,
          "Special Attack": 70,
          "Special Defense": 40,
          "Speed": 20
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/218.png",
        evolution: {
          "next": [
            [
              "219",
              "Level 38"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 219,
        name: "Magcargo",
        type: [
          "Fire",
          "Rock"
        ],
        height: "0.8 m",
        weight: "55 kg",
        ability: [
          "Magma Armor",
          "Flame Body",
          "Weak Armor (HIDDEN)"
        ],
        egg_groups: [
          "Amorphous"
        ],
        base_stats: {
          "HP": 60,
          "Attack": 50,
          "Defense": 120,
          "Special Attack": 90,
          "Special Defense": 80,
          "Speed": 30
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/219.png",
        evolution: {
          "prev": [
            "218",
            "Level 38"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 220,
        name: "Swinub",
        type: [
          "Ice",
          "Ground"
        ],
        height: "0.4 m",
        weight: "6.5 kg",
        ability: [
          "Oblivious",
          "Snow Cloak",
          "Thick Fat (HIDDEN)"
        ],
        egg_groups: [
          "Field"
        ],
        base_stats: {
          "HP": 50,
          "Attack": 50,
          "Defense": 40,
          "Special Attack": 30,
          "Special Defense": 30,
          "Speed": 50
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/220.png",
        evolution: {
          "next": [
            [
              "221",
              "Level 33"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 221,
        name: "Piloswine",
        type: [
          "Ice",
          "Ground"
        ],
        height: "1.1 m",
        weight: "55.8 kg",
        ability: [
          "Oblivious",
          "Snow Cloak",
          "Thick Fat (HIDDEN)"
        ],
        egg_groups: [
          "Field"
        ],
        base_stats: {
          "HP": 100,
          "Attack": 100,
          "Defense": 80,
          "Special Attack": 60,
          "Special Defense": 60,
          "Speed": 50
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/221.png",
        evolution: {
          "prev": [
            "220",
            "Level 33"
          ],
          "next": [
            [
              "473",
              "after Ancient Power learned"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 222,
        name: "Corsola",
        type: [
          "Water",
          "Rock"
        ],
        height: "0.6 m",
        weight: "5 kg",
        ability: [
          "Hustle",
          "Natural Cure",
          "Regenerator (HIDDEN)"
        ],
        egg_groups: [
          "Water 1",
          "Water 3"
        ],
        base_stats: {
          "HP": 65,
          "Attack": 55,
          "Defense": 95,
          "Special Attack": 65,
          "Special Defense": 95,
          "Speed": 35
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/222.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 223,
        name: "Remoraid",
        type: [
          "Water"
        ],
        height: "0.6 m",
        weight: "12 kg",
        ability: [
          "Hustle",
          "Sniper",
          "Moody (HIDDEN)"
        ],
        egg_groups: [
          "Water 1",
          "Water 2"
        ],
        base_stats: {
          "HP": 35,
          "Attack": 65,
          "Defense": 35,
          "Special Attack": 65,
          "Special Defense": 35,
          "Speed": 65
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/223.png",
        evolution: {
          "next": [
            [
              "224",
              "Level 25"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 224,
        name: "Octillery",
        type: [
          "Water"
        ],
        height: "0.9 m",
        weight: "28.5 kg",
        ability: [
          "Suction Cups",
          "Sniper",
          "Moody (HIDDEN)"
        ],
        egg_groups: [
          "Water 1",
          "Water 2"
        ],
        base_stats: {
          "HP": 75,
          "Attack": 105,
          "Defense": 75,
          "Special Attack": 105,
          "Special Defense": 75,
          "Speed": 45
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/224.png",
        evolution: {
          "prev": [
            "223",
            "Level 25"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 225,
        name: "Delibird",
        type: [
          "Ice",
          "Flying"
        ],
        height: "0.9 m",
        weight: "16 kg",
        ability: [
          "Vital Spirit",
          "Hustle",
          "Insomnia (HIDDEN)"
        ],
        egg_groups: [
          "Water 1",
          "Field"
        ],
        base_stats: {
          "HP": 45,
          "Attack": 55,
          "Defense": 45,
          "Special Attack": 65,
          "Special Defense": 45,
          "Speed": 75
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/225.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 226,
        name: "Mantine",
        type: [
          "Water",
          "Flying"
        ],
        height: "2.1 m",
        weight: "220 kg",
        ability: [
          "Swift Swim",
          "Water Absorb",
          "Water Veil (HIDDEN)"
        ],
        egg_groups: [
          "Water 1"
        ],
        base_stats: {
          "HP": 85,
          "Attack": 40,
          "Defense": 70,
          "Special Attack": 80,
          "Special Defense": 140,
          "Speed": 70
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/226.png",
        evolution: {
          "prev": [
            "458",
            "with Remoraid in party"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 227,
        name: "Skarmory",
        type: [
          "Steel",
          "Flying"
        ],
        height: "1.7 m",
        weight: "50.5 kg",
        ability: [
          "Keen Eye",
          "Sturdy",
          "Weak Armor (HIDDEN)"
        ],
        egg_groups: [
          "Flying"
        ],
        base_stats: {
          "HP": 65,
          "Attack": 80,
          "Defense": 140,
          "Special Attack": 40,
          "Special Defense": 70,
          "Speed": 70
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/227.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 228,
        name: "Houndour",
        type: [
          "Dark",
          "Fire"
        ],
        height: "0.6 m",
        weight: "10.8 kg",
        ability: [
          "Early Bird",
          "Flash Fire",
          "Unnerve (HIDDEN)"
        ],
        egg_groups: [
          "Field"
        ],
        base_stats: {
          "HP": 45,
          "Attack": 60,
          "Defense": 30,
          "Special Attack": 80,
          "Special Defense": 50,
          "Speed": 65
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/228.png",
        evolution: {
          "next": [
            [
              "229",
              "Level 24"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 229,
        name: "Houndoom",
        type: [
          "Dark",
          "Fire"
        ],
        height: "1.4 m",
        weight: "35 kg",
        ability: [
          "Early Bird",
          "Flash Fire",
          "Unnerve (HIDDEN)"
        ],
        egg_groups: [
          "Field"
        ],
        base_stats: {
          "HP": 75,
          "Attack": 90,
          "Defense": 50,
          "Special Attack": 110,
          "Special Defense": 80,
          "Speed": 95
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/229.png",
        evolution: {
          "prev": [
            "228",
            "Level 24"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 230,
        name: "Kingdra",
        type: [
          "Water",
          "Dragon"
        ],
        height: "1.8 m",
        weight: "152 kg",
        ability: [
          "Swift Swim",
          "Sniper",
          "Damp (HIDDEN)"
        ],
        egg_groups: [
          "Water 1",
          "Dragon"
        ],
        base_stats: {
          "HP": 75,
          "Attack": 95,
          "Defense": 95,
          "Special Attack": 95,
          "Special Defense": 95,
          "Speed": 85
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/230.png",
        evolution: {
          "prev": [
            "117",
            "trade holding Dragon Scale"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 231,
        name: "Phanpy",
        type: [
          "Ground"
        ],
        height: "0.5 m",
        weight: "33.5 kg",
        ability: [
          "Pickup",
          "Sand Veil (HIDDEN)"
        ],
        egg_groups: [
          "Field"
        ],
        base_stats: {
          "HP": 90,
          "Attack": 60,
          "Defense": 60,
          "Special Attack": 40,
          "Special Defense": 40,
          "Speed": 40
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/231.png",
        evolution: {
          "next": [
            [
              "232",
              "Level 25"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 232,
        name: "Donphan",
        type: [
          "Ground"
        ],
        height: "1.1 m",
        weight: "120 kg",
        ability: [
          "Sturdy",
          "Sand Veil (HIDDEN)"
        ],
        egg_groups: [
          "Field"
        ],
        base_stats: {
          "HP": 90,
          "Attack": 120,
          "Defense": 120,
          "Special Attack": 60,
          "Special Defense": 60,
          "Speed": 50
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/232.png",
        evolution: {
          "prev": [
            "231",
            "Level 25"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 233,
        name: "Porygon2",
        type: [
          "Normal"
        ],
        height: "0.6 m",
        weight: "32.5 kg",
        ability: [
          "Trace",
          "Download",
          "Analytic (HIDDEN)"
        ],
        egg_groups: [
          "Mineral"
        ],
        base_stats: {
          "HP": 85,
          "Attack": 80,
          "Defense": 90,
          "Special Attack": 105,
          "Special Defense": 95,
          "Speed": 60
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/233.png",
        evolution: {
          "prev": [
            "137",
            "trade holding Upgrade"
          ],
          "next": [
            [
              "474",
              "trade holding Dubious Disc"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 234,
        name: "Stantler",
        type: [
          "Normal"
        ],
        height: "1.4 m",
        weight: "71.2 kg",
        ability: [
          "Intimidate",
          "Frisk",
          "Sap Sipper (HIDDEN)"
        ],
        egg_groups: [
          "Field"
        ],
        base_stats: {
          "HP": 73,
          "Attack": 95,
          "Defense": 62,
          "Special Attack": 85,
          "Special Defense": 65,
          "Speed": 85
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/234.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 235,
        name: "Smeargle",
        type: [
          "Normal"
        ],
        height: "1.2 m",
        weight: "58 kg",
        ability: [
          "Own Tempo",
          "Technician",
          "Moody (HIDDEN)"
        ],
        egg_groups: [
          "Field"
        ],
        base_stats: {
          "HP": 55,
          "Attack": 20,
          "Defense": 35,
          "Special Attack": 20,
          "Special Defense": 45,
          "Speed": 75
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/235.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 236,
        name: "Tyrogue",
        type: [
          "Fighting"
        ],
        height: "0.7 m",
        weight: "21 kg",
        ability: [
          "Guts",
          "Steadfast",
          "Vital Spirit (HIDDEN)"
        ],
        egg_groups: [
          "Undiscovered"
        ],
        base_stats: {
          "HP": 35,
          "Attack": 35,
          "Defense": 35,
          "Special Attack": 35,
          "Special Defense": 35,
          "Speed": 35
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/236.png",
        evolution: {
          "next": [
            [
              "106",
              "Level 20, Attack > Defense"
            ],
            [
              "107",
              "Level 20, Attack < Defense"
            ],
            [
              "237",
              "Level 20, Attack = Defense"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 237,
        name: "Hitmontop",
        type: [
          "Fighting"
        ],
        height: "1.4 m",
        weight: "48 kg",
        ability: [
          "Intimidate",
          "Technician",
          "Steadfast (HIDDEN)"
        ],
        egg_groups: [
          "Human-Like"
        ],
        base_stats: {
          "HP": 50,
          "Attack": 95,
          "Defense": 95,
          "Special Attack": 35,
          "Special Defense": 110,
          "Speed": 70
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/237.png",
        evolution: {
          "prev": [
            "236",
            "Level 20, Attack = Defense"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 238,
        name: "Smoochum",
        type: [
          "Ice",
          "Psychic"
        ],
        height: "0.4 m",
        weight: "6 kg",
        ability: [
          "Oblivious",
          "Forewarn",
          "Hydration (HIDDEN)"
        ],
        egg_groups: [
          "Undiscovered"
        ],
        base_stats: {
          "HP": 45,
          "Attack": 30,
          "Defense": 15,
          "Special Attack": 85,
          "Special Defense": 65,
          "Speed": 65
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/238.png",
        evolution: {
          "next": [
            [
              "124",
              "Level 30"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 239,
        name: "Elekid",
        type: [
          "Electric"
        ],
        height: "0.6 m",
        weight: "23.5 kg",
        ability: [
          "Static",
          "Vital Spirit (HIDDEN)"
        ],
        egg_groups: [
          "Undiscovered"
        ],
        base_stats: {
          "HP": 45,
          "Attack": 63,
          "Defense": 37,
          "Special Attack": 65,
          "Special Defense": 55,
          "Speed": 95
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/239.png",
        evolution: {
          "next": [
            [
              "125",
              "Level 30"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 240,
        name: "Magby",
        type: [
          "Fire"
        ],
        height: "0.7 m",
        weight: "21.4 kg",
        ability: [
          "Flame Body",
          "Vital Spirit (HIDDEN)"
        ],
        egg_groups: [
          "Undiscovered"
        ],
        base_stats: {
          "HP": 45,
          "Attack": 75,
          "Defense": 37,
          "Special Attack": 70,
          "Special Defense": 55,
          "Speed": 83
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/240.png",
        evolution: {
          "next": [
            [
              "126",
              "Level 30"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 241,
        name: "Miltank",
        type: [
          "Normal"
        ],
        height: "1.2 m",
        weight: "75.5 kg",
        ability: [
          "Thick Fat",
          "Scrappy",
          "Sap Sipper (HIDDEN)"
        ],
        egg_groups: [
          "Field"
        ],
        base_stats: {
          "HP": 95,
          "Attack": 80,
          "Defense": 105,
          "Special Attack": 40,
          "Special Defense": 70,
          "Speed": 100
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/241.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 242,
        name: "Blissey",
        type: [
          "Normal"
        ],
        height: "1.5 m",
        weight: "46.8 kg",
        ability: [
          "Natural Cure",
          "Serene Grace",
          "Healer (HIDDEN)"
        ],
        egg_groups: [
          "Fairy"
        ],
        base_stats: {
          "HP": 255,
          "Attack": 10,
          "Defense": 10,
          "Special Attack": 75,
          "Special Defense": 135,
          "Speed": 55
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/242.png",
        evolution: {
          "prev": [
            "113",
            "high Friendship"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 243,
        name: "Raikou",
        type: [
          "Electric"
        ],
        height: "1.9 m",
        weight: "178 kg",
        ability: [
          "Pressure",
          "Inner Focus (HIDDEN)"
        ],
        egg_groups: [
          "Undiscovered"
        ],
        base_stats: {
          "HP": 90,
          "Attack": 85,
          "Defense": 75,
          "Special Attack": 115,
          "Special Defense": 100,
          "Speed": 115
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/243.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 244,
        name: "Entei",
        type: [
          "Fire"
        ],
        height: "2.1 m",
        weight: "198 kg",
        ability: [
          "Pressure",
          "Inner Focus (HIDDEN)"
        ],
        egg_groups: [
          "Undiscovered"
        ],
        base_stats: {
          "HP": 115,
          "Attack": 115,
          "Defense": 85,
          "Special Attack": 90,
          "Special Defense": 75,
          "Speed": 100
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/244.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 245,
        name: "Suicune",
        type: [
          "Water"
        ],
        height: "2 m",
        weight: "187 kg",
        ability: [
          "Pressure",
          "Inner Focus (HIDDEN)"
        ],
        egg_groups: [
          "Undiscovered"
        ],
        base_stats: {
          "HP": 100,
          "Attack": 75,
          "Defense": 115,
          "Special Attack": 90,
          "Special Defense": 115,
          "Speed": 85
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/245.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 246,
        name: "Larvitar",
        type: [
          "Rock",
          "Ground"
        ],
        height: "0.6 m",
        weight: "72 kg",
        ability: [
          "Guts",
          "Sand Veil (HIDDEN)"
        ],
        egg_groups: [
          "Monster"
        ],
        base_stats: {
          "HP": 50,
          "Attack": 64,
          "Defense": 50,
          "Special Attack": 45,
          "Special Defense": 50,
          "Speed": 41
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/246.png",
        evolution: {
          "next": [
            [
              "247",
              "Level 30"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 247,
        name: "Pupitar",
        type: [
          "Rock",
          "Ground"
        ],
        height: "1.2 m",
        weight: "152 kg",
        ability: [
          "Shed Skin"
        ],
        egg_groups: [
          "Monster"
        ],
        base_stats: {
          "HP": 70,
          "Attack": 84,
          "Defense": 70,
          "Special Attack": 65,
          "Special Defense": 70,
          "Speed": 51
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/247.png",
        evolution: {
          "prev": [
            "246",
            "Level 30"
          ],
          "next": [
            [
              "248",
              "Level 55"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 248,
        name: "Tyranitar",
        type: [
          "Rock",
          "Dark"
        ],
        height: "2 m",
        weight: "202 kg",
        ability: [
          "Sand Stream",
          "Unnerve (HIDDEN)"
        ],
        egg_groups: [
          "Monster"
        ],
        base_stats: {
          "HP": 100,
          "Attack": 134,
          "Defense": 110,
          "Special Attack": 95,
          "Special Defense": 100,
          "Speed": 61
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/248.png",
        evolution: {
          "prev": [
            "247",
            "Level 55"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 249,
        name: "Lugia",
        type: [
          "Psychic",
          "Flying"
        ],
        height: "5.2 m",
        weight: "216 kg",
        ability: [
          "Pressure",
          "Multiscale (HIDDEN)"
        ],
        egg_groups: [
          "Undiscovered"
        ],
        base_stats: {
          "HP": 106,
          "Attack": 90,
          "Defense": 130,
          "Special Attack": 90,
          "Special Defense": 154,
          "Speed": 110
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/249.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 250,
        name: "Ho-Oh",
        type: [
          "Fire",
          "Flying"
        ],
        height: "3.8 m",
        weight: "199 kg",
        ability: [
          "Pressure",
          "Regenerator (HIDDEN)"
        ],
        egg_groups: [
          "Undiscovered"
        ],
        base_stats: {
          "HP": 106,
          "Attack": 130,
          "Defense": 90,
          "Special Attack": 110,
          "Special Defense": 154,
          "Speed": 90
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/250.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 251,
        name: "Celebi",
        type: [
          "Psychic",
          "Grass"
        ],
        height: "0.6 m",
        weight: "5 kg",
        ability: [
          "Natural Cure"
        ],
        egg_groups: [
          "Undiscovered"
        ],
        base_stats: {
          "HP": 100,
          "Attack": 100,
          "Defense": 100,
          "Special Attack": 100,
          "Special Defense": 100,
          "Speed": 100
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/251.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 252,
        name: "Treecko",
        type: [
          "Grass"
        ],
        height: "0.5 m",
        weight: "5 kg",
        ability: [
          "Overgrow",
          "Unburden (HIDDEN)"
        ],
        egg_groups: [
          "Monster",
          "Dragon"
        ],
        base_stats: {
          "HP": 40,
          "Attack": 45,
          "Defense": 35,
          "Special Attack": 65,
          "Special Defense": 55,
          "Speed": 70
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/252.png",
        evolution: {
          "next": [
            [
              "253",
              "Level 16"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 253,
        name: "Grovyle",
        type: [
          "Grass"
        ],
        height: "0.9 m",
        weight: "21.6 kg",
        ability: [
          "Overgrow",
          "Unburden (HIDDEN)"
        ],
        egg_groups: [
          "Monster",
          "Dragon"
        ],
        base_stats: {
          "HP": 50,
          "Attack": 65,
          "Defense": 45,
          "Special Attack": 85,
          "Special Defense": 65,
          "Speed": 95
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/253.png",
        evolution: {
          "prev": [
            "252",
            "Level 16"
          ],
          "next": [
            [
              "254",
              "Level 36"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 254,
        name: "Sceptile",
        type: [
          "Grass"
        ],
        height: "1.7 m",
        weight: "52.2 kg",
        ability: [
          "Overgrow",
          "Unburden (HIDDEN)"
        ],
        egg_groups: [
          "Monster",
          "Dragon"
        ],
        base_stats: {
          "HP": 70,
          "Attack": 85,
          "Defense": 65,
          "Special Attack": 105,
          "Special Defense": 85,
          "Speed": 120
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/254.png",
        evolution: {
          "prev": [
            "253",
            "Level 36"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 255,
        name: "Torchic",
        type: [
          "Fire"
        ],
        height: "0.4 m",
        weight: "2.5 kg",
        ability: [
          "Blaze",
          "Speed Boost (HIDDEN)"
        ],
        egg_groups: [
          "Field"
        ],
        base_stats: {
          "HP": 45,
          "Attack": 60,
          "Defense": 40,
          "Special Attack": 70,
          "Special Defense": 50,
          "Speed": 45
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/255.png",
        evolution: {
          "next": [
            [
              "256",
              "Level 16"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 256,
        name: "Combusken",
        type: [
          "Fire",
          "Fighting"
        ],
        height: "0.9 m",
        weight: "19.5 kg",
        ability: [
          "Blaze",
          "Speed Boost (HIDDEN)"
        ],
        egg_groups: [
          "Field"
        ],
        base_stats: {
          "HP": 60,
          "Attack": 85,
          "Defense": 60,
          "Special Attack": 85,
          "Special Defense": 60,
          "Speed": 55
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/256.png",
        evolution: {
          "prev": [
            "255",
            "Level 16"
          ],
          "next": [
            [
              "257",
              "Level 36"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 257,
        name: "Blaziken",
        type: [
          "Fire",
          "Fighting"
        ],
        height: "1.9 m",
        weight: "52 kg",
        ability: [
          "Blaze",
          "Speed Boost (HIDDEN)"
        ],
        egg_groups: [
          "Field"
        ],
        base_stats: {
          "HP": 80,
          "Attack": 120,
          "Defense": 70,
          "Special Attack": 110,
          "Special Defense": 70,
          "Speed": 80
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/257.png",
        evolution: {
          "prev": [
            "256",
            "Level 36"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 258,
        name: "Mudkip",
        type: [
          "Water"
        ],
        height: "0.4 m",
        weight: "7.6 kg",
        ability: [
          "Torrent",
          "Damp (HIDDEN)"
        ],
        egg_groups: [
          "Monster",
          "Water 1"
        ],
        base_stats: {
          "HP": 50,
          "Attack": 70,
          "Defense": 50,
          "Special Attack": 50,
          "Special Defense": 50,
          "Speed": 40
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/258.png",
        evolution: {
          "next": [
            [
              "259",
              "Level 16"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 259,
        name: "Marshtomp",
        type: [
          "Water",
          "Ground"
        ],
        height: "0.7 m",
        weight: "28 kg",
        ability: [
          "Torrent",
          "Damp (HIDDEN)"
        ],
        egg_groups: [
          "Monster",
          "Water 1"
        ],
        base_stats: {
          "HP": 70,
          "Attack": 85,
          "Defense": 70,
          "Special Attack": 60,
          "Special Defense": 70,
          "Speed": 50
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/259.png",
        evolution: {
          "prev": [
            "258",
            "Level 16"
          ],
          "next": [
            [
              "260",
              "Level 36"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 260,
        name: "Swampert",
        type: [
          "Water",
          "Ground"
        ],
        height: "1.5 m",
        weight: "81.9 kg",
        ability: [
          "Torrent",
          "Damp (HIDDEN)"
        ],
        egg_groups: [
          "Monster",
          "Water 1"
        ],
        base_stats: {
          "HP": 100,
          "Attack": 110,
          "Defense": 90,
          "Special Attack": 85,
          "Special Defense": 90,
          "Speed": 60
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/260.png",
        evolution: {
          "prev": [
            "259",
            "Level 36"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 261,
        name: "Poochyena",
        type: [
          "Dark"
        ],
        height: "0.5 m",
        weight: "13.6 kg",
        ability: [
          "Run Away",
          "Quick Feet",
          "Rattled (HIDDEN)"
        ],
        egg_groups: [
          "Field"
        ],
        base_stats: {
          "HP": 35,
          "Attack": 55,
          "Defense": 35,
          "Special Attack": 30,
          "Special Defense": 30,
          "Speed": 35
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/261.png",
        evolution: {
          "next": [
            [
              "262",
              "Level 18"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 262,
        name: "Mightyena",
        type: [
          "Dark"
        ],
        height: "1 m",
        weight: "37 kg",
        ability: [
          "Intimidate",
          "Quick Feet",
          "Moxie (HIDDEN)"
        ],
        egg_groups: [
          "Field"
        ],
        base_stats: {
          "HP": 70,
          "Attack": 90,
          "Defense": 70,
          "Special Attack": 60,
          "Special Defense": 60,
          "Speed": 70
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/262.png",
        evolution: {
          "prev": [
            "261",
            "Level 18"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 263,
        name: "Zigzagoon",
        type: [
          "Normal"
        ],
        height: "0.4 m",
        weight: "17.5 kg",
        ability: [
          "Pickup",
          "Gluttony",
          "Quick Feet (HIDDEN)"
        ],
        egg_groups: [
          "Field"
        ],
        base_stats: {
          "HP": 38,
          "Attack": 30,
          "Defense": 41,
          "Special Attack": 30,
          "Special Defense": 41,
          "Speed": 60
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/263.png",
        evolution: {
          "next": [
            [
              "264",
              "Level 20"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 264,
        name: "Linoone",
        type: [
          "Normal"
        ],
        height: "0.5 m",
        weight: "32.5 kg",
        ability: [
          "Pickup",
          "Gluttony",
          "Quick Feet (HIDDEN)"
        ],
        egg_groups: [
          "Field"
        ],
        base_stats: {
          "HP": 78,
          "Attack": 70,
          "Defense": 61,
          "Special Attack": 50,
          "Special Defense": 61,
          "Speed": 100
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/264.png",
        evolution: {
          "prev": [
            "263",
            "Level 20"
          ],
          "next": [
            [
              "862",
              "Level 35, Nighttime"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 265,
        name: "Wurmple",
        type: [
          "Bug"
        ],
        height: "0.3 m",
        weight: "3.6 kg",
        ability: [
          "Shield Dust",
          "Run Away (HIDDEN)"
        ],
        egg_groups: [
          "Bug"
        ],
        base_stats: {
          "HP": 45,
          "Attack": 45,
          "Defense": 35,
          "Special Attack": 20,
          "Special Defense": 30,
          "Speed": 20
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/265.png",
        evolution: {
          "next": [
            [
              "266",
              "Level 7, random based on personality"
            ],
            [
              "268",
              "Level 7, random based on personality"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 266,
        name: "Silcoon",
        type: [
          "Bug"
        ],
        height: "0.6 m",
        weight: "10 kg",
        ability: [
          "Shed Skin"
        ],
        egg_groups: [
          "Bug"
        ],
        base_stats: {
          "HP": 50,
          "Attack": 35,
          "Defense": 55,
          "Special Attack": 25,
          "Special Defense": 25,
          "Speed": 15
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/266.png",
        evolution: {
          "prev": [
            "265",
            "Level 7, random based on personality"
          ],
          "next": [
            [
              "267",
              "Level 10"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 267,
        name: "Beautifly",
        type: [
          "Bug",
          "Flying"
        ],
        height: "1 m",
        weight: "28.4 kg",
        ability: [
          "Swarm",
          "Rivalry (HIDDEN)"
        ],
        egg_groups: [
          "Bug"
        ],
        base_stats: {
          "HP": 60,
          "Attack": 70,
          "Defense": 50,
          "Special Attack": 100,
          "Special Defense": 50,
          "Speed": 65
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/267.png",
        evolution: {
          "prev": [
            "266",
            "Level 10"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 268,
        name: "Cascoon",
        type: [
          "Bug"
        ],
        height: "0.7 m",
        weight: "11.5 kg",
        ability: [
          "Shed Skin"
        ],
        egg_groups: [
          "Bug"
        ],
        base_stats: {
          "HP": 50,
          "Attack": 35,
          "Defense": 55,
          "Special Attack": 25,
          "Special Defense": 25,
          "Speed": 15
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/268.png",
        evolution: {
          "prev": [
            "265",
            "Level 7, random based on personality"
          ],
          "next": [
            [
              "269",
              "Level 10"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 269,
        name: "Dustox",
        type: [
          "Bug",
          "Poison"
        ],
        height: "1.2 m",
        weight: "31.6 kg",
        ability: [
          "Shield Dust",
          "Compound Eyes (HIDDEN)"
        ],
        egg_groups: [
          "Bug"
        ],
        base_stats: {
          "HP": 60,
          "Attack": 50,
          "Defense": 70,
          "Special Attack": 50,
          "Special Defense": 90,
          "Speed": 65
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/269.png",
        evolution: {
          "prev": [
            "265",
            "Level 10"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 270,
        name: "Lotad",
        type: [
          "Water",
          "Grass"
        ],
        height: "0.5 m",
        weight: "2.6 kg",
        ability: [
          "Swift Swim",
          "Rain Dish",
          "Own Tempo (HIDDEN)"
        ],
        egg_groups: [
          "Water 1",
          "Grass"
        ],
        base_stats: {
          "HP": 40,
          "Attack": 30,
          "Defense": 30,
          "Special Attack": 40,
          "Special Defense": 50,
          "Speed": 30
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/270.png",
        evolution: {
          "next": [
            [
              "271",
              "Level 14"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 271,
        name: "Lombre",
        type: [
          "Water",
          "Grass"
        ],
        height: "1.2 m",
        weight: "32.5 kg",
        ability: [
          "Swift Swim",
          "Rain Dish",
          "Own Tempo (HIDDEN)"
        ],
        egg_groups: [
          "Water 1",
          "Grass"
        ],
        base_stats: {
          "HP": 60,
          "Attack": 50,
          "Defense": 50,
          "Special Attack": 60,
          "Special Defense": 70,
          "Speed": 50
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/271.png",
        evolution: {
          "prev": [
            "270",
            "Level 14"
          ],
          "next": [
            [
              "272",
              "use Water Stone"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 272,
        name: "Ludicolo",
        type: [
          "Water",
          "Grass"
        ],
        height: "1.5 m",
        weight: "55 kg",
        ability: [
          "Swift Swim",
          "Rain Dish",
          "Own Tempo (HIDDEN)"
        ],
        egg_groups: [
          "Water 1",
          "Grass"
        ],
        base_stats: {
          "HP": 80,
          "Attack": 70,
          "Defense": 70,
          "Special Attack": 90,
          "Special Defense": 100,
          "Speed": 70
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/272.png",
        evolution: {
          "prev": [
            "271",
            "use Water Stone"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 273,
        name: "Seedot",
        type: [
          "Grass"
        ],
        height: "0.5 m",
        weight: "4 kg",
        ability: [
          "Chlorophyll",
          "Early Bird",
          "Pickpocket (HIDDEN)"
        ],
        egg_groups: [
          "Field",
          "Grass"
        ],
        base_stats: {
          "HP": 40,
          "Attack": 40,
          "Defense": 50,
          "Special Attack": 30,
          "Special Defense": 30,
          "Speed": 30
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/273.png",
        evolution: {
          "next": [
            [
              "274",
              "Level 14"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 274,
        name: "Nuzleaf",
        type: [
          "Grass",
          "Dark"
        ],
        height: "1 m",
        weight: "28 kg",
        ability: [
          "Chlorophyll",
          "Early Bird",
          "Pickpocket (HIDDEN)"
        ],
        egg_groups: [
          "Field",
          "Grass"
        ],
        base_stats: {
          "HP": 70,
          "Attack": 70,
          "Defense": 40,
          "Special Attack": 60,
          "Special Defense": 40,
          "Speed": 60
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/274.png",
        evolution: {
          "prev": [
            "273",
            "Level 14"
          ],
          "next": [
            [
              "275",
              "use Leaf Stone"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 275,
        name: "Shiftry",
        type: [
          "Grass",
          "Dark"
        ],
        height: "1.3 m",
        weight: "59.6 kg",
        ability: [
          "Chlorophyll",
          "Early Bird",
          "Pickpocket (HIDDEN)"
        ],
        egg_groups: [
          "Field",
          "Grass"
        ],
        base_stats: {
          "HP": 90,
          "Attack": 100,
          "Defense": 60,
          "Special Attack": 90,
          "Special Defense": 60,
          "Speed": 80
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/275.png",
        evolution: {
          "prev": [
            "274",
            "use Leaf Stone"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 276,
        name: "Taillow",
        type: [
          "Normal",
          "Flying"
        ],
        height: "0.3 m",
        weight: "2.3 kg",
        ability: [
          "Guts",
          "Scrappy (HIDDEN)"
        ],
        egg_groups: [
          "Flying"
        ],
        base_stats: {
          "HP": 40,
          "Attack": 55,
          "Defense": 30,
          "Special Attack": 30,
          "Special Defense": 30,
          "Speed": 85
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/276.png",
        evolution: {
          "next": [
            [
              "277",
              "Level 22"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 277,
        name: "Swellow",
        type: [
          "Normal",
          "Flying"
        ],
        height: "0.7 m",
        weight: "19.8 kg",
        ability: [
          "Guts",
          "Scrappy (HIDDEN)"
        ],
        egg_groups: [
          "Flying"
        ],
        base_stats: {
          "HP": 60,
          "Attack": 85,
          "Defense": 60,
          "Special Attack": 75,
          "Special Defense": 50,
          "Speed": 125
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/277.png",
        evolution: {
          "prev": [
            "276",
            "Level 22"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 278,
        name: "Wingull",
        type: [
          "Water",
          "Flying"
        ],
        height: "0.6 m",
        weight: "9.5 kg",
        ability: [
          "Keen Eye",
          "Hydration",
          "Rain Dish (HIDDEN)"
        ],
        egg_groups: [
          "Water 1",
          "Flying"
        ],
        base_stats: {
          "HP": 40,
          "Attack": 30,
          "Defense": 30,
          "Special Attack": 55,
          "Special Defense": 30,
          "Speed": 85
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/278.png",
        evolution: {
          "next": [
            [
              "279",
              "Level 25"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 279,
        name: "Pelipper",
        type: [
          "Water",
          "Flying"
        ],
        height: "1.2 m",
        weight: "28 kg",
        ability: [
          "Keen Eye",
          "Drizzle",
          "Rain Dish (HIDDEN)"
        ],
        egg_groups: [
          "Water 1",
          "Flying"
        ],
        base_stats: {
          "HP": 60,
          "Attack": 50,
          "Defense": 100,
          "Special Attack": 95,
          "Special Defense": 70,
          "Speed": 65
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/279.png",
        evolution: {
          "prev": [
            "278",
            "Level 25"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 280,
        name: "Ralts",
        type: [
          "Psychic",
          "Fairy"
        ],
        height: "0.4 m",
        weight: "6.6 kg",
        ability: [
          "Synchronize",
          "Trace",
          "Telepathy (HIDDEN)"
        ],
        egg_groups: [
          "Amorphous"
        ],
        base_stats: {
          "HP": 28,
          "Attack": 25,
          "Defense": 25,
          "Special Attack": 45,
          "Special Defense": 35,
          "Speed": 40
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/280.png",
        evolution: {
          "next": [
            [
              "281",
              "Level 20"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 281,
        name: "Kirlia",
        type: [
          "Psychic",
          "Fairy"
        ],
        height: "0.8 m",
        weight: "20.2 kg",
        ability: [
          "Synchronize",
          "Trace",
          "Telepathy (HIDDEN)"
        ],
        egg_groups: [
          "Amorphous"
        ],
        base_stats: {
          "HP": 38,
          "Attack": 35,
          "Defense": 35,
          "Special Attack": 65,
          "Special Defense": 55,
          "Speed": 50
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/281.png",
        evolution: {
          "prev": [
            "280",
            "Level 20"
          ],
          "next": [
            [
              "282",
              "Level 30"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 282,
        name: "Gardevoir",
        type: [
          "Psychic",
          "Fairy"
        ],
        height: "1.6 m",
        weight: "48.4 kg",
        ability: [
          "Synchronize",
          "Trace",
          "Telepathy (HIDDEN)"
        ],
        egg_groups: [
          "Amorphous"
        ],
        base_stats: {
          "HP": 68,
          "Attack": 65,
          "Defense": 65,
          "Special Attack": 125,
          "Special Defense": 115,
          "Speed": 80
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/282.png",
        evolution: {
          "prev": [
            "281",
            "Level 30"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 283,
        name: "Surskit",
        type: [
          "Bug",
          "Water"
        ],
        height: "0.5 m",
        weight: "1.7 kg",
        ability: [
          "Swift Swim",
          "Rain Dish (HIDDEN)"
        ],
        egg_groups: [
          "Water 1",
          "Bug"
        ],
        base_stats: {
          "HP": 40,
          "Attack": 30,
          "Defense": 32,
          "Special Attack": 50,
          "Special Defense": 52,
          "Speed": 65
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/283.png",
        evolution: {
          "next": [
            [
              "284",
              "Level 22"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 284,
        name: "Masquerain",
        type: [
          "Bug",
          "Flying"
        ],
        height: "0.8 m",
        weight: "3.6 kg",
        ability: [
          "Intimidate",
          "Unnerve (HIDDEN)"
        ],
        egg_groups: [
          "Water 1",
          "Bug"
        ],
        base_stats: {
          "HP": 70,
          "Attack": 60,
          "Defense": 62,
          "Special Attack": 100,
          "Special Defense": 82,
          "Speed": 80
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/284.png",
        evolution: {
          "prev": [
            "283",
            "Level 22"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 285,
        name: "Shroomish",
        type: [
          "Grass"
        ],
        height: "0.4 m",
        weight: "4.5 kg",
        ability: [
          "Effect Spore",
          "Poison Heal",
          "Quick Feet (HIDDEN)"
        ],
        egg_groups: [
          "Fairy",
          "Grass"
        ],
        base_stats: {
          "HP": 60,
          "Attack": 40,
          "Defense": 60,
          "Special Attack": 40,
          "Special Defense": 60,
          "Speed": 35
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/285.png",
        evolution: {
          "next": [
            [
              "286",
              "Level 23"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 286,
        name: "Breloom",
        type: [
          "Grass",
          "Fighting"
        ],
        height: "1.2 m",
        weight: "39.2 kg",
        ability: [
          "Effect Spore",
          "Poison Heal",
          "Technician (HIDDEN)"
        ],
        egg_groups: [
          "Fairy",
          "Grass"
        ],
        base_stats: {
          "HP": 60,
          "Attack": 130,
          "Defense": 80,
          "Special Attack": 60,
          "Special Defense": 60,
          "Speed": 70
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/286.png",
        evolution: {
          "prev": [
            "285",
            "Level 23"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 287,
        name: "Slakoth",
        type: [
          "Normal"
        ],
        height: "0.8 m",
        weight: "24 kg",
        ability: [
          "Truant"
        ],
        egg_groups: [
          "Field"
        ],
        base_stats: {
          "HP": 60,
          "Attack": 60,
          "Defense": 60,
          "Special Attack": 35,
          "Special Defense": 35,
          "Speed": 30
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/287.png",
        evolution: {
          "next": [
            [
              "288",
              "Level 18"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 288,
        name: "Vigoroth",
        type: [
          "Normal"
        ],
        height: "1.4 m",
        weight: "46.5 kg",
        ability: [
          "Vital Spirit"
        ],
        egg_groups: [
          "Field"
        ],
        base_stats: {
          "HP": 80,
          "Attack": 80,
          "Defense": 80,
          "Special Attack": 55,
          "Special Defense": 55,
          "Speed": 90
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/288.png",
        evolution: {
          "prev": [
            "287",
            "Level 18"
          ],
          "next": [
            [
              "289",
              "Level 36"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 289,
        name: "Slaking",
        type: [
          "Normal"
        ],
        height: "2 m",
        weight: "130.5 kg",
        ability: [
          "Truant"
        ],
        egg_groups: [
          "Field"
        ],
        base_stats: {
          "HP": 150,
          "Attack": 160,
          "Defense": 100,
          "Special Attack": 95,
          "Special Defense": 65,
          "Speed": 100
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/289.png",
        evolution: {
          "prev": [
            "288",
            "Level 36"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 290,
        name: "Nincada",
        type: [
          "Bug",
          "Ground"
        ],
        height: "0.5 m",
        weight: "5.5 kg",
        ability: [
          "Compound Eyes",
          "Run Away (HIDDEN)"
        ],
        egg_groups: [
          "Bug"
        ],
        base_stats: {
          "HP": 31,
          "Attack": 45,
          "Defense": 90,
          "Special Attack": 30,
          "Special Defense": 30,
          "Speed": 40
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/290.png",
        evolution: {
          "next": [
            [
              "291",
              "Level 20"
            ],
            [
              "292",
              "Level 20, empty spot in party, Pokéball in bag"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 291,
        name: "Ninjask",
        type: [
          "Bug",
          "Flying"
        ],
        height: "0.8 m",
        weight: "12 kg",
        ability: [
          "Speed Boost",
          "Infiltrator (HIDDEN)"
        ],
        egg_groups: [
          "Bug"
        ],
        base_stats: {
          "HP": 61,
          "Attack": 90,
          "Defense": 45,
          "Special Attack": 50,
          "Special Defense": 50,
          "Speed": 160
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/291.png",
        evolution: {
          "prev": [
            "290",
            "Level 20"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 292,
        name: "Shedinja",
        type: [
          "Bug",
          "Ghost"
        ],
        height: "0.8 m",
        weight: "1.2 kg",
        ability: [
          "Wonder Guard"
        ],
        egg_groups: [
          "Mineral"
        ],
        base_stats: {
          "HP": 1,
          "Attack": 90,
          "Defense": 45,
          "Special Attack": 30,
          "Special Defense": 30,
          "Speed": 40
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/292.png",
        evolution: {
          "prev": [
            "290",
            "Level 20, empty spot in party, Pokéball in bag"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 293,
        name: "Whismur",
        type: [
          "Normal"
        ],
        height: "0.6 m",
        weight: "16.3 kg",
        ability: [
          "Soundproof",
          "Rattled (HIDDEN)"
        ],
        egg_groups: [
          "Monster",
          "Field"
        ],
        base_stats: {
          "HP": 64,
          "Attack": 51,
          "Defense": 23,
          "Special Attack": 51,
          "Special Defense": 23,
          "Speed": 28
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/293.png",
        evolution: {
          "next": [
            [
              "294",
              "Level 20"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 294,
        name: "Loudred",
        type: [
          "Normal"
        ],
        height: "1 m",
        weight: "40.5 kg",
        ability: [
          "Soundproof",
          "Scrappy (HIDDEN)"
        ],
        egg_groups: [
          "Monster",
          "Field"
        ],
        base_stats: {
          "HP": 84,
          "Attack": 71,
          "Defense": 43,
          "Special Attack": 71,
          "Special Defense": 43,
          "Speed": 48
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/294.png",
        evolution: {
          "prev": [
            "293",
            "Level 20"
          ],
          "next": [
            [
              "295",
              "Level 40"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 295,
        name: "Exploud",
        type: [
          "Normal"
        ],
        height: "1.5 m",
        weight: "84 kg",
        ability: [
          "Soundproof",
          "Scrappy (HIDDEN)"
        ],
        egg_groups: [
          "Monster",
          "Field"
        ],
        base_stats: {
          "HP": 104,
          "Attack": 91,
          "Defense": 63,
          "Special Attack": 91,
          "Special Defense": 73,
          "Speed": 68
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/295.png",
        evolution: {
          "prev": [
            "294",
            "Level 40"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 296,
        name: "Makuhita",
        type: [
          "Fighting"
        ],
        height: "1 m",
        weight: "86.4 kg",
        ability: [
          "Thick Fat",
          "Guts",
          "Sheer Force (HIDDEN)"
        ],
        egg_groups: [
          "Human-Like"
        ],
        base_stats: {
          "HP": 72,
          "Attack": 60,
          "Defense": 30,
          "Special Attack": 20,
          "Special Defense": 30,
          "Speed": 25
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/296.png",
        evolution: {
          "next": [
            [
              "297",
              "Level 24"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 297,
        name: "Hariyama",
        type: [
          "Fighting"
        ],
        height: "2.3 m",
        weight: "253.8 kg",
        ability: [
          "Thick Fat",
          "Guts",
          "Sheer Force (HIDDEN)"
        ],
        egg_groups: [
          "Human-Like"
        ],
        base_stats: {
          "HP": 144,
          "Attack": 120,
          "Defense": 60,
          "Special Attack": 40,
          "Special Defense": 60,
          "Speed": 50
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/297.png",
        evolution: {
          "prev": [
            "296",
            "Level 24"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 298,
        name: "Azurill",
        type: [
          "Normal",
          "Fairy"
        ],
        height: "0.2 m",
        weight: "2 kg",
        ability: [
          "Thick Fat",
          "Huge Power",
          "Sap Sipper (HIDDEN)"
        ],
        egg_groups: [
          "Undiscovered"
        ],
        base_stats: {
          "HP": 50,
          "Attack": 20,
          "Defense": 40,
          "Special Attack": 20,
          "Special Defense": 40,
          "Speed": 20
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/298.png",
        evolution: {
          "next": [
            [
              "183",
              "high Friendship"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 299,
        name: "Nosepass",
        type: [
          "Rock"
        ],
        height: "1 m",
        weight: "97 kg",
        ability: [
          "Sturdy",
          "Magnet Pull",
          "Sand Force (HIDDEN)"
        ],
        egg_groups: [
          "Mineral"
        ],
        base_stats: {
          "HP": 30,
          "Attack": 45,
          "Defense": 135,
          "Special Attack": 45,
          "Special Defense": 90,
          "Speed": 30
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/299.png",
        evolution: {
          "next": [
            [
              "476",
              "level up in a Magnetic Field area"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 300,
        name: "Skitty",
        type: [
          "Normal"
        ],
        height: "0.6 m",
        weight: "11 kg",
        ability: [
          "Cute Charm",
          "Normalize",
          "Wonder Skin (HIDDEN)"
        ],
        egg_groups: [
          "Field",
          "Fairy"
        ],
        base_stats: {
          "HP": 50,
          "Attack": 45,
          "Defense": 45,
          "Special Attack": 35,
          "Special Defense": 35,
          "Speed": 50
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/300.png",
        evolution: {
          "next": [
            [
              "301",
              "use Moon Stone"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 301,
        name: "Delcatty",
        type: [
          "Normal"
        ],
        height: "1.1 m",
        weight: "32.6 kg",
        ability: [
          "Cute Charm",
          "Normalize",
          "Wonder Skin (HIDDEN)"
        ],
        egg_groups: [
          "Field",
          "Fairy"
        ],
        base_stats: {
          "HP": 70,
          "Attack": 65,
          "Defense": 65,
          "Special Attack": 55,
          "Special Defense": 55,
          "Speed": 90
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/301.png",
        evolution: {
          "prev": [
            "300",
            "use Moon Stone"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 302,
        name: "Sableye",
        type: [
          "Dark",
          "Ghost"
        ],
        height: "0.5 m",
        weight: "11 kg",
        ability: [
          "Keen Eye",
          "Stall",
          "Prankster (HIDDEN)"
        ],
        egg_groups: [
          "Human-Like"
        ],
        base_stats: {
          "HP": 50,
          "Attack": 75,
          "Defense": 75,
          "Special Attack": 65,
          "Special Defense": 65,
          "Speed": 50
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/302.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 303,
        name: "Mawile",
        type: [
          "Steel",
          "Fairy"
        ],
        height: "0.6 m",
        weight: "11.5 kg",
        ability: [
          "Hyper Cutter",
          "Intimidate",
          "Sheer Force (HIDDEN)"
        ],
        egg_groups: [
          "Field",
          "Fairy"
        ],
        base_stats: {
          "HP": 50,
          "Attack": 85,
          "Defense": 85,
          "Special Attack": 55,
          "Special Defense": 55,
          "Speed": 50
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/303.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 304,
        name: "Aron",
        type: [
          "Steel",
          "Rock"
        ],
        height: "0.4 m",
        weight: "60 kg",
        ability: [
          "Sturdy",
          "Rock Head",
          "Heavy Metal (HIDDEN)"
        ],
        egg_groups: [
          "Monster"
        ],
        base_stats: {
          "HP": 50,
          "Attack": 70,
          "Defense": 100,
          "Special Attack": 40,
          "Special Defense": 40,
          "Speed": 30
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/304.png",
        evolution: {
          "next": [
            [
              "305",
              "Level 32"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 305,
        name: "Lairon",
        type: [
          "Steel",
          "Rock"
        ],
        height: "0.9 m",
        weight: "120 kg",
        ability: [
          "Sturdy",
          "Rock Head",
          "Heavy Metal (HIDDEN)"
        ],
        egg_groups: [
          "Monster"
        ],
        base_stats: {
          "HP": 60,
          "Attack": 90,
          "Defense": 140,
          "Special Attack": 50,
          "Special Defense": 50,
          "Speed": 40
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/305.png",
        evolution: {
          "prev": [
            "304",
            "Level 32"
          ],
          "next": [
            [
              "306",
              "Level 42"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 306,
        name: "Aggron",
        type: [
          "Steel",
          "Rock"
        ],
        height: "2.1 m",
        weight: "360 kg",
        ability: [
          "Sturdy",
          "Rock Head",
          "Heavy Metal (HIDDEN)"
        ],
        egg_groups: [
          "Monster"
        ],
        base_stats: {
          "HP": 70,
          "Attack": 110,
          "Defense": 180,
          "Special Attack": 60,
          "Special Defense": 60,
          "Speed": 50
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/306.png",
        evolution: {
          "prev": [
            "305",
            "Level 42"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 307,
        name: "Meditite",
        type: [
          "Fighting",
          "Psychic"
        ],
        height: "0.6 m",
        weight: "11.2 kg",
        ability: [
          "Pure Power",
          "Telepathy (HIDDEN)"
        ],
        egg_groups: [
          "Human-Like"
        ],
        base_stats: {
          "HP": 30,
          "Attack": 40,
          "Defense": 55,
          "Special Attack": 40,
          "Special Defense": 55,
          "Speed": 60
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/307.png",
        evolution: {
          "next": [
            [
              "308",
              "Level 37"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 308,
        name: "Medicham",
        type: [
          "Fighting",
          "Psychic"
        ],
        height: "1.3 m",
        weight: "31.5 kg",
        ability: [
          "Pure Power",
          "Telepathy (HIDDEN)"
        ],
        egg_groups: [
          "Human-Like"
        ],
        base_stats: {
          "HP": 60,
          "Attack": 60,
          "Defense": 75,
          "Special Attack": 60,
          "Special Defense": 75,
          "Speed": 80
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/308.png",
        evolution: {
          "prev": [
            "307",
            "Level 37"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 309,
        name: "Electrike",
        type: [
          "Electric"
        ],
        height: "0.6 m",
        weight: "15.2 kg",
        ability: [
          "Static",
          "Lightning Rod",
          "Minus (HIDDEN)"
        ],
        egg_groups: [
          "Field"
        ],
        base_stats: {
          "HP": 40,
          "Attack": 45,
          "Defense": 40,
          "Special Attack": 65,
          "Special Defense": 40,
          "Speed": 65
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/309.png",
        evolution: {
          "next": [
            [
              "310",
              "Level 26"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 310,
        name: "Manectric",
        type: [
          "Electric"
        ],
        height: "1.5 m",
        weight: "40.2 kg",
        ability: [
          "Static",
          "Lightning Rod",
          "Minus (HIDDEN)"
        ],
        egg_groups: [
          "Field"
        ],
        base_stats: {
          "HP": 70,
          "Attack": 75,
          "Defense": 60,
          "Special Attack": 105,
          "Special Defense": 60,
          "Speed": 105
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/310.png",
        evolution: {
          "prev": [
            "309",
            "Level 26"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 311,
        name: "Plusle",
        type: [
          "Electric"
        ],
        height: "0.4 m",
        weight: "4.2 kg",
        ability: [
          "Plus",
          "Lightning Rod (HIDDEN)"
        ],
        egg_groups: [
          "Fairy"
        ],
        base_stats: {
          "HP": 60,
          "Attack": 50,
          "Defense": 40,
          "Special Attack": 85,
          "Special Defense": 75,
          "Speed": 95
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/311.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 312,
        name: "Minun",
        type: [
          "Electric"
        ],
        height: "0.4 m",
        weight: "4.2 kg",
        ability: [
          "Minus",
          "Volt Absorb (HIDDEN)"
        ],
        egg_groups: [
          "Fairy"
        ],
        base_stats: {
          "HP": 60,
          "Attack": 40,
          "Defense": 50,
          "Special Attack": 75,
          "Special Defense": 85,
          "Speed": 95
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/312.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 313,
        name: "Volbeat",
        type: [
          "Bug"
        ],
        height: "0.7 m",
        weight: "17.7 kg",
        ability: [
          "Illuminate",
          "Swarm",
          "Prankster (HIDDEN)"
        ],
        egg_groups: [
          "Bug",
          "Human-Like"
        ],
        base_stats: {
          "HP": 65,
          "Attack": 73,
          "Defense": 75,
          "Special Attack": 47,
          "Special Defense": 85,
          "Speed": 85
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/313.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 314,
        name: "Illumise",
        type: [
          "Bug"
        ],
        height: "0.6 m",
        weight: "17.7 kg",
        ability: [
          "Oblivious",
          "Tinted Lens",
          "Prankster (HIDDEN)"
        ],
        egg_groups: [
          "Bug",
          "Human-Like"
        ],
        base_stats: {
          "HP": 65,
          "Attack": 47,
          "Defense": 75,
          "Special Attack": 73,
          "Special Defense": 85,
          "Speed": 85
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/314.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 315,
        name: "Roselia",
        type: [
          "Grass",
          "Poison"
        ],
        height: "0.3 m",
        weight: "2 kg",
        ability: [
          "Natural Cure",
          "Poison Point",
          "Leaf Guard (HIDDEN)"
        ],
        egg_groups: [
          "Fairy",
          "Grass"
        ],
        base_stats: {
          "HP": 50,
          "Attack": 60,
          "Defense": 45,
          "Special Attack": 100,
          "Special Defense": 80,
          "Speed": 65
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/315.png",
        evolution: {
          "prev": [
            "406",
            "high Friendship, Daytime"
          ],
          "next": [
            [
              "407",
              "use Shiny Stone"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 316,
        name: "Gulpin",
        type: [
          "Poison"
        ],
        height: "0.4 m",
        weight: "10.3 kg",
        ability: [
          "Liquid Ooze",
          "Sticky Hold",
          "Gluttony (HIDDEN)"
        ],
        egg_groups: [
          "Amorphous"
        ],
        base_stats: {
          "HP": 70,
          "Attack": 43,
          "Defense": 53,
          "Special Attack": 43,
          "Special Defense": 53,
          "Speed": 40
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/316.png",
        evolution: {
          "next": [
            [
              "317",
              "Level 26"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 317,
        name: "Swalot",
        type: [
          "Poison"
        ],
        height: "1.7 m",
        weight: "80 kg",
        ability: [
          "Liquid Ooze",
          "Sticky Hold",
          "Gluttony (HIDDEN)"
        ],
        egg_groups: [
          "Amorphous"
        ],
        base_stats: {
          "HP": 100,
          "Attack": 73,
          "Defense": 83,
          "Special Attack": 73,
          "Special Defense": 83,
          "Speed": 55
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/317.png",
        evolution: {
          "prev": [
            "316",
            "Level 26"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 318,
        name: "Carvanha",
        type: [
          "Water",
          "Dark"
        ],
        height: "0.8 m",
        weight: "20.8 kg",
        ability: [
          "Rough Skin",
          "Speed Boost (HIDDEN)"
        ],
        egg_groups: [
          "Water 2"
        ],
        base_stats: {
          "HP": 45,
          "Attack": 90,
          "Defense": 20,
          "Special Attack": 65,
          "Special Defense": 20,
          "Speed": 65
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/318.png",
        evolution: {
          "next": [
            [
              "319",
              "Level 30"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 319,
        name: "Sharpedo",
        type: [
          "Water",
          "Dark"
        ],
        height: "1.8 m",
        weight: "88.8 kg",
        ability: [
          "Rough Skin",
          "Speed Boost (HIDDEN)"
        ],
        egg_groups: [
          "Water 2"
        ],
        base_stats: {
          "HP": 70,
          "Attack": 120,
          "Defense": 40,
          "Special Attack": 95,
          "Special Defense": 40,
          "Speed": 95
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/319.png",
        evolution: {
          "prev": [
            "318",
            "Level 30"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 320,
        name: "Wailmer",
        type: [
          "Water"
        ],
        height: "2 m",
        weight: "130 kg",
        ability: [
          "Water Veil",
          "Oblivious",
          "Pressure (HIDDEN)"
        ],
        egg_groups: [
          "Field",
          "Water 2"
        ],
        base_stats: {
          "HP": 130,
          "Attack": 70,
          "Defense": 35,
          "Special Attack": 70,
          "Special Defense": 35,
          "Speed": 60
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/320.png",
        evolution: {
          "next": [
            [
              "321",
              "Level 40"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 321,
        name: "Wailord",
        type: [
          "Water"
        ],
        height: "14.5 m",
        weight: "398 kg",
        ability: [
          "Water Veil",
          "Oblivious",
          "Pressure (HIDDEN)"
        ],
        egg_groups: [
          "Field",
          "Water 2"
        ],
        base_stats: {
          "HP": 170,
          "Attack": 90,
          "Defense": 45,
          "Special Attack": 90,
          "Special Defense": 45,
          "Speed": 60
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/321.png",
        evolution: {
          "prev": [
            "320",
            "Level 40"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 322,
        name: "Numel",
        type: [
          "Fire",
          "Ground"
        ],
        height: "0.7 m",
        weight: "24 kg",
        ability: [
          "Oblivious",
          "Simple",
          "Own Tempo (HIDDEN)"
        ],
        egg_groups: [
          "Field"
        ],
        base_stats: {
          "HP": 60,
          "Attack": 60,
          "Defense": 40,
          "Special Attack": 65,
          "Special Defense": 45,
          "Speed": 35
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/322.png",
        evolution: {
          "next": [
            [
              "323",
              "Level 33"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 323,
        name: "Camerupt",
        type: [
          "Fire",
          "Ground"
        ],
        height: "1.9 m",
        weight: "220 kg",
        ability: [
          "Magma Armor",
          "Solid Rock",
          "Anger Point (HIDDEN)"
        ],
        egg_groups: [
          "Field"
        ],
        base_stats: {
          "HP": 70,
          "Attack": 100,
          "Defense": 70,
          "Special Attack": 105,
          "Special Defense": 75,
          "Speed": 40
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/323.png",
        evolution: {
          "prev": [
            "322",
            "Level 33"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 324,
        name: "Torkoal",
        type: [
          "Fire"
        ],
        height: "0.5 m",
        weight: "80.4 kg",
        ability: [
          "White Smoke",
          "Drought",
          "Shell Armor (HIDDEN)"
        ],
        egg_groups: [
          "Field"
        ],
        base_stats: {
          "HP": 70,
          "Attack": 85,
          "Defense": 140,
          "Special Attack": 85,
          "Special Defense": 70,
          "Speed": 20
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/324.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 325,
        name: "Spoink",
        type: [
          "Psychic"
        ],
        height: "0.7 m",
        weight: "30.6 kg",
        ability: [
          "Thick Fat",
          "Own Tempo",
          "Gluttony (HIDDEN)"
        ],
        egg_groups: [
          "Field"
        ],
        base_stats: {
          "HP": 60,
          "Attack": 25,
          "Defense": 35,
          "Special Attack": 70,
          "Special Defense": 80,
          "Speed": 60
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/325.png",
        evolution: {
          "next": [
            [
              "326",
              "Level 32"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 326,
        name: "Grumpig",
        type: [
          "Psychic"
        ],
        height: "0.9 m",
        weight: "71.5 kg",
        ability: [
          "Thick Fat",
          "Own Tempo",
          "Gluttony (HIDDEN)"
        ],
        egg_groups: [
          "Field"
        ],
        base_stats: {
          "HP": 80,
          "Attack": 45,
          "Defense": 65,
          "Special Attack": 90,
          "Special Defense": 110,
          "Speed": 80
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/326.png",
        evolution: {
          "prev": [
            "325",
            "Level 32"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 327,
        name: "Spinda",
        type: [
          "Normal"
        ],
        height: "1.1 m",
        weight: "5 kg",
        ability: [
          "Own Tempo",
          "Tangled Feet",
          "Contrary (HIDDEN)"
        ],
        egg_groups: [
          "Field",
          "Human-Like"
        ],
        base_stats: {
          "HP": 60,
          "Attack": 60,
          "Defense": 60,
          "Special Attack": 60,
          "Special Defense": 60,
          "Speed": 60
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/327.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 328,
        name: "Trapinch",
        type: [
          "Ground"
        ],
        height: "0.7 m",
        weight: "15 kg",
        ability: [
          "Hyper Cutter",
          "Arena Trap",
          "Sheer Force (HIDDEN)"
        ],
        egg_groups: [
          "Bug"
        ],
        base_stats: {
          "HP": 45,
          "Attack": 100,
          "Defense": 45,
          "Special Attack": 45,
          "Special Defense": 45,
          "Speed": 10
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/328.png",
        evolution: {
          "next": [
            [
              "329",
              "Level 35"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 329,
        name: "Vibrava",
        type: [
          "Ground",
          "Dragon"
        ],
        height: "1.1 m",
        weight: "15.3 kg",
        ability: [
          "Levitate"
        ],
        egg_groups: [
          "Bug"
        ],
        base_stats: {
          "HP": 50,
          "Attack": 70,
          "Defense": 50,
          "Special Attack": 50,
          "Special Defense": 50,
          "Speed": 70
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/329.png",
        evolution: {
          "prev": [
            "328",
            "Level 35"
          ],
          "next": [
            [
              "330",
              "Level 45"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 330,
        name: "Flygon",
        type: [
          "Ground",
          "Dragon"
        ],
        height: "2 m",
        weight: "82 kg",
        ability: [
          "Levitate"
        ],
        egg_groups: [
          "Bug"
        ],
        base_stats: {
          "HP": 80,
          "Attack": 100,
          "Defense": 80,
          "Special Attack": 80,
          "Special Defense": 80,
          "Speed": 100
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/330.png",
        evolution: {
          "prev": [
            "329",
            "Level 45"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 331,
        name: "Cacnea",
        type: [
          "Grass"
        ],
        height: "0.4 m",
        weight: "51.3 kg",
        ability: [
          "Sand Veil",
          "Water Absorb (HIDDEN)"
        ],
        egg_groups: [
          "Grass",
          "Human-Like"
        ],
        base_stats: {
          "HP": 50,
          "Attack": 85,
          "Defense": 40,
          "Special Attack": 85,
          "Special Defense": 40,
          "Speed": 35
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/331.png",
        evolution: {
          "next": [
            [
              "332",
              "Level 32"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 332,
        name: "Cacturne",
        type: [
          "Grass",
          "Dark"
        ],
        height: "1.3 m",
        weight: "77.4 kg",
        ability: [
          "Sand Veil",
          "Water Absorb (HIDDEN)"
        ],
        egg_groups: [
          "Grass",
          "Human-Like"
        ],
        base_stats: {
          "HP": 70,
          "Attack": 115,
          "Defense": 60,
          "Special Attack": 115,
          "Special Defense": 60,
          "Speed": 55
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/332.png",
        evolution: {
          "prev": [
            "331",
            "Level 32"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 333,
        name: "Swablu",
        type: [
          "Normal",
          "Flying"
        ],
        height: "0.4 m",
        weight: "1.2 kg",
        ability: [
          "Natural Cure",
          "Cloud Nine (HIDDEN)"
        ],
        egg_groups: [
          "Flying",
          "Dragon"
        ],
        base_stats: {
          "HP": 45,
          "Attack": 40,
          "Defense": 60,
          "Special Attack": 40,
          "Special Defense": 75,
          "Speed": 50
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/333.png",
        evolution: {
          "next": [
            [
              "334",
              "Level 35"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 334,
        name: "Altaria",
        type: [
          "Dragon",
          "Flying"
        ],
        height: "1.1 m",
        weight: "20.6 kg",
        ability: [
          "Natural Cure",
          "Cloud Nine (HIDDEN)"
        ],
        egg_groups: [
          "Flying",
          "Dragon"
        ],
        base_stats: {
          "HP": 75,
          "Attack": 70,
          "Defense": 90,
          "Special Attack": 70,
          "Special Defense": 105,
          "Speed": 80
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/334.png",
        evolution: {
          "prev": [
            "333",
            "Level 35"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 335,
        name: "Zangoose",
        type: [
          "Normal"
        ],
        height: "1.3 m",
        weight: "40.3 kg",
        ability: [
          "Immunity",
          "Toxic Boost (HIDDEN)"
        ],
        egg_groups: [
          "Field"
        ],
        base_stats: {
          "HP": 73,
          "Attack": 115,
          "Defense": 60,
          "Special Attack": 60,
          "Special Defense": 60,
          "Speed": 90
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/335.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 336,
        name: "Seviper",
        type: [
          "Poison"
        ],
        height: "2.7 m",
        weight: "52.5 kg",
        ability: [
          "Shed Skin",
          "Infiltrator (HIDDEN)"
        ],
        egg_groups: [
          "Field",
          "Dragon"
        ],
        base_stats: {
          "HP": 73,
          "Attack": 100,
          "Defense": 60,
          "Special Attack": 100,
          "Special Defense": 60,
          "Speed": 65
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/336.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 337,
        name: "Lunatone",
        type: [
          "Rock",
          "Psychic"
        ],
        height: "1 m",
        weight: "168 kg",
        ability: [
          "Levitate"
        ],
        egg_groups: [
          "Mineral"
        ],
        base_stats: {
          "HP": 90,
          "Attack": 55,
          "Defense": 65,
          "Special Attack": 95,
          "Special Defense": 85,
          "Speed": 70
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/337.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 338,
        name: "Solrock",
        type: [
          "Rock",
          "Psychic"
        ],
        height: "1.2 m",
        weight: "154 kg",
        ability: [
          "Levitate"
        ],
        egg_groups: [
          "Mineral"
        ],
        base_stats: {
          "HP": 90,
          "Attack": 95,
          "Defense": 85,
          "Special Attack": 55,
          "Special Defense": 65,
          "Speed": 70
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/338.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 339,
        name: "Barboach",
        type: [
          "Water",
          "Ground"
        ],
        height: "0.4 m",
        weight: "1.9 kg",
        ability: [
          "Oblivious",
          "Anticipation",
          "Hydration (HIDDEN)"
        ],
        egg_groups: [
          "Water 2"
        ],
        base_stats: {
          "HP": 50,
          "Attack": 48,
          "Defense": 43,
          "Special Attack": 46,
          "Special Defense": 41,
          "Speed": 60
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/339.png",
        evolution: {
          "next": [
            [
              "340",
              "Level 30"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 340,
        name: "Whiscash",
        type: [
          "Water",
          "Ground"
        ],
        height: "0.9 m",
        weight: "23.6 kg",
        ability: [
          "Oblivious",
          "Anticipation",
          "Hydration (HIDDEN)"
        ],
        egg_groups: [
          "Water 2"
        ],
        base_stats: {
          "HP": 110,
          "Attack": 78,
          "Defense": 73,
          "Special Attack": 76,
          "Special Defense": 71,
          "Speed": 60
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/340.png",
        evolution: {
          "prev": [
            "339",
            "Level 30"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 341,
        name: "Corphish",
        type: [
          "Water"
        ],
        height: "0.6 m",
        weight: "11.5 kg",
        ability: [
          "Hyper Cutter",
          "Shell Armor",
          "Adaptability (HIDDEN)"
        ],
        egg_groups: [
          "Water 1",
          "Water 3"
        ],
        base_stats: {
          "HP": 43,
          "Attack": 80,
          "Defense": 65,
          "Special Attack": 50,
          "Special Defense": 35,
          "Speed": 35
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/341.png",
        evolution: {
          "next": [
            [
              "342",
              "Level 30"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 342,
        name: "Crawdaunt",
        type: [
          "Water",
          "Dark"
        ],
        height: "1.1 m",
        weight: "32.8 kg",
        ability: [
          "Hyper Cutter",
          "Shell Armor",
          "Adaptability (HIDDEN)"
        ],
        egg_groups: [
          "Water 1",
          "Water 3"
        ],
        base_stats: {
          "HP": 63,
          "Attack": 120,
          "Defense": 85,
          "Special Attack": 90,
          "Special Defense": 55,
          "Speed": 55
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/342.png",
        evolution: {
          "prev": [
            "341",
            "Level 30"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 343,
        name: "Baltoy",
        type: [
          "Ground",
          "Psychic"
        ],
        height: "0.5 m",
        weight: "21.5 kg",
        ability: [
          "Levitate"
        ],
        egg_groups: [
          "Mineral"
        ],
        base_stats: {
          "HP": 40,
          "Attack": 40,
          "Defense": 55,
          "Special Attack": 40,
          "Special Defense": 70,
          "Speed": 55
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/343.png",
        evolution: {
          "next": [
            [
              "344",
              "Level 36"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 344,
        name: "Claydol",
        type: [
          "Ground",
          "Psychic"
        ],
        height: "1.5 m",
        weight: "108 kg",
        ability: [
          "Levitate"
        ],
        egg_groups: [
          "Mineral"
        ],
        base_stats: {
          "HP": 60,
          "Attack": 70,
          "Defense": 105,
          "Special Attack": 70,
          "Special Defense": 120,
          "Speed": 75
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/344.png",
        evolution: {
          "prev": [
            "343",
            "Level 36"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 345,
        name: "Lileep",
        type: [
          "Rock",
          "Grass"
        ],
        height: "1 m",
        weight: "23.8 kg",
        ability: [
          "Suction Cups",
          "Storm Drain (HIDDEN)"
        ],
        egg_groups: [
          "Water 3"
        ],
        base_stats: {
          "HP": 66,
          "Attack": 41,
          "Defense": 77,
          "Special Attack": 61,
          "Special Defense": 87,
          "Speed": 23
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/345.png",
        evolution: {
          "next": [
            [
              "346",
              "Level 40"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 346,
        name: "Cradily",
        type: [
          "Rock",
          "Grass"
        ],
        height: "1.5 m",
        weight: "60.4 kg",
        ability: [
          "Suction Cups",
          "Storm Drain (HIDDEN)"
        ],
        egg_groups: [
          "Water 3"
        ],
        base_stats: {
          "HP": 86,
          "Attack": 81,
          "Defense": 97,
          "Special Attack": 81,
          "Special Defense": 107,
          "Speed": 43
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/346.png",
        evolution: {
          "prev": [
            "345",
            "Level 40"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 347,
        name: "Anorith",
        type: [
          "Rock",
          "Bug"
        ],
        height: "0.7 m",
        weight: "12.5 kg",
        ability: [
          "Battle Armor",
          "Swift Swim (HIDDEN)"
        ],
        egg_groups: [
          "Water 3"
        ],
        base_stats: {
          "HP": 45,
          "Attack": 95,
          "Defense": 50,
          "Special Attack": 40,
          "Special Defense": 50,
          "Speed": 75
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/347.png",
        evolution: {
          "next": [
            [
              "348",
              "Level 40"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 348,
        name: "Armaldo",
        type: [
          "Rock",
          "Bug"
        ],
        height: "1.5 m",
        weight: "68.2 kg",
        ability: [
          "Battle Armor",
          "Swift Swim (HIDDEN)"
        ],
        egg_groups: [
          "Water 3"
        ],
        base_stats: {
          "HP": 75,
          "Attack": 125,
          "Defense": 100,
          "Special Attack": 70,
          "Special Defense": 80,
          "Speed": 45
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/348.png",
        evolution: {
          "prev": [
            "347",
            "Level 40"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 349,
        name: "Feebas",
        type: [
          "Water"
        ],
        height: "0.6 m",
        weight: "7.4 kg",
        ability: [
          "Swift Swim",
          "Oblivious",
          "Adaptability (HIDDEN)"
        ],
        egg_groups: [
          "Water 1",
          "Dragon"
        ],
        base_stats: {
          "HP": 20,
          "Attack": 15,
          "Defense": 20,
          "Special Attack": 10,
          "Special Defense": 55,
          "Speed": 80
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/349.png",
        evolution: {
          "next": [
            [
              "350",
              "trade holding Prism Scale, or level up with max Beauty"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 350,
        name: "Milotic",
        type: [
          "Water"
        ],
        height: "6.2 m",
        weight: "162 kg",
        ability: [
          "Marvel Scale",
          "Competitive",
          "Cute Charm (HIDDEN)"
        ],
        egg_groups: [
          "Water 1",
          "Dragon"
        ],
        base_stats: {
          "HP": 95,
          "Attack": 60,
          "Defense": 79,
          "Special Attack": 100,
          "Special Defense": 125,
          "Speed": 81
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/350.png",
        evolution: {
          "prev": [
            "349",
            "trade holding Prism Scale, or level up with max Beauty"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 351,
        name: "Castform",
        type: [
          "Normal"
        ],
        height: "0.3 m",
        weight: "0.8 kg",
        ability: [
          "Forecast"
        ],
        egg_groups: [
          "Fairy",
          "Amorphous"
        ],
        base_stats: {
          "HP": 70,
          "Attack": 70,
          "Defense": 70,
          "Special Attack": 70,
          "Special Defense": 70,
          "Speed": 70
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/351.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 352,
        name: "Kecleon",
        type: [
          "Normal"
        ],
        height: "1 m",
        weight: "22 kg",
        ability: [
          "Color Change",
          "Protean (HIDDEN)"
        ],
        egg_groups: [
          "Field"
        ],
        base_stats: {
          "HP": 60,
          "Attack": 90,
          "Defense": 70,
          "Special Attack": 60,
          "Special Defense": 120,
          "Speed": 40
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/352.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 353,
        name: "Shuppet",
        type: [
          "Ghost"
        ],
        height: "0.6 m",
        weight: "2.3 kg",
        ability: [
          "Insomnia",
          "Frisk",
          "Cursed Body (HIDDEN)"
        ],
        egg_groups: [
          "Amorphous"
        ],
        base_stats: {
          "HP": 44,
          "Attack": 75,
          "Defense": 35,
          "Special Attack": 63,
          "Special Defense": 33,
          "Speed": 45
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/353.png",
        evolution: {
          "next": [
            [
              "354",
              "Level 37"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 354,
        name: "Banette",
        type: [
          "Ghost"
        ],
        height: "1.1 m",
        weight: "12.5 kg",
        ability: [
          "Insomnia",
          "Frisk",
          "Cursed Body (HIDDEN)"
        ],
        egg_groups: [
          "Amorphous"
        ],
        base_stats: {
          "HP": 64,
          "Attack": 115,
          "Defense": 65,
          "Special Attack": 83,
          "Special Defense": 63,
          "Speed": 65
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/354.png",
        evolution: {
          "prev": [
            "353",
            "Level 37"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 355,
        name: "Duskull",
        type: [
          "Ghost"
        ],
        height: "0.8 m",
        weight: "15 kg",
        ability: [
          "Levitate",
          "Frisk (HIDDEN)"
        ],
        egg_groups: [
          "Amorphous"
        ],
        base_stats: {
          "HP": 20,
          "Attack": 40,
          "Defense": 90,
          "Special Attack": 30,
          "Special Defense": 90,
          "Speed": 25
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/355.png",
        evolution: {
          "next": [
            [
              "356",
              "Level 37"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 356,
        name: "Dusclops",
        type: [
          "Ghost"
        ],
        height: "1.6 m",
        weight: "30.6 kg",
        ability: [
          "Pressure",
          "Frisk (HIDDEN)"
        ],
        egg_groups: [
          "Amorphous"
        ],
        base_stats: {
          "HP": 40,
          "Attack": 70,
          "Defense": 130,
          "Special Attack": 60,
          "Special Defense": 130,
          "Speed": 25
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/356.png",
        evolution: {
          "prev": [
            "355",
            "Level 37"
          ],
          "next": [
            [
              "477",
              "trade holding Reaper Cloth"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 357,
        name: "Tropius",
        type: [
          "Grass",
          "Flying"
        ],
        height: "2 m",
        weight: "100 kg",
        ability: [
          "Chlorophyll",
          "Solar Power",
          "Harvest (HIDDEN)"
        ],
        egg_groups: [
          "Monster",
          "Grass"
        ],
        base_stats: {
          "HP": 99,
          "Attack": 68,
          "Defense": 83,
          "Special Attack": 72,
          "Special Defense": 87,
          "Speed": 51
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/357.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 358,
        name: "Chimecho",
        type: [
          "Psychic"
        ],
        height: "0.6 m",
        weight: "1 kg",
        ability: [
          "Levitate"
        ],
        egg_groups: [
          "Amorphous"
        ],
        base_stats: {
          "HP": 75,
          "Attack": 50,
          "Defense": 80,
          "Special Attack": 95,
          "Special Defense": 90,
          "Speed": 65
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/358.png",
        evolution: {
          "prev": [
            "433",
            "high Friendship, Nighttime"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 359,
        name: "Absol",
        type: [
          "Dark"
        ],
        height: "1.2 m",
        weight: "47 kg",
        ability: [
          "Pressure",
          "Super Luck",
          "Justified (HIDDEN)"
        ],
        egg_groups: [
          "Field"
        ],
        base_stats: {
          "HP": 65,
          "Attack": 130,
          "Defense": 60,
          "Special Attack": 75,
          "Special Defense": 60,
          "Speed": 75
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/359.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 360,
        name: "Wynaut",
        type: [
          "Psychic"
        ],
        height: "0.6 m",
        weight: "14 kg",
        ability: [
          "Shadow Tag",
          "Telepathy (HIDDEN)"
        ],
        egg_groups: [
          "Undiscovered"
        ],
        base_stats: {
          "HP": 95,
          "Attack": 23,
          "Defense": 48,
          "Special Attack": 23,
          "Special Defense": 48,
          "Speed": 23
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/360.png",
        evolution: {
          "next": [
            [
              "202",
              "Level 15"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 361,
        name: "Snorunt",
        type: [
          "Ice"
        ],
        height: "0.7 m",
        weight: "16.8 kg",
        ability: [
          "Inner Focus",
          "Ice Body",
          "Moody (HIDDEN)"
        ],
        egg_groups: [
          "Fairy",
          "Mineral"
        ],
        base_stats: {
          "HP": 50,
          "Attack": 50,
          "Defense": 50,
          "Special Attack": 50,
          "Special Defense": 50,
          "Speed": 50
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/361.png",
        evolution: {
          "next": [
            [
              "362",
              "Level 42"
            ],
            [
              "478",
              "use Dawn Stone, Female"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 362,
        name: "Glalie",
        type: [
          "Ice"
        ],
        height: "1.5 m",
        weight: "256.5 kg",
        ability: [
          "Inner Focus",
          "Ice Body",
          "Moody (HIDDEN)"
        ],
        egg_groups: [
          "Fairy",
          "Mineral"
        ],
        base_stats: {
          "HP": 80,
          "Attack": 80,
          "Defense": 80,
          "Special Attack": 80,
          "Special Defense": 80,
          "Speed": 80
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/362.png",
        evolution: {
          "prev": [
            "361",
            "Level 42"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 363,
        name: "Spheal",
        type: [
          "Ice",
          "Water"
        ],
        height: "0.8 m",
        weight: "39.5 kg",
        ability: [
          "Thick Fat",
          "Ice Body",
          "Oblivious (HIDDEN)"
        ],
        egg_groups: [
          "Water 1",
          "Field"
        ],
        base_stats: {
          "HP": 70,
          "Attack": 40,
          "Defense": 50,
          "Special Attack": 55,
          "Special Defense": 50,
          "Speed": 25
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/363.png",
        evolution: {
          "next": [
            [
              "364",
              "Level 32"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 364,
        name: "Sealeo",
        type: [
          "Ice",
          "Water"
        ],
        height: "1.1 m",
        weight: "87.6 kg",
        ability: [
          "Thick Fat",
          "Ice Body",
          "Oblivious (HIDDEN)"
        ],
        egg_groups: [
          "Water 1",
          "Field"
        ],
        base_stats: {
          "HP": 90,
          "Attack": 60,
          "Defense": 70,
          "Special Attack": 75,
          "Special Defense": 70,
          "Speed": 45
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/364.png",
        evolution: {
          "prev": [
            "363",
            "Level 32"
          ],
          "next": [
            [
              "365",
              "Level 44"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 365,
        name: "Walrein",
        type: [
          "Ice",
          "Water"
        ],
        height: "1.4 m",
        weight: "150.6 kg",
        ability: [
          "Thick Fat",
          "Ice Body",
          "Oblivious (HIDDEN)"
        ],
        egg_groups: [
          "Water 1",
          "Field"
        ],
        base_stats: {
          "HP": 110,
          "Attack": 80,
          "Defense": 90,
          "Special Attack": 95,
          "Special Defense": 90,
          "Speed": 65
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/365.png",
        evolution: {
          "prev": [
            "364",
            "Level 44"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 366,
        name: "Clamperl",
        type: [
          "Water"
        ],
        height: "0.4 m",
        weight: "52.5 kg",
        ability: [
          "Shell Armor",
          "Rattled (HIDDEN)"
        ],
        egg_groups: [
          "Water 1"
        ],
        base_stats: {
          "HP": 35,
          "Attack": 64,
          "Defense": 85,
          "Special Attack": 74,
          "Special Defense": 55,
          "Speed": 32
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/366.png",
        evolution: {
          "next": [
            [
              "367",
              "trade holding Deep Sea Tooth"
            ],
            [
              "368",
              "trade holding Deep Sea Scale"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 367,
        name: "Huntail",
        type: [
          "Water"
        ],
        height: "1.7 m",
        weight: "27 kg",
        ability: [
          "Swift Swim",
          "Water Veil (HIDDEN)"
        ],
        egg_groups: [
          "Water 1"
        ],
        base_stats: {
          "HP": 55,
          "Attack": 104,
          "Defense": 105,
          "Special Attack": 94,
          "Special Defense": 75,
          "Speed": 52
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/367.png",
        evolution: {
          "prev": [
            "366",
            "trade holding Deep Sea Tooth"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 368,
        name: "Gorebyss",
        type: [
          "Water"
        ],
        height: "1.8 m",
        weight: "22.6 kg",
        ability: [
          "Swift Swim",
          "Hydration (HIDDEN)"
        ],
        egg_groups: [
          "Water 1"
        ],
        base_stats: {
          "HP": 55,
          "Attack": 84,
          "Defense": 105,
          "Special Attack": 114,
          "Special Defense": 75,
          "Speed": 52
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/368.png",
        evolution: {
          "prev": [
            "366",
            "trade holding Deep Sea Scale"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 369,
        name: "Relicanth",
        type: [
          "Water",
          "Rock"
        ],
        height: "1 m",
        weight: "23.4 kg",
        ability: [
          "Swift Swim",
          "Rock Head",
          "Sturdy (HIDDEN)"
        ],
        egg_groups: [
          "Water 1",
          "Water 2"
        ],
        base_stats: {
          "HP": 100,
          "Attack": 90,
          "Defense": 130,
          "Special Attack": 45,
          "Special Defense": 65,
          "Speed": 55
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/369.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 370,
        name: "Luvdisc",
        type: [
          "Water"
        ],
        height: "0.6 m",
        weight: "8.7 kg",
        ability: [
          "Swift Swim",
          "Hydration (HIDDEN)"
        ],
        egg_groups: [
          "Water 2"
        ],
        base_stats: {
          "HP": 43,
          "Attack": 30,
          "Defense": 55,
          "Special Attack": 40,
          "Special Defense": 65,
          "Speed": 97
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/370.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 371,
        name: "Bagon",
        type: [
          "Dragon"
        ],
        height: "0.6 m",
        weight: "42.1 kg",
        ability: [
          "Rock Head",
          "Sheer Force (HIDDEN)"
        ],
        egg_groups: [
          "Dragon"
        ],
        base_stats: {
          "HP": 45,
          "Attack": 75,
          "Defense": 60,
          "Special Attack": 40,
          "Special Defense": 30,
          "Speed": 50
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/371.png",
        evolution: {
          "next": [
            [
              "372",
              "Level 30"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 372,
        name: "Shelgon",
        type: [
          "Dragon"
        ],
        height: "1.1 m",
        weight: "110.5 kg",
        ability: [
          "Rock Head",
          "Overcoat (HIDDEN)"
        ],
        egg_groups: [
          "Dragon"
        ],
        base_stats: {
          "HP": 65,
          "Attack": 95,
          "Defense": 100,
          "Special Attack": 60,
          "Special Defense": 50,
          "Speed": 50
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/372.png",
        evolution: {
          "prev": [
            "371",
            "Level 30"
          ],
          "next": [
            [
              "373",
              "Level 50"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 373,
        name: "Salamence",
        type: [
          "Dragon",
          "Flying"
        ],
        height: "1.5 m",
        weight: "102.6 kg",
        ability: [
          "Intimidate",
          "Moxie (HIDDEN)"
        ],
        egg_groups: [
          "Dragon"
        ],
        base_stats: {
          "HP": 95,
          "Attack": 135,
          "Defense": 80,
          "Special Attack": 110,
          "Special Defense": 80,
          "Speed": 100
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/373.png",
        evolution: {
          "prev": [
            "372",
            "Level 50"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 374,
        name: "Beldum",
        type: [
          "Steel",
          "Psychic"
        ],
        height: "0.6 m",
        weight: "95.2 kg",
        ability: [
          "Clear Body",
          "Light Metal (HIDDEN)"
        ],
        egg_groups: [
          "Mineral"
        ],
        base_stats: {
          "HP": 40,
          "Attack": 55,
          "Defense": 80,
          "Special Attack": 35,
          "Special Defense": 60,
          "Speed": 30
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/374.png",
        evolution: {
          "next": [
            [
              "375",
              "Level 20"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 375,
        name: "Metang",
        type: [
          "Steel",
          "Psychic"
        ],
        height: "1.2 m",
        weight: "202.5 kg",
        ability: [
          "Clear Body",
          "Light Metal (HIDDEN)"
        ],
        egg_groups: [
          "Mineral"
        ],
        base_stats: {
          "HP": 60,
          "Attack": 75,
          "Defense": 100,
          "Special Attack": 55,
          "Special Defense": 80,
          "Speed": 50
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/375.png",
        evolution: {
          "prev": [
            "374",
            "Level 20"
          ],
          "next": [
            [
              "376",
              "Level 45"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 376,
        name: "Metagross",
        type: [
          "Steel",
          "Psychic"
        ],
        height: "1.6 m",
        weight: "550 kg",
        ability: [
          "Clear Body",
          "Light Metal (HIDDEN)"
        ],
        egg_groups: [
          "Mineral"
        ],
        base_stats: {
          "HP": 80,
          "Attack": 135,
          "Defense": 130,
          "Special Attack": 95,
          "Special Defense": 90,
          "Speed": 70
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/376.png",
        evolution: {
          "prev": [
            "375",
            "Level 45"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 377,
        name: "Regirock",
        type: [
          "Rock"
        ],
        height: "1.7 m",
        weight: "230 kg",
        ability: [
          "Clear Body",
          "Sturdy (HIDDEN)"
        ],
        egg_groups: [
          "Undiscovered"
        ],
        base_stats: {
          "HP": 80,
          "Attack": 100,
          "Defense": 200,
          "Special Attack": 50,
          "Special Defense": 100,
          "Speed": 50
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/377.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 378,
        name: "Regice",
        type: [
          "Ice"
        ],
        height: "1.8 m",
        weight: "175 kg",
        ability: [
          "Clear Body",
          "Ice Body (HIDDEN)"
        ],
        egg_groups: [
          "Undiscovered"
        ],
        base_stats: {
          "HP": 80,
          "Attack": 50,
          "Defense": 100,
          "Special Attack": 100,
          "Special Defense": 200,
          "Speed": 50
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/378.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 379,
        name: "Registeel",
        type: [
          "Steel"
        ],
        height: "1.9 m",
        weight: "205 kg",
        ability: [
          "Clear Body",
          "Light Metal (HIDDEN)"
        ],
        egg_groups: [
          "Undiscovered"
        ],
        base_stats: {
          "HP": 80,
          "Attack": 75,
          "Defense": 150,
          "Special Attack": 75,
          "Special Defense": 150,
          "Speed": 50
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/379.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 380,
        name: "Latias",
        type: [
          "Dragon",
          "Psychic"
        ],
        height: "1.4 m",
        weight: "40 kg",
        ability: [
          "Levitate"
        ],
        egg_groups: [
          "Undiscovered"
        ],
        base_stats: {
          "HP": 80,
          "Attack": 80,
          "Defense": 90,
          "Special Attack": 110,
          "Special Defense": 130,
          "Speed": 110
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/380.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 381,
        name: "Latios",
        type: [
          "Dragon",
          "Psychic"
        ],
        height: "2 m",
        weight: "60 kg",
        ability: [
          "Levitate"
        ],
        egg_groups: [
          "Undiscovered"
        ],
        base_stats: {
          "HP": 80,
          "Attack": 90,
          "Defense": 80,
          "Special Attack": 130,
          "Special Defense": 110,
          "Speed": 110
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/381.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 382,
        name: "Kyogre",
        type: [
          "Water"
        ],
        height: "4.5 m",
        weight: "352 kg",
        ability: [
          "Drizzle"
        ],
        egg_groups: [
          "Undiscovered"
        ],
        base_stats: {
          "HP": 100,
          "Attack": 100,
          "Defense": 90,
          "Special Attack": 150,
          "Special Defense": 140,
          "Speed": 90
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/382.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 383,
        name: "Groudon",
        type: [
          "Ground"
        ],
        height: "3.5 m",
        weight: "950 kg",
        ability: [
          "Drought"
        ],
        egg_groups: [
          "Undiscovered"
        ],
        base_stats: {
          "HP": 100,
          "Attack": 150,
          "Defense": 140,
          "Special Attack": 100,
          "Special Defense": 90,
          "Speed": 90
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/383.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 384,
        name: "Rayquaza",
        type: [
          "Dragon",
          "Flying"
        ],
        height: "7 m",
        weight: "206.5 kg",
        ability: [
          "Air Lock"
        ],
        egg_groups: [
          "Undiscovered"
        ],
        base_stats: {
          "HP": 105,
          "Attack": 150,
          "Defense": 90,
          "Special Attack": 150,
          "Special Defense": 90,
          "Speed": 95
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/384.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 385,
        name: "Jirachi",
        type: [
          "Steel",
          "Psychic"
        ],
        height: "0.3 m",
        weight: "1.1 kg",
        ability: [
          "Serene Grace"
        ],
        egg_groups: [
          "Undiscovered"
        ],
        base_stats: {
          "HP": 100,
          "Attack": 100,
          "Defense": 100,
          "Special Attack": 100,
          "Special Defense": 100,
          "Speed": 100
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/385.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 386,
        name: "Deoxys",
        type: [
          "Psychic"
        ],
        height: "1.7 m",
        weight: "60.8 kg",
        ability: [
          "Pressure"
        ],
        egg_groups: [
          "Undiscovered"
        ],
        base_stats: {
          "HP": 50,
          "Attack": 150,
          "Defense": 50,
          "Special Attack": 150,
          "Special Defense": 50,
          "Speed": 150
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/386.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 387,
        name: "Turtwig",
        type: [
          "Grass"
        ],
        height: "0.4 m",
        weight: "10.2 kg",
        ability: [
          "Overgrow",
          "Shell Armor (HIDDEN)"
        ],
        egg_groups: [
          "Monster",
          "Grass"
        ],
        base_stats: {
          "HP": 55,
          "Attack": 68,
          "Defense": 64,
          "Special Attack": 45,
          "Special Defense": 55,
          "Speed": 31
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/387.png",
        evolution: {
          "next": [
            [
              "388",
              "Level 18"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 388,
        name: "Grotle",
        type: [
          "Grass"
        ],
        height: "1.1 m",
        weight: "97 kg",
        ability: [
          "Overgrow",
          "Shell Armor (HIDDEN)"
        ],
        egg_groups: [
          "Monster",
          "Grass"
        ],
        base_stats: {
          "HP": 75,
          "Attack": 89,
          "Defense": 85,
          "Special Attack": 55,
          "Special Defense": 65,
          "Speed": 36
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/388.png",
        evolution: {
          "prev": [
            "387",
            "Level 18"
          ],
          "next": [
            [
              "389",
              "Level 32"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 389,
        name: "Torterra",
        type: [
          "Grass",
          "Ground"
        ],
        height: "2.2 m",
        weight: "310 kg",
        ability: [
          "Overgrow",
          "Shell Armor (HIDDEN)"
        ],
        egg_groups: [
          "Monster",
          "Grass"
        ],
        base_stats: {
          "HP": 95,
          "Attack": 109,
          "Defense": 105,
          "Special Attack": 75,
          "Special Defense": 85,
          "Speed": 56
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/389.png",
        evolution: {
          "prev": [
            "388",
            "Level 32"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 390,
        name: "Chimchar",
        type: [
          "Fire"
        ],
        height: "0.5 m",
        weight: "6.2 kg",
        ability: [
          "Blaze",
          "Iron Fist (HIDDEN)"
        ],
        egg_groups: [
          "Field",
          "Human-Like"
        ],
        base_stats: {
          "HP": 44,
          "Attack": 58,
          "Defense": 44,
          "Special Attack": 58,
          "Special Defense": 44,
          "Speed": 61
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/390.png",
        evolution: {
          "next": [
            [
              "391",
              "Level 14"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 391,
        name: "Monferno",
        type: [
          "Fire",
          "Fighting"
        ],
        height: "0.9 m",
        weight: "22 kg",
        ability: [
          "Blaze",
          "Iron Fist (HIDDEN)"
        ],
        egg_groups: [
          "Field",
          "Human-Like"
        ],
        base_stats: {
          "HP": 64,
          "Attack": 78,
          "Defense": 52,
          "Special Attack": 78,
          "Special Defense": 52,
          "Speed": 81
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/391.png",
        evolution: {
          "prev": [
            "390",
            "Level 14"
          ],
          "next": [
            [
              "392",
              "Level 36"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 392,
        name: "Infernape",
        type: [
          "Fire",
          "Fighting"
        ],
        height: "1.2 m",
        weight: "55 kg",
        ability: [
          "Blaze",
          "Iron Fist (HIDDEN)"
        ],
        egg_groups: [
          "Field",
          "Human-Like"
        ],
        base_stats: {
          "HP": 76,
          "Attack": 104,
          "Defense": 71,
          "Special Attack": 104,
          "Special Defense": 71,
          "Speed": 108
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/392.png",
        evolution: {
          "prev": [
            "391",
            "Level 36"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 393,
        name: "Piplup",
        type: [
          "Water"
        ],
        height: "0.4 m",
        weight: "5.2 kg",
        ability: [
          "Torrent",
          "Defiant (HIDDEN)"
        ],
        egg_groups: [
          "Water 1",
          "Field"
        ],
        base_stats: {
          "HP": 53,
          "Attack": 51,
          "Defense": 53,
          "Special Attack": 61,
          "Special Defense": 56,
          "Speed": 40
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/393.png",
        evolution: {
          "next": [
            [
              "394",
              "Level 16"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 394,
        name: "Prinplup",
        type: [
          "Water"
        ],
        height: "0.8 m",
        weight: "23 kg",
        ability: [
          "Torrent",
          "Defiant (HIDDEN)"
        ],
        egg_groups: [
          "Water 1",
          "Field"
        ],
        base_stats: {
          "HP": 64,
          "Attack": 66,
          "Defense": 68,
          "Special Attack": 81,
          "Special Defense": 76,
          "Speed": 50
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/394.png",
        evolution: {
          "prev": [
            "393",
            "Level 16"
          ],
          "next": [
            [
              "395",
              "Level 36"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 395,
        name: "Empoleon",
        type: [
          "Water",
          "Steel"
        ],
        height: "1.7 m",
        weight: "84.5 kg",
        ability: [
          "Torrent",
          "Defiant (HIDDEN)"
        ],
        egg_groups: [
          "Water 1",
          "Field"
        ],
        base_stats: {
          "HP": 84,
          "Attack": 86,
          "Defense": 88,
          "Special Attack": 111,
          "Special Defense": 101,
          "Speed": 60
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/395.png",
        evolution: {
          "prev": [
            "394",
            "Level 36"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 396,
        name: "Starly",
        type: [
          "Normal",
          "Flying"
        ],
        height: "0.3 m",
        weight: "2 kg",
        ability: [
          "Keen Eye",
          "Reckless (HIDDEN)"
        ],
        egg_groups: [
          "Flying"
        ],
        base_stats: {
          "HP": 40,
          "Attack": 55,
          "Defense": 30,
          "Special Attack": 30,
          "Special Defense": 30,
          "Speed": 60
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/396.png",
        evolution: {
          "next": [
            [
              "397",
              "Level 14"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 397,
        name: "Staravia",
        type: [
          "Normal",
          "Flying"
        ],
        height: "0.6 m",
        weight: "15.5 kg",
        ability: [
          "Intimidate",
          "Reckless (HIDDEN)"
        ],
        egg_groups: [
          "Flying"
        ],
        base_stats: {
          "HP": 55,
          "Attack": 75,
          "Defense": 50,
          "Special Attack": 40,
          "Special Defense": 40,
          "Speed": 80
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/397.png",
        evolution: {
          "prev": [
            "396",
            "Level 14"
          ],
          "next": [
            [
              "398",
              "Level 34"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 398,
        name: "Staraptor",
        type: [
          "Normal",
          "Flying"
        ],
        height: "1.2 m",
        weight: "24.9 kg",
        ability: [
          "Intimidate",
          "Reckless (HIDDEN)"
        ],
        egg_groups: [
          "Flying"
        ],
        base_stats: {
          "HP": 85,
          "Attack": 120,
          "Defense": 70,
          "Special Attack": 50,
          "Special Defense": 60,
          "Speed": 100
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/398.png",
        evolution: {
          "prev": [
            "397",
            "Level 34"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 399,
        name: "Bidoof",
        type: [
          "Normal"
        ],
        height: "0.5 m",
        weight: "20 kg",
        ability: [
          "Simple",
          "Unaware",
          "Moody (HIDDEN)"
        ],
        egg_groups: [
          "Water 1",
          "Field"
        ],
        base_stats: {
          "HP": 59,
          "Attack": 45,
          "Defense": 40,
          "Special Attack": 35,
          "Special Defense": 40,
          "Speed": 31
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/399.png",
        evolution: {
          "next": [
            [
              "400",
              "Level 15"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 400,
        name: "Bibarel",
        type: [
          "Normal",
          "Water"
        ],
        height: "1 m",
        weight: "31.5 kg",
        ability: [
          "Simple",
          "Unaware",
          "Moody (HIDDEN)"
        ],
        egg_groups: [
          "Water 1",
          "Field"
        ],
        base_stats: {
          "HP": 79,
          "Attack": 85,
          "Defense": 60,
          "Special Attack": 55,
          "Special Defense": 60,
          "Speed": 71
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/400.png",
        evolution: {
          "prev": [
            "399",
            "Level 15"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 401,
        name: "Kricketot",
        type: [
          "Bug"
        ],
        height: "0.3 m",
        weight: "2.2 kg",
        ability: [
          "Shed Skin",
          "Run Away (HIDDEN)"
        ],
        egg_groups: [
          "Bug"
        ],
        base_stats: {
          "HP": 37,
          "Attack": 25,
          "Defense": 41,
          "Special Attack": 25,
          "Special Defense": 41,
          "Speed": 25
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/401.png",
        evolution: {
          "next": [
            [
              "402",
              "Level 10"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 402,
        name: "Kricketune",
        type: [
          "Bug"
        ],
        height: "1 m",
        weight: "25.5 kg",
        ability: [
          "Swarm",
          "Technician (HIDDEN)"
        ],
        egg_groups: [
          "Bug"
        ],
        base_stats: {
          "HP": 77,
          "Attack": 85,
          "Defense": 51,
          "Special Attack": 55,
          "Special Defense": 51,
          "Speed": 65
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/402.png",
        evolution: {
          "prev": [
            "401",
            "Level 10"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 403,
        name: "Shinx",
        type: [
          "Electric"
        ],
        height: "0.5 m",
        weight: "9.5 kg",
        ability: [
          "Rivalry",
          "Intimidate",
          "Guts (HIDDEN)"
        ],
        egg_groups: [
          "Field"
        ],
        base_stats: {
          "HP": 45,
          "Attack": 65,
          "Defense": 34,
          "Special Attack": 40,
          "Special Defense": 34,
          "Speed": 45
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/403.png",
        evolution: {
          "next": [
            [
              "404",
              "Level 15"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 404,
        name: "Luxio",
        type: [
          "Electric"
        ],
        height: "0.9 m",
        weight: "30.5 kg",
        ability: [
          "Rivalry",
          "Intimidate",
          "Guts (HIDDEN)"
        ],
        egg_groups: [
          "Field"
        ],
        base_stats: {
          "HP": 60,
          "Attack": 85,
          "Defense": 49,
          "Special Attack": 60,
          "Special Defense": 49,
          "Speed": 60
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/404.png",
        evolution: {
          "prev": [
            "403",
            "Level 15"
          ],
          "next": [
            [
              "405",
              "Level 30"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 405,
        name: "Luxray",
        type: [
          "Electric"
        ],
        height: "1.4 m",
        weight: "42 kg",
        ability: [
          "Rivalry",
          "Intimidate",
          "Guts (HIDDEN)"
        ],
        egg_groups: [
          "Field"
        ],
        base_stats: {
          "HP": 80,
          "Attack": 120,
          "Defense": 79,
          "Special Attack": 95,
          "Special Defense": 79,
          "Speed": 70
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/405.png",
        evolution: {
          "prev": [
            "404",
            "Level 30"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 406,
        name: "Budew",
        type: [
          "Grass",
          "Poison"
        ],
        height: "0.2 m",
        weight: "1.2 kg",
        ability: [
          "Natural Cure",
          "Poison Point",
          "Leaf Guard (HIDDEN)"
        ],
        egg_groups: [
          "Undiscovered"
        ],
        base_stats: {
          "HP": 40,
          "Attack": 30,
          "Defense": 35,
          "Special Attack": 50,
          "Special Defense": 70,
          "Speed": 55
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/406.png",
        evolution: {
          "next": [
            [
              "315",
              "high Friendship, Daytime"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 407,
        name: "Roserade",
        type: [
          "Grass",
          "Poison"
        ],
        height: "0.9 m",
        weight: "14.5 kg",
        ability: [
          "Natural Cure",
          "Poison Point",
          "Technician (HIDDEN)"
        ],
        egg_groups: [
          "Fairy",
          "Grass"
        ],
        base_stats: {
          "HP": 60,
          "Attack": 70,
          "Defense": 65,
          "Special Attack": 125,
          "Special Defense": 105,
          "Speed": 90
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/407.png",
        evolution: {
          "prev": [
            "315",
            "use Shiny Stone"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 408,
        name: "Cranidos",
        type: [
          "Rock"
        ],
        height: "0.9 m",
        weight: "31.5 kg",
        ability: [
          "Mold Breaker",
          "Sheer Force (HIDDEN)"
        ],
        egg_groups: [
          "Monster"
        ],
        base_stats: {
          "HP": 67,
          "Attack": 125,
          "Defense": 40,
          "Special Attack": 30,
          "Special Defense": 30,
          "Speed": 58
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/408.png",
        evolution: {
          "next": [
            [
              "409",
              "Level 30"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 409,
        name: "Rampardos",
        type: [
          "Rock"
        ],
        height: "1.6 m",
        weight: "102.5 kg",
        ability: [
          "Mold Breaker",
          "Sheer Force (HIDDEN)"
        ],
        egg_groups: [
          "Monster"
        ],
        base_stats: {
          "HP": 97,
          "Attack": 165,
          "Defense": 60,
          "Special Attack": 65,
          "Special Defense": 50,
          "Speed": 58
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/409.png",
        evolution: {
          "prev": [
            "408",
            "Level 30"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 410,
        name: "Shieldon",
        type: [
          "Rock",
          "Steel"
        ],
        height: "0.5 m",
        weight: "57 kg",
        ability: [
          "Sturdy",
          "Soundproof (HIDDEN)"
        ],
        egg_groups: [
          "Monster"
        ],
        base_stats: {
          "HP": 30,
          "Attack": 42,
          "Defense": 118,
          "Special Attack": 42,
          "Special Defense": 88,
          "Speed": 30
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/410.png",
        evolution: {
          "next": [
            [
              "411",
              "Level 30"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 411,
        name: "Bastiodon",
        type: [
          "Rock",
          "Steel"
        ],
        height: "1.3 m",
        weight: "149.5 kg",
        ability: [
          "Sturdy",
          "Soundproof (HIDDEN)"
        ],
        egg_groups: [
          "Monster"
        ],
        base_stats: {
          "HP": 60,
          "Attack": 52,
          "Defense": 168,
          "Special Attack": 47,
          "Special Defense": 138,
          "Speed": 30
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/411.png",
        evolution: {
          "prev": [
            "410",
            "Level 30"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 412,
        name: "Burmy",
        type: [
          "Bug"
        ],
        height: "0.2 m",
        weight: "3.4 kg",
        ability: [
          "Shed Skin",
          "Overcoat (HIDDEN)"
        ],
        egg_groups: [
          "Bug"
        ],
        base_stats: {
          "HP": 40,
          "Attack": 29,
          "Defense": 45,
          "Special Attack": 29,
          "Special Defense": 45,
          "Speed": 36
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/412.png",
        evolution: {
          "next": [
            [
              "413",
              "Level 20, Female"
            ],
            [
              "414",
              "Level 20, Male"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 413,
        name: "Wormadam",
        type: [
          "Bug",
          "Grass"
        ],
        height: "0.5 m",
        weight: "6.5 kg",
        ability: [
          "Anticipation",
          "Overcoat (HIDDEN)"
        ],
        egg_groups: [
          "Bug"
        ],
        base_stats: {
          "HP": 60,
          "Attack": 59,
          "Defense": 85,
          "Special Attack": 79,
          "Special Defense": 105,
          "Speed": 36
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/413.png",
        evolution: {
          "prev": [
            "412",
            "Level 20, Female"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 414,
        name: "Mothim",
        type: [
          "Bug",
          "Flying"
        ],
        height: "0.9 m",
        weight: "23.3 kg",
        ability: [
          "Swarm",
          "Tinted Lens (HIDDEN)"
        ],
        egg_groups: [
          "Bug"
        ],
        base_stats: {
          "HP": 70,
          "Attack": 94,
          "Defense": 50,
          "Special Attack": 94,
          "Special Defense": 50,
          "Speed": 66
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/414.png",
        evolution: {
          "prev": [
            "412",
            "Level 20, Male"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 415,
        name: "Combee",
        type: [
          "Bug",
          "Flying"
        ],
        height: "0.3 m",
        weight: "5.5 kg",
        ability: [
          "Honey Gather",
          "Hustle (HIDDEN)"
        ],
        egg_groups: [
          "Bug"
        ],
        base_stats: {
          "HP": 30,
          "Attack": 30,
          "Defense": 42,
          "Special Attack": 30,
          "Special Defense": 42,
          "Speed": 70
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/415.png",
        evolution: {
          "next": [
            [
              "416",
              "Level 21, Female"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 416,
        name: "Vespiquen",
        type: [
          "Bug",
          "Flying"
        ],
        height: "1.2 m",
        weight: "38.5 kg",
        ability: [
          "Pressure",
          "Unnerve (HIDDEN)"
        ],
        egg_groups: [
          "Bug"
        ],
        base_stats: {
          "HP": 70,
          "Attack": 80,
          "Defense": 102,
          "Special Attack": 80,
          "Special Defense": 102,
          "Speed": 40
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/416.png",
        evolution: {
          "prev": [
            "415",
            "Level 21, Female"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 417,
        name: "Pachirisu",
        type: [
          "Electric"
        ],
        height: "0.4 m",
        weight: "3.9 kg",
        ability: [
          "Run Away",
          "Pickup",
          "Volt Absorb (HIDDEN)"
        ],
        egg_groups: [
          "Field",
          "Fairy"
        ],
        base_stats: {
          "HP": 60,
          "Attack": 45,
          "Defense": 70,
          "Special Attack": 45,
          "Special Defense": 90,
          "Speed": 95
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/417.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 418,
        name: "Buizel",
        type: [
          "Water"
        ],
        height: "0.7 m",
        weight: "29.5 kg",
        ability: [
          "Swift Swim",
          "Water Veil (HIDDEN)"
        ],
        egg_groups: [
          "Water 1",
          "Field"
        ],
        base_stats: {
          "HP": 55,
          "Attack": 65,
          "Defense": 35,
          "Special Attack": 60,
          "Special Defense": 30,
          "Speed": 85
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/418.png",
        evolution: {
          "next": [
            [
              "419",
              "Level 26"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 419,
        name: "Floatzel",
        type: [
          "Water"
        ],
        height: "1.1 m",
        weight: "33.5 kg",
        ability: [
          "Swift Swim",
          "Water Veil (HIDDEN)"
        ],
        egg_groups: [
          "Water 1",
          "Field"
        ],
        base_stats: {
          "HP": 85,
          "Attack": 105,
          "Defense": 55,
          "Special Attack": 85,
          "Special Defense": 50,
          "Speed": 115
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/419.png",
        evolution: {
          "prev": [
            "418",
            "Level 26"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 420,
        name: "Cherubi",
        type: [
          "Grass"
        ],
        height: "0.4 m",
        weight: "3.3 kg",
        ability: [
          "Chlorophyll"
        ],
        egg_groups: [
          "Fairy",
          "Grass"
        ],
        base_stats: {
          "HP": 45,
          "Attack": 35,
          "Defense": 45,
          "Special Attack": 62,
          "Special Defense": 53,
          "Speed": 35
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/420.png",
        evolution: {
          "next": [
            [
              "421",
              "Level 25"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 421,
        name: "Cherrim",
        type: [
          "Grass"
        ],
        height: "0.5 m",
        weight: "9.3 kg",
        ability: [
          "Flower Gift"
        ],
        egg_groups: [
          "Fairy",
          "Grass"
        ],
        base_stats: {
          "HP": 70,
          "Attack": 60,
          "Defense": 70,
          "Special Attack": 87,
          "Special Defense": 78,
          "Speed": 85
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/421.png",
        evolution: {
          "prev": [
            "420",
            "Level 25"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 422,
        name: "Shellos",
        type: [
          "Water"
        ],
        height: "0.3 m",
        weight: "6.3 kg",
        ability: [
          "Sticky Hold",
          "Storm Drain",
          "Sand Force (HIDDEN)"
        ],
        egg_groups: [
          "Water 1",
          "Amorphous"
        ],
        base_stats: {
          "HP": 76,
          "Attack": 48,
          "Defense": 48,
          "Special Attack": 57,
          "Special Defense": 62,
          "Speed": 34
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/422.png",
        evolution: {
          "next": [
            [
              "423",
              "Level 30"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 423,
        name: "Gastrodon",
        type: [
          "Water",
          "Ground"
        ],
        height: "0.9 m",
        weight: "29.9 kg",
        ability: [
          "Sticky Hold",
          "Storm Drain",
          "Sand Force (HIDDEN)"
        ],
        egg_groups: [
          "Water 1",
          "Amorphous"
        ],
        base_stats: {
          "HP": 111,
          "Attack": 83,
          "Defense": 68,
          "Special Attack": 92,
          "Special Defense": 82,
          "Speed": 39
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/423.png",
        evolution: {
          "prev": [
            "422",
            "Level 30"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 424,
        name: "Ambipom",
        type: [
          "Normal"
        ],
        height: "1.2 m",
        weight: "20.3 kg",
        ability: [
          "Technician",
          "Pickup",
          "Skill Link (HIDDEN)"
        ],
        egg_groups: [
          "Field"
        ],
        base_stats: {
          "HP": 75,
          "Attack": 100,
          "Defense": 66,
          "Special Attack": 60,
          "Special Defense": 66,
          "Speed": 115
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/424.png",
        evolution: {
          "prev": [
            "190",
            "after Double Hit learned"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 425,
        name: "Drifloon",
        type: [
          "Ghost",
          "Flying"
        ],
        height: "0.4 m",
        weight: "1.2 kg",
        ability: [
          "Aftermath",
          "Unburden",
          "Flare Boost (HIDDEN)"
        ],
        egg_groups: [
          "Amorphous"
        ],
        base_stats: {
          "HP": 90,
          "Attack": 50,
          "Defense": 34,
          "Special Attack": 60,
          "Special Defense": 44,
          "Speed": 70
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/425.png",
        evolution: {
          "next": [
            [
              "426",
              "Level 28"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 426,
        name: "Drifblim",
        type: [
          "Ghost",
          "Flying"
        ],
        height: "1.2 m",
        weight: "15 kg",
        ability: [
          "Aftermath",
          "Unburden",
          "Flare Boost (HIDDEN)"
        ],
        egg_groups: [
          "Amorphous"
        ],
        base_stats: {
          "HP": 150,
          "Attack": 80,
          "Defense": 44,
          "Special Attack": 90,
          "Special Defense": 54,
          "Speed": 80
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/426.png",
        evolution: {
          "prev": [
            "425",
            "Level 28"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 427,
        name: "Buneary",
        type: [
          "Normal"
        ],
        height: "0.4 m",
        weight: "5.5 kg",
        ability: [
          "Run Away",
          "Klutz",
          "Limber (HIDDEN)"
        ],
        egg_groups: [
          "Field",
          "Human-Like"
        ],
        base_stats: {
          "HP": 55,
          "Attack": 66,
          "Defense": 44,
          "Special Attack": 44,
          "Special Defense": 56,
          "Speed": 85
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/427.png",
        evolution: {
          "next": [
            [
              "428",
              "high Friendship"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 428,
        name: "Lopunny",
        type: [
          "Normal"
        ],
        height: "1.2 m",
        weight: "33.3 kg",
        ability: [
          "Cute Charm",
          "Klutz",
          "Limber (HIDDEN)"
        ],
        egg_groups: [
          "Field",
          "Human-Like"
        ],
        base_stats: {
          "HP": 65,
          "Attack": 76,
          "Defense": 84,
          "Special Attack": 54,
          "Special Defense": 96,
          "Speed": 105
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/428.png",
        evolution: {
          "prev": [
            "427",
            "high Friendship"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 429,
        name: "Mismagius",
        type: [
          "Ghost"
        ],
        height: "0.9 m",
        weight: "4.4 kg",
        ability: [
          "Levitate"
        ],
        egg_groups: [
          "Amorphous"
        ],
        base_stats: {
          "HP": 60,
          "Attack": 60,
          "Defense": 60,
          "Special Attack": 105,
          "Special Defense": 105,
          "Speed": 105
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/429.png",
        evolution: {
          "prev": [
            "200",
            "use Dusk Stone"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 430,
        name: "Honchkrow",
        type: [
          "Dark",
          "Flying"
        ],
        height: "0.9 m",
        weight: "27.3 kg",
        ability: [
          "Insomnia",
          "Super Luck",
          "Moxie (HIDDEN)"
        ],
        egg_groups: [
          "Flying"
        ],
        base_stats: {
          "HP": 100,
          "Attack": 125,
          "Defense": 52,
          "Special Attack": 105,
          "Special Defense": 52,
          "Speed": 71
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/430.png",
        evolution: {
          "prev": [
            "198",
            "use Dusk Stone"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 431,
        name: "Glameow",
        type: [
          "Normal"
        ],
        height: "0.5 m",
        weight: "3.9 kg",
        ability: [
          "Limber",
          "Own Tempo",
          "Keen Eye (HIDDEN)"
        ],
        egg_groups: [
          "Field"
        ],
        base_stats: {
          "HP": 49,
          "Attack": 55,
          "Defense": 42,
          "Special Attack": 42,
          "Special Defense": 37,
          "Speed": 85
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/431.png",
        evolution: {
          "next": [
            [
              "432",
              "Level 38"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 432,
        name: "Purugly",
        type: [
          "Normal"
        ],
        height: "1 m",
        weight: "43.8 kg",
        ability: [
          "Thick Fat",
          "Own Tempo",
          "Defiant (HIDDEN)"
        ],
        egg_groups: [
          "Field"
        ],
        base_stats: {
          "HP": 71,
          "Attack": 82,
          "Defense": 64,
          "Special Attack": 64,
          "Special Defense": 59,
          "Speed": 112
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/432.png",
        evolution: {
          "prev": [
            "431",
            "Level 38"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 433,
        name: "Chingling",
        type: [
          "Psychic"
        ],
        height: "0.2 m",
        weight: "0.6 kg",
        ability: [
          "Levitate"
        ],
        egg_groups: [
          "Undiscovered"
        ],
        base_stats: {
          "HP": 45,
          "Attack": 30,
          "Defense": 50,
          "Special Attack": 65,
          "Special Defense": 50,
          "Speed": 45
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/433.png",
        evolution: {
          "next": [
            [
              "358",
              "high Friendship, Nighttime"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 434,
        name: "Stunky",
        type: [
          "Poison",
          "Dark"
        ],
        height: "0.4 m",
        weight: "19.2 kg",
        ability: [
          "Stench",
          "Aftermath",
          "Keen Eye (HIDDEN)"
        ],
        egg_groups: [
          "Field"
        ],
        base_stats: {
          "HP": 63,
          "Attack": 63,
          "Defense": 47,
          "Special Attack": 41,
          "Special Defense": 41,
          "Speed": 74
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/434.png",
        evolution: {
          "next": [
            [
              "435",
              "Level 34"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 435,
        name: "Skuntank",
        type: [
          "Poison",
          "Dark"
        ],
        height: "1 m",
        weight: "38 kg",
        ability: [
          "Stench",
          "Aftermath",
          "Keen Eye (HIDDEN)"
        ],
        egg_groups: [
          "Field"
        ],
        base_stats: {
          "HP": 103,
          "Attack": 93,
          "Defense": 67,
          "Special Attack": 71,
          "Special Defense": 61,
          "Speed": 84
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/435.png",
        evolution: {
          "prev": [
            "434",
            "Level 34"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 436,
        name: "Bronzor",
        type: [
          "Steel",
          "Psychic"
        ],
        height: "0.5 m",
        weight: "60.5 kg",
        ability: [
          "Levitate",
          "Heatproof",
          "Heavy Metal (HIDDEN)"
        ],
        egg_groups: [
          "Mineral"
        ],
        base_stats: {
          "HP": 57,
          "Attack": 24,
          "Defense": 86,
          "Special Attack": 24,
          "Special Defense": 86,
          "Speed": 23
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/436.png",
        evolution: {
          "next": [
            [
              "437",
              "Level 33"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 437,
        name: "Bronzong",
        type: [
          "Steel",
          "Psychic"
        ],
        height: "1.3 m",
        weight: "187 kg",
        ability: [
          "Levitate",
          "Heatproof",
          "Heavy Metal (HIDDEN)"
        ],
        egg_groups: [
          "Mineral"
        ],
        base_stats: {
          "HP": 67,
          "Attack": 89,
          "Defense": 116,
          "Special Attack": 79,
          "Special Defense": 116,
          "Speed": 33
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/437.png",
        evolution: {
          "prev": [
            "436",
            "Level 33"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 438,
        name: "Bonsly",
        type: [
          "Rock"
        ],
        height: "0.5 m",
        weight: "15 kg",
        ability: [
          "Sturdy",
          "Rock Head",
          "Rattled (HIDDEN)"
        ],
        egg_groups: [
          "Undiscovered"
        ],
        base_stats: {
          "HP": 50,
          "Attack": 80,
          "Defense": 95,
          "Special Attack": 10,
          "Special Defense": 45,
          "Speed": 10
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/438.png",
        evolution: {
          "next": [
            [
              "185",
              "after Mimic learned"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 439,
        name: "Mime Jr.",
        type: [
          "Psychic",
          "Fairy"
        ],
        height: "0.6 m",
        weight: "13 kg",
        ability: [
          "Soundproof",
          "Filter",
          "Technician (HIDDEN)"
        ],
        egg_groups: [
          "Undiscovered"
        ],
        base_stats: {
          "HP": 20,
          "Attack": 25,
          "Defense": 45,
          "Special Attack": 70,
          "Special Defense": 90,
          "Speed": 60
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/439.png",
        evolution: {
          "next": [
            [
              "122",
              "after Mimic learned"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 440,
        name: "Happiny",
        type: [
          "Normal"
        ],
        height: "0.6 m",
        weight: "24.4 kg",
        ability: [
          "Natural Cure",
          "Serene Grace",
          "Friend Guard (HIDDEN)"
        ],
        egg_groups: [
          "Undiscovered"
        ],
        base_stats: {
          "HP": 100,
          "Attack": 5,
          "Defense": 5,
          "Special Attack": 15,
          "Special Defense": 65,
          "Speed": 30
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/440.png",
        evolution: {
          "next": [
            [
              "113",
              "hold Oval Stone, Daytime"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 441,
        name: "Chatot",
        type: [
          "Normal",
          "Flying"
        ],
        height: "0.5 m",
        weight: "1.9 kg",
        ability: [
          "Keen Eye",
          "Tangled Feet",
          "Big Pecks (HIDDEN)"
        ],
        egg_groups: [
          "Flying"
        ],
        base_stats: {
          "HP": 76,
          "Attack": 65,
          "Defense": 45,
          "Special Attack": 92,
          "Special Defense": 42,
          "Speed": 91
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/441.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 442,
        name: "Spiritomb",
        type: [
          "Ghost",
          "Dark"
        ],
        height: "1 m",
        weight: "108 kg",
        ability: [
          "Pressure",
          "Infiltrator (HIDDEN)"
        ],
        egg_groups: [
          "Amorphous"
        ],
        base_stats: {
          "HP": 50,
          "Attack": 92,
          "Defense": 108,
          "Special Attack": 92,
          "Special Defense": 108,
          "Speed": 35
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/442.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 443,
        name: "Gible",
        type: [
          "Dragon",
          "Ground"
        ],
        height: "0.7 m",
        weight: "20.5 kg",
        ability: [
          "Sand Veil",
          "Rough Skin (HIDDEN)"
        ],
        egg_groups: [
          "Monster",
          "Dragon"
        ],
        base_stats: {
          "HP": 58,
          "Attack": 70,
          "Defense": 45,
          "Special Attack": 40,
          "Special Defense": 45,
          "Speed": 42
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/443.png",
        evolution: {
          "next": [
            [
              "444",
              "Level 24"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 444,
        name: "Gabite",
        type: [
          "Dragon",
          "Ground"
        ],
        height: "1.4 m",
        weight: "56 kg",
        ability: [
          "Sand Veil",
          "Rough Skin (HIDDEN)"
        ],
        egg_groups: [
          "Monster",
          "Dragon"
        ],
        base_stats: {
          "HP": 68,
          "Attack": 90,
          "Defense": 65,
          "Special Attack": 50,
          "Special Defense": 55,
          "Speed": 82
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/444.png",
        evolution: {
          "prev": [
            "443",
            "Level 24"
          ],
          "next": [
            [
              "445",
              "Level 48"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 445,
        name: "Garchomp",
        type: [
          "Dragon",
          "Ground"
        ],
        height: "1.9 m",
        weight: "95 kg",
        ability: [
          "Sand Veil",
          "Rough Skin (HIDDEN)"
        ],
        egg_groups: [
          "Monster",
          "Dragon"
        ],
        base_stats: {
          "HP": 108,
          "Attack": 130,
          "Defense": 95,
          "Special Attack": 80,
          "Special Defense": 85,
          "Speed": 102
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/445.png",
        evolution: {
          "prev": [
            "444",
            "Level 48"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 446,
        name: "Munchlax",
        type: [
          "Normal"
        ],
        height: "0.6 m",
        weight: "105 kg",
        ability: [
          "Pickup",
          "Thick Fat",
          "Gluttony (HIDDEN)"
        ],
        egg_groups: [
          "Undiscovered"
        ],
        base_stats: {
          "HP": 135,
          "Attack": 85,
          "Defense": 40,
          "Special Attack": 40,
          "Special Defense": 85,
          "Speed": 5
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/446.png",
        evolution: {
          "next": [
            [
              "143",
              "high Friendship"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 447,
        name: "Riolu",
        type: [
          "Fighting"
        ],
        height: "0.7 m",
        weight: "20.2 kg",
        ability: [
          "Steadfast",
          "Inner Focus",
          "Prankster (HIDDEN)"
        ],
        egg_groups: [
          "Undiscovered"
        ],
        base_stats: {
          "HP": 40,
          "Attack": 70,
          "Defense": 40,
          "Special Attack": 35,
          "Special Defense": 40,
          "Speed": 60
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/447.png",
        evolution: {
          "next": [
            [
              "448",
              "high Friendship, Daytime"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 448,
        name: "Lucario",
        type: [
          "Fighting",
          "Steel"
        ],
        height: "1.2 m",
        weight: "54 kg",
        ability: [
          "Steadfast",
          "Inner Focus",
          "Justified (HIDDEN)"
        ],
        egg_groups: [
          "Field",
          "Human-Like"
        ],
        base_stats: {
          "HP": 70,
          "Attack": 110,
          "Defense": 70,
          "Special Attack": 115,
          "Special Defense": 70,
          "Speed": 90
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/448.png",
        evolution: {
          "prev": [
            "447",
            "high Friendship, Daytime"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 449,
        name: "Hippopotas",
        type: [
          "Ground"
        ],
        height: "0.8 m",
        weight: "49.5 kg",
        ability: [
          "Sand Stream",
          "Sand Force (HIDDEN)"
        ],
        egg_groups: [
          "Field"
        ],
        base_stats: {
          "HP": 68,
          "Attack": 72,
          "Defense": 78,
          "Special Attack": 38,
          "Special Defense": 42,
          "Speed": 32
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/449.png",
        evolution: {
          "next": [
            [
              "450",
              "Level 34"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 450,
        name: "Hippowdon",
        type: [
          "Ground"
        ],
        height: "2 m",
        weight: "300 kg",
        ability: [
          "Sand Stream",
          "Sand Force (HIDDEN)"
        ],
        egg_groups: [
          "Field"
        ],
        base_stats: {
          "HP": 108,
          "Attack": 112,
          "Defense": 118,
          "Special Attack": 68,
          "Special Defense": 72,
          "Speed": 47
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/450.png",
        evolution: {
          "prev": [
            "449",
            "Level 34"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 451,
        name: "Skorupi",
        type: [
          "Poison",
          "Bug"
        ],
        height: "0.8 m",
        weight: "12 kg",
        ability: [
          "Battle Armor",
          "Sniper",
          "Keen Eye (HIDDEN)"
        ],
        egg_groups: [
          "Bug",
          "Water 3"
        ],
        base_stats: {
          "HP": 40,
          "Attack": 50,
          "Defense": 90,
          "Special Attack": 30,
          "Special Defense": 55,
          "Speed": 65
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/451.png",
        evolution: {
          "next": [
            [
              "452",
              "Level 40"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 452,
        name: "Drapion",
        type: [
          "Poison",
          "Dark"
        ],
        height: "1.3 m",
        weight: "61.5 kg",
        ability: [
          "Battle Armor",
          "Sniper",
          "Keen Eye (HIDDEN)"
        ],
        egg_groups: [
          "Bug",
          "Water 3"
        ],
        base_stats: {
          "HP": 70,
          "Attack": 90,
          "Defense": 110,
          "Special Attack": 60,
          "Special Defense": 75,
          "Speed": 95
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/452.png",
        evolution: {
          "prev": [
            "451",
            "Level 40"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 453,
        name: "Croagunk",
        type: [
          "Poison",
          "Fighting"
        ],
        height: "0.7 m",
        weight: "23 kg",
        ability: [
          "Anticipation",
          "Dry Skin",
          "Poison Touch (HIDDEN)"
        ],
        egg_groups: [
          "Human-Like"
        ],
        base_stats: {
          "HP": 48,
          "Attack": 61,
          "Defense": 40,
          "Special Attack": 61,
          "Special Defense": 40,
          "Speed": 50
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/453.png",
        evolution: {
          "next": [
            [
              "454",
              "Level 37"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 454,
        name: "Toxicroak",
        type: [
          "Poison",
          "Fighting"
        ],
        height: "1.3 m",
        weight: "44.4 kg",
        ability: [
          "Anticipation",
          "Dry Skin",
          "Poison Touch (HIDDEN)"
        ],
        egg_groups: [
          "Human-Like"
        ],
        base_stats: {
          "HP": 83,
          "Attack": 106,
          "Defense": 65,
          "Special Attack": 86,
          "Special Defense": 65,
          "Speed": 85
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/454.png",
        evolution: {
          "prev": [
            "453",
            "Level 37"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 455,
        name: "Carnivine",
        type: [
          "Grass"
        ],
        height: "1.4 m",
        weight: "27 kg",
        ability: [
          "Levitate"
        ],
        egg_groups: [
          "Grass"
        ],
        base_stats: {
          "HP": 74,
          "Attack": 100,
          "Defense": 72,
          "Special Attack": 90,
          "Special Defense": 72,
          "Speed": 46
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/455.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 456,
        name: "Finneon",
        type: [
          "Water"
        ],
        height: "0.4 m",
        weight: "7 kg",
        ability: [
          "Swift Swim",
          "Storm Drain",
          "Water Veil (HIDDEN)"
        ],
        egg_groups: [
          "Water 2"
        ],
        base_stats: {
          "HP": 49,
          "Attack": 49,
          "Defense": 56,
          "Special Attack": 49,
          "Special Defense": 61,
          "Speed": 66
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/456.png",
        evolution: {
          "next": [
            [
              "457",
              "Level 31"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 457,
        name: "Lumineon",
        type: [
          "Water"
        ],
        height: "1.2 m",
        weight: "24 kg",
        ability: [
          "Swift Swim",
          "Storm Drain",
          "Water Veil (HIDDEN)"
        ],
        egg_groups: [
          "Water 2"
        ],
        base_stats: {
          "HP": 69,
          "Attack": 69,
          "Defense": 76,
          "Special Attack": 69,
          "Special Defense": 86,
          "Speed": 91
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/457.png",
        evolution: {
          "prev": [
            "456",
            "Level 31"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 458,
        name: "Mantyke",
        type: [
          "Water",
          "Flying"
        ],
        height: "1 m",
        weight: "65 kg",
        ability: [
          "Swift Swim",
          "Water Absorb",
          "Water Veil (HIDDEN)"
        ],
        egg_groups: [
          "Undiscovered"
        ],
        base_stats: {
          "HP": 45,
          "Attack": 20,
          "Defense": 50,
          "Special Attack": 60,
          "Special Defense": 120,
          "Speed": 50
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/458.png",
        evolution: {
          "next": [
            [
              "226",
              "with Remoraid in party"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 459,
        name: "Snover",
        type: [
          "Grass",
          "Ice"
        ],
        height: "1 m",
        weight: "50.5 kg",
        ability: [
          "Snow Warning",
          "Soundproof (HIDDEN)"
        ],
        egg_groups: [
          "Monster",
          "Grass"
        ],
        base_stats: {
          "HP": 60,
          "Attack": 62,
          "Defense": 50,
          "Special Attack": 62,
          "Special Defense": 60,
          "Speed": 40
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/459.png",
        evolution: {
          "next": [
            [
              "460",
              "Level 40"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 460,
        name: "Abomasnow",
        type: [
          "Grass",
          "Ice"
        ],
        height: "2.2 m",
        weight: "135.5 kg",
        ability: [
          "Snow Warning",
          "Soundproof (HIDDEN)"
        ],
        egg_groups: [
          "Monster",
          "Grass"
        ],
        base_stats: {
          "HP": 90,
          "Attack": 92,
          "Defense": 75,
          "Special Attack": 92,
          "Special Defense": 85,
          "Speed": 60
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/460.png",
        evolution: {
          "prev": [
            "459",
            "Level 40"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 461,
        name: "Weavile",
        type: [
          "Dark",
          "Ice"
        ],
        height: "1.1 m",
        weight: "34 kg",
        ability: [
          "Pressure",
          "Pickpocket (HIDDEN)"
        ],
        egg_groups: [
          "Field"
        ],
        base_stats: {
          "HP": 70,
          "Attack": 120,
          "Defense": 65,
          "Special Attack": 45,
          "Special Defense": 85,
          "Speed": 125
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/461.png",
        evolution: {
          "prev": [
            "215",
            "hold Razor Claw, Nighttime"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 462,
        name: "Magnezone",
        type: [
          "Electric",
          "Steel"
        ],
        height: "1.2 m",
        weight: "180 kg",
        ability: [
          "Magnet Pull",
          "Sturdy",
          "Analytic (HIDDEN)"
        ],
        egg_groups: [
          "Mineral"
        ],
        base_stats: {
          "HP": 70,
          "Attack": 70,
          "Defense": 115,
          "Special Attack": 130,
          "Special Defense": 90,
          "Speed": 60
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/462.png",
        evolution: {
          "prev": [
            "82",
            "level up in a Magnetic Field area"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 463,
        name: "Lickilicky",
        type: [
          "Normal"
        ],
        height: "1.7 m",
        weight: "140 kg",
        ability: [
          "Own Tempo",
          "Oblivious",
          "Cloud Nine (HIDDEN)"
        ],
        egg_groups: [
          "Monster"
        ],
        base_stats: {
          "HP": 110,
          "Attack": 85,
          "Defense": 95,
          "Special Attack": 80,
          "Special Defense": 95,
          "Speed": 50
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/463.png",
        evolution: {
          "prev": [
            "108",
            "after Rollout learned"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 464,
        name: "Rhyperior",
        type: [
          "Ground",
          "Rock"
        ],
        height: "2.4 m",
        weight: "282.8 kg",
        ability: [
          "Lightning Rod",
          "Solid Rock",
          "Reckless (HIDDEN)"
        ],
        egg_groups: [
          "Monster",
          "Field"
        ],
        base_stats: {
          "HP": 115,
          "Attack": 140,
          "Defense": 130,
          "Special Attack": 55,
          "Special Defense": 55,
          "Speed": 40
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/464.png",
        evolution: {
          "prev": [
            "112",
            "trade holding Protector"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 465,
        name: "Tangrowth",
        type: [
          "Grass"
        ],
        height: "2 m",
        weight: "128.6 kg",
        ability: [
          "Chlorophyll",
          "Leaf Guard",
          "Regenerator (HIDDEN)"
        ],
        egg_groups: [
          "Grass"
        ],
        base_stats: {
          "HP": 100,
          "Attack": 100,
          "Defense": 125,
          "Special Attack": 110,
          "Special Defense": 50,
          "Speed": 50
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/465.png",
        evolution: {
          "prev": [
            "114",
            "after Ancient Power learned"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 466,
        name: "Electivire",
        type: [
          "Electric"
        ],
        height: "1.8 m",
        weight: "138.6 kg",
        ability: [
          "Motor Drive",
          "Vital Spirit (HIDDEN)"
        ],
        egg_groups: [
          "Human-Like"
        ],
        base_stats: {
          "HP": 75,
          "Attack": 123,
          "Defense": 67,
          "Special Attack": 95,
          "Special Defense": 85,
          "Speed": 95
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/466.png",
        evolution: {
          "prev": [
            "125",
            "trade holding Electirizer"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 467,
        name: "Magmortar",
        type: [
          "Fire"
        ],
        height: "1.6 m",
        weight: "68 kg",
        ability: [
          "Flame Body",
          "Vital Spirit (HIDDEN)"
        ],
        egg_groups: [
          "Human-Like"
        ],
        base_stats: {
          "HP": 75,
          "Attack": 95,
          "Defense": 67,
          "Special Attack": 125,
          "Special Defense": 95,
          "Speed": 83
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/467.png",
        evolution: {
          "prev": [
            "126",
            "trade holding Magmarizer"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 468,
        name: "Togekiss",
        type: [
          "Fairy",
          "Flying"
        ],
        height: "1.5 m",
        weight: "38 kg",
        ability: [
          "Hustle",
          "Serene Grace",
          "Super Luck (HIDDEN)"
        ],
        egg_groups: [
          "Flying",
          "Fairy"
        ],
        base_stats: {
          "HP": 85,
          "Attack": 50,
          "Defense": 95,
          "Special Attack": 120,
          "Special Defense": 115,
          "Speed": 80
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/468.png",
        evolution: {
          "prev": [
            "176",
            "use Shiny Stone"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 469,
        name: "Yanmega",
        type: [
          "Bug",
          "Flying"
        ],
        height: "1.9 m",
        weight: "51.5 kg",
        ability: [
          "Speed Boost",
          "Tinted Lens",
          "Frisk (HIDDEN)"
        ],
        egg_groups: [
          "Bug"
        ],
        base_stats: {
          "HP": 86,
          "Attack": 76,
          "Defense": 86,
          "Special Attack": 116,
          "Special Defense": 56,
          "Speed": 95
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/469.png",
        evolution: {
          "prev": [
            "193",
            "after Ancient Power learned"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 470,
        name: "Leafeon",
        type: [
          "Grass"
        ],
        height: "1 m",
        weight: "25.5 kg",
        ability: [
          "Leaf Guard",
          "Chlorophyll (HIDDEN)"
        ],
        egg_groups: [
          "Field"
        ],
        base_stats: {
          "HP": 65,
          "Attack": 110,
          "Defense": 130,
          "Special Attack": 60,
          "Special Defense": 65,
          "Speed": 95
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/470.png",
        evolution: {
          "prev": [
            "133",
            "level up near a Mossy Rock"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 471,
        name: "Glaceon",
        type: [
          "Ice"
        ],
        height: "0.8 m",
        weight: "25.9 kg",
        ability: [
          "Snow Cloak",
          "Ice Body (HIDDEN)"
        ],
        egg_groups: [
          "Field"
        ],
        base_stats: {
          "HP": 65,
          "Attack": 60,
          "Defense": 110,
          "Special Attack": 130,
          "Special Defense": 95,
          "Speed": 65
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/471.png",
        evolution: {
          "prev": [
            "133",
            "level up near an Icy Rock"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 472,
        name: "Gliscor",
        type: [
          "Ground",
          "Flying"
        ],
        height: "2 m",
        weight: "42.5 kg",
        ability: [
          "Hyper Cutter",
          "Sand Veil",
          "Poison Heal (HIDDEN)"
        ],
        egg_groups: [
          "Bug"
        ],
        base_stats: {
          "HP": 75,
          "Attack": 95,
          "Defense": 125,
          "Special Attack": 45,
          "Special Defense": 75,
          "Speed": 95
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/472.png",
        evolution: {
          "prev": [
            "207",
            "hold Razor Fang, Nighttime"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 473,
        name: "Mamoswine",
        type: [
          "Ice",
          "Ground"
        ],
        height: "2.5 m",
        weight: "291 kg",
        ability: [
          "Oblivious",
          "Snow Cloak",
          "Thick Fat (HIDDEN)"
        ],
        egg_groups: [
          "Field"
        ],
        base_stats: {
          "HP": 110,
          "Attack": 130,
          "Defense": 80,
          "Special Attack": 70,
          "Special Defense": 60,
          "Speed": 80
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/473.png",
        evolution: {
          "prev": [
            "221",
            "after Ancient Power learned"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 474,
        name: "Porygon-Z",
        type: [
          "Normal"
        ],
        height: "0.9 m",
        weight: "34 kg",
        ability: [
          "Adaptability",
          "Download",
          "Analytic (HIDDEN)"
        ],
        egg_groups: [
          "Mineral"
        ],
        base_stats: {
          "HP": 85,
          "Attack": 80,
          "Defense": 70,
          "Special Attack": 135,
          "Special Defense": 75,
          "Speed": 90
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/474.png",
        evolution: {
          "prev": [
            "233",
            "trade holding Dubious Disc"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 475,
        name: "Gallade",
        type: [
          "Psychic",
          "Fighting"
        ],
        height: "1.6 m",
        weight: "52 kg",
        ability: [
          "Steadfast",
          "Justified (HIDDEN)"
        ],
        egg_groups: [
          "Amorphous"
        ],
        base_stats: {
          "HP": 68,
          "Attack": 125,
          "Defense": 65,
          "Special Attack": 65,
          "Special Defense": 115,
          "Speed": 80
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/475.png",
        evolution: {
          "prev": [
            "281",
            "use Dawn Stone, Male"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 476,
        name: "Probopass",
        type: [
          "Rock",
          "Steel"
        ],
        height: "1.4 m",
        weight: "340 kg",
        ability: [
          "Sturdy",
          "Magnet Pull",
          "Sand Force (HIDDEN)"
        ],
        egg_groups: [
          "Mineral"
        ],
        base_stats: {
          "HP": 60,
          "Attack": 55,
          "Defense": 145,
          "Special Attack": 75,
          "Special Defense": 150,
          "Speed": 40
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/476.png",
        evolution: {
          "prev": [
            "299",
            "level up in a Magnetic Field area"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 477,
        name: "Dusknoir",
        type: [
          "Ghost"
        ],
        height: "2.2 m",
        weight: "106.6 kg",
        ability: [
          "Pressure",
          "Frisk (HIDDEN)"
        ],
        egg_groups: [
          "Amorphous"
        ],
        base_stats: {
          "HP": 45,
          "Attack": 100,
          "Defense": 135,
          "Special Attack": 65,
          "Special Defense": 135,
          "Speed": 45
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/477.png",
        evolution: {
          "prev": [
            "356",
            "trade holding Reaper Cloth"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 478,
        name: "Froslass",
        type: [
          "Ice",
          "Ghost"
        ],
        height: "1.3 m",
        weight: "26.6 kg",
        ability: [
          "Snow Cloak",
          "Cursed Body (HIDDEN)"
        ],
        egg_groups: [
          "Fairy",
          "Mineral"
        ],
        base_stats: {
          "HP": 70,
          "Attack": 80,
          "Defense": 70,
          "Special Attack": 80,
          "Special Defense": 70,
          "Speed": 110
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/478.png",
        evolution: {
          "prev": [
            "361",
            "use Dawn Stone, Female"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 479,
        name: "Rotom",
        type: [
          "Electric",
          "Ghost"
        ],
        height: "0.3 m",
        weight: "0.3 kg",
        ability: [
          "Levitate"
        ],
        egg_groups: [
          "Amorphous"
        ],
        base_stats: {
          "HP": 50,
          "Attack": 50,
          "Defense": 77,
          "Special Attack": 95,
          "Special Defense": 77,
          "Speed": 91
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/479.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 480,
        name: "Uxie",
        type: [
          "Psychic"
        ],
        height: "0.3 m",
        weight: "0.3 kg",
        ability: [
          "Levitate"
        ],
        egg_groups: [
          "Undiscovered"
        ],
        base_stats: {
          "HP": 75,
          "Attack": 75,
          "Defense": 130,
          "Special Attack": 75,
          "Special Defense": 130,
          "Speed": 95
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/480.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 481,
        name: "Mesprit",
        type: [
          "Psychic"
        ],
        height: "0.3 m",
        weight: "0.3 kg",
        ability: [
          "Levitate"
        ],
        egg_groups: [
          "Undiscovered"
        ],
        base_stats: {
          "HP": 80,
          "Attack": 105,
          "Defense": 105,
          "Special Attack": 105,
          "Special Defense": 105,
          "Speed": 80
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/481.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 482,
        name: "Azelf",
        type: [
          "Psychic"
        ],
        height: "0.3 m",
        weight: "0.3 kg",
        ability: [
          "Levitate"
        ],
        egg_groups: [
          "Undiscovered"
        ],
        base_stats: {
          "HP": 75,
          "Attack": 125,
          "Defense": 70,
          "Special Attack": 125,
          "Special Defense": 70,
          "Speed": 115
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/482.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 483,
        name: "Dialga",
        type: [
          "Steel",
          "Dragon"
        ],
        height: "5.4 m",
        weight: "683 kg",
        ability: [
          "Pressure",
          "Telepathy (HIDDEN)"
        ],
        egg_groups: [
          "Undiscovered"
        ],
        base_stats: {
          "HP": 100,
          "Attack": 120,
          "Defense": 120,
          "Special Attack": 150,
          "Special Defense": 100,
          "Speed": 90
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/483.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 484,
        name: "Palkia",
        type: [
          "Water",
          "Dragon"
        ],
        height: "4.2 m",
        weight: "336 kg",
        ability: [
          "Pressure",
          "Telepathy (HIDDEN)"
        ],
        egg_groups: [
          "Undiscovered"
        ],
        base_stats: {
          "HP": 90,
          "Attack": 120,
          "Defense": 100,
          "Special Attack": 150,
          "Special Defense": 120,
          "Speed": 100
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/484.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 485,
        name: "Heatran",
        type: [
          "Fire",
          "Steel"
        ],
        height: "1.7 m",
        weight: "430 kg",
        ability: [
          "Flash Fire",
          "Flame Body (HIDDEN)"
        ],
        egg_groups: [
          "Undiscovered"
        ],
        base_stats: {
          "HP": 91,
          "Attack": 90,
          "Defense": 106,
          "Special Attack": 130,
          "Special Defense": 106,
          "Speed": 77
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/485.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 486,
        name: "Regigigas",
        type: [
          "Normal"
        ],
        height: "3.7 m",
        weight: "420 kg",
        ability: [
          "Slow Start"
        ],
        egg_groups: [
          "Undiscovered"
        ],
        base_stats: {
          "HP": 110,
          "Attack": 160,
          "Defense": 110,
          "Special Attack": 80,
          "Special Defense": 110,
          "Speed": 100
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/486.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 487,
        name: "Giratina",
        type: [
          "Ghost",
          "Dragon"
        ],
        height: "4.5 m",
        weight: "750 kg",
        ability: [
          "Pressure",
          "Telepathy (HIDDEN)"
        ],
        egg_groups: [
          "Undiscovered"
        ],
        base_stats: {
          "HP": 150,
          "Attack": 100,
          "Defense": 120,
          "Special Attack": 100,
          "Special Defense": 120,
          "Speed": 90
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/487.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 488,
        name: "Cresselia",
        type: [
          "Psychic"
        ],
        height: "1.5 m",
        weight: "85.6 kg",
        ability: [
          "Levitate"
        ],
        egg_groups: [
          "Undiscovered"
        ],
        base_stats: {
          "HP": 120,
          "Attack": 70,
          "Defense": 120,
          "Special Attack": 75,
          "Special Defense": 130,
          "Speed": 85
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/488.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 489,
        name: "Phione",
        type: [
          "Water"
        ],
        height: "0.4 m",
        weight: "3.1 kg",
        ability: [
          "Hydration"
        ],
        egg_groups: [
          "Water 1",
          "Fairy"
        ],
        base_stats: {
          "HP": 80,
          "Attack": 80,
          "Defense": 80,
          "Special Attack": 80,
          "Special Defense": 80,
          "Speed": 80
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/489.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 490,
        name: "Manaphy",
        type: [
          "Water"
        ],
        height: "0.3 m",
        weight: "1.4 kg",
        ability: [
          "Hydration"
        ],
        egg_groups: [
          "Water 1",
          "Fairy"
        ],
        base_stats: {
          "HP": 100,
          "Attack": 100,
          "Defense": 100,
          "Special Attack": 100,
          "Special Defense": 100,
          "Speed": 100
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/490.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 491,
        name: "Darkrai",
        type: [
          "Dark"
        ],
        height: "1.5 m",
        weight: "50.5 kg",
        ability: [
          "Bad Dreams"
        ],
        egg_groups: [
          "Undiscovered"
        ],
        base_stats: {
          "HP": 70,
          "Attack": 90,
          "Defense": 90,
          "Special Attack": 135,
          "Special Defense": 90,
          "Speed": 125
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/491.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 492,
        name: "Shaymin",
        type: [
          "Grass"
        ],
        height: "0.2 m",
        weight: "2.1 kg",
        ability: [
          "Natural Cure"
        ],
        egg_groups: [
          "Undiscovered"
        ],
        base_stats: {
          "HP": 100,
          "Attack": 100,
          "Defense": 100,
          "Special Attack": 100,
          "Special Defense": 100,
          "Speed": 100
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/492.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 493,
        name: "Arceus",
        type: [
          "Normal"
        ],
        height: "3.2 m",
        weight: "320 kg",
        ability: [
          "Multitype"
        ],
        egg_groups: [
          "Undiscovered"
        ],
        base_stats: {
          "HP": 120,
          "Attack": 120,
          "Defense": 120,
          "Special Attack": 120,
          "Special Defense": 120,
          "Speed": 120
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/493.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 494,
        name: "Victini",
        type: [
          "Psychic",
          "Fire"
        ],
        height: "0.4 m",
        weight: "4 kg",
        ability: [
          "Victory Star"
        ],
        egg_groups: [
          "Undiscovered"
        ],
        base_stats: {
          "HP": 100,
          "Attack": 100,
          "Defense": 100,
          "Special Attack": 100,
          "Special Defense": 100,
          "Speed": 100
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/494.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 495,
        name: "Snivy",
        type: [
          "Grass"
        ],
        height: "0.6 m",
        weight: "8.1 kg",
        ability: [
          "Overgrow",
          "Contrary (HIDDEN)"
        ],
        egg_groups: [
          "Field",
          "Grass"
        ],
        base_stats: {
          "HP": 45,
          "Attack": 45,
          "Defense": 55,
          "Special Attack": 45,
          "Special Defense": 55,
          "Speed": 63
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/495.png",
        evolution: {
          "next": [
            [
              "496",
              "Level 17"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 496,
        name: "Servine",
        type: [
          "Grass"
        ],
        height: "0.8 m",
        weight: "16 kg",
        ability: [
          "Overgrow",
          "Contrary (HIDDEN)"
        ],
        egg_groups: [
          "Field",
          "Grass"
        ],
        base_stats: {
          "HP": 60,
          "Attack": 60,
          "Defense": 75,
          "Special Attack": 60,
          "Special Defense": 75,
          "Speed": 83
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/496.png",
        evolution: {
          "prev": [
            "495",
            "Level 17"
          ],
          "next": [
            [
              "497",
              "Level 36"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 497,
        name: "Serperior",
        type: [
          "Grass"
        ],
        height: "3.3 m",
        weight: "63 kg",
        ability: [
          "Overgrow",
          "Contrary (HIDDEN)"
        ],
        egg_groups: [
          "Field",
          "Grass"
        ],
        base_stats: {
          "HP": 75,
          "Attack": 75,
          "Defense": 95,
          "Special Attack": 75,
          "Special Defense": 95,
          "Speed": 113
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/497.png",
        evolution: {
          "prev": [
            "496",
            "Level 36"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 498,
        name: "Tepig",
        type: [
          "Fire"
        ],
        height: "0.5 m",
        weight: "9.9 kg",
        ability: [
          "Blaze",
          "Thick Fat (HIDDEN)"
        ],
        egg_groups: [
          "Field"
        ],
        base_stats: {
          "HP": 65,
          "Attack": 63,
          "Defense": 45,
          "Special Attack": 45,
          "Special Defense": 45,
          "Speed": 45
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/498.png",
        evolution: {
          "next": [
            [
              "499",
              "Level 17"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 499,
        name: "Pignite",
        type: [
          "Fire",
          "Fighting"
        ],
        height: "1 m",
        weight: "55.5 kg",
        ability: [
          "Blaze",
          "Thick Fat (HIDDEN)"
        ],
        egg_groups: [
          "Field"
        ],
        base_stats: {
          "HP": 90,
          "Attack": 93,
          "Defense": 55,
          "Special Attack": 70,
          "Special Defense": 55,
          "Speed": 55
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/499.png",
        evolution: {
          "prev": [
            "498",
            "Level 17"
          ],
          "next": [
            [
              "500",
              "Level 36"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 500,
        name: "Emboar",
        type: [
          "Fire",
          "Fighting"
        ],
        height: "1.6 m",
        weight: "150 kg",
        ability: [
          "Blaze",
          "Reckless (HIDDEN)"
        ],
        egg_groups: [
          "Field"
        ],
        base_stats: {
          "HP": 110,
          "Attack": 123,
          "Defense": 65,
          "Special Attack": 100,
          "Special Defense": 65,
          "Speed": 65
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/500.png",
        evolution: {
          "prev": [
            "499",
            "Level 36"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 501,
        name: "Oshawott",
        type: [
          "Water"
        ],
        height: "0.5 m",
        weight: "5.9 kg",
        ability: [
          "Torrent",
          "Shell Armor (HIDDEN)"
        ],
        egg_groups: [
          "Field"
        ],
        base_stats: {
          "HP": 55,
          "Attack": 55,
          "Defense": 45,
          "Special Attack": 63,
          "Special Defense": 45,
          "Speed": 45
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/501.png",
        evolution: {
          "next": [
            [
              "502",
              "Level 17"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 502,
        name: "Dewott",
        type: [
          "Water"
        ],
        height: "0.8 m",
        weight: "24.5 kg",
        ability: [
          "Torrent",
          "Shell Armor (HIDDEN)"
        ],
        egg_groups: [
          "Field"
        ],
        base_stats: {
          "HP": 75,
          "Attack": 75,
          "Defense": 60,
          "Special Attack": 83,
          "Special Defense": 60,
          "Speed": 60
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/502.png",
        evolution: {
          "prev": [
            "501",
            "Level 17"
          ],
          "next": [
            [
              "503",
              "Level 36"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 503,
        name: "Samurott",
        type: [
          "Water"
        ],
        height: "1.5 m",
        weight: "94.6 kg",
        ability: [
          "Torrent",
          "Shell Armor (HIDDEN)"
        ],
        egg_groups: [
          "Field"
        ],
        base_stats: {
          "HP": 95,
          "Attack": 100,
          "Defense": 85,
          "Special Attack": 108,
          "Special Defense": 70,
          "Speed": 70
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/503.png",
        evolution: {
          "prev": [
            "502",
            "Level 36"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 504,
        name: "Patrat",
        type: [
          "Normal"
        ],
        height: "0.5 m",
        weight: "11.6 kg",
        ability: [
          "Run Away",
          "Keen Eye",
          "Analytic (HIDDEN)"
        ],
        egg_groups: [
          "Field"
        ],
        base_stats: {
          "HP": 45,
          "Attack": 55,
          "Defense": 39,
          "Special Attack": 35,
          "Special Defense": 39,
          "Speed": 42
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/504.png",
        evolution: {
          "next": [
            [
              "505",
              "Level 20"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 505,
        name: "Watchog",
        type: [
          "Normal"
        ],
        height: "1.1 m",
        weight: "27 kg",
        ability: [
          "Illuminate",
          "Keen Eye",
          "Analytic (HIDDEN)"
        ],
        egg_groups: [
          "Field"
        ],
        base_stats: {
          "HP": 60,
          "Attack": 85,
          "Defense": 69,
          "Special Attack": 60,
          "Special Defense": 69,
          "Speed": 77
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/505.png",
        evolution: {
          "prev": [
            "504",
            "Level 20"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 506,
        name: "Lillipup",
        type: [
          "Normal"
        ],
        height: "0.4 m",
        weight: "4.1 kg",
        ability: [
          "Vital Spirit",
          "Pickup",
          "Run Away (HIDDEN)"
        ],
        egg_groups: [
          "Field"
        ],
        base_stats: {
          "HP": 45,
          "Attack": 60,
          "Defense": 45,
          "Special Attack": 25,
          "Special Defense": 45,
          "Speed": 55
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/506.png",
        evolution: {
          "next": [
            [
              "507",
              "Level 16"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 507,
        name: "Herdier",
        type: [
          "Normal"
        ],
        height: "0.9 m",
        weight: "14.7 kg",
        ability: [
          "Intimidate",
          "Sand Rush",
          "Scrappy (HIDDEN)"
        ],
        egg_groups: [
          "Field"
        ],
        base_stats: {
          "HP": 65,
          "Attack": 80,
          "Defense": 65,
          "Special Attack": 35,
          "Special Defense": 65,
          "Speed": 60
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/507.png",
        evolution: {
          "prev": [
            "506",
            "Level 16"
          ],
          "next": [
            [
              "508",
              "Level 32"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 508,
        name: "Stoutland",
        type: [
          "Normal"
        ],
        height: "1.2 m",
        weight: "61 kg",
        ability: [
          "Intimidate",
          "Sand Rush",
          "Scrappy (HIDDEN)"
        ],
        egg_groups: [
          "Field"
        ],
        base_stats: {
          "HP": 85,
          "Attack": 110,
          "Defense": 90,
          "Special Attack": 45,
          "Special Defense": 90,
          "Speed": 80
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/508.png",
        evolution: {
          "prev": [
            "507",
            "Level 32"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 509,
        name: "Purrloin",
        type: [
          "Dark"
        ],
        height: "0.4 m",
        weight: "10.1 kg",
        ability: [
          "Limber",
          "Unburden",
          "Prankster (HIDDEN)"
        ],
        egg_groups: [
          "Field"
        ],
        base_stats: {
          "HP": 41,
          "Attack": 50,
          "Defense": 37,
          "Special Attack": 50,
          "Special Defense": 37,
          "Speed": 66
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/509.png",
        evolution: {
          "next": [
            [
              "510",
              "Level 20"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 510,
        name: "Liepard",
        type: [
          "Dark"
        ],
        height: "1.1 m",
        weight: "37.5 kg",
        ability: [
          "Limber",
          "Unburden",
          "Prankster (HIDDEN)"
        ],
        egg_groups: [
          "Field"
        ],
        base_stats: {
          "HP": 64,
          "Attack": 88,
          "Defense": 50,
          "Special Attack": 88,
          "Special Defense": 50,
          "Speed": 106
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/510.png",
        evolution: {
          "prev": [
            "509",
            "Level 20"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 511,
        name: "Pansage",
        type: [
          "Grass"
        ],
        height: "0.6 m",
        weight: "10.5 kg",
        ability: [
          "Gluttony",
          "Overgrow (HIDDEN)"
        ],
        egg_groups: [
          "Field"
        ],
        base_stats: {
          "HP": 50,
          "Attack": 53,
          "Defense": 48,
          "Special Attack": 53,
          "Special Defense": 48,
          "Speed": 64
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/511.png",
        evolution: {
          "next": [
            [
              "512",
              "use Leaf Stone"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 512,
        name: "Simisage",
        type: [
          "Grass"
        ],
        height: "1.1 m",
        weight: "30.5 kg",
        ability: [
          "Gluttony",
          "Overgrow (HIDDEN)"
        ],
        egg_groups: [
          "Field"
        ],
        base_stats: {
          "HP": 75,
          "Attack": 98,
          "Defense": 63,
          "Special Attack": 98,
          "Special Defense": 63,
          "Speed": 101
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/512.png",
        evolution: {
          "prev": [
            "511",
            "use Leaf Stone"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 513,
        name: "Pansear",
        type: [
          "Fire"
        ],
        height: "0.6 m",
        weight: "11 kg",
        ability: [
          "Gluttony",
          "Blaze (HIDDEN)"
        ],
        egg_groups: [
          "Field"
        ],
        base_stats: {
          "HP": 50,
          "Attack": 53,
          "Defense": 48,
          "Special Attack": 53,
          "Special Defense": 48,
          "Speed": 64
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/513.png",
        evolution: {
          "next": [
            [
              "514",
              "use Fire Stone"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 514,
        name: "Simisear",
        type: [
          "Fire"
        ],
        height: "1 m",
        weight: "28 kg",
        ability: [
          "Gluttony",
          "Blaze (HIDDEN)"
        ],
        egg_groups: [
          "Field"
        ],
        base_stats: {
          "HP": 75,
          "Attack": 98,
          "Defense": 63,
          "Special Attack": 98,
          "Special Defense": 63,
          "Speed": 101
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/514.png",
        evolution: {
          "prev": [
            "513",
            "use Fire Stone"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 515,
        name: "Panpour",
        type: [
          "Water"
        ],
        height: "0.6 m",
        weight: "13.5 kg",
        ability: [
          "Gluttony",
          "Torrent (HIDDEN)"
        ],
        egg_groups: [
          "Field"
        ],
        base_stats: {
          "HP": 50,
          "Attack": 53,
          "Defense": 48,
          "Special Attack": 53,
          "Special Defense": 48,
          "Speed": 64
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/515.png",
        evolution: {
          "next": [
            [
              "516",
              "use Water Stone"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 516,
        name: "Simipour",
        type: [
          "Water"
        ],
        height: "1 m",
        weight: "29 kg",
        ability: [
          "Gluttony",
          "Torrent (HIDDEN)"
        ],
        egg_groups: [
          "Field"
        ],
        base_stats: {
          "HP": 75,
          "Attack": 98,
          "Defense": 63,
          "Special Attack": 98,
          "Special Defense": 63,
          "Speed": 101
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/516.png",
        evolution: {
          "prev": [
            "515",
            "use Water Stone"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 517,
        name: "Munna",
        type: [
          "Psychic"
        ],
        height: "0.6 m",
        weight: "23.3 kg",
        ability: [
          "Forewarn",
          "Synchronize",
          "Telepathy (HIDDEN)"
        ],
        egg_groups: [
          "Field"
        ],
        base_stats: {
          "HP": 76,
          "Attack": 25,
          "Defense": 45,
          "Special Attack": 67,
          "Special Defense": 55,
          "Speed": 24
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/517.png",
        evolution: {
          "next": [
            [
              "518",
              "use Moon Stone"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 518,
        name: "Musharna",
        type: [
          "Psychic"
        ],
        height: "1.1 m",
        weight: "60.5 kg",
        ability: [
          "Forewarn",
          "Synchronize",
          "Telepathy (HIDDEN)"
        ],
        egg_groups: [
          "Field"
        ],
        base_stats: {
          "HP": 116,
          "Attack": 55,
          "Defense": 85,
          "Special Attack": 107,
          "Special Defense": 95,
          "Speed": 29
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/518.png",
        evolution: {
          "prev": [
            "517",
            "use Moon Stone"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 519,
        name: "Pidove",
        type: [
          "Normal",
          "Flying"
        ],
        height: "0.3 m",
        weight: "2.1 kg",
        ability: [
          "Big Pecks",
          "Super Luck",
          "Rivalry (HIDDEN)"
        ],
        egg_groups: [
          "Flying"
        ],
        base_stats: {
          "HP": 50,
          "Attack": 55,
          "Defense": 50,
          "Special Attack": 36,
          "Special Defense": 30,
          "Speed": 43
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/519.png",
        evolution: {
          "next": [
            [
              "520",
              "Level 21"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 520,
        name: "Tranquill",
        type: [
          "Normal",
          "Flying"
        ],
        height: "0.6 m",
        weight: "15 kg",
        ability: [
          "Big Pecks",
          "Super Luck",
          "Rivalry (HIDDEN)"
        ],
        egg_groups: [
          "Flying"
        ],
        base_stats: {
          "HP": 62,
          "Attack": 77,
          "Defense": 62,
          "Special Attack": 50,
          "Special Defense": 42,
          "Speed": 65
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/520.png",
        evolution: {
          "prev": [
            "519",
            "Level 21"
          ],
          "next": [
            [
              "521",
              "Level 32"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 521,
        name: "Unfezant",
        type: [
          "Normal",
          "Flying"
        ],
        height: "1.2 m",
        weight: "29 kg",
        ability: [
          "Big Pecks",
          "Super Luck",
          "Rivalry (HIDDEN)"
        ],
        egg_groups: [
          "Flying"
        ],
        base_stats: {
          "HP": 80,
          "Attack": 115,
          "Defense": 80,
          "Special Attack": 65,
          "Special Defense": 55,
          "Speed": 93
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/521.png",
        evolution: {
          "prev": [
            "520",
            "Level 32"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 522,
        name: "Blitzle",
        type: [
          "Electric"
        ],
        height: "0.8 m",
        weight: "29.8 kg",
        ability: [
          "Lightning Rod",
          "Motor Drive",
          "Sap Sipper (HIDDEN)"
        ],
        egg_groups: [
          "Field"
        ],
        base_stats: {
          "HP": 45,
          "Attack": 60,
          "Defense": 32,
          "Special Attack": 50,
          "Special Defense": 32,
          "Speed": 76
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/522.png",
        evolution: {
          "next": [
            [
              "523",
              "Level 27"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 523,
        name: "Zebstrika",
        type: [
          "Electric"
        ],
        height: "1.6 m",
        weight: "79.5 kg",
        ability: [
          "Lightning Rod",
          "Motor Drive",
          "Sap Sipper (HIDDEN)"
        ],
        egg_groups: [
          "Field"
        ],
        base_stats: {
          "HP": 75,
          "Attack": 100,
          "Defense": 63,
          "Special Attack": 80,
          "Special Defense": 63,
          "Speed": 116
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/523.png",
        evolution: {
          "prev": [
            "522",
            "Level 27"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 524,
        name: "Roggenrola",
        type: [
          "Rock"
        ],
        height: "0.4 m",
        weight: "18 kg",
        ability: [
          "Sturdy",
          "Weak Armor",
          "Sand Force (HIDDEN)"
        ],
        egg_groups: [
          "Mineral"
        ],
        base_stats: {
          "HP": 55,
          "Attack": 75,
          "Defense": 85,
          "Special Attack": 25,
          "Special Defense": 25,
          "Speed": 15
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/524.png",
        evolution: {
          "next": [
            [
              "525",
              "Level 25"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 525,
        name: "Boldore",
        type: [
          "Rock"
        ],
        height: "0.9 m",
        weight: "102 kg",
        ability: [
          "Sturdy",
          "Weak Armor",
          "Sand Force (HIDDEN)"
        ],
        egg_groups: [
          "Mineral"
        ],
        base_stats: {
          "HP": 70,
          "Attack": 105,
          "Defense": 105,
          "Special Attack": 50,
          "Special Defense": 40,
          "Speed": 20
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/525.png",
        evolution: {
          "prev": [
            "524",
            "Level 25"
          ],
          "next": [
            [
              "526",
              "Trade"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 526,
        name: "Gigalith",
        type: [
          "Rock"
        ],
        height: "1.7 m",
        weight: "260 kg",
        ability: [
          "Sturdy",
          "Sand Stream",
          "Sand Force (HIDDEN)"
        ],
        egg_groups: [
          "Mineral"
        ],
        base_stats: {
          "HP": 85,
          "Attack": 135,
          "Defense": 130,
          "Special Attack": 60,
          "Special Defense": 80,
          "Speed": 25
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/526.png",
        evolution: {
          "prev": [
            "525",
            "Trade"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 527,
        name: "Woobat",
        type: [
          "Psychic",
          "Flying"
        ],
        height: "0.4 m",
        weight: "2.1 kg",
        ability: [
          "Unaware",
          "Klutz",
          "Simple (HIDDEN)"
        ],
        egg_groups: [
          "Flying",
          "Field"
        ],
        base_stats: {
          "HP": 65,
          "Attack": 45,
          "Defense": 43,
          "Special Attack": 55,
          "Special Defense": 43,
          "Speed": 72
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/527.png",
        evolution: {
          "next": [
            [
              "528",
              "high Friendship"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 528,
        name: "Swoobat",
        type: [
          "Psychic",
          "Flying"
        ],
        height: "0.9 m",
        weight: "10.5 kg",
        ability: [
          "Unaware",
          "Klutz",
          "Simple (HIDDEN)"
        ],
        egg_groups: [
          "Flying",
          "Field"
        ],
        base_stats: {
          "HP": 67,
          "Attack": 57,
          "Defense": 55,
          "Special Attack": 77,
          "Special Defense": 55,
          "Speed": 114
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/528.png",
        evolution: {
          "prev": [
            "527",
            "high Friendship"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 529,
        name: "Drilbur",
        type: [
          "Ground"
        ],
        height: "0.3 m",
        weight: "8.5 kg",
        ability: [
          "Sand Rush",
          "Sand Force",
          "Mold Breaker (HIDDEN)"
        ],
        egg_groups: [
          "Field"
        ],
        base_stats: {
          "HP": 60,
          "Attack": 85,
          "Defense": 40,
          "Special Attack": 30,
          "Special Defense": 45,
          "Speed": 68
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/529.png",
        evolution: {
          "next": [
            [
              "530",
              "Level 31"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 530,
        name: "Excadrill",
        type: [
          "Ground",
          "Steel"
        ],
        height: "0.7 m",
        weight: "40.4 kg",
        ability: [
          "Sand Rush",
          "Sand Force",
          "Mold Breaker (HIDDEN)"
        ],
        egg_groups: [
          "Field"
        ],
        base_stats: {
          "HP": 110,
          "Attack": 135,
          "Defense": 60,
          "Special Attack": 50,
          "Special Defense": 65,
          "Speed": 88
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/530.png",
        evolution: {
          "prev": [
            "529",
            "Level 31"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 531,
        name: "Audino",
        type: [
          "Normal"
        ],
        height: "1.1 m",
        weight: "31 kg",
        ability: [
          "Healer",
          "Regenerator",
          "Klutz (HIDDEN)"
        ],
        egg_groups: [
          "Fairy"
        ],
        base_stats: {
          "HP": 103,
          "Attack": 60,
          "Defense": 86,
          "Special Attack": 60,
          "Special Defense": 86,
          "Speed": 50
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/531.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 532,
        name: "Timburr",
        type: [
          "Fighting"
        ],
        height: "0.6 m",
        weight: "12.5 kg",
        ability: [
          "Guts",
          "Sheer Force",
          "Iron Fist (HIDDEN)"
        ],
        egg_groups: [
          "Human-Like"
        ],
        base_stats: {
          "HP": 75,
          "Attack": 80,
          "Defense": 55,
          "Special Attack": 25,
          "Special Defense": 35,
          "Speed": 35
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/532.png",
        evolution: {
          "next": [
            [
              "533",
              "Level 25"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 533,
        name: "Gurdurr",
        type: [
          "Fighting"
        ],
        height: "1.2 m",
        weight: "40 kg",
        ability: [
          "Guts",
          "Sheer Force",
          "Iron Fist (HIDDEN)"
        ],
        egg_groups: [
          "Human-Like"
        ],
        base_stats: {
          "HP": 85,
          "Attack": 105,
          "Defense": 85,
          "Special Attack": 40,
          "Special Defense": 50,
          "Speed": 40
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/533.png",
        evolution: {
          "prev": [
            "532",
            "Level 25"
          ],
          "next": [
            [
              "534",
              "Trade"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 534,
        name: "Conkeldurr",
        type: [
          "Fighting"
        ],
        height: "1.4 m",
        weight: "87 kg",
        ability: [
          "Guts",
          "Sheer Force",
          "Iron Fist (HIDDEN)"
        ],
        egg_groups: [
          "Human-Like"
        ],
        base_stats: {
          "HP": 105,
          "Attack": 140,
          "Defense": 95,
          "Special Attack": 55,
          "Special Defense": 65,
          "Speed": 45
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/534.png",
        evolution: {
          "prev": [
            "533",
            "Trade"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 535,
        name: "Tympole",
        type: [
          "Water"
        ],
        height: "0.5 m",
        weight: "4.5 kg",
        ability: [
          "Swift Swim",
          "Hydration",
          "Water Absorb (HIDDEN)"
        ],
        egg_groups: [
          "Water 1"
        ],
        base_stats: {
          "HP": 50,
          "Attack": 50,
          "Defense": 40,
          "Special Attack": 50,
          "Special Defense": 40,
          "Speed": 64
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/535.png",
        evolution: {
          "next": [
            [
              "536",
              "Level 25"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 536,
        name: "Palpitoad",
        type: [
          "Water",
          "Ground"
        ],
        height: "0.8 m",
        weight: "17 kg",
        ability: [
          "Swift Swim",
          "Hydration",
          "Water Absorb (HIDDEN)"
        ],
        egg_groups: [
          "Water 1"
        ],
        base_stats: {
          "HP": 75,
          "Attack": 65,
          "Defense": 55,
          "Special Attack": 65,
          "Special Defense": 55,
          "Speed": 69
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/536.png",
        evolution: {
          "prev": [
            "535",
            "Level 25"
          ],
          "next": [
            [
              "537",
              "Level 36"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 537,
        name: "Seismitoad",
        type: [
          "Water",
          "Ground"
        ],
        height: "1.5 m",
        weight: "62 kg",
        ability: [
          "Swift Swim",
          "Poison Touch",
          "Water Absorb (HIDDEN)"
        ],
        egg_groups: [
          "Water 1"
        ],
        base_stats: {
          "HP": 105,
          "Attack": 95,
          "Defense": 75,
          "Special Attack": 85,
          "Special Defense": 75,
          "Speed": 74
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/537.png",
        evolution: {
          "prev": [
            "536",
            "Level 36"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 538,
        name: "Throh",
        type: [
          "Fighting"
        ],
        height: "1.3 m",
        weight: "55.5 kg",
        ability: [
          "Guts",
          "Inner Focus",
          "Mold Breaker (HIDDEN)"
        ],
        egg_groups: [
          "Human-Like"
        ],
        base_stats: {
          "HP": 120,
          "Attack": 100,
          "Defense": 85,
          "Special Attack": 30,
          "Special Defense": 85,
          "Speed": 45
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/538.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 539,
        name: "Sawk",
        type: [
          "Fighting"
        ],
        height: "1.4 m",
        weight: "51 kg",
        ability: [
          "Sturdy",
          "Inner Focus",
          "Mold Breaker (HIDDEN)"
        ],
        egg_groups: [
          "Human-Like"
        ],
        base_stats: {
          "HP": 75,
          "Attack": 125,
          "Defense": 75,
          "Special Attack": 30,
          "Special Defense": 75,
          "Speed": 85
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/539.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 540,
        name: "Sewaddle",
        type: [
          "Bug",
          "Grass"
        ],
        height: "0.3 m",
        weight: "2.5 kg",
        ability: [
          "Swarm",
          "Chlorophyll",
          "Overcoat (HIDDEN)"
        ],
        egg_groups: [
          "Bug"
        ],
        base_stats: {
          "HP": 45,
          "Attack": 53,
          "Defense": 70,
          "Special Attack": 40,
          "Special Defense": 60,
          "Speed": 42
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/540.png",
        evolution: {
          "next": [
            [
              "541",
              "Level 20"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 541,
        name: "Swadloon",
        type: [
          "Bug",
          "Grass"
        ],
        height: "0.5 m",
        weight: "7.3 kg",
        ability: [
          "Leaf Guard",
          "Chlorophyll",
          "Overcoat (HIDDEN)"
        ],
        egg_groups: [
          "Bug"
        ],
        base_stats: {
          "HP": 55,
          "Attack": 63,
          "Defense": 90,
          "Special Attack": 50,
          "Special Defense": 80,
          "Speed": 42
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/541.png",
        evolution: {
          "prev": [
            "540",
            "Level 20"
          ],
          "next": [
            [
              "542",
              "high Friendship"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 542,
        name: "Leavanny",
        type: [
          "Bug",
          "Grass"
        ],
        height: "1.2 m",
        weight: "20.5 kg",
        ability: [
          "Swarm",
          "Chlorophyll",
          "Overcoat (HIDDEN)"
        ],
        egg_groups: [
          "Bug"
        ],
        base_stats: {
          "HP": 75,
          "Attack": 103,
          "Defense": 80,
          "Special Attack": 70,
          "Special Defense": 80,
          "Speed": 92
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/542.png",
        evolution: {
          "prev": [
            "541",
            "high Friendship"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 543,
        name: "Venipede",
        type: [
          "Bug",
          "Poison"
        ],
        height: "0.4 m",
        weight: "5.3 kg",
        ability: [
          "Poison Point",
          "Swarm",
          "Speed Boost (HIDDEN)"
        ],
        egg_groups: [
          "Bug"
        ],
        base_stats: {
          "HP": 30,
          "Attack": 45,
          "Defense": 59,
          "Special Attack": 30,
          "Special Defense": 39,
          "Speed": 57
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/543.png",
        evolution: {
          "next": [
            [
              "544",
              "Level 22"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 544,
        name: "Whirlipede",
        type: [
          "Bug",
          "Poison"
        ],
        height: "1.2 m",
        weight: "58.5 kg",
        ability: [
          "Poison Point",
          "Swarm",
          "Speed Boost (HIDDEN)"
        ],
        egg_groups: [
          "Bug"
        ],
        base_stats: {
          "HP": 40,
          "Attack": 55,
          "Defense": 99,
          "Special Attack": 40,
          "Special Defense": 79,
          "Speed": 47
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/544.png",
        evolution: {
          "prev": [
            "543",
            "Level 22"
          ],
          "next": [
            [
              "545",
              "Level 30"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 545,
        name: "Scolipede",
        type: [
          "Bug",
          "Poison"
        ],
        height: "2.5 m",
        weight: "200.5 kg",
        ability: [
          "Poison Point",
          "Swarm",
          "Speed Boost (HIDDEN)"
        ],
        egg_groups: [
          "Bug"
        ],
        base_stats: {
          "HP": 60,
          "Attack": 100,
          "Defense": 89,
          "Special Attack": 55,
          "Special Defense": 69,
          "Speed": 112
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/545.png",
        evolution: {
          "prev": [
            "544",
            "Level 30"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 546,
        name: "Cottonee",
        type: [
          "Grass",
          "Fairy"
        ],
        height: "0.3 m",
        weight: "0.6 kg",
        ability: [
          "Prankster",
          "Infiltrator",
          "Chlorophyll (HIDDEN)"
        ],
        egg_groups: [
          "Fairy",
          "Grass"
        ],
        base_stats: {
          "HP": 40,
          "Attack": 27,
          "Defense": 60,
          "Special Attack": 37,
          "Special Defense": 50,
          "Speed": 66
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/546.png",
        evolution: {
          "next": [
            [
              "547",
              "use Sun Stone"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 547,
        name: "Whimsicott",
        type: [
          "Grass",
          "Fairy"
        ],
        height: "0.7 m",
        weight: "6.6 kg",
        ability: [
          "Prankster",
          "Infiltrator",
          "Chlorophyll (HIDDEN)"
        ],
        egg_groups: [
          "Fairy",
          "Grass"
        ],
        base_stats: {
          "HP": 60,
          "Attack": 67,
          "Defense": 85,
          "Special Attack": 77,
          "Special Defense": 75,
          "Speed": 116
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/547.png",
        evolution: {
          "prev": [
            "546",
            "use Sun Stone"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 548,
        name: "Petilil",
        type: [
          "Grass"
        ],
        height: "0.5 m",
        weight: "6.6 kg",
        ability: [
          "Chlorophyll",
          "Own Tempo",
          "Leaf Guard (HIDDEN)"
        ],
        egg_groups: [
          "Grass"
        ],
        base_stats: {
          "HP": 45,
          "Attack": 35,
          "Defense": 50,
          "Special Attack": 70,
          "Special Defense": 50,
          "Speed": 30
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/548.png",
        evolution: {
          "next": [
            [
              "549",
              "use Sun Stone"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 549,
        name: "Lilligant",
        type: [
          "Grass"
        ],
        height: "1.1 m",
        weight: "16.3 kg",
        ability: [
          "Chlorophyll",
          "Own Tempo",
          "Leaf Guard (HIDDEN)"
        ],
        egg_groups: [
          "Grass"
        ],
        base_stats: {
          "HP": 70,
          "Attack": 60,
          "Defense": 75,
          "Special Attack": 110,
          "Special Defense": 75,
          "Speed": 90
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/549.png",
        evolution: {
          "prev": [
            "548",
            "use Sun Stone"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 550,
        name: "Basculin",
        type: [
          "Water"
        ],
        height: "1 m",
        weight: "18 kg",
        ability: [
          "Reckless",
          "Adaptability",
          "Mold Breaker (HIDDEN)"
        ],
        egg_groups: [
          "Water 2"
        ],
        base_stats: {
          "HP": 70,
          "Attack": 92,
          "Defense": 65,
          "Special Attack": 80,
          "Special Defense": 55,
          "Speed": 98
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/550.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 551,
        name: "Sandile",
        type: [
          "Ground",
          "Dark"
        ],
        height: "0.7 m",
        weight: "15.2 kg",
        ability: [
          "Intimidate",
          "Moxie",
          "Anger Point (HIDDEN)"
        ],
        egg_groups: [
          "Field"
        ],
        base_stats: {
          "HP": 50,
          "Attack": 72,
          "Defense": 35,
          "Special Attack": 35,
          "Special Defense": 35,
          "Speed": 65
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/551.png",
        evolution: {
          "next": [
            [
              "552",
              "Level 29"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 552,
        name: "Krokorok",
        type: [
          "Ground",
          "Dark"
        ],
        height: "1 m",
        weight: "33.4 kg",
        ability: [
          "Intimidate",
          "Moxie",
          "Anger Point (HIDDEN)"
        ],
        egg_groups: [
          "Field"
        ],
        base_stats: {
          "HP": 60,
          "Attack": 82,
          "Defense": 45,
          "Special Attack": 45,
          "Special Defense": 45,
          "Speed": 74
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/552.png",
        evolution: {
          "prev": [
            "551",
            "Level 29"
          ],
          "next": [
            [
              "553",
              "Level 40"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 553,
        name: "Krookodile",
        type: [
          "Ground",
          "Dark"
        ],
        height: "1.5 m",
        weight: "96.3 kg",
        ability: [
          "Intimidate",
          "Moxie",
          "Anger Point (HIDDEN)"
        ],
        egg_groups: [
          "Field"
        ],
        base_stats: {
          "HP": 95,
          "Attack": 117,
          "Defense": 80,
          "Special Attack": 65,
          "Special Defense": 70,
          "Speed": 92
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/553.png",
        evolution: {
          "prev": [
            "552",
            "Level 40"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 554,
        name: "Darumaka",
        type: [
          "Fire"
        ],
        height: "0.6 m",
        weight: "37.5 kg",
        ability: [
          "Hustle",
          "Inner Focus (HIDDEN)"
        ],
        egg_groups: [
          "Field"
        ],
        base_stats: {
          "HP": 70,
          "Attack": 90,
          "Defense": 45,
          "Special Attack": 15,
          "Special Defense": 45,
          "Speed": 50
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/554.png",
        evolution: {
          "next": [
            [
              "555",
              "use Ice Stone"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 555,
        name: "Darmanitan",
        type: [
          "Fire"
        ],
        height: "1.3 m",
        weight: "92.9 kg",
        ability: [
          "Sheer Force",
          "Zen Mode (HIDDEN)"
        ],
        egg_groups: [
          "Field"
        ],
        base_stats: {
          "HP": 105,
          "Attack": 140,
          "Defense": 55,
          "Special Attack": 30,
          "Special Defense": 55,
          "Speed": 95
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/555.png",
        evolution: {
          "prev": [
            "554",
            "use Ice Stone"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 556,
        name: "Maractus",
        type: [
          "Grass"
        ],
        height: "1 m",
        weight: "28 kg",
        ability: [
          "Water Absorb",
          "Chlorophyll",
          "Storm Drain (HIDDEN)"
        ],
        egg_groups: [
          "Grass"
        ],
        base_stats: {
          "HP": 75,
          "Attack": 86,
          "Defense": 67,
          "Special Attack": 106,
          "Special Defense": 67,
          "Speed": 60
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/556.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 557,
        name: "Dwebble",
        type: [
          "Bug",
          "Rock"
        ],
        height: "0.3 m",
        weight: "14.5 kg",
        ability: [
          "Sturdy",
          "Shell Armor",
          "Weak Armor (HIDDEN)"
        ],
        egg_groups: [
          "Bug",
          "Mineral"
        ],
        base_stats: {
          "HP": 50,
          "Attack": 65,
          "Defense": 85,
          "Special Attack": 35,
          "Special Defense": 35,
          "Speed": 55
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/557.png",
        evolution: {
          "next": [
            [
              "558",
              "Level 34"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 558,
        name: "Crustle",
        type: [
          "Bug",
          "Rock"
        ],
        height: "1.4 m",
        weight: "200 kg",
        ability: [
          "Sturdy",
          "Shell Armor",
          "Weak Armor (HIDDEN)"
        ],
        egg_groups: [
          "Bug",
          "Mineral"
        ],
        base_stats: {
          "HP": 70,
          "Attack": 105,
          "Defense": 125,
          "Special Attack": 65,
          "Special Defense": 75,
          "Speed": 45
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/558.png",
        evolution: {
          "prev": [
            "557",
            "Level 34"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 559,
        name: "Scraggy",
        type: [
          "Dark",
          "Fighting"
        ],
        height: "0.6 m",
        weight: "11.8 kg",
        ability: [
          "Shed Skin",
          "Moxie",
          "Intimidate (HIDDEN)"
        ],
        egg_groups: [
          "Field",
          "Dragon"
        ],
        base_stats: {
          "HP": 50,
          "Attack": 75,
          "Defense": 70,
          "Special Attack": 35,
          "Special Defense": 70,
          "Speed": 48
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/559.png",
        evolution: {
          "next": [
            [
              "560",
              "Level 39"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 560,
        name: "Scrafty",
        type: [
          "Dark",
          "Fighting"
        ],
        height: "1.1 m",
        weight: "30 kg",
        ability: [
          "Shed Skin",
          "Moxie",
          "Intimidate (HIDDEN)"
        ],
        egg_groups: [
          "Field",
          "Dragon"
        ],
        base_stats: {
          "HP": 65,
          "Attack": 90,
          "Defense": 115,
          "Special Attack": 45,
          "Special Defense": 115,
          "Speed": 58
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/560.png",
        evolution: {
          "prev": [
            "559",
            "Level 39"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 561,
        name: "Sigilyph",
        type: [
          "Psychic",
          "Flying"
        ],
        height: "1.4 m",
        weight: "14 kg",
        ability: [
          "Wonder Skin",
          "Magic Guard",
          "Tinted Lens (HIDDEN)"
        ],
        egg_groups: [
          "Flying"
        ],
        base_stats: {
          "HP": 72,
          "Attack": 58,
          "Defense": 80,
          "Special Attack": 103,
          "Special Defense": 80,
          "Speed": 97
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/561.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 562,
        name: "Yamask",
        type: [
          "Ghost"
        ],
        height: "0.5 m",
        weight: "1.5 kg",
        ability: [
          "Mummy"
        ],
        egg_groups: [
          "Mineral",
          "Amorphous"
        ],
        base_stats: {
          "HP": 38,
          "Attack": 30,
          "Defense": 85,
          "Special Attack": 55,
          "Special Defense": 65,
          "Speed": 30
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/562.png",
        evolution: {
          "next": [
            [
              "867",
              "near Dusty Bowl"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 563,
        name: "Cofagrigus",
        type: [
          "Ghost"
        ],
        height: "1.7 m",
        weight: "76.5 kg",
        ability: [
          "Mummy"
        ],
        egg_groups: [
          "Mineral",
          "Amorphous"
        ],
        base_stats: {
          "HP": 58,
          "Attack": 50,
          "Defense": 145,
          "Special Attack": 95,
          "Special Defense": 105,
          "Speed": 30
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/563.png",
        evolution: {
          "prev": [
            "562",
            "Level 34"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 564,
        name: "Tirtouga",
        type: [
          "Water",
          "Rock"
        ],
        height: "0.7 m",
        weight: "16.5 kg",
        ability: [
          "Solid Rock",
          "Sturdy",
          "Swift Swim (HIDDEN)"
        ],
        egg_groups: [
          "Water 1",
          "Water 3"
        ],
        base_stats: {
          "HP": 54,
          "Attack": 78,
          "Defense": 103,
          "Special Attack": 53,
          "Special Defense": 45,
          "Speed": 22
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/564.png",
        evolution: {
          "next": [
            [
              "565",
              "Level 37"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 565,
        name: "Carracosta",
        type: [
          "Water",
          "Rock"
        ],
        height: "1.2 m",
        weight: "81 kg",
        ability: [
          "Solid Rock",
          "Sturdy",
          "Swift Swim (HIDDEN)"
        ],
        egg_groups: [
          "Water 1",
          "Water 3"
        ],
        base_stats: {
          "HP": 74,
          "Attack": 108,
          "Defense": 133,
          "Special Attack": 83,
          "Special Defense": 65,
          "Speed": 32
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/565.png",
        evolution: {
          "prev": [
            "564",
            "Level 37"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 566,
        name: "Archen",
        type: [
          "Rock",
          "Flying"
        ],
        height: "0.5 m",
        weight: "9.5 kg",
        ability: [
          "Defeatist"
        ],
        egg_groups: [
          "Flying",
          "Water 3"
        ],
        base_stats: {
          "HP": 55,
          "Attack": 112,
          "Defense": 45,
          "Special Attack": 74,
          "Special Defense": 45,
          "Speed": 70
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/566.png",
        evolution: {
          "next": [
            [
              "567",
              "Level 37"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 567,
        name: "Archeops",
        type: [
          "Rock",
          "Flying"
        ],
        height: "1.4 m",
        weight: "32 kg",
        ability: [
          "Defeatist"
        ],
        egg_groups: [
          "Flying",
          "Water 3"
        ],
        base_stats: {
          "HP": 75,
          "Attack": 140,
          "Defense": 65,
          "Special Attack": 112,
          "Special Defense": 65,
          "Speed": 110
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/567.png",
        evolution: {
          "prev": [
            "566",
            "Level 37"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 568,
        name: "Trubbish",
        type: [
          "Poison"
        ],
        height: "0.6 m",
        weight: "31 kg",
        ability: [
          "Stench",
          "Sticky Hold",
          "Aftermath (HIDDEN)"
        ],
        egg_groups: [
          "Mineral"
        ],
        base_stats: {
          "HP": 50,
          "Attack": 50,
          "Defense": 62,
          "Special Attack": 40,
          "Special Defense": 62,
          "Speed": 65
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/568.png",
        evolution: {
          "next": [
            [
              "569",
              "Level 36"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 569,
        name: "Garbodor",
        type: [
          "Poison"
        ],
        height: "1.9 m",
        weight: "107.3 kg",
        ability: [
          "Stench",
          "Weak Armor",
          "Aftermath (HIDDEN)"
        ],
        egg_groups: [
          "Mineral"
        ],
        base_stats: {
          "HP": 80,
          "Attack": 95,
          "Defense": 82,
          "Special Attack": 60,
          "Special Defense": 82,
          "Speed": 75
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/569.png",
        evolution: {
          "prev": [
            "568",
            "Level 36"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 570,
        name: "Zorua",
        type: [
          "Dark"
        ],
        height: "0.7 m",
        weight: "12.5 kg",
        ability: [
          "Illusion"
        ],
        egg_groups: [
          "Field"
        ],
        base_stats: {
          "HP": 40,
          "Attack": 65,
          "Defense": 40,
          "Special Attack": 80,
          "Special Defense": 40,
          "Speed": 65
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/570.png",
        evolution: {
          "next": [
            [
              "571",
              "Level 30"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 571,
        name: "Zoroark",
        type: [
          "Dark"
        ],
        height: "1.6 m",
        weight: "81.1 kg",
        ability: [
          "Illusion"
        ],
        egg_groups: [
          "Field"
        ],
        base_stats: {
          "HP": 60,
          "Attack": 105,
          "Defense": 60,
          "Special Attack": 120,
          "Special Defense": 60,
          "Speed": 105
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/571.png",
        evolution: {
          "prev": [
            "570",
            "Level 30"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 572,
        name: "Minccino",
        type: [
          "Normal"
        ],
        height: "0.4 m",
        weight: "5.8 kg",
        ability: [
          "Cute Charm",
          "Technician",
          "Skill Link (HIDDEN)"
        ],
        egg_groups: [
          "Field"
        ],
        base_stats: {
          "HP": 55,
          "Attack": 50,
          "Defense": 40,
          "Special Attack": 40,
          "Special Defense": 40,
          "Speed": 75
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/572.png",
        evolution: {
          "next": [
            [
              "573",
              "use Shiny Stone"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 573,
        name: "Cinccino",
        type: [
          "Normal"
        ],
        height: "0.5 m",
        weight: "7.5 kg",
        ability: [
          "Cute Charm",
          "Technician",
          "Skill Link (HIDDEN)"
        ],
        egg_groups: [
          "Field"
        ],
        base_stats: {
          "HP": 75,
          "Attack": 95,
          "Defense": 60,
          "Special Attack": 65,
          "Special Defense": 60,
          "Speed": 115
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/573.png",
        evolution: {
          "prev": [
            "572",
            "use Shiny Stone"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 574,
        name: "Gothita",
        type: [
          "Psychic"
        ],
        height: "0.4 m",
        weight: "5.8 kg",
        ability: [
          "Frisk",
          "Competitive",
          "Shadow Tag (HIDDEN)"
        ],
        egg_groups: [
          "Human-Like"
        ],
        base_stats: {
          "HP": 45,
          "Attack": 30,
          "Defense": 50,
          "Special Attack": 55,
          "Special Defense": 65,
          "Speed": 45
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/574.png",
        evolution: {
          "next": [
            [
              "575",
              "Level 32"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 575,
        name: "Gothorita",
        type: [
          "Psychic"
        ],
        height: "0.7 m",
        weight: "18 kg",
        ability: [
          "Frisk",
          "Competitive",
          "Shadow Tag (HIDDEN)"
        ],
        egg_groups: [
          "Human-Like"
        ],
        base_stats: {
          "HP": 60,
          "Attack": 45,
          "Defense": 70,
          "Special Attack": 75,
          "Special Defense": 85,
          "Speed": 55
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/575.png",
        evolution: {
          "prev": [
            "574",
            "Level 32"
          ],
          "next": [
            [
              "576",
              "Level 41"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 576,
        name: "Gothitelle",
        type: [
          "Psychic"
        ],
        height: "1.5 m",
        weight: "44 kg",
        ability: [
          "Frisk",
          "Competitive",
          "Shadow Tag (HIDDEN)"
        ],
        egg_groups: [
          "Human-Like"
        ],
        base_stats: {
          "HP": 70,
          "Attack": 55,
          "Defense": 95,
          "Special Attack": 95,
          "Special Defense": 110,
          "Speed": 65
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/576.png",
        evolution: {
          "prev": [
            "575",
            "Level 41"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 577,
        name: "Solosis",
        type: [
          "Psychic"
        ],
        height: "0.3 m",
        weight: "1 kg",
        ability: [
          "Overcoat",
          "Magic Guard",
          "Regenerator (HIDDEN)"
        ],
        egg_groups: [
          "Amorphous"
        ],
        base_stats: {
          "HP": 45,
          "Attack": 30,
          "Defense": 40,
          "Special Attack": 105,
          "Special Defense": 50,
          "Speed": 20
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/577.png",
        evolution: {
          "next": [
            [
              "578",
              "Level 32"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 578,
        name: "Duosion",
        type: [
          "Psychic"
        ],
        height: "0.6 m",
        weight: "8 kg",
        ability: [
          "Overcoat",
          "Magic Guard",
          "Regenerator (HIDDEN)"
        ],
        egg_groups: [
          "Amorphous"
        ],
        base_stats: {
          "HP": 65,
          "Attack": 40,
          "Defense": 50,
          "Special Attack": 125,
          "Special Defense": 60,
          "Speed": 30
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/578.png",
        evolution: {
          "prev": [
            "577",
            "Level 32"
          ],
          "next": [
            [
              "579",
              "Level 41"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 579,
        name: "Reuniclus",
        type: [
          "Psychic"
        ],
        height: "1 m",
        weight: "20.1 kg",
        ability: [
          "Overcoat",
          "Magic Guard",
          "Regenerator (HIDDEN)"
        ],
        egg_groups: [
          "Amorphous"
        ],
        base_stats: {
          "HP": 110,
          "Attack": 65,
          "Defense": 75,
          "Special Attack": 125,
          "Special Defense": 85,
          "Speed": 30
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/579.png",
        evolution: {
          "prev": [
            "578",
            "Level 41"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 580,
        name: "Ducklett",
        type: [
          "Water",
          "Flying"
        ],
        height: "0.5 m",
        weight: "5.5 kg",
        ability: [
          "Keen Eye",
          "Big Pecks",
          "Hydration (HIDDEN)"
        ],
        egg_groups: [
          "Water 1",
          "Flying"
        ],
        base_stats: {
          "HP": 62,
          "Attack": 44,
          "Defense": 50,
          "Special Attack": 44,
          "Special Defense": 50,
          "Speed": 55
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/580.png",
        evolution: {
          "next": [
            [
              "581",
              "Level 35"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 581,
        name: "Swanna",
        type: [
          "Water",
          "Flying"
        ],
        height: "1.3 m",
        weight: "24.2 kg",
        ability: [
          "Keen Eye",
          "Big Pecks",
          "Hydration (HIDDEN)"
        ],
        egg_groups: [
          "Water 1",
          "Flying"
        ],
        base_stats: {
          "HP": 75,
          "Attack": 87,
          "Defense": 63,
          "Special Attack": 87,
          "Special Defense": 63,
          "Speed": 98
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/581.png",
        evolution: {
          "prev": [
            "580",
            "Level 35"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 582,
        name: "Vanillite",
        type: [
          "Ice"
        ],
        height: "0.4 m",
        weight: "5.7 kg",
        ability: [
          "Ice Body",
          "Snow Cloak",
          "Weak Armor (HIDDEN)"
        ],
        egg_groups: [
          "Mineral"
        ],
        base_stats: {
          "HP": 36,
          "Attack": 50,
          "Defense": 50,
          "Special Attack": 65,
          "Special Defense": 60,
          "Speed": 44
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/582.png",
        evolution: {
          "next": [
            [
              "583",
              "Level 35"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 583,
        name: "Vanillish",
        type: [
          "Ice"
        ],
        height: "1.1 m",
        weight: "41 kg",
        ability: [
          "Ice Body",
          "Snow Cloak",
          "Weak Armor (HIDDEN)"
        ],
        egg_groups: [
          "Mineral"
        ],
        base_stats: {
          "HP": 51,
          "Attack": 65,
          "Defense": 65,
          "Special Attack": 80,
          "Special Defense": 75,
          "Speed": 59
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/583.png",
        evolution: {
          "prev": [
            "582",
            "Level 35"
          ],
          "next": [
            [
              "584",
              "Level 47"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 584,
        name: "Vanilluxe",
        type: [
          "Ice"
        ],
        height: "1.3 m",
        weight: "57.5 kg",
        ability: [
          "Ice Body",
          "Snow Warning",
          "Weak Armor (HIDDEN)"
        ],
        egg_groups: [
          "Mineral"
        ],
        base_stats: {
          "HP": 71,
          "Attack": 95,
          "Defense": 85,
          "Special Attack": 110,
          "Special Defense": 95,
          "Speed": 79
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/584.png",
        evolution: {
          "prev": [
            "583",
            "Level 47"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 585,
        name: "Deerling",
        type: [
          "Normal",
          "Grass"
        ],
        height: "0.6 m",
        weight: "19.5 kg",
        ability: [
          "Chlorophyll",
          "Sap Sipper",
          "Serene Grace (HIDDEN)"
        ],
        egg_groups: [
          "Field"
        ],
        base_stats: {
          "HP": 60,
          "Attack": 60,
          "Defense": 50,
          "Special Attack": 40,
          "Special Defense": 50,
          "Speed": 75
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/585.png",
        evolution: {
          "next": [
            [
              "586",
              "Level 34"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 586,
        name: "Sawsbuck",
        type: [
          "Normal",
          "Grass"
        ],
        height: "1.9 m",
        weight: "92.5 kg",
        ability: [
          "Chlorophyll",
          "Sap Sipper",
          "Serene Grace (HIDDEN)"
        ],
        egg_groups: [
          "Field"
        ],
        base_stats: {
          "HP": 80,
          "Attack": 100,
          "Defense": 70,
          "Special Attack": 60,
          "Special Defense": 70,
          "Speed": 95
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/586.png",
        evolution: {
          "prev": [
            "585",
            "Level 34"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 587,
        name: "Emolga",
        type: [
          "Electric",
          "Flying"
        ],
        height: "0.4 m",
        weight: "5 kg",
        ability: [
          "Static",
          "Motor Drive (HIDDEN)"
        ],
        egg_groups: [
          "Field"
        ],
        base_stats: {
          "HP": 55,
          "Attack": 75,
          "Defense": 60,
          "Special Attack": 75,
          "Special Defense": 60,
          "Speed": 103
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/587.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 588,
        name: "Karrablast",
        type: [
          "Bug"
        ],
        height: "0.5 m",
        weight: "5.9 kg",
        ability: [
          "Swarm",
          "Shed Skin",
          "No Guard (HIDDEN)"
        ],
        egg_groups: [
          "Bug"
        ],
        base_stats: {
          "HP": 50,
          "Attack": 75,
          "Defense": 45,
          "Special Attack": 40,
          "Special Defense": 45,
          "Speed": 60
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/588.png",
        evolution: {
          "next": [
            [
              "589",
              "Trade with Shelmet"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 589,
        name: "Escavalier",
        type: [
          "Bug",
          "Steel"
        ],
        height: "1 m",
        weight: "33 kg",
        ability: [
          "Swarm",
          "Shell Armor",
          "Overcoat (HIDDEN)"
        ],
        egg_groups: [
          "Bug"
        ],
        base_stats: {
          "HP": 70,
          "Attack": 135,
          "Defense": 105,
          "Special Attack": 60,
          "Special Defense": 105,
          "Speed": 20
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/589.png",
        evolution: {
          "prev": [
            "588",
            "Trade with Shelmet"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 590,
        name: "Foongus",
        type: [
          "Grass",
          "Poison"
        ],
        height: "0.2 m",
        weight: "1 kg",
        ability: [
          "Effect Spore",
          "Regenerator (HIDDEN)"
        ],
        egg_groups: [
          "Grass"
        ],
        base_stats: {
          "HP": 69,
          "Attack": 55,
          "Defense": 45,
          "Special Attack": 55,
          "Special Defense": 55,
          "Speed": 15
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/590.png",
        evolution: {
          "next": [
            [
              "591",
              "Level 39"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 591,
        name: "Amoonguss",
        type: [
          "Grass",
          "Poison"
        ],
        height: "0.6 m",
        weight: "10.5 kg",
        ability: [
          "Effect Spore",
          "Regenerator (HIDDEN)"
        ],
        egg_groups: [
          "Grass"
        ],
        base_stats: {
          "HP": 114,
          "Attack": 85,
          "Defense": 70,
          "Special Attack": 85,
          "Special Defense": 80,
          "Speed": 30
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/591.png",
        evolution: {
          "prev": [
            "590",
            "Level 39"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 592,
        name: "Frillish",
        type: [
          "Water",
          "Ghost"
        ],
        height: "1.2 m",
        weight: "33 kg",
        ability: [
          "Water Absorb",
          "Cursed Body",
          "Damp (HIDDEN)"
        ],
        egg_groups: [
          "Amorphous"
        ],
        base_stats: {
          "HP": 55,
          "Attack": 40,
          "Defense": 50,
          "Special Attack": 65,
          "Special Defense": 85,
          "Speed": 40
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/592.png",
        evolution: {
          "next": [
            [
              "593",
              "Level 40"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 593,
        name: "Jellicent",
        type: [
          "Water",
          "Ghost"
        ],
        height: "2.2 m",
        weight: "135 kg",
        ability: [
          "Water Absorb",
          "Cursed Body",
          "Damp (HIDDEN)"
        ],
        egg_groups: [
          "Amorphous"
        ],
        base_stats: {
          "HP": 100,
          "Attack": 60,
          "Defense": 70,
          "Special Attack": 85,
          "Special Defense": 105,
          "Speed": 60
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/593.png",
        evolution: {
          "prev": [
            "592",
            "Level 40"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 594,
        name: "Alomomola",
        type: [
          "Water"
        ],
        height: "1.2 m",
        weight: "31.6 kg",
        ability: [
          "Healer",
          "Hydration",
          "Regenerator (HIDDEN)"
        ],
        egg_groups: [
          "Water 1",
          "Water 2"
        ],
        base_stats: {
          "HP": 165,
          "Attack": 75,
          "Defense": 80,
          "Special Attack": 40,
          "Special Defense": 45,
          "Speed": 65
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/594.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 595,
        name: "Joltik",
        type: [
          "Bug",
          "Electric"
        ],
        height: "0.1 m",
        weight: "0.6 kg",
        ability: [
          "Compound Eyes",
          "Unnerve",
          "Swarm (HIDDEN)"
        ],
        egg_groups: [
          "Bug"
        ],
        base_stats: {
          "HP": 50,
          "Attack": 47,
          "Defense": 50,
          "Special Attack": 57,
          "Special Defense": 50,
          "Speed": 65
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/595.png",
        evolution: {
          "next": [
            [
              "596",
              "Level 36"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 596,
        name: "Galvantula",
        type: [
          "Bug",
          "Electric"
        ],
        height: "0.8 m",
        weight: "14.3 kg",
        ability: [
          "Compound Eyes",
          "Unnerve",
          "Swarm (HIDDEN)"
        ],
        egg_groups: [
          "Bug"
        ],
        base_stats: {
          "HP": 70,
          "Attack": 77,
          "Defense": 60,
          "Special Attack": 97,
          "Special Defense": 60,
          "Speed": 108
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/596.png",
        evolution: {
          "prev": [
            "595",
            "Level 36"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 597,
        name: "Ferroseed",
        type: [
          "Grass",
          "Steel"
        ],
        height: "0.6 m",
        weight: "18.8 kg",
        ability: [
          "Iron Barbs"
        ],
        egg_groups: [
          "Grass",
          "Mineral"
        ],
        base_stats: {
          "HP": 44,
          "Attack": 50,
          "Defense": 91,
          "Special Attack": 24,
          "Special Defense": 86,
          "Speed": 10
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/597.png",
        evolution: {
          "next": [
            [
              "598",
              "Level 40"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 598,
        name: "Ferrothorn",
        type: [
          "Grass",
          "Steel"
        ],
        height: "1 m",
        weight: "110 kg",
        ability: [
          "Iron Barbs",
          "Anticipation (HIDDEN)"
        ],
        egg_groups: [
          "Grass",
          "Mineral"
        ],
        base_stats: {
          "HP": 74,
          "Attack": 94,
          "Defense": 131,
          "Special Attack": 54,
          "Special Defense": 116,
          "Speed": 20
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/598.png",
        evolution: {
          "prev": [
            "597",
            "Level 40"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 599,
        name: "Klink",
        type: [
          "Steel"
        ],
        height: "0.3 m",
        weight: "21 kg",
        ability: [
          "Plus",
          "Minus",
          "Clear Body (HIDDEN)"
        ],
        egg_groups: [
          "Mineral"
        ],
        base_stats: {
          "HP": 40,
          "Attack": 55,
          "Defense": 70,
          "Special Attack": 45,
          "Special Defense": 60,
          "Speed": 30
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/599.png",
        evolution: {
          "next": [
            [
              "600",
              "Level 38"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 600,
        name: "Klang",
        type: [
          "Steel"
        ],
        height: "0.6 m",
        weight: "51 kg",
        ability: [
          "Plus",
          "Minus",
          "Clear Body (HIDDEN)"
        ],
        egg_groups: [
          "Mineral"
        ],
        base_stats: {
          "HP": 60,
          "Attack": 80,
          "Defense": 95,
          "Special Attack": 70,
          "Special Defense": 85,
          "Speed": 50
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/600.png",
        evolution: {
          "prev": [
            "599",
            "Level 38"
          ],
          "next": [
            [
              "601",
              "Level 49"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 601,
        name: "Klinklang",
        type: [
          "Steel"
        ],
        height: "0.6 m",
        weight: "81 kg",
        ability: [
          "Plus",
          "Minus",
          "Clear Body (HIDDEN)"
        ],
        egg_groups: [
          "Mineral"
        ],
        base_stats: {
          "HP": 60,
          "Attack": 100,
          "Defense": 115,
          "Special Attack": 70,
          "Special Defense": 85,
          "Speed": 90
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/601.png",
        evolution: {
          "prev": [
            "600",
            "Level 49"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 602,
        name: "Tynamo",
        type: [
          "Electric"
        ],
        height: "0.2 m",
        weight: "0.3 kg",
        ability: [
          "Levitate"
        ],
        egg_groups: [
          "Amorphous"
        ],
        base_stats: {
          "HP": 35,
          "Attack": 55,
          "Defense": 40,
          "Special Attack": 45,
          "Special Defense": 40,
          "Speed": 60
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/602.png",
        evolution: {
          "next": [
            [
              "603",
              "Level 39"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 603,
        name: "Eelektrik",
        type: [
          "Electric"
        ],
        height: "1.2 m",
        weight: "22 kg",
        ability: [
          "Levitate"
        ],
        egg_groups: [
          "Amorphous"
        ],
        base_stats: {
          "HP": 65,
          "Attack": 85,
          "Defense": 70,
          "Special Attack": 75,
          "Special Defense": 70,
          "Speed": 40
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/603.png",
        evolution: {
          "prev": [
            "602",
            "Level 39"
          ],
          "next": [
            [
              "604",
              "use Thunder Stone"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 604,
        name: "Eelektross",
        type: [
          "Electric"
        ],
        height: "2.1 m",
        weight: "80.5 kg",
        ability: [
          "Levitate"
        ],
        egg_groups: [
          "Amorphous"
        ],
        base_stats: {
          "HP": 85,
          "Attack": 115,
          "Defense": 80,
          "Special Attack": 105,
          "Special Defense": 80,
          "Speed": 50
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/604.png",
        evolution: {
          "prev": [
            "603",
            "use Thunder Stone"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 605,
        name: "Elgyem",
        type: [
          "Psychic"
        ],
        height: "0.5 m",
        weight: "9 kg",
        ability: [
          "Telepathy",
          "Synchronize",
          "Analytic (HIDDEN)"
        ],
        egg_groups: [
          "Human-Like"
        ],
        base_stats: {
          "HP": 55,
          "Attack": 55,
          "Defense": 55,
          "Special Attack": 85,
          "Special Defense": 55,
          "Speed": 30
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/605.png",
        evolution: {
          "next": [
            [
              "606",
              "Level 42"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 606,
        name: "Beheeyem",
        type: [
          "Psychic"
        ],
        height: "1 m",
        weight: "34.5 kg",
        ability: [
          "Telepathy",
          "Synchronize",
          "Analytic (HIDDEN)"
        ],
        egg_groups: [
          "Human-Like"
        ],
        base_stats: {
          "HP": 75,
          "Attack": 75,
          "Defense": 75,
          "Special Attack": 125,
          "Special Defense": 95,
          "Speed": 40
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/606.png",
        evolution: {
          "prev": [
            "605",
            "Level 42"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 607,
        name: "Litwick",
        type: [
          "Ghost",
          "Fire"
        ],
        height: "0.3 m",
        weight: "3.1 kg",
        ability: [
          "Flash Fire",
          "Flame Body",
          "Infiltrator (HIDDEN)"
        ],
        egg_groups: [
          "Amorphous"
        ],
        base_stats: {
          "HP": 50,
          "Attack": 30,
          "Defense": 55,
          "Special Attack": 65,
          "Special Defense": 55,
          "Speed": 20
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/607.png",
        evolution: {
          "next": [
            [
              "608",
              "Level 41"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 608,
        name: "Lampent",
        type: [
          "Ghost",
          "Fire"
        ],
        height: "0.6 m",
        weight: "13 kg",
        ability: [
          "Flash Fire",
          "Flame Body",
          "Infiltrator (HIDDEN)"
        ],
        egg_groups: [
          "Amorphous"
        ],
        base_stats: {
          "HP": 60,
          "Attack": 40,
          "Defense": 60,
          "Special Attack": 95,
          "Special Defense": 60,
          "Speed": 55
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/608.png",
        evolution: {
          "prev": [
            "607",
            "Level 41"
          ],
          "next": [
            [
              "609",
              "use Dusk Stone"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 609,
        name: "Chandelure",
        type: [
          "Ghost",
          "Fire"
        ],
        height: "1 m",
        weight: "34.3 kg",
        ability: [
          "Flash Fire",
          "Flame Body",
          "Infiltrator (HIDDEN)"
        ],
        egg_groups: [
          "Amorphous"
        ],
        base_stats: {
          "HP": 60,
          "Attack": 55,
          "Defense": 90,
          "Special Attack": 145,
          "Special Defense": 90,
          "Speed": 80
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/609.png",
        evolution: {
          "prev": [
            "608",
            "use Dusk Stone"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 610,
        name: "Axew",
        type: [
          "Dragon"
        ],
        height: "0.6 m",
        weight: "18 kg",
        ability: [
          "Rivalry",
          "Mold Breaker",
          "Unnerve (HIDDEN)"
        ],
        egg_groups: [
          "Monster",
          "Dragon"
        ],
        base_stats: {
          "HP": 46,
          "Attack": 87,
          "Defense": 60,
          "Special Attack": 30,
          "Special Defense": 40,
          "Speed": 57
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/610.png",
        evolution: {
          "next": [
            [
              "611",
              "Level 38"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 611,
        name: "Fraxure",
        type: [
          "Dragon"
        ],
        height: "1 m",
        weight: "36 kg",
        ability: [
          "Rivalry",
          "Mold Breaker",
          "Unnerve (HIDDEN)"
        ],
        egg_groups: [
          "Monster",
          "Dragon"
        ],
        base_stats: {
          "HP": 66,
          "Attack": 117,
          "Defense": 70,
          "Special Attack": 40,
          "Special Defense": 50,
          "Speed": 67
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/611.png",
        evolution: {
          "prev": [
            "610",
            "Level 38"
          ],
          "next": [
            [
              "612",
              "Level 48"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 612,
        name: "Haxorus",
        type: [
          "Dragon"
        ],
        height: "1.8 m",
        weight: "105.5 kg",
        ability: [
          "Rivalry",
          "Mold Breaker",
          "Unnerve (HIDDEN)"
        ],
        egg_groups: [
          "Monster",
          "Dragon"
        ],
        base_stats: {
          "HP": 76,
          "Attack": 147,
          "Defense": 90,
          "Special Attack": 60,
          "Special Defense": 70,
          "Speed": 97
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/612.png",
        evolution: {
          "prev": [
            "611",
            "Level 48"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 613,
        name: "Cubchoo",
        type: [
          "Ice"
        ],
        height: "0.5 m",
        weight: "8.5 kg",
        ability: [
          "Snow Cloak",
          "Slush Rush",
          "Rattled (HIDDEN)"
        ],
        egg_groups: [
          "Field"
        ],
        base_stats: {
          "HP": 55,
          "Attack": 70,
          "Defense": 40,
          "Special Attack": 60,
          "Special Defense": 40,
          "Speed": 40
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/613.png",
        evolution: {
          "next": [
            [
              "614",
              "Level 37"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 614,
        name: "Beartic",
        type: [
          "Ice"
        ],
        height: "2.6 m",
        weight: "260 kg",
        ability: [
          "Snow Cloak",
          "Slush Rush",
          "Swift Swim (HIDDEN)"
        ],
        egg_groups: [
          "Field"
        ],
        base_stats: {
          "HP": 95,
          "Attack": 130,
          "Defense": 80,
          "Special Attack": 70,
          "Special Defense": 80,
          "Speed": 50
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/614.png",
        evolution: {
          "prev": [
            "613",
            "Level 37"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 615,
        name: "Cryogonal",
        type: [
          "Ice"
        ],
        height: "1.1 m",
        weight: "148 kg",
        ability: [
          "Levitate"
        ],
        egg_groups: [
          "Mineral"
        ],
        base_stats: {
          "HP": 80,
          "Attack": 50,
          "Defense": 50,
          "Special Attack": 95,
          "Special Defense": 135,
          "Speed": 105
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/615.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 616,
        name: "Shelmet",
        type: [
          "Bug"
        ],
        height: "0.4 m",
        weight: "7.7 kg",
        ability: [
          "Hydration",
          "Shell Armor",
          "Overcoat (HIDDEN)"
        ],
        egg_groups: [
          "Bug"
        ],
        base_stats: {
          "HP": 50,
          "Attack": 40,
          "Defense": 85,
          "Special Attack": 40,
          "Special Defense": 65,
          "Speed": 25
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/616.png",
        evolution: {
          "next": [
            [
              "617",
              "Trade with Karrablast"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 617,
        name: "Accelgor",
        type: [
          "Bug"
        ],
        height: "0.8 m",
        weight: "25.3 kg",
        ability: [
          "Hydration",
          "Sticky Hold",
          "Unburden (HIDDEN)"
        ],
        egg_groups: [
          "Bug"
        ],
        base_stats: {
          "HP": 80,
          "Attack": 70,
          "Defense": 40,
          "Special Attack": 100,
          "Special Defense": 60,
          "Speed": 145
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/617.png",
        evolution: {
          "prev": [
            "616",
            "Trade with Karrablast"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 618,
        name: "Stunfisk",
        type: [
          "Ground",
          "Electric"
        ],
        height: "0.7 m",
        weight: "11 kg",
        ability: [
          "Static",
          "Limber",
          "Sand Veil (HIDDEN)"
        ],
        egg_groups: [
          "Water 1",
          "Amorphous"
        ],
        base_stats: {
          "HP": 109,
          "Attack": 66,
          "Defense": 84,
          "Special Attack": 81,
          "Special Defense": 99,
          "Speed": 32
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/618.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 619,
        name: "Mienfoo",
        type: [
          "Fighting"
        ],
        height: "0.9 m",
        weight: "20 kg",
        ability: [
          "Inner Focus",
          "Regenerator",
          "Reckless (HIDDEN)"
        ],
        egg_groups: [
          "Field",
          "Human-Like"
        ],
        base_stats: {
          "HP": 45,
          "Attack": 85,
          "Defense": 50,
          "Special Attack": 55,
          "Special Defense": 50,
          "Speed": 65
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/619.png",
        evolution: {
          "next": [
            [
              "620",
              "Level 50"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 620,
        name: "Mienshao",
        type: [
          "Fighting"
        ],
        height: "1.4 m",
        weight: "35.5 kg",
        ability: [
          "Inner Focus",
          "Regenerator",
          "Reckless (HIDDEN)"
        ],
        egg_groups: [
          "Field",
          "Human-Like"
        ],
        base_stats: {
          "HP": 65,
          "Attack": 125,
          "Defense": 60,
          "Special Attack": 95,
          "Special Defense": 60,
          "Speed": 105
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/620.png",
        evolution: {
          "prev": [
            "619",
            "Level 50"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 621,
        name: "Druddigon",
        type: [
          "Dragon"
        ],
        height: "1.6 m",
        weight: "139 kg",
        ability: [
          "Rough Skin",
          "Sheer Force",
          "Mold Breaker (HIDDEN)"
        ],
        egg_groups: [
          "Monster",
          "Dragon"
        ],
        base_stats: {
          "HP": 77,
          "Attack": 120,
          "Defense": 90,
          "Special Attack": 60,
          "Special Defense": 90,
          "Speed": 48
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/621.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 622,
        name: "Golett",
        type: [
          "Ground",
          "Ghost"
        ],
        height: "1 m",
        weight: "92 kg",
        ability: [
          "Iron Fist",
          "Klutz",
          "No Guard (HIDDEN)"
        ],
        egg_groups: [
          "Mineral"
        ],
        base_stats: {
          "HP": 59,
          "Attack": 74,
          "Defense": 50,
          "Special Attack": 35,
          "Special Defense": 50,
          "Speed": 35
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/622.png",
        evolution: {
          "next": [
            [
              "623",
              "Level 43"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 623,
        name: "Golurk",
        type: [
          "Ground",
          "Ghost"
        ],
        height: "2.8 m",
        weight: "330 kg",
        ability: [
          "Iron Fist",
          "Klutz",
          "No Guard (HIDDEN)"
        ],
        egg_groups: [
          "Mineral"
        ],
        base_stats: {
          "HP": 89,
          "Attack": 124,
          "Defense": 80,
          "Special Attack": 55,
          "Special Defense": 80,
          "Speed": 55
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/623.png",
        evolution: {
          "prev": [
            "622",
            "Level 43"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 624,
        name: "Pawniard",
        type: [
          "Dark",
          "Steel"
        ],
        height: "0.5 m",
        weight: "10.2 kg",
        ability: [
          "Defiant",
          "Inner Focus",
          "Pressure (HIDDEN)"
        ],
        egg_groups: [
          "Human-Like"
        ],
        base_stats: {
          "HP": 45,
          "Attack": 85,
          "Defense": 70,
          "Special Attack": 40,
          "Special Defense": 40,
          "Speed": 60
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/624.png",
        evolution: {
          "next": [
            [
              "625",
              "Level 52"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 625,
        name: "Bisharp",
        type: [
          "Dark",
          "Steel"
        ],
        height: "1.6 m",
        weight: "70 kg",
        ability: [
          "Defiant",
          "Inner Focus",
          "Pressure (HIDDEN)"
        ],
        egg_groups: [
          "Human-Like"
        ],
        base_stats: {
          "HP": 65,
          "Attack": 125,
          "Defense": 100,
          "Special Attack": 60,
          "Special Defense": 70,
          "Speed": 70
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/625.png",
        evolution: {
          "prev": [
            "624",
            "Level 52"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 626,
        name: "Bouffalant",
        type: [
          "Normal"
        ],
        height: "1.6 m",
        weight: "94.6 kg",
        ability: [
          "Reckless",
          "Sap Sipper",
          "Soundproof (HIDDEN)"
        ],
        egg_groups: [
          "Field"
        ],
        base_stats: {
          "HP": 95,
          "Attack": 110,
          "Defense": 95,
          "Special Attack": 40,
          "Special Defense": 95,
          "Speed": 55
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/626.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 627,
        name: "Rufflet",
        type: [
          "Normal",
          "Flying"
        ],
        height: "0.5 m",
        weight: "10.5 kg",
        ability: [
          "Keen Eye",
          "Sheer Force",
          "Hustle (HIDDEN)"
        ],
        egg_groups: [
          "Flying"
        ],
        base_stats: {
          "HP": 70,
          "Attack": 83,
          "Defense": 50,
          "Special Attack": 37,
          "Special Defense": 50,
          "Speed": 60
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/627.png",
        evolution: {
          "next": [
            [
              "628",
              "Level 54"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 628,
        name: "Braviary",
        type: [
          "Normal",
          "Flying"
        ],
        height: "1.5 m",
        weight: "41 kg",
        ability: [
          "Keen Eye",
          "Sheer Force",
          "Defiant (HIDDEN)"
        ],
        egg_groups: [
          "Flying"
        ],
        base_stats: {
          "HP": 100,
          "Attack": 123,
          "Defense": 75,
          "Special Attack": 57,
          "Special Defense": 75,
          "Speed": 80
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/628.png",
        evolution: {
          "prev": [
            "627",
            "Level 54"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 629,
        name: "Vullaby",
        type: [
          "Dark",
          "Flying"
        ],
        height: "0.5 m",
        weight: "9 kg",
        ability: [
          "Big Pecks",
          "Overcoat",
          "Weak Armor (HIDDEN)"
        ],
        egg_groups: [
          "Flying"
        ],
        base_stats: {
          "HP": 70,
          "Attack": 55,
          "Defense": 75,
          "Special Attack": 45,
          "Special Defense": 65,
          "Speed": 60
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/629.png",
        evolution: {
          "next": [
            [
              "630",
              "Level 54"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 630,
        name: "Mandibuzz",
        type: [
          "Dark",
          "Flying"
        ],
        height: "1.2 m",
        weight: "39.5 kg",
        ability: [
          "Big Pecks",
          "Overcoat",
          "Weak Armor (HIDDEN)"
        ],
        egg_groups: [
          "Flying"
        ],
        base_stats: {
          "HP": 110,
          "Attack": 65,
          "Defense": 105,
          "Special Attack": 55,
          "Special Defense": 95,
          "Speed": 80
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/630.png",
        evolution: {
          "prev": [
            "629",
            "Level 54"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 631,
        name: "Heatmor",
        type: [
          "Fire"
        ],
        height: "1.4 m",
        weight: "58 kg",
        ability: [
          "Gluttony",
          "Flash Fire",
          "White Smoke (HIDDEN)"
        ],
        egg_groups: [
          "Field"
        ],
        base_stats: {
          "HP": 85,
          "Attack": 97,
          "Defense": 66,
          "Special Attack": 105,
          "Special Defense": 66,
          "Speed": 65
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/631.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 632,
        name: "Durant",
        type: [
          "Bug",
          "Steel"
        ],
        height: "0.3 m",
        weight: "33 kg",
        ability: [
          "Swarm",
          "Hustle",
          "Truant (HIDDEN)"
        ],
        egg_groups: [
          "Bug"
        ],
        base_stats: {
          "HP": 58,
          "Attack": 109,
          "Defense": 112,
          "Special Attack": 48,
          "Special Defense": 48,
          "Speed": 109
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/632.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 633,
        name: "Deino",
        type: [
          "Dark",
          "Dragon"
        ],
        height: "0.8 m",
        weight: "17.3 kg",
        ability: [
          "Hustle"
        ],
        egg_groups: [
          "Dragon"
        ],
        base_stats: {
          "HP": 52,
          "Attack": 65,
          "Defense": 50,
          "Special Attack": 45,
          "Special Defense": 50,
          "Speed": 38
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/633.png",
        evolution: {
          "next": [
            [
              "634",
              "Level 50"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 634,
        name: "Zweilous",
        type: [
          "Dark",
          "Dragon"
        ],
        height: "1.4 m",
        weight: "50 kg",
        ability: [
          "Hustle"
        ],
        egg_groups: [
          "Dragon"
        ],
        base_stats: {
          "HP": 72,
          "Attack": 85,
          "Defense": 70,
          "Special Attack": 65,
          "Special Defense": 70,
          "Speed": 58
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/634.png",
        evolution: {
          "prev": [
            "633",
            "Level 50"
          ],
          "next": [
            [
              "635",
              "Level 64"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 635,
        name: "Hydreigon",
        type: [
          "Dark",
          "Dragon"
        ],
        height: "1.8 m",
        weight: "160 kg",
        ability: [
          "Levitate"
        ],
        egg_groups: [
          "Dragon"
        ],
        base_stats: {
          "HP": 92,
          "Attack": 105,
          "Defense": 90,
          "Special Attack": 125,
          "Special Defense": 90,
          "Speed": 98
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/635.png",
        evolution: {
          "prev": [
            "634",
            "Level 64"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 636,
        name: "Larvesta",
        type: [
          "Bug",
          "Fire"
        ],
        height: "1.1 m",
        weight: "28.8 kg",
        ability: [
          "Flame Body",
          "Swarm (HIDDEN)"
        ],
        egg_groups: [
          "Bug"
        ],
        base_stats: {
          "HP": 55,
          "Attack": 85,
          "Defense": 55,
          "Special Attack": 50,
          "Special Defense": 55,
          "Speed": 60
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/636.png",
        evolution: {
          "next": [
            [
              "637",
              "Level 59"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 637,
        name: "Volcarona",
        type: [
          "Bug",
          "Fire"
        ],
        height: "1.6 m",
        weight: "46 kg",
        ability: [
          "Flame Body",
          "Swarm (HIDDEN)"
        ],
        egg_groups: [
          "Bug"
        ],
        base_stats: {
          "HP": 85,
          "Attack": 60,
          "Defense": 65,
          "Special Attack": 135,
          "Special Defense": 105,
          "Speed": 100
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/637.png",
        evolution: {
          "prev": [
            "636",
            "Level 59"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 638,
        name: "Cobalion",
        type: [
          "Steel",
          "Fighting"
        ],
        height: "2.1 m",
        weight: "250 kg",
        ability: [
          "Justified"
        ],
        egg_groups: [
          "Undiscovered"
        ],
        base_stats: {
          "HP": 91,
          "Attack": 90,
          "Defense": 129,
          "Special Attack": 90,
          "Special Defense": 72,
          "Speed": 108
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/638.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 639,
        name: "Terrakion",
        type: [
          "Rock",
          "Fighting"
        ],
        height: "1.9 m",
        weight: "260 kg",
        ability: [
          "Justified"
        ],
        egg_groups: [
          "Undiscovered"
        ],
        base_stats: {
          "HP": 91,
          "Attack": 129,
          "Defense": 90,
          "Special Attack": 72,
          "Special Defense": 90,
          "Speed": 108
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/639.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 640,
        name: "Virizion",
        type: [
          "Grass",
          "Fighting"
        ],
        height: "2 m",
        weight: "200 kg",
        ability: [
          "Justified"
        ],
        egg_groups: [
          "Undiscovered"
        ],
        base_stats: {
          "HP": 91,
          "Attack": 90,
          "Defense": 72,
          "Special Attack": 90,
          "Special Defense": 129,
          "Speed": 108
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/640.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 641,
        name: "Tornadus",
        type: [
          "Flying"
        ],
        height: "1.5 m",
        weight: "63 kg",
        ability: [
          "Prankster",
          "Defiant (HIDDEN)"
        ],
        egg_groups: [
          "Undiscovered"
        ],
        base_stats: {
          "HP": 79,
          "Attack": 115,
          "Defense": 70,
          "Special Attack": 125,
          "Special Defense": 80,
          "Speed": 111
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/641.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 642,
        name: "Thundurus",
        type: [
          "Electric",
          "Flying"
        ],
        height: "1.5 m",
        weight: "61 kg",
        ability: [
          "Prankster",
          "Defiant (HIDDEN)"
        ],
        egg_groups: [
          "Undiscovered"
        ],
        base_stats: {
          "HP": 79,
          "Attack": 115,
          "Defense": 70,
          "Special Attack": 125,
          "Special Defense": 80,
          "Speed": 111
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/642.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 643,
        name: "Reshiram",
        type: [
          "Dragon",
          "Fire"
        ],
        height: "3.2 m",
        weight: "330 kg",
        ability: [
          "Turboblaze"
        ],
        egg_groups: [
          "Undiscovered"
        ],
        base_stats: {
          "HP": 100,
          "Attack": 120,
          "Defense": 100,
          "Special Attack": 150,
          "Special Defense": 120,
          "Speed": 90
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/643.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 644,
        name: "Zekrom",
        type: [
          "Dragon",
          "Electric"
        ],
        height: "2.9 m",
        weight: "345 kg",
        ability: [
          "Teravolt"
        ],
        egg_groups: [
          "Undiscovered"
        ],
        base_stats: {
          "HP": 100,
          "Attack": 150,
          "Defense": 120,
          "Special Attack": 120,
          "Special Defense": 100,
          "Speed": 90
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/644.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 645,
        name: "Landorus",
        type: [
          "Ground",
          "Flying"
        ],
        height: "1.5 m",
        weight: "68 kg",
        ability: [
          "Sand Force",
          "Sheer Force (HIDDEN)"
        ],
        egg_groups: [
          "Undiscovered"
        ],
        base_stats: {
          "HP": 89,
          "Attack": 125,
          "Defense": 90,
          "Special Attack": 115,
          "Special Defense": 80,
          "Speed": 101
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/645.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 646,
        name: "Kyurem",
        type: [
          "Dragon",
          "Ice"
        ],
        height: "3 m",
        weight: "325 kg",
        ability: [
          "Pressure"
        ],
        egg_groups: [
          "Undiscovered"
        ],
        base_stats: {
          "HP": 125,
          "Attack": 130,
          "Defense": 90,
          "Special Attack": 130,
          "Special Defense": 90,
          "Speed": 95
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/646.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 647,
        name: "Keldeo",
        type: [
          "Water",
          "Fighting"
        ],
        height: "1.4 m",
        weight: "48.5 kg",
        ability: [
          "Justified"
        ],
        egg_groups: [
          "Undiscovered"
        ],
        base_stats: {
          "HP": 91,
          "Attack": 72,
          "Defense": 90,
          "Special Attack": 129,
          "Special Defense": 90,
          "Speed": 108
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/647.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 648,
        name: "Meloetta",
        type: [
          "Normal",
          "Psychic"
        ],
        height: "0.6 m",
        weight: "6.5 kg",
        ability: [
          "Serene Grace"
        ],
        egg_groups: [
          "Undiscovered"
        ],
        base_stats: {
          "HP": 100,
          "Attack": 77,
          "Defense": 77,
          "Special Attack": 128,
          "Special Defense": 128,
          "Speed": 90
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/648.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 649,
        name: "Genesect",
        type: [
          "Bug",
          "Steel"
        ],
        height: "1.5 m",
        weight: "82.5 kg",
        ability: [
          "Download"
        ],
        egg_groups: [
          "Undiscovered"
        ],
        base_stats: {
          "HP": 71,
          "Attack": 120,
          "Defense": 95,
          "Special Attack": 120,
          "Special Defense": 95,
          "Speed": 99
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/649.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 650,
        name: "Chespin",
        type: [
          "Grass"
        ],
        height: "0.4 m",
        weight: "9 kg",
        ability: [
          "Overgrow",
          "Bulletproof (HIDDEN)"
        ],
        egg_groups: [
          "Field"
        ],
        base_stats: {
          "HP": 56,
          "Attack": 61,
          "Defense": 65,
          "Special Attack": 48,
          "Special Defense": 45,
          "Speed": 38
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/650.png",
        evolution: {
          "next": [
            [
              "651",
              "Level 16"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 651,
        name: "Quilladin",
        type: [
          "Grass"
        ],
        height: "0.7 m",
        weight: "29 kg",
        ability: [
          "Overgrow",
          "Bulletproof (HIDDEN)"
        ],
        egg_groups: [
          "Field"
        ],
        base_stats: {
          "HP": 61,
          "Attack": 78,
          "Defense": 95,
          "Special Attack": 56,
          "Special Defense": 58,
          "Speed": 57
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/651.png",
        evolution: {
          "prev": [
            "650",
            "Level 16"
          ],
          "next": [
            [
              "652",
              "Level 36"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 652,
        name: "Chesnaught",
        type: [
          "Grass",
          "Fighting"
        ],
        height: "1.6 m",
        weight: "90 kg",
        ability: [
          "Overgrow",
          "Bulletproof (HIDDEN)"
        ],
        egg_groups: [
          "Field"
        ],
        base_stats: {
          "HP": 88,
          "Attack": 107,
          "Defense": 122,
          "Special Attack": 74,
          "Special Defense": 75,
          "Speed": 64
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/652.png",
        evolution: {
          "prev": [
            "651",
            "Level 36"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 653,
        name: "Fennekin",
        type: [
          "Fire"
        ],
        height: "0.4 m",
        weight: "9.4 kg",
        ability: [
          "Blaze",
          "Magician (HIDDEN)"
        ],
        egg_groups: [
          "Field"
        ],
        base_stats: {
          "HP": 40,
          "Attack": 45,
          "Defense": 40,
          "Special Attack": 62,
          "Special Defense": 60,
          "Speed": 60
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/653.png",
        evolution: {
          "next": [
            [
              "654",
              "Level 16"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 654,
        name: "Braixen",
        type: [
          "Fire"
        ],
        height: "1 m",
        weight: "14.5 kg",
        ability: [
          "Blaze",
          "Magician (HIDDEN)"
        ],
        egg_groups: [
          "Field"
        ],
        base_stats: {
          "HP": 59,
          "Attack": 59,
          "Defense": 58,
          "Special Attack": 90,
          "Special Defense": 70,
          "Speed": 73
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/654.png",
        evolution: {
          "prev": [
            "653",
            "Level 16"
          ],
          "next": [
            [
              "655",
              "Level 36"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 655,
        name: "Delphox",
        type: [
          "Fire",
          "Psychic"
        ],
        height: "1.5 m",
        weight: "39 kg",
        ability: [
          "Blaze",
          "Magician (HIDDEN)"
        ],
        egg_groups: [
          "Field"
        ],
        base_stats: {
          "HP": 75,
          "Attack": 69,
          "Defense": 72,
          "Special Attack": 114,
          "Special Defense": 100,
          "Speed": 104
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/655.png",
        evolution: {
          "prev": [
            "654",
            "Level 36"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 656,
        name: "Froakie",
        type: [
          "Water"
        ],
        height: "0.3 m",
        weight: "7 kg",
        ability: [
          "Torrent",
          "Protean (HIDDEN)"
        ],
        egg_groups: [
          "Water 1"
        ],
        base_stats: {
          "HP": 41,
          "Attack": 56,
          "Defense": 40,
          "Special Attack": 62,
          "Special Defense": 44,
          "Speed": 71
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/656.png",
        evolution: {
          "next": [
            [
              "657",
              "Level 16"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 657,
        name: "Frogadier",
        type: [
          "Water"
        ],
        height: "0.6 m",
        weight: "10.9 kg",
        ability: [
          "Torrent",
          "Protean (HIDDEN)"
        ],
        egg_groups: [
          "Water 1"
        ],
        base_stats: {
          "HP": 54,
          "Attack": 63,
          "Defense": 52,
          "Special Attack": 83,
          "Special Defense": 56,
          "Speed": 97
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/657.png",
        evolution: {
          "prev": [
            "656",
            "Level 16"
          ],
          "next": [
            [
              "658",
              "Level 36"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 658,
        name: "Greninja",
        type: [
          "Water",
          "Dark"
        ],
        height: "1.5 m",
        weight: "40 kg",
        ability: [
          "Torrent",
          "Protean (HIDDEN)"
        ],
        egg_groups: [
          "Water 1"
        ],
        base_stats: {
          "HP": 72,
          "Attack": 95,
          "Defense": 67,
          "Special Attack": 103,
          "Special Defense": 71,
          "Speed": 122
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/658.png",
        evolution: {
          "prev": [
            "657",
            "Level 36"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 659,
        name: "Bunnelby",
        type: [
          "Normal"
        ],
        height: "0.4 m",
        weight: "5 kg",
        ability: [
          "Pickup",
          "Cheek Pouch",
          "Huge Power (HIDDEN)"
        ],
        egg_groups: [
          "Field"
        ],
        base_stats: {
          "HP": 38,
          "Attack": 36,
          "Defense": 38,
          "Special Attack": 32,
          "Special Defense": 36,
          "Speed": 57
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/659.png",
        evolution: {
          "next": [
            [
              "660",
              "Level 20"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 660,
        name: "Diggersby",
        type: [
          "Normal",
          "Ground"
        ],
        height: "1 m",
        weight: "42.4 kg",
        ability: [
          "Pickup",
          "Cheek Pouch",
          "Huge Power (HIDDEN)"
        ],
        egg_groups: [
          "Field"
        ],
        base_stats: {
          "HP": 85,
          "Attack": 56,
          "Defense": 77,
          "Special Attack": 50,
          "Special Defense": 77,
          "Speed": 78
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/660.png",
        evolution: {
          "prev": [
            "659",
            "Level 20"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 661,
        name: "Fletchling",
        type: [
          "Normal",
          "Flying"
        ],
        height: "0.3 m",
        weight: "1.7 kg",
        ability: [
          "Big Pecks",
          "Gale Wings (HIDDEN)"
        ],
        egg_groups: [
          "Flying"
        ],
        base_stats: {
          "HP": 45,
          "Attack": 50,
          "Defense": 43,
          "Special Attack": 40,
          "Special Defense": 38,
          "Speed": 62
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/661.png",
        evolution: {
          "next": [
            [
              "662",
              "Level 17"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 662,
        name: "Fletchinder",
        type: [
          "Fire",
          "Flying"
        ],
        height: "0.7 m",
        weight: "16 kg",
        ability: [
          "Flame Body",
          "Gale Wings (HIDDEN)"
        ],
        egg_groups: [
          "Flying"
        ],
        base_stats: {
          "HP": 62,
          "Attack": 73,
          "Defense": 55,
          "Special Attack": 56,
          "Special Defense": 52,
          "Speed": 84
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/662.png",
        evolution: {
          "prev": [
            "661",
            "Level 17"
          ],
          "next": [
            [
              "663",
              "Level 35"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 663,
        name: "Talonflame",
        type: [
          "Fire",
          "Flying"
        ],
        height: "1.2 m",
        weight: "24.5 kg",
        ability: [
          "Flame Body",
          "Gale Wings (HIDDEN)"
        ],
        egg_groups: [
          "Flying"
        ],
        base_stats: {
          "HP": 78,
          "Attack": 81,
          "Defense": 71,
          "Special Attack": 74,
          "Special Defense": 69,
          "Speed": 126
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/663.png",
        evolution: {
          "prev": [
            "662",
            "Level 35"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 664,
        name: "Scatterbug",
        type: [
          "Bug"
        ],
        height: "0.3 m",
        weight: "2.5 kg",
        ability: [
          "Shield Dust",
          "Compound Eyes",
          "Friend Guard (HIDDEN)"
        ],
        egg_groups: [
          "Bug"
        ],
        base_stats: {
          "HP": 38,
          "Attack": 35,
          "Defense": 40,
          "Special Attack": 27,
          "Special Defense": 25,
          "Speed": 35
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/664.png",
        evolution: {
          "next": [
            [
              "665",
              "Level 9"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 665,
        name: "Spewpa",
        type: [
          "Bug"
        ],
        height: "0.3 m",
        weight: "8.4 kg",
        ability: [
          "Shed Skin",
          "Friend Guard (HIDDEN)"
        ],
        egg_groups: [
          "Bug"
        ],
        base_stats: {
          "HP": 45,
          "Attack": 22,
          "Defense": 60,
          "Special Attack": 27,
          "Special Defense": 30,
          "Speed": 29
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/665.png",
        evolution: {
          "prev": [
            "664",
            "Level 9"
          ],
          "next": [
            [
              "666",
              "Level 12"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 666,
        name: "Vivillon",
        type: [
          "Bug",
          "Flying"
        ],
        height: "1.2 m",
        weight: "17 kg",
        ability: [
          "Shield Dust",
          "Compound Eyes",
          "Friend Guard (HIDDEN)"
        ],
        egg_groups: [
          "Bug"
        ],
        base_stats: {
          "HP": 80,
          "Attack": 52,
          "Defense": 50,
          "Special Attack": 90,
          "Special Defense": 50,
          "Speed": 89
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/666.png",
        evolution: {
          "prev": [
            "665",
            "Level 12"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 667,
        name: "Litleo",
        type: [
          "Fire",
          "Normal"
        ],
        height: "0.6 m",
        weight: "13.5 kg",
        ability: [
          "Rivalry",
          "Unnerve",
          "Moxie (HIDDEN)"
        ],
        egg_groups: [
          "Field"
        ],
        base_stats: {
          "HP": 62,
          "Attack": 50,
          "Defense": 58,
          "Special Attack": 73,
          "Special Defense": 54,
          "Speed": 72
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/667.png",
        evolution: {
          "next": [
            [
              "668",
              "Level 35"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 668,
        name: "Pyroar",
        type: [
          "Fire",
          "Normal"
        ],
        height: "1.5 m",
        weight: "81.5 kg",
        ability: [
          "Rivalry",
          "Unnerve",
          "Moxie (HIDDEN)"
        ],
        egg_groups: [
          "Field"
        ],
        base_stats: {
          "HP": 86,
          "Attack": 68,
          "Defense": 72,
          "Special Attack": 109,
          "Special Defense": 66,
          "Speed": 106
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/668.png",
        evolution: {
          "prev": [
            "667",
            "Level 35"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 669,
        name: "Flabébé",
        type: [
          "Fairy"
        ],
        height: "0.1 m",
        weight: "0.1 kg",
        ability: [
          "Flower Veil",
          "Symbiosis (HIDDEN)"
        ],
        egg_groups: [
          "Fairy"
        ],
        base_stats: {
          "HP": 44,
          "Attack": 38,
          "Defense": 39,
          "Special Attack": 61,
          "Special Defense": 79,
          "Speed": 42
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/669.png",
        evolution: {
          "next": [
            [
              "670",
              "Level 19"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 670,
        name: "Floette",
        type: [
          "Fairy"
        ],
        height: "0.2 m",
        weight: "0.9 kg",
        ability: [
          "Flower Veil",
          "Symbiosis (HIDDEN)"
        ],
        egg_groups: [
          "Fairy"
        ],
        base_stats: {
          "HP": 54,
          "Attack": 45,
          "Defense": 47,
          "Special Attack": 75,
          "Special Defense": 98,
          "Speed": 52
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/670.png",
        evolution: {
          "prev": [
            "669",
            "Level 19"
          ],
          "next": [
            [
              "671",
              "use Shiny Stone"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 671,
        name: "Florges",
        type: [
          "Fairy"
        ],
        height: "1.1 m",
        weight: "10 kg",
        ability: [
          "Flower Veil",
          "Symbiosis (HIDDEN)"
        ],
        egg_groups: [
          "Fairy"
        ],
        base_stats: {
          "HP": 78,
          "Attack": 65,
          "Defense": 68,
          "Special Attack": 112,
          "Special Defense": 154,
          "Speed": 75
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/671.png",
        evolution: {
          "prev": [
            "670",
            "use Shiny Stone"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 672,
        name: "Skiddo",
        type: [
          "Grass"
        ],
        height: "0.9 m",
        weight: "31 kg",
        ability: [
          "Sap Sipper",
          "Grass Pelt (HIDDEN)"
        ],
        egg_groups: [
          "Field"
        ],
        base_stats: {
          "HP": 66,
          "Attack": 65,
          "Defense": 48,
          "Special Attack": 62,
          "Special Defense": 57,
          "Speed": 52
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/672.png",
        evolution: {
          "next": [
            [
              "673",
              "Level 32"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 673,
        name: "Gogoat",
        type: [
          "Grass"
        ],
        height: "1.7 m",
        weight: "91 kg",
        ability: [
          "Sap Sipper",
          "Grass Pelt (HIDDEN)"
        ],
        egg_groups: [
          "Field"
        ],
        base_stats: {
          "HP": 123,
          "Attack": 100,
          "Defense": 62,
          "Special Attack": 97,
          "Special Defense": 81,
          "Speed": 68
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/673.png",
        evolution: {
          "prev": [
            "672",
            "Level 32"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 674,
        name: "Pancham",
        type: [
          "Fighting"
        ],
        height: "0.6 m",
        weight: "8 kg",
        ability: [
          "Iron Fist",
          "Mold Breaker",
          "Scrappy (HIDDEN)"
        ],
        egg_groups: [
          "Field",
          "Human-Like"
        ],
        base_stats: {
          "HP": 67,
          "Attack": 82,
          "Defense": 62,
          "Special Attack": 46,
          "Special Defense": 48,
          "Speed": 43
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/674.png",
        evolution: {
          "next": [
            [
              "675",
              "Level 32, Dark type Pokémon in party"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 675,
        name: "Pangoro",
        type: [
          "Fighting",
          "Dark"
        ],
        height: "2.1 m",
        weight: "136 kg",
        ability: [
          "Iron Fist",
          "Mold Breaker",
          "Scrappy (HIDDEN)"
        ],
        egg_groups: [
          "Field",
          "Human-Like"
        ],
        base_stats: {
          "HP": 95,
          "Attack": 124,
          "Defense": 78,
          "Special Attack": 69,
          "Special Defense": 71,
          "Speed": 58
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/675.png",
        evolution: {
          "prev": [
            "674",
            "Level 32, Dark type Pokémon in party"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 676,
        name: "Furfrou",
        type: [
          "Normal"
        ],
        height: "1.2 m",
        weight: "28 kg",
        ability: [
          "Fur Coat"
        ],
        egg_groups: [
          "Field"
        ],
        base_stats: {
          "HP": 75,
          "Attack": 80,
          "Defense": 60,
          "Special Attack": 65,
          "Special Defense": 90,
          "Speed": 102
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/676.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 677,
        name: "Espurr",
        type: [
          "Psychic"
        ],
        height: "0.3 m",
        weight: "3.5 kg",
        ability: [
          "Keen Eye",
          "Infiltrator",
          "Own Tempo (HIDDEN)"
        ],
        egg_groups: [
          "Field"
        ],
        base_stats: {
          "HP": 62,
          "Attack": 48,
          "Defense": 54,
          "Special Attack": 63,
          "Special Defense": 60,
          "Speed": 68
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/677.png",
        evolution: {
          "next": [
            [
              "678",
              "Level 25"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 678,
        name: "Meowstic",
        type: [
          "Psychic"
        ],
        height: "0.6 m",
        weight: "8.5 kg",
        ability: [
          "Keen Eye",
          "Infiltrator",
          "Prankster (HIDDEN)"
        ],
        egg_groups: [
          "Field"
        ],
        base_stats: {
          "HP": 74,
          "Attack": 48,
          "Defense": 76,
          "Special Attack": 83,
          "Special Defense": 81,
          "Speed": 104
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/678.png",
        evolution: {
          "prev": [
            "677",
            "Level 25"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 679,
        name: "Honedge",
        type: [
          "Steel",
          "Ghost"
        ],
        height: "0.8 m",
        weight: "2 kg",
        ability: [
          "No Guard"
        ],
        egg_groups: [
          "Mineral"
        ],
        base_stats: {
          "HP": 45,
          "Attack": 80,
          "Defense": 100,
          "Special Attack": 35,
          "Special Defense": 37,
          "Speed": 28
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/679.png",
        evolution: {
          "next": [
            [
              "680",
              "Level 35"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 680,
        name: "Doublade",
        type: [
          "Steel",
          "Ghost"
        ],
        height: "0.8 m",
        weight: "4.5 kg",
        ability: [
          "No Guard"
        ],
        egg_groups: [
          "Mineral"
        ],
        base_stats: {
          "HP": 59,
          "Attack": 110,
          "Defense": 150,
          "Special Attack": 45,
          "Special Defense": 49,
          "Speed": 35
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/680.png",
        evolution: {
          "prev": [
            "679",
            "Level 35"
          ],
          "next": [
            [
              "681",
              "use Dusk Stone"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 681,
        name: "Aegislash",
        type: [
          "Steel",
          "Ghost"
        ],
        height: "1.7 m",
        weight: "53 kg",
        ability: [
          "Stance Change"
        ],
        egg_groups: [
          "Mineral"
        ],
        base_stats: {
          "HP": 60,
          "Attack": 50,
          "Defense": 150,
          "Special Attack": 50,
          "Special Defense": 150,
          "Speed": 60
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/681.png",
        evolution: {
          "prev": [
            "680",
            "use Dusk Stone"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 682,
        name: "Spritzee",
        type: [
          "Fairy"
        ],
        height: "0.2 m",
        weight: "0.5 kg",
        ability: [
          "Healer",
          "Aroma Veil (HIDDEN)"
        ],
        egg_groups: [
          "Fairy"
        ],
        base_stats: {
          "HP": 78,
          "Attack": 52,
          "Defense": 60,
          "Special Attack": 63,
          "Special Defense": 65,
          "Speed": 23
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/682.png",
        evolution: {
          "next": [
            [
              "683",
              "trade holding Sachet"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 683,
        name: "Aromatisse",
        type: [
          "Fairy"
        ],
        height: "0.8 m",
        weight: "15.5 kg",
        ability: [
          "Healer",
          "Aroma Veil (HIDDEN)"
        ],
        egg_groups: [
          "Fairy"
        ],
        base_stats: {
          "HP": 101,
          "Attack": 72,
          "Defense": 72,
          "Special Attack": 99,
          "Special Defense": 89,
          "Speed": 29
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/683.png",
        evolution: {
          "prev": [
            "682",
            "trade holding Sachet"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 684,
        name: "Swirlix",
        type: [
          "Fairy"
        ],
        height: "0.4 m",
        weight: "3.5 kg",
        ability: [
          "Sweet Veil",
          "Unburden (HIDDEN)"
        ],
        egg_groups: [
          "Fairy"
        ],
        base_stats: {
          "HP": 62,
          "Attack": 48,
          "Defense": 66,
          "Special Attack": 59,
          "Special Defense": 57,
          "Speed": 49
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/684.png",
        evolution: {
          "next": [
            [
              "685",
              "trade holding Whipped Dream"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 685,
        name: "Slurpuff",
        type: [
          "Fairy"
        ],
        height: "0.8 m",
        weight: "5 kg",
        ability: [
          "Sweet Veil",
          "Unburden (HIDDEN)"
        ],
        egg_groups: [
          "Fairy"
        ],
        base_stats: {
          "HP": 82,
          "Attack": 80,
          "Defense": 86,
          "Special Attack": 85,
          "Special Defense": 75,
          "Speed": 72
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/685.png",
        evolution: {
          "prev": [
            "684",
            "trade holding Whipped Dream"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 686,
        name: "Inkay",
        type: [
          "Dark",
          "Psychic"
        ],
        height: "0.4 m",
        weight: "3.5 kg",
        ability: [
          "Contrary",
          "Suction Cups",
          "Infiltrator (HIDDEN)"
        ],
        egg_groups: [
          "Water 1",
          "Water 2"
        ],
        base_stats: {
          "HP": 53,
          "Attack": 54,
          "Defense": 53,
          "Special Attack": 37,
          "Special Defense": 46,
          "Speed": 45
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/686.png",
        evolution: {
          "next": [
            [
              "687",
              "Level 30, holding console upside down"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 687,
        name: "Malamar",
        type: [
          "Dark",
          "Psychic"
        ],
        height: "1.5 m",
        weight: "47 kg",
        ability: [
          "Contrary",
          "Suction Cups",
          "Infiltrator (HIDDEN)"
        ],
        egg_groups: [
          "Water 1",
          "Water 2"
        ],
        base_stats: {
          "HP": 86,
          "Attack": 92,
          "Defense": 88,
          "Special Attack": 68,
          "Special Defense": 75,
          "Speed": 73
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/687.png",
        evolution: {
          "prev": [
            "686",
            "Level 30, holding console upside down"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 688,
        name: "Binacle",
        type: [
          "Rock",
          "Water"
        ],
        height: "0.5 m",
        weight: "31 kg",
        ability: [
          "Tough Claws",
          "Sniper",
          "Pickpocket (HIDDEN)"
        ],
        egg_groups: [
          "Water 3"
        ],
        base_stats: {
          "HP": 42,
          "Attack": 52,
          "Defense": 67,
          "Special Attack": 39,
          "Special Defense": 56,
          "Speed": 50
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/688.png",
        evolution: {
          "next": [
            [
              "689",
              "Level 39"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 689,
        name: "Barbaracle",
        type: [
          "Rock",
          "Water"
        ],
        height: "1.3 m",
        weight: "96 kg",
        ability: [
          "Tough Claws",
          "Sniper",
          "Pickpocket (HIDDEN)"
        ],
        egg_groups: [
          "Water 3"
        ],
        base_stats: {
          "HP": 72,
          "Attack": 105,
          "Defense": 115,
          "Special Attack": 54,
          "Special Defense": 86,
          "Speed": 68
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/689.png",
        evolution: {
          "prev": [
            "688",
            "Level 39"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 690,
        name: "Skrelp",
        type: [
          "Poison",
          "Water"
        ],
        height: "0.5 m",
        weight: "7.3 kg",
        ability: [
          "Poison Point",
          "Poison Touch",
          "Adaptability (HIDDEN)"
        ],
        egg_groups: [
          "Water 1",
          "Dragon"
        ],
        base_stats: {
          "HP": 50,
          "Attack": 60,
          "Defense": 60,
          "Special Attack": 60,
          "Special Defense": 60,
          "Speed": 30
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/690.png",
        evolution: {
          "next": [
            [
              "691",
              "Level 48"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 691,
        name: "Dragalge",
        type: [
          "Poison",
          "Dragon"
        ],
        height: "1.8 m",
        weight: "81.5 kg",
        ability: [
          "Poison Point",
          "Poison Touch",
          "Adaptability (HIDDEN)"
        ],
        egg_groups: [
          "Water 1",
          "Dragon"
        ],
        base_stats: {
          "HP": 65,
          "Attack": 75,
          "Defense": 90,
          "Special Attack": 97,
          "Special Defense": 123,
          "Speed": 44
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/691.png",
        evolution: {
          "prev": [
            "690",
            "Level 48"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 692,
        name: "Clauncher",
        type: [
          "Water"
        ],
        height: "0.5 m",
        weight: "8.3 kg",
        ability: [
          "Mega Launcher"
        ],
        egg_groups: [
          "Water 1",
          "Water 3"
        ],
        base_stats: {
          "HP": 50,
          "Attack": 53,
          "Defense": 62,
          "Special Attack": 58,
          "Special Defense": 63,
          "Speed": 44
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/692.png",
        evolution: {
          "next": [
            [
              "693",
              "Level 37"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 693,
        name: "Clawitzer",
        type: [
          "Water"
        ],
        height: "1.3 m",
        weight: "35.3 kg",
        ability: [
          "Mega Launcher"
        ],
        egg_groups: [
          "Water 1",
          "Water 3"
        ],
        base_stats: {
          "HP": 71,
          "Attack": 73,
          "Defense": 88,
          "Special Attack": 120,
          "Special Defense": 89,
          "Speed": 59
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/693.png",
        evolution: {
          "prev": [
            "692",
            "Level 37"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 694,
        name: "Helioptile",
        type: [
          "Electric",
          "Normal"
        ],
        height: "0.5 m",
        weight: "6 kg",
        ability: [
          "Dry Skin",
          "Sand Veil",
          "Solar Power (HIDDEN)"
        ],
        egg_groups: [
          "Monster",
          "Dragon"
        ],
        base_stats: {
          "HP": 44,
          "Attack": 38,
          "Defense": 33,
          "Special Attack": 61,
          "Special Defense": 43,
          "Speed": 70
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/694.png",
        evolution: {
          "next": [
            [
              "695",
              "use Sun Stone"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 695,
        name: "Heliolisk",
        type: [
          "Electric",
          "Normal"
        ],
        height: "1 m",
        weight: "21 kg",
        ability: [
          "Dry Skin",
          "Sand Veil",
          "Solar Power (HIDDEN)"
        ],
        egg_groups: [
          "Monster",
          "Dragon"
        ],
        base_stats: {
          "HP": 62,
          "Attack": 55,
          "Defense": 52,
          "Special Attack": 109,
          "Special Defense": 94,
          "Speed": 109
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/695.png",
        evolution: {
          "prev": [
            "694",
            "use Sun Stone"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 696,
        name: "Tyrunt",
        type: [
          "Rock",
          "Dragon"
        ],
        height: "0.8 m",
        weight: "26 kg",
        ability: [
          "Strong Jaw",
          "Sturdy (HIDDEN)"
        ],
        egg_groups: [
          "Monster",
          "Dragon"
        ],
        base_stats: {
          "HP": 58,
          "Attack": 89,
          "Defense": 77,
          "Special Attack": 45,
          "Special Defense": 45,
          "Speed": 48
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/696.png",
        evolution: {
          "next": [
            [
              "697",
              "Level 39, Daytime"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 697,
        name: "Tyrantrum",
        type: [
          "Rock",
          "Dragon"
        ],
        height: "2.5 m",
        weight: "270 kg",
        ability: [
          "Strong Jaw",
          "Rock Head (HIDDEN)"
        ],
        egg_groups: [
          "Monster",
          "Dragon"
        ],
        base_stats: {
          "HP": 82,
          "Attack": 121,
          "Defense": 119,
          "Special Attack": 69,
          "Special Defense": 59,
          "Speed": 71
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/697.png",
        evolution: {
          "prev": [
            "696",
            "Level 39, Daytime"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 698,
        name: "Amaura",
        type: [
          "Rock",
          "Ice"
        ],
        height: "1.3 m",
        weight: "25.2 kg",
        ability: [
          "Refrigerate",
          "Snow Warning (HIDDEN)"
        ],
        egg_groups: [
          "Monster"
        ],
        base_stats: {
          "HP": 77,
          "Attack": 59,
          "Defense": 50,
          "Special Attack": 67,
          "Special Defense": 63,
          "Speed": 46
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/698.png",
        evolution: {
          "next": [
            [
              "699",
              "Level 39, Nighttime"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 699,
        name: "Aurorus",
        type: [
          "Rock",
          "Ice"
        ],
        height: "2.7 m",
        weight: "225 kg",
        ability: [
          "Refrigerate",
          "Snow Warning (HIDDEN)"
        ],
        egg_groups: [
          "Monster"
        ],
        base_stats: {
          "HP": 123,
          "Attack": 77,
          "Defense": 72,
          "Special Attack": 99,
          "Special Defense": 92,
          "Speed": 58
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/699.png",
        evolution: {
          "prev": [
            "698",
            "Level 39, Nighttime"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 700,
        name: "Sylveon",
        type: [
          "Fairy"
        ],
        height: "1 m",
        weight: "23.5 kg",
        ability: [
          "Cute Charm",
          "Pixilate (HIDDEN)"
        ],
        egg_groups: [
          "Field"
        ],
        base_stats: {
          "HP": 95,
          "Attack": 65,
          "Defense": 65,
          "Special Attack": 110,
          "Special Defense": 130,
          "Speed": 60
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/700.png",
        evolution: {
          "prev": [
            "133",
            "High Affection, knowing Fairy move"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 701,
        name: "Hawlucha",
        type: [
          "Fighting",
          "Flying"
        ],
        height: "0.8 m",
        weight: "21.5 kg",
        ability: [
          "Limber",
          "Unburden",
          "Mold Breaker (HIDDEN)"
        ],
        egg_groups: [
          "Human-Like"
        ],
        base_stats: {
          "HP": 78,
          "Attack": 92,
          "Defense": 75,
          "Special Attack": 74,
          "Special Defense": 63,
          "Speed": 118
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/701.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 702,
        name: "Dedenne",
        type: [
          "Electric",
          "Fairy"
        ],
        height: "0.2 m",
        weight: "2.2 kg",
        ability: [
          "Cheek Pouch",
          "Pickup",
          "Plus (HIDDEN)"
        ],
        egg_groups: [
          "Field",
          "Fairy"
        ],
        base_stats: {
          "HP": 67,
          "Attack": 58,
          "Defense": 57,
          "Special Attack": 81,
          "Special Defense": 67,
          "Speed": 101
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/702.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 703,
        name: "Carbink",
        type: [
          "Rock",
          "Fairy"
        ],
        height: "0.3 m",
        weight: "5.7 kg",
        ability: [
          "Clear Body",
          "Sturdy (HIDDEN)"
        ],
        egg_groups: [
          "Fairy",
          "Mineral"
        ],
        base_stats: {
          "HP": 50,
          "Attack": 50,
          "Defense": 150,
          "Special Attack": 50,
          "Special Defense": 150,
          "Speed": 50
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/703.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 704,
        name: "Goomy",
        type: [
          "Dragon"
        ],
        height: "0.3 m",
        weight: "2.8 kg",
        ability: [
          "Sap Sipper",
          "Hydration",
          "Gooey (HIDDEN)"
        ],
        egg_groups: [
          "Dragon"
        ],
        base_stats: {
          "HP": 45,
          "Attack": 50,
          "Defense": 35,
          "Special Attack": 55,
          "Special Defense": 75,
          "Speed": 40
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/704.png",
        evolution: {
          "next": [
            [
              "705",
              "Level 40"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 705,
        name: "Sliggoo",
        type: [
          "Dragon"
        ],
        height: "0.8 m",
        weight: "17.5 kg",
        ability: [
          "Sap Sipper",
          "Hydration",
          "Gooey (HIDDEN)"
        ],
        egg_groups: [
          "Dragon"
        ],
        base_stats: {
          "HP": 68,
          "Attack": 75,
          "Defense": 53,
          "Special Attack": 83,
          "Special Defense": 113,
          "Speed": 60
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/705.png",
        evolution: {
          "prev": [
            "704",
            "Level 40"
          ],
          "next": [
            [
              "706",
              "Level 50, during rain"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 706,
        name: "Goodra",
        type: [
          "Dragon"
        ],
        height: "2 m",
        weight: "150.5 kg",
        ability: [
          "Sap Sipper",
          "Hydration",
          "Gooey (HIDDEN)"
        ],
        egg_groups: [
          "Dragon"
        ],
        base_stats: {
          "HP": 90,
          "Attack": 100,
          "Defense": 70,
          "Special Attack": 110,
          "Special Defense": 150,
          "Speed": 80
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/706.png",
        evolution: {
          "prev": [
            "705",
            "Level 50, during rain"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 707,
        name: "Klefki",
        type: [
          "Steel",
          "Fairy"
        ],
        height: "0.2 m",
        weight: "3 kg",
        ability: [
          "Prankster",
          "Magician (HIDDEN)"
        ],
        egg_groups: [
          "Mineral"
        ],
        base_stats: {
          "HP": 57,
          "Attack": 80,
          "Defense": 91,
          "Special Attack": 80,
          "Special Defense": 87,
          "Speed": 75
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/707.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 708,
        name: "Phantump",
        type: [
          "Ghost",
          "Grass"
        ],
        height: "0.4 m",
        weight: "7 kg",
        ability: [
          "Natural Cure",
          "Frisk",
          "Harvest (HIDDEN)"
        ],
        egg_groups: [
          "Grass",
          "Amorphous"
        ],
        base_stats: {
          "HP": 43,
          "Attack": 70,
          "Defense": 48,
          "Special Attack": 50,
          "Special Defense": 60,
          "Speed": 38
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/708.png",
        evolution: {
          "next": [
            [
              "709",
              "Trade"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 709,
        name: "Trevenant",
        type: [
          "Ghost",
          "Grass"
        ],
        height: "1.5 m",
        weight: "71 kg",
        ability: [
          "Natural Cure",
          "Frisk",
          "Harvest (HIDDEN)"
        ],
        egg_groups: [
          "Grass",
          "Amorphous"
        ],
        base_stats: {
          "HP": 85,
          "Attack": 110,
          "Defense": 76,
          "Special Attack": 65,
          "Special Defense": 82,
          "Speed": 56
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/709.png",
        evolution: {
          "prev": [
            "708",
            "Trade"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 710,
        name: "Pumpkaboo",
        type: [
          "Ghost",
          "Grass"
        ],
        height: "0.4 m",
        weight: "5 kg",
        ability: [
          "Pickup",
          "Frisk",
          "Insomnia (HIDDEN)"
        ],
        egg_groups: [
          "Amorphous"
        ],
        base_stats: {
          "HP": 59,
          "Attack": 66,
          "Defense": 70,
          "Special Attack": 44,
          "Special Defense": 55,
          "Speed": 41
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/710.png",
        evolution: {
          "next": [
            [
              "711",
              "Trade"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 711,
        name: "Gourgeist",
        type: [
          "Ghost",
          "Grass"
        ],
        height: "0.9 m",
        weight: "12.5 kg",
        ability: [
          "Pickup",
          "Frisk",
          "Insomnia (HIDDEN)"
        ],
        egg_groups: [
          "Amorphous"
        ],
        base_stats: {
          "HP": 85,
          "Attack": 100,
          "Defense": 122,
          "Special Attack": 58,
          "Special Defense": 75,
          "Speed": 54
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/711.png",
        evolution: {
          "prev": [
            "710",
            "Trade"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 712,
        name: "Bergmite",
        type: [
          "Ice"
        ],
        height: "1 m",
        weight: "99.5 kg",
        ability: [
          "Own Tempo",
          "Ice Body",
          "Sturdy (HIDDEN)"
        ],
        egg_groups: [
          "Monster"
        ],
        base_stats: {
          "HP": 55,
          "Attack": 69,
          "Defense": 85,
          "Special Attack": 32,
          "Special Defense": 35,
          "Speed": 28
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/712.png",
        evolution: {
          "next": [
            [
              "713",
              "Level 37"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 713,
        name: "Avalugg",
        type: [
          "Ice"
        ],
        height: "2 m",
        weight: "505 kg",
        ability: [
          "Own Tempo",
          "Ice Body",
          "Sturdy (HIDDEN)"
        ],
        egg_groups: [
          "Monster"
        ],
        base_stats: {
          "HP": 95,
          "Attack": 117,
          "Defense": 184,
          "Special Attack": 44,
          "Special Defense": 46,
          "Speed": 28
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/713.png",
        evolution: {
          "prev": [
            "712",
            "Level 37"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 714,
        name: "Noibat",
        type: [
          "Flying",
          "Dragon"
        ],
        height: "0.5 m",
        weight: "8 kg",
        ability: [
          "Frisk",
          "Infiltrator",
          "Telepathy (HIDDEN)"
        ],
        egg_groups: [
          "Flying"
        ],
        base_stats: {
          "HP": 40,
          "Attack": 30,
          "Defense": 35,
          "Special Attack": 45,
          "Special Defense": 40,
          "Speed": 55
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/714.png",
        evolution: {
          "next": [
            [
              "715",
              "Level 48"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 715,
        name: "Noivern",
        type: [
          "Flying",
          "Dragon"
        ],
        height: "1.5 m",
        weight: "85 kg",
        ability: [
          "Frisk",
          "Infiltrator",
          "Telepathy (HIDDEN)"
        ],
        egg_groups: [
          "Flying"
        ],
        base_stats: {
          "HP": 85,
          "Attack": 70,
          "Defense": 80,
          "Special Attack": 97,
          "Special Defense": 80,
          "Speed": 123
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/715.png",
        evolution: {
          "prev": [
            "714",
            "Level 48"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 716,
        name: "Xerneas",
        type: [
          "Fairy"
        ],
        height: "3 m",
        weight: "215 kg",
        ability: [
          "Fairy Aura"
        ],
        egg_groups: [
          "Undiscovered"
        ],
        base_stats: {
          "HP": 126,
          "Attack": 131,
          "Defense": 95,
          "Special Attack": 131,
          "Special Defense": 98,
          "Speed": 99
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/716.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 717,
        name: "Yveltal",
        type: [
          "Dark",
          "Flying"
        ],
        height: "5.8 m",
        weight: "203 kg",
        ability: [
          "Dark Aura"
        ],
        egg_groups: [
          "Undiscovered"
        ],
        base_stats: {
          "HP": 126,
          "Attack": 131,
          "Defense": 95,
          "Special Attack": 131,
          "Special Defense": 98,
          "Speed": 99
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/717.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 718,
        name: "Zygarde",
        type: [
          "Dragon",
          "Ground"
        ],
        height: "5 m",
        weight: "305 kg",
        ability: [
          "Aura Break"
        ],
        egg_groups: [
          "Undiscovered"
        ],
        base_stats: {
          "HP": 108,
          "Attack": 100,
          "Defense": 121,
          "Special Attack": 81,
          "Special Defense": 95,
          "Speed": 95
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/718.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 719,
        name: "Diancie",
        type: [
          "Rock",
          "Fairy"
        ],
        height: "0.7 m",
        weight: "8.8 kg",
        ability: [
          "Clear Body"
        ],
        egg_groups: [
          "Undiscovered"
        ],
        base_stats: {
          "HP": 50,
          "Attack": 100,
          "Defense": 150,
          "Special Attack": 100,
          "Special Defense": 150,
          "Speed": 50
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/719.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 720,
        name: "Hoopa",
        type: [
          "Psychic",
          "Ghost"
        ],
        height: "0.5 m",
        weight: "9 kg",
        ability: [
          "Magician"
        ],
        egg_groups: [
          "Undiscovered"
        ],
        base_stats: {
          "HP": 80,
          "Attack": 110,
          "Defense": 60,
          "Special Attack": 150,
          "Special Defense": 130,
          "Speed": 70
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/720.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 721,
        name: "Volcanion",
        type: [
          "Fire",
          "Water"
        ],
        height: "1.7 m",
        weight: "195 kg",
        ability: [
          "Water Absorb"
        ],
        egg_groups: [
          "Undiscovered"
        ],
        base_stats: {
          "HP": 80,
          "Attack": 110,
          "Defense": 120,
          "Special Attack": 130,
          "Special Defense": 90,
          "Speed": 70
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/721.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 722,
        name: "Rowlet",
        type: [
          "Grass",
          "Flying"
        ],
        height: "0.3 m",
        weight: "1.5 kg",
        ability: [
          "Overgrow",
          "Long Reach (HIDDEN)"
        ],
        egg_groups: [
          "Flying"
        ],
        base_stats: {
          "HP": 68,
          "Attack": 55,
          "Defense": 55,
          "Special Attack": 50,
          "Special Defense": 50,
          "Speed": 42
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/722.png",
        evolution: {
          "next": [
            [
              "723",
              "Level 17"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 723,
        name: "Dartrix",
        type: [
          "Grass",
          "Flying"
        ],
        height: "0.7 m",
        weight: "16 kg",
        ability: [
          "Overgrow",
          "Long Reach (HIDDEN)"
        ],
        egg_groups: [
          "Flying"
        ],
        base_stats: {
          "HP": 78,
          "Attack": 75,
          "Defense": 75,
          "Special Attack": 70,
          "Special Defense": 70,
          "Speed": 52
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/723.png",
        evolution: {
          "prev": [
            "722",
            "Level 17"
          ],
          "next": [
            [
              "724",
              "Level 34"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 724,
        name: "Decidueye",
        type: [
          "Grass",
          "Ghost"
        ],
        height: "1.6 m",
        weight: "36.6 kg",
        ability: [
          "Overgrow",
          "Long Reach (HIDDEN)"
        ],
        egg_groups: [
          "Flying"
        ],
        base_stats: {
          "HP": 78,
          "Attack": 107,
          "Defense": 75,
          "Special Attack": 100,
          "Special Defense": 100,
          "Speed": 70
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/724.png",
        evolution: {
          "prev": [
            "723",
            "Level 34"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 725,
        name: "Litten",
        type: [
          "Fire"
        ],
        height: "0.4 m",
        weight: "4.3 kg",
        ability: [
          "Blaze",
          "Intimidate (HIDDEN)"
        ],
        egg_groups: [
          "Field"
        ],
        base_stats: {
          "HP": 45,
          "Attack": 65,
          "Defense": 40,
          "Special Attack": 60,
          "Special Defense": 40,
          "Speed": 70
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/725.png",
        evolution: {
          "next": [
            [
              "726",
              "Level 17"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 726,
        name: "Torracat",
        type: [
          "Fire"
        ],
        height: "0.7 m",
        weight: "25 kg",
        ability: [
          "Blaze",
          "Intimidate (HIDDEN)"
        ],
        egg_groups: [
          "Field"
        ],
        base_stats: {
          "HP": 65,
          "Attack": 85,
          "Defense": 50,
          "Special Attack": 80,
          "Special Defense": 50,
          "Speed": 90
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/726.png",
        evolution: {
          "prev": [
            "725",
            "Level 17"
          ],
          "next": [
            [
              "727",
              "Level 34"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 727,
        name: "Incineroar",
        type: [
          "Fire",
          "Dark"
        ],
        height: "1.8 m",
        weight: "83 kg",
        ability: [
          "Blaze",
          "Intimidate (HIDDEN)"
        ],
        egg_groups: [
          "Field"
        ],
        base_stats: {
          "HP": 95,
          "Attack": 115,
          "Defense": 90,
          "Special Attack": 80,
          "Special Defense": 90,
          "Speed": 60
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/727.png",
        evolution: {
          "prev": [
            "726",
            "Level 34"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 728,
        name: "Popplio",
        type: [
          "Water"
        ],
        height: "0.4 m",
        weight: "7.5 kg",
        ability: [
          "Torrent",
          "Liquid Voice (HIDDEN)"
        ],
        egg_groups: [
          "Water 1",
          "Field"
        ],
        base_stats: {
          "HP": 50,
          "Attack": 54,
          "Defense": 54,
          "Special Attack": 66,
          "Special Defense": 56,
          "Speed": 40
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/728.png",
        evolution: {
          "next": [
            [
              "729",
              "Level 17"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 729,
        name: "Brionne",
        type: [
          "Water"
        ],
        height: "0.6 m",
        weight: "17.5 kg",
        ability: [
          "Torrent",
          "Liquid Voice (HIDDEN)"
        ],
        egg_groups: [
          "Water 1",
          "Field"
        ],
        base_stats: {
          "HP": 60,
          "Attack": 69,
          "Defense": 69,
          "Special Attack": 91,
          "Special Defense": 81,
          "Speed": 50
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/729.png",
        evolution: {
          "prev": [
            "728",
            "Level 17"
          ],
          "next": [
            [
              "730",
              "Level 34"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 730,
        name: "Primarina",
        type: [
          "Water",
          "Fairy"
        ],
        height: "1.8 m",
        weight: "44 kg",
        ability: [
          "Torrent",
          "Liquid Voice (HIDDEN)"
        ],
        egg_groups: [
          "Water 1",
          "Field"
        ],
        base_stats: {
          "HP": 80,
          "Attack": 74,
          "Defense": 74,
          "Special Attack": 126,
          "Special Defense": 116,
          "Speed": 60
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/730.png",
        evolution: {
          "prev": [
            "729",
            "Level 34"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 731,
        name: "Pikipek",
        type: [
          "Normal",
          "Flying"
        ],
        height: "0.3 m",
        weight: "1.2 kg",
        ability: [
          "Keen Eye",
          "Skill Link",
          "Pickup (HIDDEN)"
        ],
        egg_groups: [
          "Flying"
        ],
        base_stats: {
          "HP": 35,
          "Attack": 75,
          "Defense": 30,
          "Special Attack": 30,
          "Special Defense": 30,
          "Speed": 65
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/731.png",
        evolution: {
          "next": [
            [
              "732",
              "Level 14"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 732,
        name: "Trumbeak",
        type: [
          "Normal",
          "Flying"
        ],
        height: "0.6 m",
        weight: "14.8 kg",
        ability: [
          "Keen Eye",
          "Skill Link",
          "Pickup (HIDDEN)"
        ],
        egg_groups: [
          "Flying"
        ],
        base_stats: {
          "HP": 55,
          "Attack": 85,
          "Defense": 50,
          "Special Attack": 40,
          "Special Defense": 50,
          "Speed": 75
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/732.png",
        evolution: {
          "prev": [
            "731",
            "Level 14"
          ],
          "next": [
            [
              "733",
              "Level 28"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 733,
        name: "Toucannon",
        type: [
          "Normal",
          "Flying"
        ],
        height: "1.1 m",
        weight: "26 kg",
        ability: [
          "Keen Eye",
          "Skill Link",
          "Sheer Force (HIDDEN)"
        ],
        egg_groups: [
          "Flying"
        ],
        base_stats: {
          "HP": 80,
          "Attack": 120,
          "Defense": 75,
          "Special Attack": 75,
          "Special Defense": 75,
          "Speed": 60
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/733.png",
        evolution: {
          "prev": [
            "732",
            "Level 28"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 734,
        name: "Yungoos",
        type: [
          "Normal"
        ],
        height: "0.4 m",
        weight: "6 kg",
        ability: [
          "Stakeout",
          "Strong Jaw",
          "Adaptability (HIDDEN)"
        ],
        egg_groups: [
          "Field"
        ],
        base_stats: {
          "HP": 48,
          "Attack": 70,
          "Defense": 30,
          "Special Attack": 30,
          "Special Defense": 30,
          "Speed": 45
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/734.png",
        evolution: {
          "next": [
            [
              "735",
              "Level 20, Daytime"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 735,
        name: "Gumshoos",
        type: [
          "Normal"
        ],
        height: "0.7 m",
        weight: "14.2 kg",
        ability: [
          "Stakeout",
          "Strong Jaw",
          "Adaptability (HIDDEN)"
        ],
        egg_groups: [
          "Field"
        ],
        base_stats: {
          "HP": 88,
          "Attack": 110,
          "Defense": 60,
          "Special Attack": 55,
          "Special Defense": 60,
          "Speed": 45
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/735.png",
        evolution: {
          "prev": [
            "734",
            "Level 20, Daytime"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 736,
        name: "Grubbin",
        type: [
          "Bug"
        ],
        height: "0.4 m",
        weight: "4.4 kg",
        ability: [
          "Swarm"
        ],
        egg_groups: [
          "Bug"
        ],
        base_stats: {
          "HP": 47,
          "Attack": 62,
          "Defense": 45,
          "Special Attack": 55,
          "Special Defense": 45,
          "Speed": 46
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/736.png",
        evolution: {
          "next": [
            [
              "737",
              "Level 20"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 737,
        name: "Charjabug",
        type: [
          "Bug",
          "Electric"
        ],
        height: "0.5 m",
        weight: "10.5 kg",
        ability: [
          "Battery"
        ],
        egg_groups: [
          "Bug"
        ],
        base_stats: {
          "HP": 57,
          "Attack": 82,
          "Defense": 95,
          "Special Attack": 55,
          "Special Defense": 75,
          "Speed": 36
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/737.png",
        evolution: {
          "prev": [
            "736",
            "Level 20"
          ],
          "next": [
            [
              "738",
              "Level up in a Magnetic Field area"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 738,
        name: "Vikavolt",
        type: [
          "Bug",
          "Electric"
        ],
        height: "1.5 m",
        weight: "45 kg",
        ability: [
          "Levitate"
        ],
        egg_groups: [
          "Bug"
        ],
        base_stats: {
          "HP": 77,
          "Attack": 70,
          "Defense": 90,
          "Special Attack": 145,
          "Special Defense": 75,
          "Speed": 43
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/738.png",
        evolution: {
          "prev": [
            "737",
            "use Thunder Stone, in Gen 8, or level up in a Magnetic Field area"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 739,
        name: "Crabrawler",
        type: [
          "Fighting"
        ],
        height: "0.6 m",
        weight: "7 kg",
        ability: [
          "Hyper Cutter",
          "Iron Fist",
          "Anger Point (HIDDEN)"
        ],
        egg_groups: [
          "Water 3"
        ],
        base_stats: {
          "HP": 47,
          "Attack": 82,
          "Defense": 57,
          "Special Attack": 42,
          "Special Defense": 47,
          "Speed": 63
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/739.png",
        evolution: {
          "next": [
            [
              "740",
              "at Mount Lanakila"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 740,
        name: "Crabominable",
        type: [
          "Fighting",
          "Ice"
        ],
        height: "1.7 m",
        weight: "180 kg",
        ability: [
          "Hyper Cutter",
          "Iron Fist",
          "Anger Point (HIDDEN)"
        ],
        egg_groups: [
          "Water 3"
        ],
        base_stats: {
          "HP": 97,
          "Attack": 132,
          "Defense": 77,
          "Special Attack": 62,
          "Special Defense": 67,
          "Speed": 43
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/740.png",
        evolution: {
          "prev": [
            "739",
            "at Mount Lanakila"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 741,
        name: "Oricorio",
        type: [
          "Fire",
          "Flying"
        ],
        height: "0.6 m",
        weight: "3.4 kg",
        ability: [
          "Dancer"
        ],
        egg_groups: [
          "Flying"
        ],
        base_stats: {
          "HP": 75,
          "Attack": 70,
          "Defense": 70,
          "Special Attack": 98,
          "Special Defense": 70,
          "Speed": 93
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/741.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 742,
        name: "Cutiefly",
        type: [
          "Bug",
          "Fairy"
        ],
        height: "0.1 m",
        weight: "0.2 kg",
        ability: [
          "Honey Gather",
          "Shield Dust",
          "Sweet Veil (HIDDEN)"
        ],
        egg_groups: [
          "Bug",
          "Fairy"
        ],
        base_stats: {
          "HP": 40,
          "Attack": 45,
          "Defense": 40,
          "Special Attack": 55,
          "Special Defense": 40,
          "Speed": 84
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/742.png",
        evolution: {
          "next": [
            [
              "743",
              "Level 25"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 743,
        name: "Ribombee",
        type: [
          "Bug",
          "Fairy"
        ],
        height: "0.2 m",
        weight: "0.5 kg",
        ability: [
          "Honey Gather",
          "Shield Dust",
          "Sweet Veil (HIDDEN)"
        ],
        egg_groups: [
          "Bug",
          "Fairy"
        ],
        base_stats: {
          "HP": 60,
          "Attack": 55,
          "Defense": 60,
          "Special Attack": 95,
          "Special Defense": 70,
          "Speed": 124
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/743.png",
        evolution: {
          "prev": [
            "742",
            "Level 25"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 744,
        name: "Rockruff",
        type: [
          "Rock"
        ],
        height: "0.5 m",
        weight: "9.2 kg",
        ability: [
          "Keen Eye",
          "Vital Spirit",
          "Steadfast (HIDDEN)"
        ],
        egg_groups: [
          "Field"
        ],
        base_stats: {
          "HP": 45,
          "Attack": 65,
          "Defense": 40,
          "Special Attack": 30,
          "Special Defense": 40,
          "Speed": 60
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/744.png",
        evolution: {
          "next": [
            [
              "745",
              "Level 25"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 745,
        name: "Lycanroc",
        type: [
          "Rock"
        ],
        height: "0.8 m",
        weight: "25 kg",
        ability: [
          "Keen Eye",
          "Sand Rush",
          "Steadfast (HIDDEN)"
        ],
        egg_groups: [
          "Field"
        ],
        base_stats: {
          "HP": 75,
          "Attack": 115,
          "Defense": 65,
          "Special Attack": 55,
          "Special Defense": 65,
          "Speed": 112
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/745.png",
        evolution: {
          "prev": [
            "744",
            "Level 25"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 746,
        name: "Wishiwashi",
        type: [
          "Water"
        ],
        height: "0.2 m",
        weight: "0.3 kg",
        ability: [
          "Schooling"
        ],
        egg_groups: [
          "Water 2"
        ],
        base_stats: {
          "HP": 45,
          "Attack": 20,
          "Defense": 20,
          "Special Attack": 25,
          "Special Defense": 25,
          "Speed": 40
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/746.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 747,
        name: "Mareanie",
        type: [
          "Poison",
          "Water"
        ],
        height: "0.4 m",
        weight: "8 kg",
        ability: [
          "Merciless",
          "Limber",
          "Regenerator (HIDDEN)"
        ],
        egg_groups: [
          "Water 1"
        ],
        base_stats: {
          "HP": 50,
          "Attack": 53,
          "Defense": 62,
          "Special Attack": 43,
          "Special Defense": 52,
          "Speed": 45
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/747.png",
        evolution: {
          "next": [
            [
              "748",
              "Level 38"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 748,
        name: "Toxapex",
        type: [
          "Poison",
          "Water"
        ],
        height: "0.7 m",
        weight: "14.5 kg",
        ability: [
          "Merciless",
          "Limber",
          "Regenerator (HIDDEN)"
        ],
        egg_groups: [
          "Water 1"
        ],
        base_stats: {
          "HP": 50,
          "Attack": 63,
          "Defense": 152,
          "Special Attack": 53,
          "Special Defense": 142,
          "Speed": 35
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/748.png",
        evolution: {
          "prev": [
            "747",
            "Level 38"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 749,
        name: "Mudbray",
        type: [
          "Ground"
        ],
        height: "1 m",
        weight: "110 kg",
        ability: [
          "Own Tempo",
          "Stamina",
          "Inner Focus (HIDDEN)"
        ],
        egg_groups: [
          "Field"
        ],
        base_stats: {
          "HP": 70,
          "Attack": 100,
          "Defense": 70,
          "Special Attack": 45,
          "Special Defense": 55,
          "Speed": 45
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/749.png",
        evolution: {
          "next": [
            [
              "750",
              "Level 30"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 750,
        name: "Mudsdale",
        type: [
          "Ground"
        ],
        height: "2.5 m",
        weight: "920 kg",
        ability: [
          "Own Tempo",
          "Stamina",
          "Inner Focus (HIDDEN)"
        ],
        egg_groups: [
          "Field"
        ],
        base_stats: {
          "HP": 100,
          "Attack": 125,
          "Defense": 100,
          "Special Attack": 55,
          "Special Defense": 85,
          "Speed": 35
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/750.png",
        evolution: {
          "prev": [
            "749",
            "Level 30"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 751,
        name: "Dewpider",
        type: [
          "Water",
          "Bug"
        ],
        height: "0.3 m",
        weight: "4 kg",
        ability: [
          "Water Bubble",
          "Water Absorb (HIDDEN)"
        ],
        egg_groups: [
          "Water 1",
          "Bug"
        ],
        base_stats: {
          "HP": 38,
          "Attack": 40,
          "Defense": 52,
          "Special Attack": 40,
          "Special Defense": 72,
          "Speed": 27
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/751.png",
        evolution: {
          "next": [
            [
              "752",
              "Level 22"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 752,
        name: "Araquanid",
        type: [
          "Water",
          "Bug"
        ],
        height: "1.8 m",
        weight: "82 kg",
        ability: [
          "Water Bubble",
          "Water Absorb (HIDDEN)"
        ],
        egg_groups: [
          "Water 1",
          "Bug"
        ],
        base_stats: {
          "HP": 68,
          "Attack": 70,
          "Defense": 92,
          "Special Attack": 50,
          "Special Defense": 132,
          "Speed": 42
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/752.png",
        evolution: {
          "prev": [
            "751",
            "Level 22"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 753,
        name: "Fomantis",
        type: [
          "Grass"
        ],
        height: "0.3 m",
        weight: "1.5 kg",
        ability: [
          "Leaf Guard",
          "Contrary (HIDDEN)"
        ],
        egg_groups: [
          "Grass"
        ],
        base_stats: {
          "HP": 40,
          "Attack": 55,
          "Defense": 35,
          "Special Attack": 50,
          "Special Defense": 35,
          "Speed": 35
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/753.png",
        evolution: {
          "next": [
            [
              "754",
              "Level 34, Daytime"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 754,
        name: "Lurantis",
        type: [
          "Grass"
        ],
        height: "0.9 m",
        weight: "18.5 kg",
        ability: [
          "Leaf Guard",
          "Contrary (HIDDEN)"
        ],
        egg_groups: [
          "Grass"
        ],
        base_stats: {
          "HP": 70,
          "Attack": 105,
          "Defense": 90,
          "Special Attack": 80,
          "Special Defense": 90,
          "Speed": 45
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/754.png",
        evolution: {
          "prev": [
            "753",
            "Level 34, Daytime"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 755,
        name: "Morelull",
        type: [
          "Grass",
          "Fairy"
        ],
        height: "0.2 m",
        weight: "1.5 kg",
        ability: [
          "Illuminate",
          "Effect Spore",
          "Rain Dish (HIDDEN)"
        ],
        egg_groups: [
          "Grass"
        ],
        base_stats: {
          "HP": 40,
          "Attack": 35,
          "Defense": 55,
          "Special Attack": 65,
          "Special Defense": 75,
          "Speed": 15
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/755.png",
        evolution: {
          "next": [
            [
              "756",
              "Level 24"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 756,
        name: "Shiinotic",
        type: [
          "Grass",
          "Fairy"
        ],
        height: "1 m",
        weight: "11.5 kg",
        ability: [
          "Illuminate",
          "Effect Spore",
          "Rain Dish (HIDDEN)"
        ],
        egg_groups: [
          "Grass"
        ],
        base_stats: {
          "HP": 60,
          "Attack": 45,
          "Defense": 80,
          "Special Attack": 90,
          "Special Defense": 100,
          "Speed": 30
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/756.png",
        evolution: {
          "prev": [
            "755",
            "Level 24"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 757,
        name: "Salandit",
        type: [
          "Poison",
          "Fire"
        ],
        height: "0.6 m",
        weight: "4.8 kg",
        ability: [
          "Corrosion",
          "Oblivious (HIDDEN)"
        ],
        egg_groups: [
          "Monster",
          "Dragon"
        ],
        base_stats: {
          "HP": 48,
          "Attack": 44,
          "Defense": 40,
          "Special Attack": 71,
          "Special Defense": 40,
          "Speed": 77
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/757.png",
        evolution: {
          "next": [
            [
              "758",
              "Level 33, Female"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 758,
        name: "Salazzle",
        type: [
          "Poison",
          "Fire"
        ],
        height: "1.2 m",
        weight: "22.2 kg",
        ability: [
          "Corrosion",
          "Oblivious (HIDDEN)"
        ],
        egg_groups: [
          "Monster",
          "Dragon"
        ],
        base_stats: {
          "HP": 68,
          "Attack": 64,
          "Defense": 60,
          "Special Attack": 111,
          "Special Defense": 60,
          "Speed": 117
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/758.png",
        evolution: {
          "prev": [
            "757",
            "Level 33, Female"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 759,
        name: "Stufful",
        type: [
          "Normal",
          "Fighting"
        ],
        height: "0.5 m",
        weight: "6.8 kg",
        ability: [
          "Fluffy",
          "Klutz",
          "Cute Charm (HIDDEN)"
        ],
        egg_groups: [
          "Field"
        ],
        base_stats: {
          "HP": 70,
          "Attack": 75,
          "Defense": 50,
          "Special Attack": 45,
          "Special Defense": 50,
          "Speed": 50
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/759.png",
        evolution: {
          "next": [
            [
              "760",
              "Level 27"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 760,
        name: "Bewear",
        type: [
          "Normal",
          "Fighting"
        ],
        height: "2.1 m",
        weight: "135 kg",
        ability: [
          "Fluffy",
          "Klutz",
          "Unnerve (HIDDEN)"
        ],
        egg_groups: [
          "Field"
        ],
        base_stats: {
          "HP": 120,
          "Attack": 125,
          "Defense": 80,
          "Special Attack": 55,
          "Special Defense": 60,
          "Speed": 60
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/760.png",
        evolution: {
          "prev": [
            "759",
            "Level 27"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 761,
        name: "Bounsweet",
        type: [
          "Grass"
        ],
        height: "0.3 m",
        weight: "3.2 kg",
        ability: [
          "Leaf Guard",
          "Oblivious",
          "Sweet Veil (HIDDEN)"
        ],
        egg_groups: [
          "Grass"
        ],
        base_stats: {
          "HP": 42,
          "Attack": 30,
          "Defense": 38,
          "Special Attack": 30,
          "Special Defense": 38,
          "Speed": 32
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/761.png",
        evolution: {
          "next": [
            [
              "762",
              "Level 18"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 762,
        name: "Steenee",
        type: [
          "Grass"
        ],
        height: "0.7 m",
        weight: "8.2 kg",
        ability: [
          "Leaf Guard",
          "Oblivious",
          "Sweet Veil (HIDDEN)"
        ],
        egg_groups: [
          "Grass"
        ],
        base_stats: {
          "HP": 52,
          "Attack": 40,
          "Defense": 48,
          "Special Attack": 40,
          "Special Defense": 48,
          "Speed": 62
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/762.png",
        evolution: {
          "prev": [
            "761",
            "Level 18"
          ],
          "next": [
            [
              "763",
              "after Stomp learned"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 763,
        name: "Tsareena",
        type: [
          "Grass"
        ],
        height: "1.2 m",
        weight: "21.4 kg",
        ability: [
          "Leaf Guard",
          "Queenly Majesty",
          "Sweet Veil (HIDDEN)"
        ],
        egg_groups: [
          "Grass"
        ],
        base_stats: {
          "HP": 72,
          "Attack": 120,
          "Defense": 98,
          "Special Attack": 50,
          "Special Defense": 98,
          "Speed": 72
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/763.png",
        evolution: {
          "prev": [
            "762",
            "after Stomp learned"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 764,
        name: "Comfey",
        type: [
          "Fairy"
        ],
        height: "0.1 m",
        weight: "0.3 kg",
        ability: [
          "Flower Veil",
          "Triage",
          "Natural Cure (HIDDEN)"
        ],
        egg_groups: [
          "Grass"
        ],
        base_stats: {
          "HP": 51,
          "Attack": 52,
          "Defense": 90,
          "Special Attack": 82,
          "Special Defense": 110,
          "Speed": 100
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/764.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 765,
        name: "Oranguru",
        type: [
          "Normal",
          "Psychic"
        ],
        height: "1.5 m",
        weight: "76 kg",
        ability: [
          "Inner Focus",
          "Telepathy",
          "Symbiosis (HIDDEN)"
        ],
        egg_groups: [
          "Field"
        ],
        base_stats: {
          "HP": 90,
          "Attack": 60,
          "Defense": 80,
          "Special Attack": 90,
          "Special Defense": 110,
          "Speed": 60
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/765.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 766,
        name: "Passimian",
        type: [
          "Fighting"
        ],
        height: "2 m",
        weight: "82.8 kg",
        ability: [
          "Receiver",
          "Defiant (HIDDEN)"
        ],
        egg_groups: [
          "Field"
        ],
        base_stats: {
          "HP": 100,
          "Attack": 120,
          "Defense": 90,
          "Special Attack": 40,
          "Special Defense": 60,
          "Speed": 80
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/766.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 767,
        name: "Wimpod",
        type: [
          "Bug",
          "Water"
        ],
        height: "0.5 m",
        weight: "12 kg",
        ability: [
          "Wimp Out"
        ],
        egg_groups: [
          "Bug",
          "Water 3"
        ],
        base_stats: {
          "HP": 25,
          "Attack": 35,
          "Defense": 40,
          "Special Attack": 20,
          "Special Defense": 30,
          "Speed": 80
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/767.png",
        evolution: {
          "next": [
            [
              "768",
              "Level 30"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 768,
        name: "Golisopod",
        type: [
          "Bug",
          "Water"
        ],
        height: "2 m",
        weight: "108 kg",
        ability: [
          "Emergency Exit"
        ],
        egg_groups: [
          "Bug",
          "Water 3"
        ],
        base_stats: {
          "HP": 75,
          "Attack": 125,
          "Defense": 140,
          "Special Attack": 60,
          "Special Defense": 90,
          "Speed": 40
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/768.png",
        evolution: {
          "prev": [
            "767",
            "Level 30"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 769,
        name: "Sandygast",
        type: [
          "Ghost",
          "Ground"
        ],
        height: "0.5 m",
        weight: "70 kg",
        ability: [
          "Water Compaction",
          "Sand Veil (HIDDEN)"
        ],
        egg_groups: [
          "Amorphous"
        ],
        base_stats: {
          "HP": 55,
          "Attack": 55,
          "Defense": 80,
          "Special Attack": 70,
          "Special Defense": 45,
          "Speed": 15
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/769.png",
        evolution: {
          "next": [
            [
              "770",
              "Level 42"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 770,
        name: "Palossand",
        type: [
          "Ghost",
          "Ground"
        ],
        height: "1.3 m",
        weight: "250 kg",
        ability: [
          "Water Compaction",
          "Sand Veil (HIDDEN)"
        ],
        egg_groups: [
          "Amorphous"
        ],
        base_stats: {
          "HP": 85,
          "Attack": 75,
          "Defense": 110,
          "Special Attack": 100,
          "Special Defense": 75,
          "Speed": 35
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/770.png",
        evolution: {
          "prev": [
            "769",
            "Level 42"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 771,
        name: "Pyukumuku",
        type: [
          "Water"
        ],
        height: "0.3 m",
        weight: "1.2 kg",
        ability: [
          "Innards Out",
          "Unaware (HIDDEN)"
        ],
        egg_groups: [
          "Water 1"
        ],
        base_stats: {
          "HP": 55,
          "Attack": 60,
          "Defense": 130,
          "Special Attack": 30,
          "Special Defense": 130,
          "Speed": 5
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/771.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 772,
        name: "Type: Null",
        type: [
          "Normal"
        ],
        height: "1.9 m",
        weight: "120.5 kg",
        ability: [
          "Battle Armor"
        ],
        egg_groups: [
          "Undiscovered"
        ],
        base_stats: {
          "HP": 95,
          "Attack": 95,
          "Defense": 95,
          "Special Attack": 95,
          "Special Defense": 95,
          "Speed": 59
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/772.png",
        evolution: {
          "next": [
            [
              "773",
              "high Friendship"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 773,
        name: "Silvally",
        type: [
          "Normal"
        ],
        height: "2.3 m",
        weight: "100.5 kg",
        ability: [
          "Rks System"
        ],
        egg_groups: [
          "Undiscovered"
        ],
        base_stats: {
          "HP": 95,
          "Attack": 95,
          "Defense": 95,
          "Special Attack": 95,
          "Special Defense": 95,
          "Speed": 95
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/773.png",
        evolution: {
          "prev": [
            "772",
            "high Friendship"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 774,
        name: "Minior",
        type: [
          "Rock",
          "Flying"
        ],
        height: "0.3 m",
        weight: "40 kg",
        ability: [
          "Shields Down"
        ],
        egg_groups: [
          "Mineral"
        ],
        base_stats: {
          "HP": 60,
          "Attack": 60,
          "Defense": 100,
          "Special Attack": 60,
          "Special Defense": 100,
          "Speed": 60
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/774.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 775,
        name: "Komala",
        type: [
          "Normal"
        ],
        height: "0.4 m",
        weight: "19.9 kg",
        ability: [
          "Comatose"
        ],
        egg_groups: [
          "Field"
        ],
        base_stats: {
          "HP": 65,
          "Attack": 115,
          "Defense": 65,
          "Special Attack": 75,
          "Special Defense": 95,
          "Speed": 65
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/775.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 776,
        name: "Turtonator",
        type: [
          "Fire",
          "Dragon"
        ],
        height: "2 m",
        weight: "212 kg",
        ability: [
          "Shell Armor"
        ],
        egg_groups: [
          "Monster",
          "Dragon"
        ],
        base_stats: {
          "HP": 60,
          "Attack": 78,
          "Defense": 135,
          "Special Attack": 91,
          "Special Defense": 85,
          "Speed": 36
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/776.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 777,
        name: "Togedemaru",
        type: [
          "Electric",
          "Steel"
        ],
        height: "0.3 m",
        weight: "3.3 kg",
        ability: [
          "Iron Barbs",
          "Lightning Rod",
          "Sturdy (HIDDEN)"
        ],
        egg_groups: [
          "Field",
          "Fairy"
        ],
        base_stats: {
          "HP": 65,
          "Attack": 98,
          "Defense": 63,
          "Special Attack": 40,
          "Special Defense": 73,
          "Speed": 96
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/777.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 778,
        name: "Mimikyu",
        type: [
          "Ghost",
          "Fairy"
        ],
        height: "0.2 m",
        weight: "0.7 kg",
        ability: [
          "Disguise"
        ],
        egg_groups: [
          "Amorphous"
        ],
        base_stats: {
          "HP": 55,
          "Attack": 90,
          "Defense": 80,
          "Special Attack": 50,
          "Special Defense": 105,
          "Speed": 96
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/778.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 779,
        name: "Bruxish",
        type: [
          "Water",
          "Psychic"
        ],
        height: "0.9 m",
        weight: "19 kg",
        ability: [
          "Dazzling",
          "Strong Jaw",
          "Wonder Skin (HIDDEN)"
        ],
        egg_groups: [
          "Water 2"
        ],
        base_stats: {
          "HP": 68,
          "Attack": 105,
          "Defense": 70,
          "Special Attack": 70,
          "Special Defense": 70,
          "Speed": 92
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/779.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 780,
        name: "Drampa",
        type: [
          "Normal",
          "Dragon"
        ],
        height: "3 m",
        weight: "185 kg",
        ability: [
          "Berserk",
          "Sap Sipper",
          "Cloud Nine (HIDDEN)"
        ],
        egg_groups: [
          "Monster",
          "Dragon"
        ],
        base_stats: {
          "HP": 78,
          "Attack": 60,
          "Defense": 85,
          "Special Attack": 135,
          "Special Defense": 91,
          "Speed": 36
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/780.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 781,
        name: "Dhelmise",
        type: [
          "Ghost",
          "Grass"
        ],
        height: "3.9 m",
        weight: "210 kg",
        ability: [
          "Steelworker"
        ],
        egg_groups: [
          "Mineral"
        ],
        base_stats: {
          "HP": 70,
          "Attack": 131,
          "Defense": 100,
          "Special Attack": 86,
          "Special Defense": 90,
          "Speed": 40
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/781.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 782,
        name: "Jangmo-o",
        type: [
          "Dragon"
        ],
        height: "0.6 m",
        weight: "29.7 kg",
        ability: [
          "Bulletproof",
          "Soundproof",
          "Overcoat (HIDDEN)"
        ],
        egg_groups: [
          "Dragon"
        ],
        base_stats: {
          "HP": 45,
          "Attack": 55,
          "Defense": 65,
          "Special Attack": 45,
          "Special Defense": 45,
          "Speed": 45
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/782.png",
        evolution: {
          "next": [
            [
              "783",
              "Level 35"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 783,
        name: "Hakamo-o",
        type: [
          "Dragon",
          "Fighting"
        ],
        height: "1.2 m",
        weight: "47 kg",
        ability: [
          "Bulletproof",
          "Soundproof",
          "Overcoat (HIDDEN)"
        ],
        egg_groups: [
          "Dragon"
        ],
        base_stats: {
          "HP": 55,
          "Attack": 75,
          "Defense": 90,
          "Special Attack": 65,
          "Special Defense": 70,
          "Speed": 65
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/783.png",
        evolution: {
          "prev": [
            "782",
            "Level 35"
          ],
          "next": [
            [
              "784",
              "Level 45"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 784,
        name: "Kommo-o",
        type: [
          "Dragon",
          "Fighting"
        ],
        height: "1.6 m",
        weight: "78.2 kg",
        ability: [
          "Bulletproof",
          "Soundproof",
          "Overcoat (HIDDEN)"
        ],
        egg_groups: [
          "Dragon"
        ],
        base_stats: {
          "HP": 75,
          "Attack": 110,
          "Defense": 125,
          "Special Attack": 100,
          "Special Defense": 105,
          "Speed": 85
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/784.png",
        evolution: {
          "prev": [
            "783",
            "Level 45"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 785,
        name: "Tapu Koko",
        type: [
          "Electric",
          "Fairy"
        ],
        height: "1.8 m",
        weight: "20.5 kg",
        ability: [
          "Electric Surge",
          "Telepathy (HIDDEN)"
        ],
        egg_groups: [
          "Undiscovered"
        ],
        base_stats: {
          "HP": 70,
          "Attack": 115,
          "Defense": 85,
          "Special Attack": 95,
          "Special Defense": 75,
          "Speed": 130
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/785.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 786,
        name: "Tapu Lele",
        type: [
          "Psychic",
          "Fairy"
        ],
        height: "1.2 m",
        weight: "18.6 kg",
        ability: [
          "Psychic Surge",
          "Telepathy (HIDDEN)"
        ],
        egg_groups: [
          "Undiscovered"
        ],
        base_stats: {
          "HP": 70,
          "Attack": 85,
          "Defense": 75,
          "Special Attack": 130,
          "Special Defense": 115,
          "Speed": 95
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/786.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 787,
        name: "Tapu Bulu",
        type: [
          "Grass",
          "Fairy"
        ],
        height: "1.9 m",
        weight: "45.5 kg",
        ability: [
          "Grassy Surge",
          "Telepathy (HIDDEN)"
        ],
        egg_groups: [
          "Undiscovered"
        ],
        base_stats: {
          "HP": 70,
          "Attack": 130,
          "Defense": 115,
          "Special Attack": 85,
          "Special Defense": 95,
          "Speed": 75
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/787.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 788,
        name: "Tapu Fini",
        type: [
          "Water",
          "Fairy"
        ],
        height: "1.3 m",
        weight: "21.2 kg",
        ability: [
          "Misty Surge",
          "Telepathy (HIDDEN)"
        ],
        egg_groups: [
          "Undiscovered"
        ],
        base_stats: {
          "HP": 70,
          "Attack": 75,
          "Defense": 115,
          "Special Attack": 95,
          "Special Defense": 130,
          "Speed": 85
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/788.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 789,
        name: "Cosmog",
        type: [
          "Psychic"
        ],
        height: "0.2 m",
        weight: "0.1 kg",
        ability: [
          "Unaware"
        ],
        egg_groups: [
          "Undiscovered"
        ],
        base_stats: {
          "HP": 43,
          "Attack": 29,
          "Defense": 31,
          "Special Attack": 29,
          "Special Defense": 31,
          "Speed": 37
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/789.png",
        evolution: {
          "next": [
            [
              "790",
              "Level 43"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 790,
        name: "Cosmoem",
        type: [
          "Psychic"
        ],
        height: "0.1 m",
        weight: "999.9 kg",
        ability: [
          "Sturdy"
        ],
        egg_groups: [
          "Undiscovered"
        ],
        base_stats: {
          "HP": 43,
          "Attack": 29,
          "Defense": 131,
          "Special Attack": 29,
          "Special Defense": 131,
          "Speed": 37
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/790.png",
        evolution: {
          "prev": [
            "789",
            "Level 43"
          ],
          "next": [
            [
              "791",
              "Level 53, in Pokémon Sun or Ultra Sun"
            ],
            [
              "792",
              "Level 53, in Pokémon Sun or Ultra Sun"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 791,
        name: "Solgaleo",
        type: [
          "Psychic",
          "Steel"
        ],
        height: "3.4 m",
        weight: "230 kg",
        ability: [
          "Full Metal Body"
        ],
        egg_groups: [
          "Undiscovered"
        ],
        base_stats: {
          "HP": 137,
          "Attack": 137,
          "Defense": 107,
          "Special Attack": 113,
          "Special Defense": 89,
          "Speed": 97
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/791.png",
        evolution: {
          "prev": [
            "790",
            "Level 53, in Pokémon Sun or Ultra Sun"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 792,
        name: "Lunala",
        type: [
          "Psychic",
          "Ghost"
        ],
        height: "4 m",
        weight: "120 kg",
        ability: [
          "Shadow Shield"
        ],
        egg_groups: [
          "Undiscovered"
        ],
        base_stats: {
          "HP": 137,
          "Attack": 113,
          "Defense": 89,
          "Special Attack": 137,
          "Special Defense": 107,
          "Speed": 97
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/792.png",
        evolution: {
          "prev": [
            "790",
            "Level 53, in Pokémon Moon or Ultra Moon"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 793,
        name: "Nihilego",
        type: [
          "Rock",
          "Poison"
        ],
        height: "1.2 m",
        weight: "55.5 kg",
        ability: [
          "Beast Boost"
        ],
        egg_groups: [
          "Undiscovered"
        ],
        base_stats: {
          "HP": 109,
          "Attack": 53,
          "Defense": 47,
          "Special Attack": 127,
          "Special Defense": 131,
          "Speed": 103
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/793.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 794,
        name: "Buzzwole",
        type: [
          "Bug",
          "Fighting"
        ],
        height: "2.4 m",
        weight: "333.6 kg",
        ability: [
          "Beast Boost"
        ],
        egg_groups: [
          "Undiscovered"
        ],
        base_stats: {
          "HP": 107,
          "Attack": 139,
          "Defense": 139,
          "Special Attack": 53,
          "Special Defense": 53,
          "Speed": 79
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/794.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 795,
        name: "Pheromosa",
        type: [
          "Bug",
          "Fighting"
        ],
        height: "1.8 m",
        weight: "25 kg",
        ability: [
          "Beast Boost"
        ],
        egg_groups: [
          "Undiscovered"
        ],
        base_stats: {
          "HP": 71,
          "Attack": 137,
          "Defense": 37,
          "Special Attack": 137,
          "Special Defense": 37,
          "Speed": 151
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/795.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 796,
        name: "Xurkitree",
        type: [
          "Electric"
        ],
        height: "3.8 m",
        weight: "100 kg",
        ability: [
          "Beast Boost"
        ],
        egg_groups: [
          "Undiscovered"
        ],
        base_stats: {
          "HP": 83,
          "Attack": 89,
          "Defense": 71,
          "Special Attack": 173,
          "Special Defense": 71,
          "Speed": 83
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/796.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 797,
        name: "Celesteela",
        type: [
          "Steel",
          "Flying"
        ],
        height: "9.2 m",
        weight: "999.9 kg",
        ability: [
          "Beast Boost"
        ],
        egg_groups: [
          "Undiscovered"
        ],
        base_stats: {
          "HP": 97,
          "Attack": 101,
          "Defense": 103,
          "Special Attack": 107,
          "Special Defense": 101,
          "Speed": 61
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/797.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 798,
        name: "Kartana",
        type: [
          "Grass",
          "Steel"
        ],
        height: "0.3 m",
        weight: "0.1 kg",
        ability: [
          "Beast Boost"
        ],
        egg_groups: [
          "Undiscovered"
        ],
        base_stats: {
          "HP": 59,
          "Attack": 181,
          "Defense": 131,
          "Special Attack": 59,
          "Special Defense": 31,
          "Speed": 109
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/798.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 799,
        name: "Guzzlord",
        type: [
          "Dark",
          "Dragon"
        ],
        height: "5.5 m",
        weight: "888 kg",
        ability: [
          "Beast Boost"
        ],
        egg_groups: [
          "Undiscovered"
        ],
        base_stats: {
          "HP": 223,
          "Attack": 101,
          "Defense": 53,
          "Special Attack": 97,
          "Special Defense": 53,
          "Speed": 43
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/799.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 800,
        name: "Necrozma",
        type: [
          "Psychic"
        ],
        height: "2.4 m",
        weight: "230 kg",
        ability: [
          "Prism Armor"
        ],
        egg_groups: [
          "Undiscovered"
        ],
        base_stats: {
          "HP": 97,
          "Attack": 107,
          "Defense": 101,
          "Special Attack": 127,
          "Special Defense": 89,
          "Speed": 79
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/800.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 801,
        name: "Magearna",
        type: [
          "Steel",
          "Fairy"
        ],
        height: "1 m",
        weight: "80.5 kg",
        ability: [
          "Soul Heart"
        ],
        egg_groups: [
          "Undiscovered"
        ],
        base_stats: {
          "HP": 80,
          "Attack": 95,
          "Defense": 115,
          "Special Attack": 130,
          "Special Defense": 115,
          "Speed": 65
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/801.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 802,
        name: "Marshadow",
        type: [
          "Fighting",
          "Ghost"
        ],
        height: "0.7 m",
        weight: "22.2 kg",
        ability: [
          "Technician"
        ],
        egg_groups: [
          "Undiscovered"
        ],
        base_stats: {
          "HP": 90,
          "Attack": 125,
          "Defense": 80,
          "Special Attack": 90,
          "Special Defense": 90,
          "Speed": 125
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/802.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 803,
        name: "Poipole",
        type: [
          "Poison"
        ],
        height: "0.6 m",
        weight: "1.8 kg",
        ability: [
          "Beast Boost"
        ],
        egg_groups: [
          "Undiscovered"
        ],
        base_stats: {
          "HP": 67,
          "Attack": 73,
          "Defense": 67,
          "Special Attack": 73,
          "Special Defense": 67,
          "Speed": 73
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/803.png",
        evolution: {
          "next": [
            [
              "804",
              "after Dragon Pulse learned"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 804,
        name: "Naganadel",
        type: [
          "Poison",
          "Dragon"
        ],
        height: "3.6 m",
        weight: "150 kg",
        ability: [
          "Beast Boost"
        ],
        egg_groups: [
          "Undiscovered"
        ],
        base_stats: {
          "HP": 73,
          "Attack": 73,
          "Defense": 73,
          "Special Attack": 127,
          "Special Defense": 73,
          "Speed": 121
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/804.png",
        evolution: {
          "prev": [
            "803",
            "after Dragon Pulse learned"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 805,
        name: "Stakataka",
        type: [
          "Rock",
          "Steel"
        ],
        height: "5.5 m",
        weight: "820 kg",
        ability: [
          "Beast Boost"
        ],
        egg_groups: [
          "Undiscovered"
        ],
        base_stats: {
          "HP": 61,
          "Attack": 131,
          "Defense": 211,
          "Special Attack": 53,
          "Special Defense": 101,
          "Speed": 13
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/805.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 806,
        name: "Blacephalon",
        type: [
          "Fire",
          "Ghost"
        ],
        height: "1.8 m",
        weight: "13 kg",
        ability: [
          "Beast Boost"
        ],
        egg_groups: [
          "Undiscovered"
        ],
        base_stats: {
          "HP": 53,
          "Attack": 127,
          "Defense": 53,
          "Special Attack": 151,
          "Special Defense": 79,
          "Speed": 107
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/806.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 807,
        name: "Zeraora",
        type: [
          "Electric"
        ],
        height: "1.5 m",
        weight: "44.5 kg",
        ability: [
          "Volt Absorb"
        ],
        egg_groups: [
          "Undiscovered"
        ],
        base_stats: {
          "HP": 88,
          "Attack": 112,
          "Defense": 75,
          "Special Attack": 102,
          "Special Defense": 80,
          "Speed": 143
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/807.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 808,
        name: "Meltan",
        type: [
          "Steel"
        ],
        height: "0.2 m",
        weight: "8.0 kg",
        ability: [
          "Magnet Pull"
        ],
        egg_groups: [
          "Undiscovered"
        ],
        base_stats: {
          "HP": 46,
          "Attack": 65,
          "Defense": 65,
          "Special Attack": 55,
          "Special Defense": 35,
          "Speed": 34
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/808.png",
        evolution: {
          "next": [
            [
              "809",
              "Pokémon GO only, 400 Meltan Candies"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 809,
        name: "Melmetal",
        type: [
          "Steel"
        ],
        height: "2.5 m",
        weight: "800.0 kg",
        ability: [
          "Iron Fist"
        ],
        egg_groups: [
          "Undiscovered"
        ],
        base_stats: {
          "HP": 135,
          "Attack": 143,
          "Defense": 143,
          "Special Attack": 80,
          "Special Defense": 65,
          "Speed": 34
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/809.png",
        evolution: {
          "prev": [
            "808",
            "Pokémon GO only, 400 Meltan Candies"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 810,
        name: "Grookey",
        type: [
          "Grass"
        ],
        height: "0 m",
        weight: "5 kg",
        ability: [
          "Overgrow",
          "Grassy-surge (HIDDEN)"
        ],
        base_stats: {
          "HP": 50,
          "Attack": 65,
          "Defense": 50,
          "Special Attack": 40,
          "Special Defense": 40,
          "Speed": 65
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/810.png",
        evolution: {
          "next": [
            [
              "811",
              "Level 16"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 811,
        name: "Thwackey",
        type: [
          "Grass"
        ],
        height: "1 m",
        weight: "14 kg",
        ability: [
          "Overgrow",
          "Grassy-surge (HIDDEN)"
        ],
        base_stats: {
          "HP": 70,
          "Attack": 85,
          "Defense": 70,
          "Special Attack": 55,
          "Special Defense": 60,
          "Speed": 80
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/811.png",
        evolution: {
          "prev": [
            "810",
            "Level 16"
          ],
          "next": [
            [
              "812",
              "Level 35"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 812,
        name: "Rillaboom",
        type: [
          "Grass"
        ],
        height: "2 m",
        weight: "90 kg",
        ability: [
          "Overgrow",
          "Grassy-surge (HIDDEN)"
        ],
        base_stats: {
          "HP": 100,
          "Attack": 125,
          "Defense": 90,
          "Special Attack": 60,
          "Special Defense": 70,
          "Speed": 85
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/812.png",
        evolution: {
          "prev": [
            "811",
            "Level 35"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 813,
        name: "Scorbunny",
        type: [
          "Fire"
        ],
        height: "0 m",
        weight: "4 kg",
        ability: [
          "Blaze",
          "Libero (HIDDEN)"
        ],
        base_stats: {
          "HP": 50,
          "Attack": 71,
          "Defense": 40,
          "Special Attack": 40,
          "Special Defense": 40,
          "Speed": 69
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/813.png",
        evolution: {
          "next": [
            [
              "814",
              "Level 16"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 814,
        name: "Raboot",
        type: [
          "Fire"
        ],
        height: "1 m",
        weight: "9 kg",
        ability: [
          "Blaze",
          "Libero (HIDDEN)"
        ],
        base_stats: {
          "HP": 65,
          "Attack": 86,
          "Defense": 60,
          "Special Attack": 55,
          "Special Defense": 60,
          "Speed": 94
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/814.png",
        evolution: {
          "prev": [
            "813",
            "Level 16"
          ],
          "next": [
            [
              "815",
              "Level 35"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 815,
        name: "Cinderace",
        type: [
          "Fire"
        ],
        height: "1 m",
        weight: "33 kg",
        ability: [
          "Blaze",
          "Libero (HIDDEN)"
        ],
        base_stats: {
          "HP": 80,
          "Attack": 116,
          "Defense": 75,
          "Special Attack": 65,
          "Special Defense": 75,
          "Speed": 119
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/815.png",
        evolution: {
          "prev": [
            "814",
            "Level 35"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 816,
        name: "Sobble",
        type: [
          "Water"
        ],
        height: "0 m",
        weight: "4 kg",
        ability: [
          "Torrent",
          "Sniper (HIDDEN)"
        ],
        base_stats: {
          "HP": 50,
          "Attack": 40,
          "Defense": 40,
          "Special Attack": 70,
          "Special Defense": 40,
          "Speed": 70
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/816.png",
        evolution: {
          "next": [
            [
              "817",
              "Level 16"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 817,
        name: "Drizzile",
        type: [
          "Water"
        ],
        height: "1 m",
        weight: "12 kg",
        ability: [
          "Torrent",
          "Sniper (HIDDEN)"
        ],
        base_stats: {
          "HP": 65,
          "Attack": 60,
          "Defense": 55,
          "Special Attack": 95,
          "Special Defense": 55,
          "Speed": 90
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/817.png",
        evolution: {
          "prev": [
            "816",
            "Level 16"
          ],
          "next": [
            [
              "818",
              "Level 35"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 818,
        name: "Inteleon",
        type: [
          "Water"
        ],
        height: "2 m",
        weight: "45 kg",
        ability: [
          "Torrent",
          "Sniper (HIDDEN)"
        ],
        base_stats: {
          "HP": 70,
          "Attack": 85,
          "Defense": 65,
          "Special Attack": 125,
          "Special Defense": 65,
          "Speed": 120
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/818.png",
        evolution: {
          "prev": [
            "817",
            "Level 35"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 819,
        name: "Skwovet",
        type: [
          "Normal"
        ],
        height: "0 m",
        weight: "2 kg",
        ability: [
          "Cheek-pouch",
          "Gluttony (HIDDEN)"
        ],
        base_stats: {
          "HP": 70,
          "Attack": 55,
          "Defense": 55,
          "Special Attack": 35,
          "Special Defense": 35,
          "Speed": 25
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/819.png",
        evolution: {
          "next": [
            [
              "820",
              "Level 24"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 820,
        name: "Greedent",
        type: [
          "Normal"
        ],
        height: "1 m",
        weight: "6 kg",
        ability: [
          "Cheek-pouch",
          "Gluttony (HIDDEN)"
        ],
        base_stats: {
          "HP": 120,
          "Attack": 95,
          "Defense": 95,
          "Special Attack": 55,
          "Special Defense": 75,
          "Speed": 20
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/820.png",
        evolution: {
          "prev": [
            "819",
            "Level 24"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 821,
        name: "Rookidee",
        type: [
          "Flying"
        ],
        height: "0 m",
        weight: "2 kg",
        ability: [
          "Keen-eye",
          "Unnerve",
          "Big-pecks (HIDDEN)"
        ],
        base_stats: {
          "HP": 38,
          "Attack": 47,
          "Defense": 35,
          "Special Attack": 33,
          "Special Defense": 35,
          "Speed": 57
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/821.png",
        evolution: {
          "next": [
            [
              "822",
              "Level 18"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 822,
        name: "Corvisquire",
        type: [
          "Flying"
        ],
        height: "1 m",
        weight: "16 kg",
        ability: [
          "Keen-eye",
          "Unnerve",
          "Big-pecks (HIDDEN)"
        ],
        base_stats: {
          "HP": 68,
          "Attack": 67,
          "Defense": 55,
          "Special Attack": 43,
          "Special Defense": 55,
          "Speed": 77
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/822.png",
        evolution: {
          "prev": [
            "821",
            "Level 18"
          ],
          "next": [
            [
              "823",
              "Level 38"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 823,
        name: "Corviknight",
        type: [
          "Flying",
          "Steel"
        ],
        height: "2 m",
        weight: "75 kg",
        ability: [
          "Pressure",
          "Unnerve",
          "Mirror-armor (HIDDEN)"
        ],
        base_stats: {
          "HP": 98,
          "Attack": 87,
          "Defense": 105,
          "Special Attack": 53,
          "Special Defense": 85,
          "Speed": 67
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/823.png",
        evolution: {
          "prev": [
            "822",
            "Level 38"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 824,
        name: "Blipbug",
        type: [
          "Bug"
        ],
        height: "0 m",
        weight: "8 kg",
        ability: [
          "Swarm",
          "Compound-eyes",
          "Telepathy (HIDDEN)"
        ],
        base_stats: {
          "HP": 25,
          "Attack": 20,
          "Defense": 20,
          "Special Attack": 25,
          "Special Defense": 45,
          "Speed": 45
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/824.png",
        evolution: {
          "next": [
            [
              "825",
              "Level 10"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 825,
        name: "Dottler",
        type: [
          "Bug",
          "Psychic"
        ],
        height: "0 m",
        weight: "20 kg",
        ability: [
          "Swarm",
          "Compound-eyes",
          "Telepathy (HIDDEN)"
        ],
        base_stats: {
          "HP": 50,
          "Attack": 30,
          "Defense": 80,
          "Special Attack": 50,
          "Special Defense": 90,
          "Speed": 30
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/825.png",
        evolution: {
          "prev": [
            "824",
            "Level 10"
          ],
          "next": [
            [
              "826",
              "Level 30"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 826,
        name: "Orbeetle",
        type: [
          "Bug",
          "Psychic"
        ],
        height: "0 m",
        weight: "41 kg",
        ability: [
          "Swarm",
          "Frisk",
          "Telepathy (HIDDEN)"
        ],
        base_stats: {
          "HP": 60,
          "Attack": 45,
          "Defense": 110,
          "Special Attack": 80,
          "Special Defense": 120,
          "Speed": 90
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/826.png",
        evolution: {
          "prev": [
            "825",
            "Level 30"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 827,
        name: "Nickit",
        type: [
          "Dark"
        ],
        height: "1 m",
        weight: "9 kg",
        ability: [
          "Run-away",
          "Unburden",
          "Stakeout (HIDDEN)"
        ],
        base_stats: {
          "HP": 40,
          "Attack": 28,
          "Defense": 28,
          "Special Attack": 47,
          "Special Defense": 52,
          "Speed": 50
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/827.png",
        evolution: {
          "next": [
            [
              "828",
              "Level 18"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 828,
        name: "Thievul",
        type: [
          "Dark"
        ],
        height: "1 m",
        weight: "20 kg",
        ability: [
          "Run-away",
          "Unburden",
          "Stakeout (HIDDEN)"
        ],
        base_stats: {
          "HP": 70,
          "Attack": 58,
          "Defense": 58,
          "Special Attack": 87,
          "Special Defense": 92,
          "Speed": 90
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/828.png",
        evolution: {
          "prev": [
            "827",
            "Level 18"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 829,
        name: "Gossifleur",
        type: [
          "Grass"
        ],
        height: "0 m",
        weight: "2 kg",
        ability: [
          "Cotton-down",
          "Regenerator",
          "Effect-spore (HIDDEN)"
        ],
        base_stats: {
          "HP": 40,
          "Attack": 40,
          "Defense": 60,
          "Special Attack": 40,
          "Special Defense": 60,
          "Speed": 10
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/829.png",
        evolution: {
          "next": [
            [
              "830",
              "Level 20"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 830,
        name: "Eldegoss",
        type: [
          "Grass"
        ],
        height: "1 m",
        weight: "2 kg",
        ability: [
          "Cotton-down",
          "Regenerator",
          "Effect-spore (HIDDEN)"
        ],
        base_stats: {
          "HP": 60,
          "Attack": 50,
          "Defense": 90,
          "Special Attack": 80,
          "Special Defense": 120,
          "Speed": 60
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/830.png",
        evolution: {
          "prev": [
            "829",
            "Level 20"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 831,
        name: "Wooloo",
        type: [
          "Normal"
        ],
        height: "1 m",
        weight: "6 kg",
        ability: [
          "Fluffy",
          "Run-away",
          "Bulletproof (HIDDEN)"
        ],
        base_stats: {
          "HP": 42,
          "Attack": 40,
          "Defense": 55,
          "Special Attack": 40,
          "Special Defense": 45,
          "Speed": 48
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/831.png",
        evolution: {
          "next": [
            [
              "832",
              "Level 24"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 832,
        name: "Dubwool",
        type: [
          "Normal"
        ],
        height: "1 m",
        weight: "43 kg",
        ability: [
          "Fluffy",
          "Run-away",
          "Bulletproof (HIDDEN)"
        ],
        base_stats: {
          "HP": 72,
          "Attack": 80,
          "Defense": 100,
          "Special Attack": 60,
          "Special Defense": 90,
          "Speed": 88
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/832.png",
        evolution: {
          "prev": [
            "831",
            "Level 24"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 833,
        name: "Chewtle",
        type: [
          "Water"
        ],
        height: "0 m",
        weight: "8 kg",
        ability: [
          "Strong-jaw",
          "Shell-armor",
          "Swift-swim (HIDDEN)"
        ],
        base_stats: {
          "HP": 50,
          "Attack": 64,
          "Defense": 50,
          "Special Attack": 38,
          "Special Defense": 38,
          "Speed": 44
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/833.png",
        evolution: {
          "next": [
            [
              "834",
              "Level 22"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 834,
        name: "Drednaw",
        type: [
          "Water",
          "Rock"
        ],
        height: "1 m",
        weight: "116 kg",
        ability: [
          "Strong-jaw",
          "Shell-armor",
          "Swift-swim (HIDDEN)"
        ],
        base_stats: {
          "HP": 90,
          "Attack": 115,
          "Defense": 90,
          "Special Attack": 48,
          "Special Defense": 68,
          "Speed": 74
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/834.png",
        evolution: {
          "prev": [
            "833",
            "Level 22"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 835,
        name: "Yamper",
        type: [
          "Electric"
        ],
        height: "0 m",
        weight: "14 kg",
        ability: [
          "Ball-fetch",
          "Rattled (HIDDEN)"
        ],
        base_stats: {
          "HP": 59,
          "Attack": 45,
          "Defense": 50,
          "Special Attack": 40,
          "Special Defense": 50,
          "Speed": 26
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/835.png",
        evolution: {
          "next": [
            [
              "836",
              "Level 25"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 836,
        name: "Boltund",
        type: [
          "Electric"
        ],
        height: "1 m",
        weight: "34 kg",
        ability: [
          "Strong-jaw",
          "Competitive (HIDDEN)"
        ],
        base_stats: {
          "HP": 69,
          "Attack": 90,
          "Defense": 60,
          "Special Attack": 90,
          "Special Defense": 60,
          "Speed": 121
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/836.png",
        evolution: {
          "prev": [
            "835",
            "Level 25"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 837,
        name: "Rolycoly",
        type: [
          "Rock"
        ],
        height: "0 m",
        weight: "12 kg",
        ability: [
          "Steam-engine",
          "Heatproof",
          "Flash-fire (HIDDEN)"
        ],
        base_stats: {
          "HP": 30,
          "Attack": 40,
          "Defense": 50,
          "Special Attack": 40,
          "Special Defense": 50,
          "Speed": 30
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/837.png",
        evolution: {
          "next": [
            [
              "838",
              "Level 18"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 838,
        name: "Carkol",
        type: [
          "Rock",
          "Fire"
        ],
        height: "1 m",
        weight: "78 kg",
        ability: [
          "Steam-engine",
          "Flame-body",
          "Flash-fire (HIDDEN)"
        ],
        base_stats: {
          "HP": 80,
          "Attack": 60,
          "Defense": 90,
          "Special Attack": 60,
          "Special Defense": 70,
          "Speed": 50
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/838.png",
        evolution: {
          "prev": [
            "837",
            "Level 18"
          ],
          "next": [
            [
              "839",
              "Level 34"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 839,
        name: "Coalossal",
        type: [
          "Rock",
          "Fire"
        ],
        height: "3 m",
        weight: "310 kg",
        ability: [
          "Steam-engine",
          "Flame-body",
          "Flash-fire (HIDDEN)"
        ],
        base_stats: {
          "HP": 110,
          "Attack": 80,
          "Defense": 120,
          "Special Attack": 80,
          "Special Defense": 90,
          "Speed": 30
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/839.png",
        evolution: {
          "prev": [
            "838",
            "Level 34"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 840,
        name: "Applin",
        type: [
          "Grass",
          "Dragon"
        ],
        height: "0 m",
        weight: "0 kg",
        ability: [
          "Ripen",
          "Gluttony",
          "Bulletproof (HIDDEN)"
        ],
        base_stats: {
          "HP": 40,
          "Attack": 40,
          "Defense": 80,
          "Special Attack": 40,
          "Special Defense": 40,
          "Speed": 20
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/840.png",
        evolution: {
          "next": [
            [
              "841",
              "use Tart Apple"
            ],
            [
              "842",
              "use Sweet Apple"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 841,
        name: "Flapple",
        type: [
          "Grass",
          "Dragon"
        ],
        height: "0 m",
        weight: "1 kg",
        ability: [
          "Ripen",
          "Gluttony",
          "Hustle (HIDDEN)"
        ],
        base_stats: {
          "HP": 70,
          "Attack": 110,
          "Defense": 80,
          "Special Attack": 95,
          "Special Defense": 60,
          "Speed": 70
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/841.png",
        evolution: {
          "prev": [
            "840",
            "use "
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 842,
        name: "Appletun",
        type: [
          "Grass",
          "Dragon"
        ],
        height: "0 m",
        weight: "13 kg",
        ability: [
          "Ripen",
          "Gluttony",
          "Thick-fat (HIDDEN)"
        ],
        base_stats: {
          "HP": 110,
          "Attack": 85,
          "Defense": 80,
          "Special Attack": 100,
          "Special Defense": 80,
          "Speed": 30
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/842.png",
        evolution: {
          "prev": [
            "840",
            "use "
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 843,
        name: "Silicobra",
        type: [
          "Ground"
        ],
        height: "2 m",
        weight: "8 kg",
        ability: [
          "Sand-spit",
          "Shed-skin",
          "Sand-veil (HIDDEN)"
        ],
        base_stats: {
          "HP": 52,
          "Attack": 57,
          "Defense": 75,
          "Special Attack": 35,
          "Special Defense": 50,
          "Speed": 46
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/843.png",
        evolution: {
          "next": [
            [
              "844",
              "Level 36"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 844,
        name: "Sandaconda",
        type: [
          "Ground"
        ],
        height: "4 m",
        weight: "66 kg",
        ability: [
          "Sand-spit",
          "Shed-skin",
          "Sand-veil (HIDDEN)"
        ],
        base_stats: {
          "HP": 72,
          "Attack": 107,
          "Defense": 125,
          "Special Attack": 65,
          "Special Defense": 70,
          "Speed": 71
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/844.png",
        evolution: {
          "prev": [
            "843",
            "Level 36"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 845,
        name: "Cramorant",
        type: [
          "Flying",
          "Water"
        ],
        height: "1 m",
        weight: "18 kg",
        ability: [
          "Gulp-missile"
        ],
        base_stats: {
          "HP": 0,
          "Attack": 0,
          "Defense": 0,
          "Special Attack": 0,
          "Special Defense": 0,
          "Speed": 0
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/845.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 846,
        name: "Arrokuda",
        type: [
          "Water"
        ],
        height: "1 m",
        weight: "1 kg",
        ability: [
          "Swift-swim",
          "Propeller-tail (HIDDEN)"
        ],
        base_stats: {
          "HP": 0,
          "Attack": 0,
          "Defense": 0,
          "Special Attack": 0,
          "Special Defense": 0,
          "Speed": 0
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/846.png",
        evolution: {
          "next": [
            [
              "847",
              "Level 26"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 847,
        name: "Barraskewda",
        type: [
          "Water"
        ],
        height: "1 m",
        weight: "30 kg",
        ability: [
          "Swift-swim",
          "Propeller-tail (HIDDEN)"
        ],
        base_stats: {
          "HP": 0,
          "Attack": 0,
          "Defense": 0,
          "Special Attack": 0,
          "Special Defense": 0,
          "Speed": 0
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/847.png",
        evolution: {
          "prev": [
            "846",
            "Level 26"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 848,
        name: "Toxel",
        type: [
          "Electric",
          "Poison"
        ],
        height: "0 m",
        weight: "11 kg",
        ability: [
          "Rattled",
          "Static",
          "Klutz (HIDDEN)"
        ],
        base_stats: {
          "HP": 0,
          "Attack": 0,
          "Defense": 0,
          "Special Attack": 0,
          "Special Defense": 0,
          "Speed": 0
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/848.png",
        evolution: {
          "next": [
            [
              "849",
              "Level 30, with a "
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 849,
        name: "Toxtricity",
        type: [
          "Electric",
          "Poison"
        ],
        height: "2 m",
        weight: "40 kg",
        ability: [
          "Punk-rock",
          "Plus",
          "Technician (HIDDEN)"
        ],
        base_stats: {
          "HP": 0,
          "Attack": 0,
          "Defense": 0,
          "Special Attack": 0,
          "Special Defense": 0,
          "Speed": 0
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/849.png",
        evolution: {
          "next": [
            [
              "849",
              "Level 30, with a "
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 850,
        name: "Sizzlipede",
        type: [
          "Fire",
          "Bug"
        ],
        height: "1 m",
        weight: "1 kg",
        ability: [
          "Flash-fire",
          "White-smoke",
          "Flame-body (HIDDEN)"
        ],
        base_stats: {
          "HP": 0,
          "Attack": 0,
          "Defense": 0,
          "Special Attack": 0,
          "Special Defense": 0,
          "Speed": 0
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/850.png",
        evolution: {
          "next": [
            [
              "851",
              "Level 28"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 851,
        name: "Centiskorch",
        type: [
          "Fire",
          "Bug"
        ],
        height: "3 m",
        weight: "120 kg",
        ability: [
          "Flash-fire",
          "White-smoke",
          "Flame-body (HIDDEN)"
        ],
        base_stats: {
          "HP": 0,
          "Attack": 0,
          "Defense": 0,
          "Special Attack": 0,
          "Special Defense": 0,
          "Speed": 0
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/851.png",
        evolution: {
          "prev": [
            "850",
            "Level 28"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 852,
        name: "Clobbopus",
        type: [
          "Fighting"
        ],
        height: "1 m",
        weight: "4 kg",
        ability: [
          "Limber",
          "Technician (HIDDEN)"
        ],
        base_stats: {
          "HP": 0,
          "Attack": 0,
          "Defense": 0,
          "Special Attack": 0,
          "Special Defense": 0,
          "Speed": 0
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/852.png",
        evolution: {
          "next": [
            [
              "853",
              "after "
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 853,
        name: "Grapploct",
        type: [
          "Fighting"
        ],
        height: "2 m",
        weight: "39 kg",
        ability: [
          "Limber",
          "Technician (HIDDEN)"
        ],
        base_stats: {
          "HP": 0,
          "Attack": 0,
          "Defense": 0,
          "Special Attack": 0,
          "Special Defense": 0,
          "Speed": 0
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/853.png",
        evolution: {
          "prev": [
            "852",
            "after "
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 854,
        name: "Sinistea",
        type: [
          "Ghost"
        ],
        height: "0 m",
        weight: "0 kg",
        ability: [
          "Weak-armor",
          "Cursed-body (HIDDEN)"
        ],
        base_stats: {
          "HP": 0,
          "Attack": 0,
          "Defense": 0,
          "Special Attack": 0,
          "Special Defense": 0,
          "Speed": 0
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/854.png",
        evolution: {
          "next": [
            [
              "855",
              "use "
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 855,
        name: "Polteageist",
        type: [
          "Ghost"
        ],
        height: "0 m",
        weight: "0 kg",
        ability: [
          "Weak-armor",
          "Cursed-body (HIDDEN)"
        ],
        base_stats: {
          "HP": 0,
          "Attack": 0,
          "Defense": 0,
          "Special Attack": 0,
          "Special Defense": 0,
          "Speed": 0
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/855.png",
        evolution: {
          "prev": [
            "854",
            "use "
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 856,
        name: "Hatenna",
        type: [
          "Psychic"
        ],
        height: "0 m",
        weight: "3 kg",
        ability: [
          "Healer",
          "Anticipation",
          "Magic-bounce (HIDDEN)"
        ],
        base_stats: {
          "HP": 0,
          "Attack": 0,
          "Defense": 0,
          "Special Attack": 0,
          "Special Defense": 0,
          "Speed": 0
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/856.png",
        evolution: {
          "next": [
            [
              "857",
              "Level 32"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 857,
        name: "Hattrem",
        type: [
          "Psychic"
        ],
        height: "1 m",
        weight: "5 kg",
        ability: [
          "Healer",
          "Anticipation",
          "Magic-bounce (HIDDEN)"
        ],
        base_stats: {
          "HP": 0,
          "Attack": 0,
          "Defense": 0,
          "Special Attack": 0,
          "Special Defense": 0,
          "Speed": 0
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/857.png",
        evolution: {
          "prev": [
            "856",
            "Level 32"
          ],
          "next": [
            [
              "858",
              "Level 42"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 858,
        name: "Hatterene",
        type: [
          "Psychic",
          "Fairy"
        ],
        height: "2 m",
        weight: "5 kg",
        ability: [
          "Healer",
          "Anticipation",
          "Magic-bounce (HIDDEN)"
        ],
        base_stats: {
          "HP": 0,
          "Attack": 0,
          "Defense": 0,
          "Special Attack": 0,
          "Special Defense": 0,
          "Speed": 0
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/858.png",
        evolution: {
          "prev": [
            "857",
            "Level 42"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 859,
        name: "Impidimp",
        type: [
          "Dark",
          "Fairy"
        ],
        height: "0 m",
        weight: "6 kg",
        ability: [
          "Prankster",
          "Frisk",
          "Pickpocket (HIDDEN)"
        ],
        base_stats: {
          "HP": 0,
          "Attack": 0,
          "Defense": 0,
          "Special Attack": 0,
          "Special Defense": 0,
          "Speed": 0
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/859.png",
        evolution: {
          "next": [
            [
              "860",
              "Level 32"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 860,
        name: "Morgrem",
        type: [
          "Dark",
          "Fairy"
        ],
        height: "1 m",
        weight: "12 kg",
        ability: [
          "Prankster",
          "Frisk",
          "Pickpocket (HIDDEN)"
        ],
        base_stats: {
          "HP": 0,
          "Attack": 0,
          "Defense": 0,
          "Special Attack": 0,
          "Special Defense": 0,
          "Speed": 0
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/860.png",
        evolution: {
          "prev": [
            "859",
            "Level 32"
          ],
          "next": [
            [
              "861",
              "Level 42"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 861,
        name: "Grimmsnarl",
        type: [
          "Dark",
          "Fairy"
        ],
        height: "1 m",
        weight: "61 kg",
        ability: [
          "Prankster",
          "Frisk",
          "Pickpocket (HIDDEN)"
        ],
        base_stats: {
          "HP": 0,
          "Attack": 0,
          "Defense": 0,
          "Special Attack": 0,
          "Special Defense": 0,
          "Speed": 0
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/861.png",
        evolution: {
          "prev": [
            "860",
            "Level 42"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 862,
        name: "Obstagoon",
        type: [
          "Dark",
          "Normal"
        ],
        height: "2 m",
        weight: "46 kg",
        ability: [
          "Reckless",
          "Guts",
          "Defiant (HIDDEN)"
        ],
        base_stats: {
          "HP": 0,
          "Attack": 0,
          "Defense": 0,
          "Special Attack": 0,
          "Special Defense": 0,
          "Speed": 0
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/862.png",
        evolution: {
          "prev": [
            "264",
            "Level 35, Nighttime"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 863,
        name: "Perrserker",
        type: [
          "Steel"
        ],
        height: "1 m",
        weight: "28 kg",
        ability: [
          "Battle-armor",
          "Tough-claws",
          "Steely-spirit (HIDDEN)"
        ],
        base_stats: {
          "HP": 0,
          "Attack": 0,
          "Defense": 0,
          "Special Attack": 0,
          "Special Defense": 0,
          "Speed": 0
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/863.png",
        evolution: {
          "prev": [
            "52",
            "Level 28"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 864,
        name: "Cursola",
        type: [
          "Ghost"
        ],
        height: "1 m",
        weight: "0 kg",
        ability: [
          "Weak-armor",
          "Perish-body (HIDDEN)"
        ],
        base_stats: {
          "HP": 0,
          "Attack": 0,
          "Defense": 0,
          "Special Attack": 0,
          "Special Defense": 0,
          "Speed": 0
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/864.png",
        evolution: {
          "prev": [
            "222",
            "Level 38"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 865,
        name: "Sirfetch'd",
        type: [
          "Fighting"
        ],
        height: "1 m",
        weight: "117 kg",
        ability: [
          "Steadfast",
          "Scrappy (HIDDEN)"
        ],
        base_stats: {
          "HP": 0,
          "Attack": 0,
          "Defense": 0,
          "Special Attack": 0,
          "Special Defense": 0,
          "Speed": 0
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/865.png",
        evolution: {
          "prev": [
            "83",
            "achieve 3 critical hits in one battle"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 866,
        name: "Mr. Rime",
        type: [
          "Ice",
          "Psychic"
        ],
        height: "1 m",
        weight: "58 kg",
        ability: [
          "Tangled-feet",
          "Screen-cleaner",
          "Ice-body (HIDDEN)"
        ],
        base_stats: {
          "HP": 0,
          "Attack": 0,
          "Defense": 0,
          "Special Attack": 0,
          "Special Defense": 0,
          "Speed": 0
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/866.png",
        evolution: {
          "prev": [
            "122",
            "Level 42"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 867,
        name: "Runerigus",
        type: [
          "Ground",
          "Ghost"
        ],
        height: "2 m",
        weight: "67 kg",
        ability: [
          "Wandering-spirit"
        ],
        base_stats: {
          "HP": 0,
          "Attack": 0,
          "Defense": 0,
          "Special Attack": 0,
          "Special Defense": 0,
          "Speed": 0
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/867.png",
        evolution: {
          "prev": [
            "562",
            "Level 34"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 868,
        name: "Milcery",
        type: [
          "Fairy"
        ],
        height: "0 m",
        weight: "0 kg",
        ability: [
          "Sweet-veil",
          "Aroma-veil (HIDDEN)"
        ],
        base_stats: {
          "HP": 0,
          "Attack": 0,
          "Defense": 0,
          "Special Attack": 0,
          "Special Defense": 0,
          "Speed": 0
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/868.png",
        evolution: {
          "next": [
            [
              "869",
              "spin around holding Sweet"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 869,
        name: "Alcremie",
        type: [
          "Fairy"
        ],
        height: "0 m",
        weight: "0 kg",
        ability: [
          "Sweet-veil",
          "Aroma-veil (HIDDEN)"
        ],
        base_stats: {
          "HP": 0,
          "Attack": 0,
          "Defense": 0,
          "Special Attack": 0,
          "Special Defense": 0,
          "Speed": 0
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/869.png",
        evolution: {
          "prev": [
            "868",
            "spin around holding Sweet"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 870,
        name: "Falinks",
        type: [
          "Fighting"
        ],
        height: "3 m",
        weight: "62 kg",
        ability: [
          "Battle-armor",
          "Defiant (HIDDEN)"
        ],
        base_stats: {
          "HP": 0,
          "Attack": 0,
          "Defense": 0,
          "Special Attack": 0,
          "Special Defense": 0,
          "Speed": 0
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/870.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 871,
        name: "Pincurchin",
        type: [
          "Electric"
        ],
        height: "0 m",
        weight: "1 kg",
        ability: [
          "Lightning-rod",
          "Electric-surge (HIDDEN)"
        ],
        base_stats: {
          "HP": 0,
          "Attack": 0,
          "Defense": 0,
          "Special Attack": 0,
          "Special Defense": 0,
          "Speed": 0
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/871.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 872,
        name: "Snom",
        type: [
          "Ice",
          "Bug"
        ],
        height: "0 m",
        weight: "4 kg",
        ability: [
          "Shield-dust",
          "Ice-scales (HIDDEN)"
        ],
        base_stats: {
          "HP": 0,
          "Attack": 0,
          "Defense": 0,
          "Special Attack": 0,
          "Special Defense": 0,
          "Speed": 0
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/872.png",
        evolution: {
          "next": [
            [
              "873",
              "high "
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 873,
        name: "Frosmoth",
        type: [
          "Ice",
          "Bug"
        ],
        height: "1 m",
        weight: "42 kg",
        ability: [
          "Shield-dust",
          "Ice-scales (HIDDEN)"
        ],
        base_stats: {
          "HP": 0,
          "Attack": 0,
          "Defense": 0,
          "Special Attack": 0,
          "Special Defense": 0,
          "Speed": 0
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/873.png",
        evolution: {
          "prev": [
            "872",
            "high "
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 874,
        name: "Stonjourner",
        type: [
          "Rock"
        ],
        height: "2 m",
        weight: "520 kg",
        ability: [
          "Power-spot"
        ],
        base_stats: {
          "HP": 0,
          "Attack": 0,
          "Defense": 0,
          "Special Attack": 0,
          "Special Defense": 0,
          "Speed": 0
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/874.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 875,
        name: "Eiscue",
        type: [
          "Ice"
        ],
        height: "1 m",
        weight: "89 kg",
        ability: [
          "Ice-face"
        ],
        base_stats: {
          "HP": 0,
          "Attack": 0,
          "Defense": 0,
          "Special Attack": 0,
          "Special Defense": 0,
          "Speed": 0
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/875.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 876,
        name: "Indeedee",
        type: [
          "Psychic",
          "Normal"
        ],
        height: "1 m",
        weight: "28 kg",
        ability: [
          "Inner-focus",
          "Synchronize",
          "Psychic-surge (HIDDEN)"
        ],
        base_stats: {
          "HP": 0,
          "Attack": 0,
          "Defense": 0,
          "Special Attack": 0,
          "Special Defense": 0,
          "Speed": 0
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/876.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 877,
        name: "Morpeko",
        type: [
          "Electric",
          "Dark"
        ],
        height: "0 m",
        weight: "3 kg",
        ability: [
          "Hunger-switch"
        ],
        base_stats: {
          "HP": 0,
          "Attack": 0,
          "Defense": 0,
          "Special Attack": 0,
          "Special Defense": 0,
          "Speed": 0
        },
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 878,
        name: "Cufant",
        type: [
          "Steel"
        ],
        height: "1 m",
        weight: "100 kg",
        ability: [
          "Sheer-force",
          "Heavy-metal (HIDDEN)"
        ],
        base_stats: {
          "HP": 0,
          "Attack": 0,
          "Defense": 0,
          "Special Attack": 0,
          "Special Defense": 0,
          "Speed": 0
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/878.png",
        evolution: {
          "next": [
            [
              "879",
              "Level 34"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 879,
        name: "Copperajah",
        type: [
          "Steel"
        ],
        height: "3 m",
        weight: "650 kg",
        ability: [
          "Sheer-force",
          "Heavy-metal (HIDDEN)"
        ],
        base_stats: {
          "HP": 0,
          "Attack": 0,
          "Defense": 0,
          "Special Attack": 0,
          "Special Defense": 0,
          "Speed": 0
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/879.png",
        evolution: {
          "prev": [
            "878",
            "Level 34"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 880,
        name: "Dracozolt",
        type: [
          "Electric",
          "Dragon"
        ],
        height: "2 m",
        weight: "190 kg",
        ability: [
          "Volt-absorb",
          "Hustle",
          "Sand-rush (HIDDEN)"
        ],
        base_stats: {
          "HP": 0,
          "Attack": 0,
          "Defense": 0,
          "Special Attack": 0,
          "Special Defense": 0,
          "Speed": 0
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/880.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 881,
        name: "Arctozolt",
        type: [
          "Electric",
          "Ice"
        ],
        height: "2 m",
        weight: "150 kg",
        ability: [
          "Volt-absorb",
          "Static",
          "Slush-rush (HIDDEN)"
        ],
        base_stats: {
          "HP": 0,
          "Attack": 0,
          "Defense": 0,
          "Special Attack": 0,
          "Special Defense": 0,
          "Speed": 0
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/881.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 882,
        name: "Dracovish",
        type: [
          "Water",
          "Dragon"
        ],
        height: "2 m",
        weight: "215 kg",
        ability: [
          "Water-absorb",
          "Strong-jaw",
          "Sand-rush (HIDDEN)"
        ],
        base_stats: {
          "HP": 0,
          "Attack": 0,
          "Defense": 0,
          "Special Attack": 0,
          "Special Defense": 0,
          "Speed": 0
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/882.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 883,
        name: "Arctovish",
        type: [
          "Water",
          "Ice"
        ],
        height: "2 m",
        weight: "175 kg",
        ability: [
          "Water-absorb",
          "Ice-body",
          "Slush-rush (HIDDEN)"
        ],
        base_stats: {
          "HP": 0,
          "Attack": 0,
          "Defense": 0,
          "Special Attack": 0,
          "Special Defense": 0,
          "Speed": 0
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/883.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 884,
        name: "Duraludon",
        type: [
          "Steel",
          "Dragon"
        ],
        height: "2 m",
        weight: "40 kg",
        ability: [
          "Light-metal",
          "Heavy-metal",
          "Stalwart (HIDDEN)"
        ],
        base_stats: {
          "HP": 0,
          "Attack": 0,
          "Defense": 0,
          "Special Attack": 0,
          "Special Defense": 0,
          "Speed": 0
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/884.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 885,
        name: "Dreepy",
        type: [
          "Dragon",
          "Ghost"
        ],
        height: "1 m",
        weight: "2 kg",
        ability: [
          "Clear-body",
          "Infiltrator",
          "Cursed-body (HIDDEN)"
        ],
        base_stats: {
          "HP": 0,
          "Attack": 0,
          "Defense": 0,
          "Special Attack": 0,
          "Special Defense": 0,
          "Speed": 0
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/885.png",
        evolution: {
          "next": [
            [
              "886",
              "Level 50"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 886,
        name: "Drakloak",
        type: [
          "Dragon",
          "Ghost"
        ],
        height: "1 m",
        weight: "11 kg",
        ability: [
          "Clear-body",
          "Infiltrator",
          "Cursed-body (HIDDEN)"
        ],
        base_stats: {
          "HP": 0,
          "Attack": 0,
          "Defense": 0,
          "Special Attack": 0,
          "Special Defense": 0,
          "Speed": 0
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/886.png",
        evolution: {
          "prev": [
            "885",
            "Level 50"
          ],
          "next": [
            [
              "887",
              "Level 60"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 887,
        name: "Dragapult",
        type: [
          "Dragon",
          "Ghost"
        ],
        height: "3 m",
        weight: "50 kg",
        ability: [
          "Clear-body",
          "Infiltrator",
          "Cursed-body (HIDDEN)"
        ],
        base_stats: {
          "HP": 0,
          "Attack": 0,
          "Defense": 0,
          "Special Attack": 0,
          "Special Defense": 0,
          "Speed": 0
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/887.png",
        evolution: {
          "prev": [
            "886",
            "Level 60"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 888,
        name: "Zacian",
        type: [
          "Fairy"
        ],
        height: "3 m",
        weight: "110 kg",
        ability: [
          "Intrepid-sword"
        ],
        base_stats: {
          "HP": 0,
          "Attack": 0,
          "Defense": 0,
          "Special Attack": 0,
          "Special Defense": 0,
          "Speed": 0
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/888.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 889,
        name: "Zamazenta",
        type: [
          "Fighting"
        ],
        height: "3 m",
        weight: "210 kg",
        ability: [
          "Dauntless-shield"
        ],
        base_stats: {
          "HP": 0,
          "Attack": 0,
          "Defense": 0,
          "Special Attack": 0,
          "Special Defense": 0,
          "Speed": 0
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/889.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 890,
        name: "Eternatus",
        type: [
          "Poison",
          "Dragon"
        ],
        height: "20 m",
        weight: "950 kg",
        ability: [
          "Pressure"
        ],
        base_stats: {
          "HP": 0,
          "Attack": 0,
          "Defense": 0,
          "Special Attack": 0,
          "Special Defense": 0,
          "Speed": 0
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/890.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 891,
        name: "Kubfu",
        type: [
          "Fighting"
        ],
        height: "1 m",
        weight: "12 kg",
        ability: [
          "Inner-focus"
        ],
        base_stats: {
          "HP": 0,
          "Attack": 0,
          "Defense": 0,
          "Special Attack": 0,
          "Special Defense": 0,
          "Speed": 0
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/891.png",
        evolution: {
          "next": [
            [
              "892",
              "Scroll of Darkness"
            ],
            [
              "892",
              "Scroll of Waters"
            ]
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 892,
        name: "Urshifu",
        type: [
          "Fighting",
          "Dark"
        ],
        height: "2 m",
        weight: "105 kg",
        ability: [
          "Unseen-fist"
        ],
        base_stats: {
          "HP": 0,
          "Attack": 0,
          "Defense": 0,
          "Special Attack": 0,
          "Special Defense": 0,
          "Speed": 0
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/892.png",
        evolution: {
          "prev": [
            "892",
            "Scroll of Darkness"
          ]
        },
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 893,
        name: "Zarude",
        type: [
          "Dark",
          "Grass"
        ],
        height: "2 m",
        weight: "70 kg",
        ability: [
          "Leaf-guard"
        ],
        base_stats: {
          "HP": 0,
          "Attack": 0,
          "Defense": 0,
          "Special Attack": 0,
          "Special Defense": 0,
          "Speed": 0
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/893.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 894,
        name: "Regieleki",
        type: [
          "Electric"
        ],
        height: "1 m",
        weight: "145 kg",
        ability: [
          "Transistor"
        ],
        base_stats: {
          "HP": 0,
          "Attack": 0,
          "Defense": 0,
          "Special Attack": 0,
          "Special Defense": 0,
          "Speed": 0
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/894.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 895,
        name: "Regidrago",
        type: [
          "Dragon"
        ],
        height: "2 m",
        weight: "200 kg",
        ability: [
          "Dragons-maw"
        ],
        base_stats: {
          "HP": 0,
          "Attack": 0,
          "Defense": 0,
          "Special Attack": 0,
          "Special Defense": 0,
          "Speed": 0
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/895.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 896,
        name: "Glastrier",
        type: [
          "Ice"
        ],
        height: "2 m",
        weight: "800 kg",
        ability: [
          "Chilling-neigh"
        ],
        base_stats: {
          "HP": 0,
          "Attack": 0,
          "Defense": 0,
          "Special Attack": 0,
          "Special Defense": 0,
          "Speed": 0
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/896.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 897,
        name: "Spectrier",
        type: [
          "Ghost"
        ],
        height: "2 m",
        weight: "44 kg",
        ability: [
          "Grim-neigh"
        ],
        base_stats: {
          "HP": 0,
          "Attack": 0,
          "Defense": 0,
          "Special Attack": 0,
          "Special Defense": 0,
          "Speed": 0
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/897.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      },{
        national_dex_number: 898,
        name: "Calyrex",
        type: [
          "Psychic",
          "Grass"
        ],
        height: "1 m",
        weight: "8 kg",
        ability: [
          "Unnerve"
        ],
        base_stats: {
          "HP": 0,
          "Attack": 0,
          "Defense": 0,
          "Special Attack": 0,
          "Special Defense": 0,
          "Speed": 0
        },
        image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/898.png",
        evolution: {},
        ev_yield_quantity: [],
        ev_yield_type: [],
        catch_rate: 0,
        growth_rate: "",
        lvl_up_moves: [],
        tm_moves: [],
        tr_moves: [],
        egg_moves: [],
        move_tutor_moves: []
      }]

      return data;
}

export default dataset