import { httpGet } from "./sender/sender";

export default function getData(storeId, from, to) {
    const route = `/get-result/${storeId}/${from}/${to}`;
    // console.log('call1');
    return httpGet(route)
   
}