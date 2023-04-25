export const updateItemQty = (state, action, qty) => {

    state.data = state.data.map(item => {
        if (item.id === action.payload) {
            return { ...item, quantity: item.quantity + qty };
        }
        return item;
    });
};