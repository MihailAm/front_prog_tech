import styles from './Menu.module.css';
import cn from 'classnames';
import { useContext, KeyboardEvent, useState } from 'react';
import { AppContext } from '../../context/app.context';
import { FirstLevelMenuItem, PageItem } from '../../interfaces/menu.interface';
import Link from 'next/link';
import { useRouter } from 'next/router';
import  Doctors  from './d1.svg';
import  Yslug  from './d2.svg';
import  MedCard  from './d3.svg';
import  Tov  from './d4.svg';
import { TopLevelCategory } from '@/interfaces/page.interface';



export const firstLevelMenu: FirstLevelMenuItem[] = [
	{ route: 'courses', name: 'Врачи', icon: <Doctors />, id: TopLevelCategory.Courses },
	{ route: 'services', name: 'Услуги', icon: <Yslug />, id: TopLevelCategory.Services },
	{ route: 'books', name: 'Мед Карта', icon: <MedCard />, id: TopLevelCategory.Books },
	{ route: 'products', name: '', icon: <Tov />, id: TopLevelCategory.Products }
];

export const Menu = (): JSX.Element => {
	const { menu, setMenu, firstCategory } = useContext(AppContext);
	

	const buildFirstLevel = () => {
		return (
            <>
				{firstLevelMenu.map(m => (
					<div key={m.route}>
						
							<a href={`/${m.route}`}>
								<div className={cn(styles.firstLevel, {
									[styles.firstLevelActive]: m.id == firstCategory
								})}>
									{m.icon}
									<span>{m.name}</span>
								</div>
							</a>
						
						{m.id == firstCategory && buildSecondLevel(m)}
                        </div>
				))}
            </>
		);
	};

	const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
		return (
			<div>
				{menu.map(m => (
                    <div className={styles.secondLevel}>
                        <div className={styles.secondLevel}>{m._id.secondCategory}</div>
                        <div className={cn(styles.secondLevelBlock,{
                            [styles.secondLevelBlockOpened]:m.isOpened
                        })}>
                        </div>
                    </div>
                ))}
			
			</div>
		);
	};
    return(
        <div className={styles.menu}>
            {buildFirstLevel()}
			
        </div>
    )
};