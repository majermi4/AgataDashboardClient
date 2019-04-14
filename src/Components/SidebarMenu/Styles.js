import {css} from "emotion";

export default {
    sidebarMenu : css({
        fontFamily: 'Roboto,sans-serif',
        fontWeight: '400',
        backgroundColor: '#fff',
        width: '250px',
        padding: '10px 0px',
        minHeight: '100vh'
    }),
    header : css({
        fontSize: '13px',
        color: '#ccc',
        margin: '10px 0px',
        paddingLeft: '15px',
    }),
    sidebarItems : css({
        '& .selected > a': css({
            color: '#f16c69',
            backgroundColor: '#f9f9f9'
        }),
        '& .selected > .subItems': css({
            display: 'block',
        })
    }),
    itemLink : css({
        ':hover,:focus': css({
            color: '#f16c69',
        }),
        color: '#70767b',
        display: 'block',
        fontSize: '15px',
        padding: '15px 25px',
        '.subItems &': css({
            padding: '10px 35px',
            fontSize: '13px',
        }),
        textDecoration: 'none',
        '& a': css({
            padding: '0px 0px'
        }),
        transition: 'color 0.2s ease',
    }),
    label : css({
        marginLeft: '10px',
    }),
    subItems : css({
        padding: '8px 0px 3px',
        display: 'none',
    }),
    showItemsIcon: css({
        color: '#ccc',
    }),
}