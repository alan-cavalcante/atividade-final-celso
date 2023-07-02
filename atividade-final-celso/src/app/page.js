'use client'

import { useState } from 'react'
import RadioGroup from '@mui/material/RadioGroup';
import { FormControl, FormControlLabel, FormLabel, List, ListItem, ListItemText, Radio } from '@mui/material';
import database from './db'

export default function Home() {

  let [selectionSortData, setSelectionSortData] = useState('')
  let [quickSortData, setQuickSortData] = useState('')
  let [numerosAleatorios, setNumerosAleatorios] = useState([])
  let [dados, setDados] = useState('numeros')
  let [tempoQS, setTempoQS] = useState('00:00')
  let [tempoSS, setTempoSS] = useState('00:00')

  function organizarComQuickSort(numerosAleatorios) {
    // console.log(dados)
    let startTime = performance.now()
    const organizado = organizarinternamente(numerosAleatorios)

    function organizarinternamente(arr) {
      if (arr.length <= 1) {
        return arr;
      }

      const pivo = arr[Math.floor(arr.length / 2)]
      const menores = [];
      const iguais = [];
      const maiores = [];

      for (let elemento of arr) {
        if (elemento < pivo) {
          menores.push(elemento);
        } else if (elemento > pivo) {
          maiores.push(elemento);
        } else {
          iguais.push(elemento);
        }
      }

      return [...organizarinternamente(menores), ...iguais, ...organizarinternamente(maiores)]
    }
    let endTime = performance.now()

    let numerosOrganizados = organizado.map((item, index) => {
      return <ListItemText key={index} primary={item} />
    })

    setQuickSortData(numerosOrganizados)
    setTempoQS((endTime - startTime).toFixed(2))

    // organizarComSelectionSort(numerosAleatorios)
  }

  function organizarComSelectionSort(numerosAleatorios) {
    let startTime = performance.now()
    // console.log(numerosAleatorios)
    let organizado = selectionSort(numerosAleatorios)

    function selectionSort(arr) {
      const len = arr.length;

      for (let i = 0; i < len - 1; i++) {
        let minIndex = i;

        for (let j = i + 1; j < len; j++) {
          if (arr[j] < arr[minIndex]) {
            minIndex = j;
          }
        }

        if (minIndex !== i) {
          // Troca os elementos de posição
          [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
      }

      return arr
    }
    let endTime = performance.now()

    // console.log(organizado)
    let numerosOrganizados = organizado.map((item, index) => {
      return <ListItemText key={index} primary={item} />
    })

    setSelectionSortData(numerosOrganizados)
    setTempoSS((endTime - startTime).toFixed(2))
  }

  function gerarStringsAleatorias() {
    let stringsDB = database.map((item, index) => {
      return <ListItemText key={index} primary={item} />
    })

    setQuickSortData(stringsDB);
    setSelectionSortData(stringsDB);
  }

  function gerarNumerosAleatorios(quantidade) {
    let numeros = [];

    for (let i = 0; i < quantidade; i++) {
      numeros.push(Math.floor(Math.random() * 10000));
    }
    setNumerosAleatorios(numeros)

    let numerosSoltos = numeros.map((item, index) => {
      return <ListItemText key={index} primary={item} />
    })
    // console.log(numerosSoltos)

    setQuickSortData(numerosSoltos);
    setSelectionSortData(numerosSoltos);

  }

  const handleChange = (e) => {
    setDados(e.target.value)
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-12 ">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm ">
        <p className=" text-3xl font-extrabold left-0 mb-3 top-0 flex w-full justify-center">
          Atividade Final - Celso
        </p>
        <p className="left-0 top-0 flex w-full text-center justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30 text-yellow-300">
          Organização de Estruturas utilizando QuickSort e SelectionSort
        </p>
      </div>
      <div id='principal' className=' grid grid-cols-5 grid-rows-6 h-screen w-full p-6 gap-2 '>

        <div id='menu' className=' grid grid-cols-1 grid-rows-6 gap-1 col-span-1 row-span-5 bg-slate-800 p-6 text-center'>
          <div className=' col-span-1 row-span-1 text-center uppercase flex flex-col justify-center p-2 bg-slate-900'>
            <p>Área do Menu</p>
          </div>
          <div className='col-span-1 row-span-1 text-center uppercase flex flex-col justify-center p-2'>
            <FormControl>
              {/* <FormLabel id="demo-radio-buttons-group-label">Tipo de Entrada</FormLabel> */}
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue={'numeros'}
                name="radio-buttons-group"
                onChange={handleChange}
                value={dados}
              >
                <FormControlLabel value="numeros" control={<Radio />} label="1000 Strings" />
                <FormControlLabel value="nomes" control={<Radio />} label="10.000 Números" />
              </RadioGroup>
            </FormControl>
          </div>

          <div onClick={() => !(dados == 'numeros') ? gerarNumerosAleatorios(10000) : gerarStringsAleatorias()} className=' row-start-4 cursor-pointer col-span-1 row-span-1 text-center uppercase flex flex-col justify-center p-2 bg-red-500 hover:bg-red-700'>
            <p>Gerar dados</p>
          </div>

          <div onClick={() => {
            organizarComQuickSort(numerosAleatorios)
            organizarComSelectionSort(numerosAleatorios)
          }} className=' row-start-6 cursor-pointer col-span-1 row-span-1 text-center uppercase flex flex-col justify-center p-2 bg-green-500 hover:bg-green-700'>
            <p>Organizar</p>
          </div>
        </div>

        <div className='col-span-4 row-span-5 grid grid-cols-2 grid-rows-6 bg-slate-900 '>

          <div className=' col-span-5 row-span-1 grid grid-cols-2 grid-rows-1 gap-2'>

            <div className=' grid grid-cols-1 grid-rows-1 col-span-1 row-span-1 text-center'>
              <div className=' flex flex-col justify-between bg-gray-700 p-2'>
                <p className=' text-4xl text-center'>QuickSort</p>
                <a className=' font-bold uppercase bg-red-400 rounded-sm mx-5 ' >Tempo de execução:</a>
                <p className=' text-3xl text-center items-center justify-center'>{tempoQS} <span className=' text-green-500 '>ms </span> ou  {tempoQS == '00:00' ? '00' : (tempoQS / 10).toFixed(2)} <span className=' text-green-500 '>segundos </span></p>
              </div>
            </div>
            <div className=' grid grid-cols-1 grid-rows-1 col-span-1 row-span-1 text-center'>
              <div className='  flex flex-col justify-between bg-gray-700 p-2 '>
                <p className=' text-4xl text-center'>SelectionSort</p>
                <a className=' font-bold uppercase bg-red-400 rounded-sm mx-5 ' >Tempo de execução:</a>
                <p className=' text-3xl text-center items-center justify-center'>{tempoSS} <span className=' text-green-500 '>ms </span> ou {tempoSS == '00:00' ? '00' : (tempoSS / 10).toFixed(2)} <span className=' text-green-500 '>segundos </span></p>
              </div>
            </div>

          </div>

          <div className='grid grid-cols-1 grid-rows-1 col-span-1 row-span-5 p-6 bg-gray-700 mt-2'>
            <div className='bg-black col-span-1 row-span-1 p-3 overflow-auto '>
              {/* <p className=' text-green-400 flex-col '>{quickSortData}</p> */}
              <p className=' text-green-400 '>{quickSortData}</p>
            </div>
          </div>
          <div className='grid grid-cols-1 grid-rows-1 col-span-1 row-span-5 p-6 bg-gray-700 mt-2'>
            <div className='bg-black col-span-1 row-span-1 p-3 overflow-auto'>
              <p className=' text-green-400 '>{selectionSortData}</p>
            </div>
          </div>

        </div>
      </div>

    </main>
  )
}
