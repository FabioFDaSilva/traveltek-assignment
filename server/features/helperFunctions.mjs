//this function loops through a given dictionary and assigns or pushes a value to the key, depending if it's in use or not
export function pushToDictionary(dict, key, value) {
    if (key in dict) {
        dict[key].push(value);
    } else {
        dict[key] = [value];
    }
}
