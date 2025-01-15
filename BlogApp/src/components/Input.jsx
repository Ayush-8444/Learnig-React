import React,{ useId } from 'react'


const Input = React.forwardRef(({
    label,
    type = "text",
    className = "",
    ...props
}, ref) => {
    const Id = useId()
    return (
      <div className="w-full ">
        {label && (
          <label htmlFor={Id} className="inline-block mb-1 pl-1">
            {label}
          </label>
        )}
        <input
          id={Id}
          type={type}
          className={`px-3 py-2 bg-white text-black rounded-lg outline-none focus:bg-gray-50 border-2 
                border-gray-100 focus:border-black w-full duration-200 ${className}`}
          {...props}
          ref={ref}
        />
      </div>
    );
})

export default Input