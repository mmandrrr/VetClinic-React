export const getPageId = (num) => {
    return document.location.pathname.split('/')[num];
}