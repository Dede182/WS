import React from 'react'

const Input = ({ name, type,label,onChange,value}) => {
    return (
        <>
            <label htmlFor={name} className='text-[16px]'>{label}</label>
            <input type={type}
                name={name}
                id={name}
                onChange={onChange}
                value={value}
                className={`w-full border-[1px] text-[20px] border-[#D9D9D9] bg-[#F1F1F3] indent-1`} />
        </>
    )
}

export default Input