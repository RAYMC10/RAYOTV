export default {
  async fetch(request) {
    const url = new URL(request.url);
    const target = url.searchParams.get('url');
    if (!target) return new Response('No URL', {status:400});
    const response = await fetch(target, {headers:{'User-Agent':'Mozilla/5.0'}});
    const newHeaders = new Headers(response.headers);
    newHeaders.set('Access-Control-Allow-Origin','*');
    return new Response(response.body, {status:response.status, headers:newHeaders});
  }
}
