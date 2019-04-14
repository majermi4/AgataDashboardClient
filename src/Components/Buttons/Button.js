import React from 'react';
import { css } from 'emotion';

const buttonStyles = css`
    textDecoration: underline;
    color: #ffffff;
`

export default class Button extends React.Component {
    render() {
        return <a className={buttonStyles} href="">{this.props.label}</a>;
    }
}