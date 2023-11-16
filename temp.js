const fs = require('fs')

async function main() {
    var data = []
    const response = await fetch('https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/pokedex.json')

    const resp = await response.json();
    

    for (var i=0;i<resp.length;i++) {
        var temp_data = {};
        console.log(resp[i])
        temp_data['national_dex_number'] = resp[i]['id'];
        temp_data['name'] = resp[i]['name']['english'];
        temp_data['type'] = resp[i]['type'];
        temp_data['height'] = resp[i]['profile']['height'];
        temp_data['weight'] = resp[i]['profile']['weight'];
        temp_data['ability'] = []
        for(var j=0;j<resp[i]['profile']['ability'].length;j++) {
            if (resp[i]['profile']['ability'][j][1] == 'false') {
                temp_data['ability'].push((resp[i]['profile']['ability'][j][0]))
            }
            else if (resp[i]['profile']['ability'][j][1] == 'true')  {
                temp_data['ability'].push(resp[i]['profile']['ability'][j][0] + " (HIDDEN)")
            }
        }
        temp_data['egg_groups'] = resp[i]['profile']['egg'];
        if (resp[i]['id'] < 810 ) {
            temp_data['base_stats'] = {
                'hp': resp[i]['base']['HP'],
                'Attack': resp[i]['base']['Attack'],
                'Defense': resp[i]['base']['Defense'],
                'Special Attack': resp[i]['base']["Sp. Attack"],
                'Special Defense': resp[i]['base']["Sp. Defense"],
                'Speed': resp[i]['base']['Speed']
            }
        }
        else {
            temp_data['base_stats'] = {
                'hp': 0,
                'Attack': 0,
                'Defense': 0,
                'Special Attack': 0,
                'Special Defense': 0,
                'Speed': 0
            }
        }
        temp_data['image'] = resp[i]['image']['hires'];
        temp_data['evolution'] = resp[i]['evolution'];
        temp_data['ev_yield_quantity'] = [];
        temp_data['ev_yield_type'] = [];
        temp_data['catch_rate'] = 0;
        temp_data['growth_rate'] = "";
        temp_data['lvl_up_moves'] = []
        temp_data['tm_moves'] = []
        temp_data['tr_moves'] = []
        temp_data['egg_moves'] = []
        temp_data['move_tutor_moves'] = []
        

        data.push(temp_data);

    }

    console.log(data)
    for (var i=0;i<data.length;i++) {
        const jsonString = JSON.stringify(data[i], null, 2);

        fs.appendFileSync('poke.json', jsonString, 'utf-8');

    }
    

}

main()