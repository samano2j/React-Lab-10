import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getData } from '../redux/middleware/api'
import { setData } from '../redux/slice/mainSlice'
import { supabase } from '../lib/supabaseClient'

import DrinkInventory from "../container/DrinkInventory"
import SnackInventory from "../container/SnackInventory"

const Home = () => {
  const isDataFetched = useSelector((state) => state.isDataFetched)
  const dispatch = useDispatch()

  useEffect(() => {
    // if (!isDataFetched) {
    //   dispatch(getData())
    // }

    const fetchItems = async () => {
      const { data, error } = await supabase
        .from('oyatsu')
        .select()
        .order('quantity', { ascending: false })
        // .limit(10)

      if (error) {
        console.log(error)
      }

      //dispatch to store
      dispatch(setData(data))
    }

    fetchItems()
  }, [])

  return (
    <div className="container mx-auto px-4">
      <div className='prose max-w-none'>
        <SnackInventory />
        <DrinkInventory />
      </div>
    </div>
  )
}

export default Home