/**
 * Created by wy on 2016/11/5.
 */
export function replaceImageUrl(url) {
    const replaceUrl = url.replace(/http\w{0,1}:\/\/p/g, 'https://images.weserv.nl/?url=p');
    return replaceUrl;
}