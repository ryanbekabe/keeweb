export const type = 'menu/set-menu-selection';

export function setMenuSelection(menuId, itemId, option, filterKey, filterValue) {
    return { type, menuId, itemId, option, filterKey, filterValue };
}

export default function reducer(state, action) {
    const menu = state[action.menuId];
    if (!menu) {
        return state;
    }
    return {
        ...state,
        [action.menuId]: {
            ...menu,
            active: action.itemId,
            activeOption: action.option,
            filterKey: action.filterKey,
            filterValue: action.filterValue,
        },
    };
}
