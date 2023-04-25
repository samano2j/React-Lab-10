import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

import { supabase } from "../lib/supabaseClient"

import Form from "../components/Form"

const Update = () => {
  const [item, setItem] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    const fetchItemById = async () => {
      const { data, error } = await supabase
        .from('oyatsu')
        .select('*')
        .eq('id', id)
        .single()

      if (error) {
        console.log(error)
      }

      console.log(data)
      setItem(data)
    }

    fetchItemById()
  }, [])
  return (
    <div className="container mx-auto px-4">
      <div className="prose mx-auto">
        <h2 className="mt-8">Update</h2>
        <Form item={item} />
      </div>
    </div>
  )
}

export default Update