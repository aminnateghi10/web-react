export function getValue(items, type) {
    if (typeof items === 'object') {
        let item = items.filter(item => {
            if (item.type === type) {
                return item;
            }

            return false;
        })

        return item.length ? item : null;
    }
}