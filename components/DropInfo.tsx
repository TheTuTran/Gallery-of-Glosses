"use client"

import { useState } from 'react';
import { BsChevronDown } from 'react-icons/bs';

interface DropInfoProps {
	children: React.ReactNode;
	title: string;
}

/**
 * The DropInfo component is a drop-down list where users can toggle the visibility of the children.
 * The title and state of the dropdown is managed within the component.
 * When the title area is clicked, the dropdown visibility state is toggled.
 * When the dropdown is visible, it shows the content inside.
 *
 * @param {React.ReactNode} children The child nodes to be rendered within the dropdown when it's visible.
 * @param {string} title The title for the dropdown, displayed permanently at the top of the component.
 * @returns A dropdown component with a title and toggleable visibility.
 */
const DropInfo: React.FC<DropInfoProps> = ({ children, title }) => {
    const [showDropdown, setShowDropdown] = useState(false);
	
	return (
		<div className="bg-bg-secondary-color border-gold border rounded-lg">
            <div onClick={() => setShowDropdown(!showDropdown)} className="hover:bg-bg-color transition cursor-pointer flex items-center gap-4 p-2 font-bold text-3xl">
                <BsChevronDown className= {` transition ${showDropdown ? '' : '-rotate-90'}`}/>
                <p> {title} </p>
            </div>
            {showDropdown && (
                    <div className="p-2 px-4 h-fit">
                        <hr className="border-2"/>
                        {children}
                    </div>
                )}
		</div>
	)
}

export default DropInfo;