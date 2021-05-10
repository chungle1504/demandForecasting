import { httpGet } from "./sender/sender";

export default function getItemFollowTime(storeId, from, to, item) {
    const route = `/result/store/${storeId}/${from}/${to}/item/${item}}`;
    // console.log('call1');
    return httpGet(route)
}