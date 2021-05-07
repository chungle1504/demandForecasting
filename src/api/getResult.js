import { httpGet } from "./sender/sender";

export default function getResult() {
    const route = `/result`;
    // console.log('call2');
    return httpGet(route)

}