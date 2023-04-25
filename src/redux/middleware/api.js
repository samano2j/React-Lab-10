import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

import { setIsDataFetched } from '../slice/isDataFetchedSlice'
import { supabase } from '../../lib/supabaseClient'

const URL = "https://gist.githubusercontent.com/andasan/9813b43095e8b135285b0e9e11e98d7e/raw/9ceca7095d40d60d87b8115382f459f540e15646/inventory.json"

export const getData = createAsyncThunk(
    "inventory/getData",
    async (_, thunkApi) => {
        thunkApi.dispatch(setIsDataFetched())
        const response = await axios.get(URL)
        //Seed to Supabase
        // const oyatsu = response.data.oyatsu.map(({ name, quantity, category}) =>
        // ({ name, quantity, category }))
        // const { data, error } = await supabase
        //     .from('oyatsu')
        //     .insert([...oyatsu])
        //     .select()

        // if (error) {
        //     console.log(error)
        // }

        // console.log(data)
        //End of Seed to Supabase

        return response.data.oyatsu
    }
)

