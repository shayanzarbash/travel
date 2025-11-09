'use client';

import { FC, useEffect, useState } from 'react';

import { menuItems } from '@/components/header/menu-items';

import Icon from '@/ui-kit/icon/Icon';


const DropdownMenu: FC = () => {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [mobileOpen, setMobileOpen] = useState({});

  useEffect(() => {
    if (openDropdown !== null) {
      const timer = setTimeout(() => {}, 100);
      // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
      return () => clearTimeout(timer);
    }
  }, [openDropdown]);

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const toggleMobile = (index: number) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    setMobileOpen((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <>
      {/* دسکتاپ */}
      <nav className='bg-slate-900/95 border-slate-800 sticky top-0 z-50 backdrop-blur-sm sm:hidden md:block'>
        <div className='mx-auto flex max-w-7xl items-center justify-between px-6 py-4'>
          <ul className='flex items-center gap-8'>
            {menuItems.map((item, index) => (
              <li
                key={index}
                className='relative'
                onMouseEnter={() => setOpenDropdown(index)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {item.submenu ? (
                  <div className='t2_regular flex cursor-pointer items-center gap-1 py-4 text-stroke-static transition-colors'>
                    {item.title}
                    <Icon
                      name='arrow_bottom'
                      classes='text-3xl text-stroke-static'
                    />
                  </div>
                ) : (
                  <a
                    href={item.href}
                    className='t2_regular pl-7 text-stroke-static transition-colors'
                  >
                    {item.title}
                  </a>
                )}

                {/* دراپ‌دان سطح اول */}
                {item.submenu && openDropdown === index && (
                  <ul className='absolute right-0 top-full mt-0 w-full min-w-max overflow-hidden rounded-lg border bg-background-3 shadow-2xl'>
                    {item.submenu.map((sub, subIndex) => (
                      <li key={subIndex} className='group/sub relative'>
                        {sub.submenu ? (
                          <>
                            {/* آیتم با زیرمنو */}
                            <div className='hover:bg-slate-700 flex cursor-default items-center justify-between px-4 py-3 transition-colors'>
                              <span className='text-gray-200'>{sub.title}</span>
                              <Icon
                                name='arrow_bottom'
                                classes='text-2xl text-stroke-tertiary'
                              />
                            </div>
                            {/* زیرمنو - بدون پرش */}
                            <ul className='border-slate-700 bg-slate-800 pointer-events-none invisible absolute left-full top-0 -ml-1 w-56 rounded-lg border opacity-0 shadow-2xl transition-all duration-200 ease-out group-hover/sub:pointer-events-auto group-hover/sub:visible group-hover/sub:opacity-100'>
                              {sub.submenu.map((deep, i) => (
                                <li key={i}>
                                  <a
                                    href={deep.href}
                                    className='b1_regular hover:color-stroke-secondary hover:text-cyan-400 block whitespace-nowrap px-4 py-3 transition-colors'
                                  >
                                    {deep.title}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </>
                        ) : (
                          <a
                            href={sub.href}
                            className='b1_regular hover:bg-slate-700 hover:text-cyan-400 block px-4 py-3 transition-colors'
                          >
                            {sub.title}
                          </a>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* موبایل */}
      <nav className='bg-slate-900/95 border-slate-800 sticky top-0 z-50 hidden border-b backdrop-blur-sm'>
        <div className='flex items-center justify-between px-6 py-4'>
          <a href='/' className='text-white text-xl font-bold'>
            ناواکو
          </a>
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className='text-white'
          >
            {mobileMenu ? (
              <Icon
                name='arrow_bottom'
                classes='text-2xl text-stroke-tertiary'
              />
            ) : (
              <Icon
                name='arrow_bottom'
                classes='text-2xl text-stroke-tertiary'
              />
            )}
          </button>
        </div>

        {mobileMenu && (
          <div className='space-y-2 px-6 pb-4'>
            {menuItems.map((item, index) => (
              <div key={index}>
                {item.submenu ? (
                  <div>
                    <div
                      onClick={() => toggleMobile(index)}
                      className='text-gray-200 flex cursor-pointer items-center justify-between py-2'
                    >
                      {item.title}
                      <Icon
                        name='arrow_bottom'
                        classes='text-2xl text-stroke-tertiary'
                      />
                    </div>
                  </div>
                ) : (
                  <a
                    href={item.href}
                    className='text-gray-200 hover:text-cyan-400 block py-2'
                  >
                    {item.title}
                  </a>
                )}
              </div>
            ))}
          </div>
        )}
      </nav>
    </>
  );
};

export default DropdownMenu;
