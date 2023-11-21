import { HeaderProps } from "./Header.props";
import styles from './Header.module.css';
import cn from 'classnames';
import Icon from './icon.svg';
import SearchString from '../DecorativeSearchBox/SearchBox';



export const Header = ({className, ...props}: HeaderProps): JSX.Element => {
    return (
        <header className={cn(className, styles.header)}{...props}>
            <SearchString/>
            <div className={styles.phoneNumbers}>
                <p>8 (900) 589-52-17</p>
                <p>8 (904) 599-87-15</p>
                <p className={styles.freeCall}>Бесплатный звонок по России</p>
            </div>
            <a href="" target="_black"><Icon/></a>
        </header>
    )
}