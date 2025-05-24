/********************************[ SET BACKEND URL ]*/
export const setBackendUrl: (() => string) = () => {
    let backendURL: string = '';

    switch (import.meta.env.VITE_NODE_ENV) {
        case 'production':
            backendURL = import.meta.env.VITE_HUB_PROD_URL || '';
            break;

        case 'preproduction':
            backendURL = import.meta.env.VITE_HUB_PREPROD_URL || '';
            break;

        case 'development':
            backendURL = `${import.meta.env.VITE_HUB_DEV_HOSTNAME || ''}:${import.meta.env.VITE_HUB_DEV_PORT || ''}`;
            break;

        default:
            break;
    }

    return backendURL;
};
/****************************************************/