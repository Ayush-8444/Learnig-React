import React, { useId } from 'react'

function Select({
    label,
    options,
    className,
    ...props
}, ref) {
    const id = useId()

  return (
    <div className="w-full">
      {label && (
        <label htmlFor={id} className="">
          {label}
        </label>
      )}
      <select
        id={id}
        {...props}
        ref={ref}
        className={`px-3 py-2 bg-white text-black rounded-lg outline-none focus:bg-gray-50 border-2
                border-gray-100 w-full duration-200 focus:border-black ${className}`}
      >
        {options?.map((item, index) => {
            return <option key={index} value={item}
            >{item}</option>
        })}
      </select>
    </div>
  );
}

export default React.forwardRef(Select)