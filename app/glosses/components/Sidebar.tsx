"use client";

import { usePathname } from 'next/navigation';
import { useMemo } from 'react';
import { AiFillBook, AiFillTag } from 'react-icons/ai';
import { BiBookAlt } from 'react-icons/bi';
import { BsPalette, BsCardList } from 'react-icons/bs';

import SidebarItem from '../../../components/SidebarItem';

/**
 * Sidebar functional component.
 * This component is used to display a sidebar navigation.
 * It uses the `usePathname` hook to get the current URL path.
 * Then, it uses the `useMemo` hook to create a list of route objects, which each contain:
 *  - An icon
 *  - A label
 *  - An `active` state indicating if the current URL path matches the route
 *  - An `href` for navigation
 *
 * @returns A JSX element representing the Sidebar component.
 */
const Sidebar = () => {
	const pathname = usePathname();

	const routes = useMemo(()=>[
        {
			icon: BsCardList,
			label: 'Show All Glosses',
			active: pathname === "/glosses",
			href: '/glosses',
		},
		{
			icon: BiBookAlt,
			label: 'Browse by Book',
			active: pathname === "/glosses/book",
			href: '/glosses/book',
		},
		{
			icon: BsPalette,
			label: 'Browse by Theme',
			active: pathname === "/glosses/theme",
            href: '/glosses/theme',
		},
        {
			icon: AiFillBook,
			label: 'Browse by Manuscript',
			active: pathname === "/glosses/manuscript",
            href: '/glosses/manuscript',
		},
        {
			icon: AiFillTag,
			label: 'Browse by Tag',
			active: pathname === "/glosses/tag",
            href: '/glosses/tag',
		},
	], [pathname]);

	return (
		<div className="h-full">
			<div className="hidden md:flex flex-col gap-y-2 bg-bgColor h-full w-[300px] p-2 rounded-md border-gold border">
                <div className="flex flex-col gap-y-4 px-8 py-4">
                    {routes.map((item) => (<SidebarItem key={item.label} {...item} />))}
                </div>
			</div>
		</div>
	)
}

export default Sidebar;