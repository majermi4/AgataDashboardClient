import { faCogs, faSignOutAlt, faUsers, faBoxes, faHome } from '@fortawesome/free-solid-svg-icons'

export default [
    {
        label: 'Dashboard',
        to: '/home',
        icon: faHome,
        children: []
    },
    {
        label: 'Features',
        to: '/features',
        icon: faBoxes,
        children: [
            {
                label: 'Feature 1',
                to: '/features/feature1',
                icon: null,
                children: []
            },
            {
                label: 'Feature 2',
                to: '/features/feature2',
                icon: null,
                children: []
            },
            {
                label: 'Feature 3',
                to: '/features/feature3',
                icon: null,
                children: []
            }
        ]
    },
    {
        label: 'Settings',
        to: '/settings',
        icon: faCogs,
        children: [
            {
                label: 'Setting 1',
                to: '/settings/settings1',
                icon: null,
                children: []
            }
        ]
    },
    {
        label: 'Users',
        to: '/users',
        icon: faUsers,
        children: []
    },
    {
        label: 'Exit',
        to: '/exit',
        icon: faSignOutAlt,
        children: []
    }
];
