"use client";

import { usePathname } from 'next/navigation';
import { useMemo } from 'react';
import { MdHistoryEdu } from 'react-icons/md'
import { AiOutlineInfoCircle, AiFillBook } from 'react-icons/ai'

import SidebarItem from '../../../components/SidebarItem';

interface SidebarProps {

}

const Sidebar: React.FC<SidebarProps> = ({ }) => {
	const pathname = usePathname();

	const routes = useMemo(()=>[
		{
			icon: AiOutlineInfoCircle,
			label: 'About',
			active: pathname === "/about",
			href: '/about',
		},
		{
			icon: MdHistoryEdu,
			label: 'History',
			active: pathname === "/about/history",
            href: '/about/history',
		},
        {
			icon: AiFillBook,
			label: 'Terminology',
			active: pathname === "/about/terminology",
            href: '/about/terminology',
		},
	], [pathname]);

	return (
		<div className="h-full">
			<div className="hidden md:flex flex-col gap-y-2 bg-white h-full w-[300px] p-2 rounded-md border-gold border">
                <div className="flex flex-col gap-y-4 px-8 py-4">
                    {routes.map((item) => (<SidebarItem key={item.label} {...item} />))}
                </div>
			</div>
		</div>
	)
}

export default Sidebar;