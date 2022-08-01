export function getValue(items, key, group = 'info') {
    if (typeof items === 'object') {
        let item = items.filter(item => {
            if (item.group === group && item.key === key) {
                return item;
            }

            return false;
        })

        return item.length ? item[0].value : null;
    }
}