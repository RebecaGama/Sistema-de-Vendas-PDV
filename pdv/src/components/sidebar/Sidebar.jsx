import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from "./logo_PDV.png"
import './sidebar.scss';

const sidebarNavItems = [
    {
        display: 'Login',
        icon: <i className='bx bxs-log-in-circle'></i>,
        to: '/',
        section: 'login'
    },
    {
        display: 'Vender',
        icon: <i className='bx bxs-check-circle'></i>,
        to: '/vender',
        section: 'vender'
    },
    {
        display: 'Produtos',
        icon: <i className='bx bxs-customize'></i>,
        to: '/produtos',
        section: 'produtos'
    },
    {
        display: 'Vendas',
        icon: <i className='bx bx-bar-chart'></i>,
        to: '/vendas',
        section: 'vendas'
    },
    {
        display: 'Meu perfil',
        icon: <i className='bx bx-user'></i>,
        to: '/user',
        section: 'user'
    },
]

const Sidebar = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [stepHeight, setStepHeight] = useState(0);
    const sidebarRef = useRef();
    const indicatorRef = useRef();
    const location = useLocation();

    useEffect(() => {
        setTimeout(() => {
            const sidebarItem = sidebarRef.current.querySelector('.sidebar__menu__item');
            indicatorRef.current.style.height = `${sidebarItem.clientHeight}px`;
            setStepHeight(sidebarItem.clientHeight);
        }, 50);
    }, []);

    useEffect(() => {
        const curPath = window.location.pathname.split('/')[1];
        const activeItem = sidebarNavItems.findIndex(item => item.section === curPath);
        setActiveIndex(curPath.length === 0 ? 0 : activeItem);
    }, [location]);

    return <div className='sidebar'>
        <div className="sidebar__logo">
            <img src={Logo} alt="LOGO" width="200px" height="60px"/>
        </div>
        <div ref={sidebarRef} className="sidebar__menu">
            <div
                ref={indicatorRef}
                className="sidebar__menu__indicator"
                style={{
                    transform: `translateX(-50%) translateY(${activeIndex * stepHeight}px)`
                }}
            ></div>
            {
                sidebarNavItems.map((item, index) => (
                    <Link to={item.to} key={index}>
                        <div className={`sidebar__menu__item ${activeIndex === index ? 'active' : ''}`}>
                            <div className="sidebar__menu__item__icon">
                                {item.icon}
                            </div>
                            <div className="sidebar__menu__item__text">
                                {item.display}
                            </div>
                        </div>
                    </Link>
                ))
            }
        </div>
    </div>;
};

export default Sidebar;