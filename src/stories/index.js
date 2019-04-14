import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { Welcome } from '@storybook/react/demo';
import Tasks from '../Components/Tasks/Tasks';
import Button from '../Components/Buttons/Button';
import SidebarMenu from "../Components/SidebarMenu/SidebarMenu";
import { applyGlobalCss} from "./../GlobalCss";

applyGlobalCss();

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with label', () => <Button label={"Some Button"} />);

storiesOf('Tasks', module)
    .add('with name', () => (
        <Tasks name={'Mike'}></Tasks>
    ));

storiesOf('Main menu', module)
    .add('Full menu', () => (
        <SidebarMenu></SidebarMenu>
    ));