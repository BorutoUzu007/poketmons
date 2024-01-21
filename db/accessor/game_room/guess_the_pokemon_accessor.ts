import prisma from '../../prisma';

interface Question {
    name: string;
    image: string | null;
    Options?: any[]; // You can adjust the type of Options based on your needs
  }
function randomDexNumbers() {
// 1 to 899
    var randDex = []
    for (var i=0;i<10;i++) {
        const randNum = (Math.random() * 898) + 1;
        randDex.push(Math.floor(randNum));
    }
    return randDex;
}

function randomOptions(options: any) {
    var randOpts = []
    for(var i=0;i<3;i++) {
        const randNum = (Math.random() * options.length) + 0;
        randOpts.push(options[Math.floor(randNum)]);
    }
    return randOpts;
}

function randomCorrectPosi() {
    return Math.floor((Math.random() * 4));
}

export async function GuessThePokemonAllGen() {
    const nationalDexNumbers = randomDexNumbers();
    try {
        const questions = await prisma.pokemon.findMany({
            where: {
                national_dex_number: {
                    in: nationalDexNumbers,
                },
            },
            select: {
                name: true,
                image: true,
            }
        })

        const options = await prisma.pokemon.findMany({
            where: {
                national_dex_number: {
                    not: {
                        in: nationalDexNumbers,
                    },
                },
            },
            select: {
                name: true
            }
        })
        

        questions.forEach((map: any) => {
            var wrongOpts = randomOptions(options);
            map['Options'] = [...wrongOpts, {'name': map.name}]; 
            var correct_opt_posi = randomCorrectPosi();
            if (correct_opt_posi != 3) {
                let swap = map['Options'][correct_opt_posi];
                map['Options'][correct_opt_posi] = map['Options'][3];
                map['Options'][3] = swap
            }

        })


        return questions;
    } catch (error) {
        throw new Error(`Internal Server Error: ${error}`)
    }
    
}

