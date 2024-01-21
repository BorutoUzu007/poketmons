import { Badge } from '@/components/ui/badge'
import React from 'react'
import ProgressBar from './ProgressBar'
import  DataTable  from './DataTable'
import { SinglePlayerHistory, columns } from './HistoryTable'
import { headers } from 'next/headers'

async function getHistory(): Promise<SinglePlayerHistory[]> {
  const response = await fetch(`${process.env.ENV}/api/db/get-match-history?offset=0`, {
    method: 'GET',
    headers: headers(),
  });
  const data = await response.json();
  for(var i=0; i< data.message.body.length; i++) {
    const date = new Date(data.message.body[i]['closed_date'])
    const readableDate = date.toDateString()
    data.message.body[i]['closed_date'] = readableDate
  }
  return data.message.body;
}

export default async function Profile() {
  const data = await getHistory();
  return (
    <div className="h-full w-screen max-w-full">
      <div className='xl:grid xl:grid-cols-2 grid-cols-2 items-center max-w-full'>
        <div className="xl:flex xl:flex-col">
            <div className='w-full 2xl:w-[650px] xl:w-[550px] h-[500px] bg-[#171710] xl:ml-14 mt-5 mr-10 rounded-3xl border'>
              <div className="mt-4 max-w-full"><p className="span text-5xl font-bold text-center">PROFILE</p></div>
              <div className="flex justify-between mt-5 lg:ml-5 2xl:pl-16 xl:pl-10 sm:pl-5 pl-1">
                <img src="https://github.com/shadcn.png" alt="img" className="border rounded-full 2xl:w-[150px] 2xl:h-[150px] xl:w-[150px] xl:h-[150px] sm:w-[150px] sm:h-[150px] w-[100px] h-[100px] cursor-pointer"/>
                <div className='flex flex-col w-full text-center'>
                  <div className="flex flex-wrap justify-around">
                    <p className='mt-3 text-sm sm:text-xl font-regular'>Username:</p>
                    <p className='mt-3 text-sm sm:text-xl font-bold'>Srivatsan</p>
                  </div>
                  <div className="flex flex-wrap justify-around">
                    <p className='mt-5 text-sm sm:text-xl font-regular'>Email:</p>
                    <p className='mt-5 text-sm sm:text-xl font-bold'>sriram.srini12@gmail.com</p>
                  </div>
                  <div className="flex flex-wrap justify-around">
                    <p className='mt-5 text-sm sm:text-xl font-regular'>Date Joined:</p>
                    <p className='mt-5 text-sm sm:text-xl font-bold'>May 2023</p>
                  </div>
                  <div className="flex flex-wrap justify-around">
                    <p className='mt-5 text-sm sm:text-xl font-regular'>Age:</p>
                    <p className='mt-5 text-sm sm:text-xl font-bold'>21</p>
                  </div>
                </div>
              </div>
              {/* Badges */}
              <div className="flex flex-wrap mt-10 ml-10">
                <div className="mx-2 my-1">
                  <Badge className='bg-gradient-to-r from-yellow-300 to-yellow-500 text-black px-3 font-bold py-1' >Top 10 in December 2023</Badge>
                </div>
                <div className="mx-2 my-1">
                  <Badge className='bg-gradient-to-r from-yellow-300 to-yellow-500 text-black px-3 font-bold py-1' >Top 10 in December 2023</Badge>
                </div>
                <div className="mx-2 my-1">
                  <Badge className='bg-gradient-to-r from-yellow-300 to-yellow-500 text-black px-3 font-bold py-1' >Top 10 in December 2023</Badge>
                </div>
                <div className="mx-2 my-1">
                  <Badge className='bg-gradient-to-r from-yellow-300 to-yellow-500 text-black px-3 font-bold py-1' >Top 10 in December 2023</Badge>
                </div>
              </div>
            </div>

            <div className='w-full 2xl:w-[650px] xl:w-[550px] h-[250px] bg-[#171710] xl:ml-14 mt-20 rounded-3xl border'>
              <div className="text-center font-bold text-5xl mt-5">
                <p>LEVEL 56</p>
              </div>
              <div className="text-center">
                <ProgressBar />
              </div>
            </div>
        </div>
        <div className="w-full 2xl:w-[650px] xl:w-[550px] h-[800px] bg-[#171710] xl:ml-20 xl:mt-1 mt-20  rounded-3xl border">
          <DataTable columns={columns} data={data}/>
        </div>

      </div>
    </div>
  )
}
