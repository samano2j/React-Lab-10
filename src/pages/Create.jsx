import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { useNavigate } from 'react-router-dom'

import { categories } from '../redux/constants'
import { supabase } from '../lib/supabaseClient'

const schema = z.object({
  name: z
      .string()
      .min(1, { message: 'Please enter a valid item name' })
      .max(50),
  quantity: z.number({ invalid_type_error: 'Please enter a valid quantity' })
      .min(1, { message: 'Please enter a valid quantity' }),
  category: z
      .string()
      .min(1, { message: 'Please select a category' })
})


const Create = (item) => {
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
        resolver: zodResolver(schema),
        values: item ? {
            name: item.name,
            quantity: item.quantity,
            category: item.category
        } : {}
    })

    const onSubmit = async (data) => {
        const { error } = await supabase
            .from('oyatsu')
            .insert({name: data.name,
                    quantity: data.quantity,
                    category: data.category})
            // .update({ ...data })
            // .eq('id', item.id)
            // .select()

        if (error) {
            console.log(error)
        }

        navigate('/')
    }
    return (
      <div className="container mx-auto px-4">
        <h1 className="mt-8 text-4xl text-gray-400 font-bold">Create</h1>
        <form className="text-white" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full">
                <label className="label">
                    <span className="label-text">Item name</span>
                </label>
                <input
                    type="text"
                    placeholder='Type here'
                    className='input input-bordered w-full bg-slate-900'
                    {...register("name")}
                />
                {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
            </div>

            <div className="form-control w-full">
                <label className="label">
                    <span className="label-text">Quantity</span>
                </label>
                <input
                    type="number"
                    placeholder='Type here'
                    className='input input-bordered w-full bg-slate-900'
                    {...register("quantity", { valueAsNumber: true })}
                />
                {errors.quantity && <p className='text-red-500'>{errors.quantity.message}</p>}
            </div>

            <div className="form-control w-full">
                <label className="label">
                    <span className="label-text">Category</span>
                </label>
                <select
                    className='select select-bordered w-full bg-slate-900 text-white'
                    {...register("category")}
                >
                    <option value=''>Select a category</option>
                    <option value={categories.snacks}>Snacks</option>
                    <option value={categories.drinks}>Drinks</option>
                </select>
                {errors.category && <p className='text-red-500'>{errors.category.message}</p>}
            </div>

            <button className={`btn my-5 ${isSubmitting ? 'loading' : ''}`} type='submit'>Submit</button>
        </form>
      </div>
    )
  }

  export default Create