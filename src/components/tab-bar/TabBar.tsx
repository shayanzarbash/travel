'use client';

import { FC, useState } from 'react';

import { cn } from '@/libs/utils';

export interface TTab {
  id: number;
  label: string;
  content: string | JSX.Element;
}

interface TTabBar {
  tabs: TTab[];
}

const TabBar: FC<TTabBar> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <>
      <div className='md:border-b-1 flex justify-between rounded-md border border-stroke-primary p-1 md:justify-start md:rounded-none md:border-l-0 md:border-r-0 md:border-t-0 md:border-b-stroke-primary md:p-0'>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              'text-primary ml-0 w-1/2 px-2 py-2 md:ml-3 md:w-auto',
              activeTab === tab.id
                ? 'b2_bold text-primary rounded-md border border-stroke-tertiary bg-background-1 md:rounded-none md:border-b-2 md:border-l-0 md:border-r-0 md:border-t-0 md:border-b-stroke-tertiary md:bg-background-2'
                : 'b2_regular',
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className='mt-4'>
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={cn(
              { block: activeTab === tab.id },
              { hidden: activeTab !== tab.id },
            )}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </>
  );
};

export default TabBar;
