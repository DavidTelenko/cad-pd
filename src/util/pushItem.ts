import indexedDB from "localforage";

//                              V comma here for the love of God*
export const pushItem = async <T,>(key: string, value: T) => {
    const prev = await indexedDB.getItem<T[]>(key);
    if (prev)
        await indexedDB.setItem(key, [...prev, value]);
    else
        await indexedDB.setItem(key, [value]);
};