import React from 'react';
import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import { faMinus, faPlus, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import classNames from 'classnames/bind';
import styles from './Styles'

export default class SidebarMenu extends React.Component {
    render() {
        const sidebarMenuConfig = this.props.sidebarMenuConfig;

        return <div className={styles.sidebarMenu}>
            <Logo/>
            <div className={styles.header}>Main navigation</div>
            <div className={styles.sidebarItems}>
                {sidebarMenuConfig.map((itemVal, itemKey) => {
                    let children;
                    if (itemVal.children.length > 0) {
                        children = itemVal.children.map((subItemVal, key) => {
                            return <Item key={key} label={subItemVal.label} to={subItemVal.to} />
                        });
                    } else {
                        children = undefined;
                    }
                    return <Item key={itemKey} label={itemVal.label} to={itemVal.to} icon={itemVal.icon}>
                        {children}
                    </Item>
                })}
            </div>
        </div>;
    }
}

class Item extends React.Component {
    render() {
        const isSelected = this.props.selected !== undefined;

        var itemClasses = classNames({
        //    [styles.itemStyles] : true,
            'selected' : isSelected
        });

        var subItemsClasses = classNames({
            'subItems' : true,
            [styles.subItems] : true,
        })

        const mainIcon = (this.props.icon === undefined) ? faChevronRight : this.props.icon;
        const hasChildren = this.props.children !== undefined;
        const showItemsIcon = isSelected ? faMinus : faPlus;

        return <div className={itemClasses}>
            <NavLink activeClassName="selected" className={styles.itemLink} to={this.props.to}>
                <FontAwesomeIcon icon={mainIcon} />
                <span className={styles.label}>
                    {this.props.label}
                </span>
                {hasChildren === true &&
                <FontAwesomeIcon icon={showItemsIcon} className={styles.showItemsIcon} pull="right" />
                }
            </NavLink>
            {hasChildren === true &&
            <div className={subItemsClasses}>
                {this.props.children}
            </div>
            }
        </div>;
    }
}