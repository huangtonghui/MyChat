addEventListener('fetch', (event) => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  // 构建 GPT API 的 URL
  const gptApiUrl = 'https://api.openai.com/v1/chat/completions';
  // const auth = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik1UaEVOVUpHTkVNMVFURTRNMEZCTWpkQ05UZzVNRFUxUlRVd1FVSkRNRU13UmtGRVFrRXpSZyJ9.eyJodHRwczovL2FwaS5vcGVuYWkuY29tL3Byb2ZpbGUiOnsiZW1haWwiOiJodWFuZ3Rvbmh1aUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZX0sImh0dHBzOi8vYXBpLm9wZW5haS5jb20vYXV0aCI6eyJwb2lkIjoib3JnLUZDWmZHS3ZtZFhoT2pWVElXMTVXN0FVQyIsInVzZXJfaWQiOiJ1c2VyLURvU25MZUpaWlRNeGxDUU1QeU5sRmxrUyJ9LCJpc3MiOiJodHRwczovL2F1dGgwLm9wZW5haS5jb20vIiwic3ViIjoiZ29vZ2xlLW9hdXRoMnwxMDE1ODcxODMxOTY3ODA2MDc5NjciLCJhdWQiOlsiaHR0cHM6Ly9hcGkub3BlbmFpLmNvbS92MSIsImh0dHBzOi8vb3BlbmFpLm9wZW5haS5hdXRoMGFwcC5jb20vdXNlcmluZm8iXSwiaWF0IjoxNzA1MDI3ODQ4LCJleHAiOjE3MDU4OTE4NDgsImF6cCI6IlRkSkljYmUxNldvVEh0Tjk1bnl5d2g1RTR5T282SXRHIiwic2NvcGUiOiJvcGVuaWQgZW1haWwgcHJvZmlsZSBtb2RlbC5yZWFkIG1vZGVsLnJlcXVlc3Qgb3JnYW5pemF0aW9uLnJlYWQgb3JnYW5pemF0aW9uLndyaXRlIG9mZmxpbmVfYWNjZXNzIn0.SrNYEwfZHkYNNZMmcaxonPGkj72vouYwC0Q1uKpvLyvdIy3bS4i7F_fqLmvY66VozGnZCFuWqq8SPE93OEPUQTRuVD-f8TzLUIA5HWsa4Zfi3XVsrmf1DwBPNzZ3RBVoJLiFqdqw9NieANaSvA9deIOdVw31YoplM27FaZzDVe3ruzEklpRhzqAnNhpCTPEd8M5PtxPMZFuat-Tn6H_EIYfrJ9CJ40fD_9MhiQPXasrRP_kcHXN9jDjWItnNF2CcIrXVxF2LXhvuWcIQlikyaVc4k77s-bKSZc43D9GVReHbICsdTOc8TCzev3-XFs4YRg3kWfstKre_0gol7FYA5Q'

  const requestBody = await request.json();
  const uuids = [
    { uuid: '202401191240', expir: '2099/12/31' }
  ]
  const user = uuids.find(i => i.uuid == requestBody.uuid)
  const now = new Date().getTime()
  const expir = new Date(user.expir).getTime()
  let auth = ''
  if (user.uuid == requestBody.uuid && now < expir) {
    auth = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik1UaEVOVUpHTkVNMVFURTRNMEZCTWpkQ05UZzVNRFUxUlRVd1FVSkRNRU13UmtGRVFrRXpSZyJ9.eyJodHRwczovL2FwaS5vcGVuYWkuY29tL3Byb2ZpbGUiOnsiZW1haWwiOiJodWFuZ3Rvbmh1aUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZX0sImh0dHBzOi8vYXBpLm9wZW5haS5jb20vYXV0aCI6eyJwb2lkIjoib3JnLUZDWmZHS3ZtZFhoT2pWVElXMTVXN0FVQyIsInVzZXJfaWQiOiJ1c2VyLURvU25MZUpaWlRNeGxDUU1QeU5sRmxrUyJ9LCJpc3MiOiJodHRwczovL2F1dGgwLm9wZW5haS5jb20vIiwic3ViIjoiZ29vZ2xlLW9hdXRoMnwxMDE1ODcxODMxOTY3ODA2MDc5NjciLCJhdWQiOlsiaHR0cHM6Ly9hcGkub3BlbmFpLmNvbS92MSIsImh0dHBzOi8vb3BlbmFpLm9wZW5haS5hdXRoMGFwcC5jb20vdXNlcmluZm8iXSwiaWF0IjoxNzA1MDI3ODQ4LCJleHAiOjE3MDU4OTE4NDgsImF6cCI6IlRkSkljYmUxNldvVEh0Tjk1bnl5d2g1RTR5T282SXRHIiwic2NvcGUiOiJvcGVuaWQgZW1haWwgcHJvZmlsZSBtb2RlbC5yZWFkIG1vZGVsLnJlcXVlc3Qgb3JnYW5pemF0aW9uLnJlYWQgb3JnYW5pemF0aW9uLndyaXRlIG9mZmxpbmVfYWNjZXNzIn0.SrNYEwfZHkYNNZMmcaxonPGkj72vouYwC0Q1uKpvLyvdIy3bS4i7F_fqLmvY66VozGnZCFuWqq8SPE93OEPUQTRuVD-f8TzLUIA5HWsa4Zfi3XVsrmf1DwBPNzZ3RBVoJLiFqdqw9NieANaSvA9deIOdVw31YoplM27FaZzDVe3ruzEklpRhzqAnNhpCTPEd8M5PtxPMZFuat-Tn6H_EIYfrJ9CJ40fD_9MhiQPXasrRP_kcHXN9jDjWItnNF2CcIrXVxF2LXhvuWcIQlikyaVc4k77s-bKSZc43D9GVReHbICsdTOc8TCzev3-XFs4YRg3kWfstKre_0gol7FYA5Q'
  }
  delete requestBody.uuid;
  const modifiedRequestBody = JSON.stringify(requestBody);

  // 转发本地请求到 GPT API
  const gptApiResponse = await fetch(gptApiUrl, {
    method: request.method,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth}`, // 根据需要设置 GPT API 的授权头
    },
    body: modifiedRequestBody, // 传递本地请求的 body 数据
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
