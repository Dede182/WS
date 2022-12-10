import React from 'react'

const Input = ({ name, type,label}) => {
    return (
        <>
            <label htmlFor={name} className='text-[16px]'>{label}</label>
            <input type={type}
                name={name}
                id={name}
               
                className={`w-full border-[1px] text-[20px] border-[#D9D9D9] bg-[#F1F1F3]`} />
        </>
    )
}

export default Input