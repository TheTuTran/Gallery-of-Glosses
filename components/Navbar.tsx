"use client";

import { usePathname } from 'next/navigation';
import { useMemo } from 'react';

import Box from './Box';
import NavbarItem from './NavbarItem'
import { twMerge } from 'tailwind-merge';

interface NavbarProps {
	children: React.ReactNode;
}

/**
 * The Navbar component renders a navigation bar with links to different routes.
 * The active route is highlighted.
 */
const Navbar: React.FC<NavbarProps> = ({ children }) => {
	const pathname = usePathname();

    // Define routes for the Navbar. Use the pathname to determine the active route.
	const routes = useMemo(()=>[
		{
			label: 'Home',
			active: pathname === '/',
			href: '/',
		},
		{
			label: 'About',
			active: pathname === '/about',
			href: '/about',
		},
        {
			label: 'History',
			active: pathname === '/history',
			href: '/history',
		},
        {
			label: 'Terminology',
			active: pathname === '/terminology',
			href: '/terminology',
		},
        {
			label: 'Compare',
			active: pathname === '/compare',
			href: '/compare',
		},
        {
			label: 'Map',
			active: pathname === '/map',
			href: '/map',
		},
	], [pathname]);

	return (
		<div className={twMerge("flex flex-col h-full w-full")}>
			<div className="fixed hidden md:flex flex-col gap-y-2 bg-black h-[50px] w-full p-2">
				<Box>
					<div className="flex text-center">
						{routes.map((item) => (<NavbarItem key={item.label} {...item}/>))}
					</div>
				</Box>
			</div>
			<main className="pt-20 h-full flex-1 overflow-y-auto py-5">
				{children}
			</main>
		</div>
	)
}

export default Navbar;