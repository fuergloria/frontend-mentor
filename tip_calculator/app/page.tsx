'use client';
import Image from "next/image";
import React from "react";


type Data = {
  bill: number | null;
  tipPercentage: number | null;
  numberOfPeople: number | null;
};

const initialData: Data = {
  bill: null,
  tipPercentage: null,
  numberOfPeople: null,
};

type UpdateData = (newValues: Partial<Data>) => void;

export default function Home() {

  const [data, setData] = React.useState<Data>(initialData);

  const updateData = (newValues: Partial<Data>) => {
    setData(prev => ({...prev, ...newValues}));
  }

  const tipAmountPerPerson = data.bill && data.tipPercentage && data.numberOfPeople
    ? (data.bill * (data.tipPercentage / 100)) / data.numberOfPeople
    : null;
    
  const totalPerPerson = data.bill && data.numberOfPeople
    ? (data.bill / data.numberOfPeople) + (tipAmountPerPerson ?? 0)
    : null;

  const isResetDisabled = !tipAmountPerPerson && !totalPerPerson;


  return (
  <main className="bg-grey-200 min-h-screen min-w-screen flex flex-col font-preset-2 px-20 lg:items-center lg:justify-center lg:gap-10">
    <Image
      src="logo.svg"
      alt="Logo"
      width={86.66}
      height={53.14}
      className="mx-auto mt-10 mb-10"
    />
    <div className="bg-white rounded-2xl py-8 px-6 grid grid-cols-1 gap-8 xl:grid-cols-2 md:px-20 md:py-12 md:aspect-[608/800] md:gap-12
                    lg:w-[63.8888%] lg:aspect-[920/481]
                    lg:p-8">
      <Form updateData={updateData} />
      <TipCard tip={tipAmountPerPerson} total={totalPerPerson} isResetDisabled={isResetDisabled} />
    </div>
  </main>
  );
}

function Form({updateData}: { updateData: UpdateData }){

return(
  <div className="flex flex-col gap-6">
  <BillInput updateData={updateData} />
  <TipSelector updateData={updateData} />
  <PeopleInput updateData={updateData} />
  </ div>
)
}

function BillInput({updateData}: { updateData: UpdateData }){

  const [bill, setBill] = React.useState('');

  return(<>
  <div> {/*bill*/}
        <label htmlFor="bill" className="text-grey-500 font-preset-5 mb-2 block">
          Bill
        </label>
        <div className="relative font-preset-3">
          <svg 
            className="absolute left-4 top-1/2 -translate-y-1/2 w-auto h-[15.46px]"
            viewBox="0 0 9.28 15.188"
            fill="#9EBBBD"
          >
            <path xmlns="http://www.w3.org/2000/svg"  d="M6.016 16.328v-1.464c1.232-.08 2.22-.444 2.964-1.092.744-.648 1.116-1.508 1.116-2.58v-.144c0-.992-.348-1.772-1.044-2.34-.696-.568-1.708-.932-3.036-1.092V4.184c.56.144 1.012.4 1.356.768.344.368.516.816.516 1.344v.288h1.824v-.432c0-.448-.088-.876-.264-1.284a3.783 3.783 0 00-.744-1.116A4.251 4.251 0 007.54 2.9a5.324 5.324 0 00-1.524-.492V.872H4.288V2.36a5.532 5.532 0 00-1.416.324c-.448.168-.84.392-1.176.672-.336.28-.604.616-.804 1.008-.2.392-.3.844-.3 1.356v.144c0 .96.316 1.708.948 2.244.632.536 1.548.884 2.748 1.044v3.912c-.704-.16-1.248-.472-1.632-.936-.384-.464-.576-1.08-.576-1.848v-.288H.256v.576c0 .464.08.924.24 1.38.16.456.404.88.732 1.272.328.392.744.728 1.248 1.008s1.108.476 1.812.588v1.512h1.728zM4.288 7.424c-.688-.128-1.164-.332-1.428-.612-.264-.28-.396-.644-.396-1.092 0-.464.176-.832.528-1.104.352-.272.784-.448 1.296-.528v3.336zm1.728 5.712V9.344c.768.128 1.328.328 1.68.6.352.272.528.688.528 1.248 0 .544-.196.984-.588 1.32-.392.336-.932.544-1.62.624z"/>
          </svg>
          <input 
          type="number" 
          id="bill" 
          placeholder="0" 
          value={bill}
          onChange={(e) => {
            setBill(e.target.value);
            updateData({bill: e.target.value === '' ? null : parseFloat(e.target.value)});
          }}
          className="w-full bg-grey-50 text-right font-preset-3 text-green-900
                     p-2 px-4 rounded-lg 
                     focus:outline-none focus:ring-2 focus:ring-green-800 
                     placeholder:font-preset-3 placeholder:text-grey-300"
        />
        </div>
        
      </div></>)
}

function TipSelector({updateData}: { updateData: UpdateData }){
  const [selectedTip, setSelectedTip] = React.useState<number | null>(null);

  const predefinedTips = [5,10,15,25,50];

  const isCustomSelected = selectedTip !== null && !predefinedTips.includes(selectedTip);

  return(
    <div>
      <label htmlFor="tip" className="text-grey-500 font-preset-5 mb-2 block">
        Select Tip %
      </label>
      <div className="grid grid-cols-2 gap-4 font-preset-3 md:grid-cols-3">
        {predefinedTips.map((tip)=>(
          <button 
            key={tip}
            className={`
              rounded-lg px-4 py-2
              ${selectedTip === tip 
                ? 'bg-green-400 text-green-900' 
                : 'bg-green-900 text-white hover:bg-green-200 hover:text-green-900'}`}
            onClick={() => {
              setSelectedTip(tip);
              updateData({tipPercentage: tip});
            }}>

                  {tip}%
          </button>
        ))}
        <input 
          type="number" 
          id="custom-tip" 
          placeholder="Custom"
          value={isCustomSelected && selectedTip !== null ? selectedTip : ''}
          className={`placeholder:text-grey-550 text-center rounded-lg ${isCustomSelected ? 'bg-green-400 text-green-900' : 'bg-grey-50'}`}
          onChange={(e)=> {
            const value = e.target.value ? parseInt(e.target.value) : null;
            setSelectedTip(value);
            updateData({tipPercentage: value});
          }}
        />
      </div>
    </div>
  )
}


function PeopleInput({updateData}: { updateData: UpdateData }){

  const[numberOfPeople, setNumberOfPeople] = React.useState<number | ''>('');

  const isfalseInput = numberOfPeople !== '' && numberOfPeople <= 0;



  return(
    <div>
      <label htmlFor="people" className="text-grey-500 font-preset-5 mb-2 block">
        <div className="flex justify-between">
          <span>Number of People</span>
          {isfalseInput && <span className="text-orange-600 font-preset-5">Can&apos;t be zero</span>}

        </div>
        
      </label>
      <div className="relative font-preset-3">
        <svg 
          className="absolute left-4 top-1/2 -translate-y-1/2 w-auto h-4"
          viewBox="0 0 13 16"
          fill="#9EBBBD"
        >
          <path xmlns="http://www.w3.org/2000/svg" d="M6.5 8.208c2.121 0 3.833-1.712 3.833-3.833S8.621.542 6.5.542 2.667 2.254 2.667 4.375s1.712 3.833 3.833 3.833zm0 1.25c-2.59 0-7.75 1.302-7.75 3.875v2.083h15.5V13.333c0-2.573-5.16-3.875-7.75-3.875z"/>
        </svg>
        <input 
          type="number" 
          id="people" 
          placeholder="0" 
          className={`w-full bg-grey-50 text-right font-preset-3 px-4 py-1.5 rounded-lg placeholder:text-grey-300 text-green-900 border-2 focus:outline-none
             ${isfalseInput ? 'border-orange-600' : (numberOfPeople !== '' ? 'border-green-400' : 'border-transparent') }`}
          onChange ={(e) => {
            const value = e.target.value;
            setNumberOfPeople(value === '' ? '' : parseInt(value));
            updateData({numberOfPeople: value === '' ? null : parseInt(value)});
          }}
          />

    </div>  
    </div>
)
}

function TipCard({tip, total, isResetDisabled}: {tip: number | null, total: number | null, isResetDisabled: boolean}){
  return(
  <div className="bg-green-900 rounded-2xl p-6 flex flex-col gap-8 md:px-12 md:py-10 md:gap-2 md:justify-between
                  lg:p-8">
    <div className="flex flex-col gap-6">
      <TipCardValues label="Tip Amount" value={tip} />
      <TipCardValues label="Total" value={total} />
    </div>
      
    <button className={` font-preset-4 px-8 py-2 rounded-lg text-center hover:bg-green-200 
    ${!isResetDisabled ? 'bg-green-400 text-green-900' : 'bg-green-750 text-green-800'}`}
            onClick={() => window.location.reload()} 
      >RESET</button>   
  </div>)
}

function TipCardValues({label, value}: {label: string, value: number | null}){
  return(
    <div className="flex justify-between items-center">
      <div>
        <p className="text-white font-preset-5">{label}</p>
        <p className="text-grey-400 font-preset-6">/ person</p>
      </div>
      <div className="">
        <p className="text-green-400 font-preset-2 md:font-preset-1">${value !== null ? value.toFixed(2) : '0.00'}</p>
      </div>
      
    </div>
  )}