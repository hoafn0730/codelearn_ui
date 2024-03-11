import HeadlessTippy from '@tippyjs/react/headless';
import classnames from 'classnames/bind';

import styles from '../Header.module.scss';
import PopperWrapper from '~/components/Popper';

const cx = classnames.bind(styles);

function Menu({ children }) {
    return (
        <HeadlessTippy
            delay={[0, 200]}
            interactive={true}
            placement="bottom"
            render={(attrs) => (
                <PopperWrapper>
                    <div className={cx('menu-user')} tabIndex={-1} {...attrs}>
                        <div>1</div>
                        <div>2</div>
                        <div>3</div>
                        <div>4</div>
                    </div>
                </PopperWrapper>
            )}
        >
            {children}
        </HeadlessTippy>
    );
}

export default Menu;
