import { injectGlobal } from 'emotion'

export const applyGlobalCss = () => (
    injectGlobal({
        fontFamily: 'Roboto,sans-serif',
    })
);