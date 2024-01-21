'use client'
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FC, useEffect, useState } from "react"
 
interface Options {
    name: string;
}
interface Pokemon {
    name: string;
    image: string;
    Options: Options[]; 
  }
  
  interface GameData {
    status: number;
    data: Pokemon[];
  }
  
  function wait500millisec(): Promise<void> {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve();
      }, 1000); 
    });
  }

  

const Game: FC<{GameData: GameData, roomid: string}> = ({GameData, roomid}: {GameData: GameData, roomid: string}) => {
    const [mon,setMon] = useState(GameData.data[0].image)
    const [questionNumber,setQuestionNumber] = useState(1)
    const [options, setOptions] = useState(GameData.data[0].Options)
    const [selected, setSelected] = useState('')
    const router = useRouter();
    const [correct, setCorrect] = useState(0);
    const [canSelect, setCanSelect] = useState(true)
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
    var correct_ans = correct

    const postScore = async () => {
      try {
            const data = await fetch('http://localhost:3000/api/db/set-score', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    roomid: roomid,
                    score: correct_ans
                })
            });
            const res = await data.json();
            if (res.status === 200) {
                const closing_room_response = await fetch('/api/db/close-room', {
                  method: 'POST',
                  headers: {
                    'Content-type': 'application/json'
                  },
                  body: JSON.stringify({
                    roomid: roomid
                  })
                });

                const response = await closing_room_response.json();
                if (response.status === 200) {
                  router.replace('/dashboard')
                }
            }
        } catch (err) {
            console.log(err);
        }
    }

    const handleTimeout = async () => {
      if (questionNumber < GameData.data.length) {
          setCanSelect(true);
          setIsCorrect(null);
          
          setQuestionNumber((prevQuestionNumber) => {
              const nextQuestionNumber = prevQuestionNumber + 1;
              if (nextQuestionNumber <= GameData.data.length) {
                  setMon(GameData.data[nextQuestionNumber - 1].image);
                  setOptions(GameData.data[nextQuestionNumber - 1].Options)
              }
              
              return nextQuestionNumber;
          });
      } else {
          console.log("End")
          console.log(`You have answered ${correct} questions correctly out of ${GameData.data.length}`)
          console.log(`You have answered ${correct_ans} questions correctly out of ${GameData.data.length}`)
          postScore();
      }
  };

    const handleSelected = async (name: string) => {
      if (canSelect == true) {
        console.log(`${name} is selected`);
        setSelected(name);
        setCanSelect(false);
        console.log("Here")
        await wait500millisec();
        const correctAnswer = GameData.data[questionNumber - 1].name;
        const isCorrectAnswer = name === correctAnswer;
        isCorrectAnswer ? setCorrect((previous_correct) => {
          var new_corrects = previous_correct + 1
          console.log(`Updating correct answers: Before: ${previous_correct}, Now: ${new_corrects}`)
          
          return new_corrects
        }) : ""
        isCorrectAnswer ? correct_ans = correct + 1: ""
        console.log(`Correct array: ${correct}`)
        
        setIsCorrect(isCorrectAnswer)
        
        handleTimeout();
      }
      
    }
    

    useEffect(() => {
      const intervalId = setInterval(() => {
          handleTimeout();
      }, 6000);
      console.log(questionNumber)
      return () => clearInterval(intervalId);
  }, [questionNumber, selected]);
    return (
        <div>
            <div className="flex flex-col items-center select-none">
                <p className="text-white sm:text-5xl text-3xl mb-10">Guess this Pokemon</p>
                <Image src={mon} alt="Pokemon" width={400} height={150} className="rounded max-h-[550px] max-w-[400px] w-auto h-auto" />
            </div>
    
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 pl-14 pr-14">
                {options.map((option) => (
                    <div key={option.name} className="mt-10 mb-3">
                        <button
                            className={`
                              bg-[#FAF0E6] rounded hover:bg-[#FFFFFF] text-black font-bold px-5 py-3 text-4xl cursor-pointer text-center select-none
                              ${selected === option.name && isCorrect === true ? 'bg-green-600' : ''} 
                              ${selected === option.name && isCorrect === false ? 'bg-red-600' : ''}
                            `}
                            onClick={() => handleSelected(option.name)}
                            disabled={!canSelect}
                        >
                            {option.name}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    
    )
}

export default Game;