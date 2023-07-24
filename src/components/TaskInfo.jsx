export default function TaskInfo(props) {

    return(
        <div className="p-6 grid grid-cols-3 gap-4">
            <input type="text" 
               placeholder="Add To-do" 
               className="py-2 px-3 text-lg font-bold text-tertiary col-span-2 rounded outline outline-4 outline-primary/75 "
               value={props.todoItem}
               autoFocus
               onChange={(e)=> props.handleTodoChange(e)}/>
            <select 
            name="priority" 
            id="priority" 
            value={props.priority}
            onChange={(e)=>props.handleSelectPriority(e)} 
            className="col-span-1 rounded bg-primary font-bold text-xl px-2">
                    <option selected value="Select" className="bg-secondary text-primary">Set Task Priority</option>
                    <option className=" text-red-700" value="High">High</option>
                    <option className=" text-green-700" value="Normal">Normal</option>
                    <option className=" text-blue-700" value="Low">Low</option>
            </select>
            <button 
            className="text-secondary bg-primary px-4 hover:bg-primary/80 text-4xl col-span-3 rounded-md py-1 active:scale-90 transition-all"
            onClick={()=> props.handleAddClick()}>
                Add To List
            </button>
            
      </div>
    )
}