import React from 'react';

interface ItemsListInterface {
  name: string;
  link: string;
  icon?: JSX.Element;
}

export interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  list: ItemsListInterface[];
  className?: string;
  logo?: string;
}

export const Sidebar: React.FC<SidebarProps> = ({ list, logo }) => {
  return (
    <aside
      className="min-h-screen w-64 overflow-y-auto bg-gray-50 "
      aria-label="Sidebar"
    >
      <img src={logo} alt="logo" className="mx-auto mb-3 h-12" />
      <div className="py-4 px-3 dark:bg-gray-800">
        <ul className="space-y-2">
          {list.map((item, index) => (
            <li key={index}>
              <a
                href={item.link}
                className="flex items-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              >
                {item.icon}
                <span className="ml-3">{item.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};
