import React from 'react'
import { Link } from 'react-router-dom';
import 'flowbite';
import {BsChevronDown} from 'react-icons/bs'
const Accordions = ({ header, icon, links, index }) => {

 
    const loop = links.map((link,index) => (
        <Link key={index} to={link.path}
            className="mb-2 text-sm font-shippo text-gray-500 dark:text-gray-400">{link.name}</Link>
    ))
    return (
        <div>
            <div id="accordion-collapse" data-accordion="collapse">
                <h2 className='hover:!bg-white active:!bg-white focus:!bg-white' id={`accordion-collapse-heading-${index}`}>
                    <button type="button" className="flex items-center justify-between w-full p-3 font-medium text-left hover:!bg-white active:!bg-white focus:!bg-white font-shippo" 
                    data-accordion-target={`#accordion-collapse-body-${index}`} aria-expanded="true" aria-controls={`accordion-collapse-body-${index}`}>
                        <span className='flex items-center gap-2'>{icon}{header}</span>
                        <BsChevronDown/>      
                    </button>
                </h2>
                <div id={`accordion-collapse-body-${index}`} className="hidden" aria-labelledby={`accordion-collapse-heading-${index}`}>
                    <div className="flex justify-center flex-col items-start px-6 mt-2">
                        {loop}
                    </div>
                </div>

            </div>
        </div>

    )
}

export default Accordions