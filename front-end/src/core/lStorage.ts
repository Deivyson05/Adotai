export function setData(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
}

export function getData(key: string) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
}

export function updateData(key: string, key2: string, value: any) {
    let obj = getData(key);
    if(key2 in obj) {
        obj[key2] = value;
        setData(key, obj);
    }
}