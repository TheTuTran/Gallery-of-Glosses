import Link from 'next/link';
import { IconType } from 'react-icons';
import { twMerge } from 'tailwind-merge';

interface SidebarItemProps {
	icon: IconType;
	label: string;
	active?: boolean;
	href: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon: Icon, label, active, href }) => {
	return (
		<Link href={href} className={twMerge('flex flex-row h-auto items-center w-full gap-x-4 text-lg font-medium cursor-pointer hover:text-black transition text-gray-500 py-1', active && 'text-black')}>
			<Icon size={26} />
			<p className="w-full">{label}</p>
		</Link>
	)
}

export default SidebarItem;