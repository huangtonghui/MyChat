addEventListener('fetch', (event) => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  // 构建 GPT API 的 URL
  const gptApiUrl = 'https://api.openai.com/v1/chat/completions';

  // 转发本地请求到 GPT API
  const gptApiResponse = await fetch(gptApiUrl, {
    method: request.method,
    headers: request.headers,
    body: request.body, // 传递本地请求的 body 数据
  });

  // 从 GPT API 的响应创建新的 Response 对象
  const response = new Response(gptApiResponse.body, {
    status: gptApiResponse.status,
    statusText: gptApiResponse.statusText,
    headers: {
      'Content-Type': 'application/json',
      // 允许跨域访问，根据需要设置其他 CORS 头
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });

  return response;
}
