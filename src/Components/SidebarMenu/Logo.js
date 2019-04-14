import React, { Component } from 'react';
import { css } from 'emotion'

const logoWrapper = css({
    textAlign: 'center',
    padding: '20px 0px',
    fontStyle: 'italic',
    fontSize: '20px',
});

export default class Logo extends React.Component {
    render() {
        return <div className={logoWrapper}>
            <span>Agata Dashboard</span>
        </div>;
    }
}