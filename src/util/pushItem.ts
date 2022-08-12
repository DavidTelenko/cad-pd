import indexedDB from "localforage";

export const pushItem = async <T,>/*comma here for the love of God*/(key: string, value: T) => {
    const prev = await indexedDB.getItem<T[]>(key);
    if (prev)
        await indexedDB.setItem(key, [...prev, value]);
    else
        await indexedDB.setItem(key, [value]);
}

export default pushItem