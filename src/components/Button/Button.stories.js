import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from './';

export default {
    title: 'Button',
    component: Button,
};

export const Example = () => {
    return (
        <Button onClick={action('button clicked')}>
            Example
        </Button>
    )
};