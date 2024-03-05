import React from 'react'
import { MdDelete } from "react-icons/md";
import { IoMdDoneAll } from "react-icons/io";

const Todo = ({id,title,description,mongoID,complete,deleteTodo,completeTodo}) => {
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {id+1}
        </th>
        <td className={`px-6 py-4 ${complete?"line-through":""}`}>
            {title}
        </td>
        <td className={`px-6 py-4 ${complete?"line-through":""}`}>
            {description}
        </td>
        <td className="px-6 py-4">
            {complete?"Completed":"Pending"}
        </td>
        <td className="px-6 py-4 flex gap-1">
            <button onClick={() => deleteTodo(mongoID)} className='py-2 px-3 rounded bg-red-500 text-white'><MdDelete size={18}/></button>
            {complete?"":<button onClick={()=> completeTodo(mongoID)} className='py-2 px-3 rounded bg-green-500 text-white'><IoMdDoneAll size={18}/></button>}
        </td>
    </tr>
  )
}

export default Todo