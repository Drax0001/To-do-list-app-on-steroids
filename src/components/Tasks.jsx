import React from 'react';

export default function Tasks(props) {

    const [isChecked, setIsChecked] = React.useState(false)

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

    function handleChange(e) {
        const checked = e.target.checked
        setIsChecked(prevIsChecked => !prevIsChecked)
    }

    function handleClick() {
        setIsChecked(!isChecked)
        // const lineThrough = isChecked? 'line-through' : ''
    }

    // const date = new Date()
    // const dayOfWeek = date.getDay()
    // const month = date.getMonth()
    // const day = date.getDate()
    // const hour = date.getHours()
    // const minute = date.getMinutes()
    // const second = date.getSeconds()

    // const dateFull = `${days[dayOfWeek]}, ${day} ${months[month]}`
    // const timeFull = `${hour}:${minute<10? `0${minute}`: minute}:${second<10? `0${second}`: second}`

    // console.log(dateFull,   timeFull);

    // React.useEffect(() => {
    //     setInterval(() => {
            
    //     }, 1000)
    // }, [])


    return(
        <>
            <div className="pt-8 pb-2 w-full px-1 grid grid-cols-10 items-center border-b-2 border-secondary md:w-1/2">
                <input 
                    type="checkbox" 
                    name="checkbox" id="checked" 
                    className="mr-2 border border-neutral h-5 w-6"
                    onChange={handleChange} 
                    checked={isChecked}
                    value={props.todo.body}/>
                {!isChecked? 
                <div className='col-span-9 overflow-auto'>
                    <p  
                    className={`text-primary text-3xl font-bold inline-block cursor-pointer`}
                    onClick={handleClick}>{props.task}
                    </p>

                </div> : 
                <div className='flex items-center justify-between col-span-9 flex-wrap max-w-full overflow-auto'>
                    <p  
                    className={`text-primary text-3xl font-bold inline-block cursor-pointer line-through`}
                    onClick={handleClick}>{props.task}
                    </p>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 text-neutral cursor-pointer" onClick={() => props.deleteItem(props.task)}>
                        <path d="M2 3a1 1 0 00-1 1v1a1 1 0 001 1h16a1 1 0 001-1V4a1 1 0 00-1-1H2z" />
                        <path fillRule="evenodd" d="M2 7.5h16l-.811 7.71a2 2 0 01-1.99 1.79H4.802a2 2 0 01-1.99-1.79L2 7.5zm5.22 1.72a.75.75 0 011.06 0L10 10.94l1.72-1.72a.75.75 0 111.06 1.06L11.06 12l1.72 1.72a.75.75 0 11-1.06 1.06L10 13.06l-1.72 1.72a.75.75 0 01-1.06-1.06L8.94 12l-1.72-1.72a.75.75 0 010-1.06z" clipRule="evenodd" />
                    </svg>
                </div>
                }
                {props.priority=== 'Select'?
                <p className='col-span-10 text-neutral font-bold text-sm'>Priority: No Priority Set</p>
                :
                <p className='text-neutral font-bold text-sm col-span-5'>Priority: {props.priority}</p>
                }
            </div>
        </>
    )
}