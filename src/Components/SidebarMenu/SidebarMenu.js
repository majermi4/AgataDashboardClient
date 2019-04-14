import React, { Component } from 'react';
import Logo from "./Logo";
import { faMinus, faPlus, faChevronRight, faCogs, faSignOutAlt, faUsers, faBoxes, faHome } from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import classNames from 'classnames/bind';
import styles from './Styles'

export default class SidebarMenu extends React.Component {
    render() {
        return <div className={styles.sidebarMenu}>
            <Logo/>
            <div className={styles.header}>Main navigation</div>
            <div className={styles.sidebarItems}>
                <Item label={"Dashboard"} icon={faHome} />
                <Item label={"Features"} icon={faBoxes} selected={true}>
                    <Item label={"Feature 1"} />
                    <Item label={"Feature 2"} />
                    <Item label={"Feature 3"} />
                </Item>
                <Item label={"Settings"} icon={faCogs}>
                    <Item label={"Feature 3"} />
                </Item>
                <Item label={"Users"} icon={faUsers} />
                <Item label={"Exit"} icon={faSignOutAlt} />
            </div>
        </div>;
    }
}

class Item extends React.Component {
    onItemClicked(e) {
        e.preventDefault();
    }

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
            <a onClick={this.onItemClicked} className={styles.itemLink} href='#'>
                <FontAwesomeIcon icon={mainIcon} />
                <span className={styles.label}>
                    {this.props.label}
                </span>
                {hasChildren === true &&
                <FontAwesomeIcon icon={showItemsIcon} className={styles.showItemsIcon} pull="right" />
                }
            </a>
            {hasChildren === true &&
            <div className={subItemsClasses}>
                {this.props.children}
            </div>
            }
        </div>;
    }
}