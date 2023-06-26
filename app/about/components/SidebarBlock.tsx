import { block, For } from 'million/react';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';
import { MdHistoryEdu } from 'react-icons/md';
import { AiOutlineInfoCircle, AiFillBook } from 'react-icons/ai';

import SidebarItem from '../../../components/SidebarItem';

const Sidebar = () => {
  const pathname = usePathname();

  const routes = useMemo(() => [
    {
      icon: AiOutlineInfoCircle,
      label: 'About this Site',
      active: pathname === "/about",
      href: '/about',
    },
    {
      icon: MdHistoryEdu,
      label: 'Project History',
      active: pathname === "/about/history",
      href: '/about/history',
    },
    {
      icon: AiFillBook,
      label: 'Terminology and Abbreviations',
      active: pathname === "/about/terminology",
      href: '/about/terminology',
    },
  ], [pathname]);

  return (
    <div className="h-full">
      <div className="hidden md:flex flex-col gap-y-2 bg-white h-full w-[300px] p-2 rounded-md border-gold border">
        <div className="flex flex-col gap-y-4 px-8 py-4">
          {/* Replace the map function with the <For /> component from Million.js */}
          <For each={routes}>
            {(item) => SidebarItem(item)}
          </For>
        </div>
      </div>
    </div>
  )
}

// Convert the Sidebar component into a block.
const SidebarBlock = block(Sidebar);

export default SidebarBlock;