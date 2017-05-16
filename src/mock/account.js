const userMap = {
  admin: {
    role: ['admin'],
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhZG1pbiIsImp0aSI6ImFjODA5OTIwLTYxOTctNDcyYS1iMDVhLWJkNWRkOTE0YTJkOCIsImlhdCI6MTQ5NDU3NDg0OSwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZSI6ImFkbWluIiwibmFtZSI6ImFkbWluIiwicm9sZSI6IkFkbWluIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiQWRtaW4iLCJhdmF0YXJVcmwiOiJodHRwOi8vbG9jYWxob3N0OjU0MzIyL2M0Y2JiNDA4LWY1NTItMWZiMC00MmRhLTM5ZGYwMjU2OTMzNl8yMDE3MDUxMF9qcGciLCJuYmYiOjE0OTQ1NzQ4NDksImV4cCI6MTY1NTI3ODg0OSwiaXNzIjoiVHJhbnNtaXR0ZXJJc3N1ZXIiLCJhdWQiOiJUcmFuc21pdHRlckF1ZGllbmNlIn0.EkSm2FLHTav6UZj32QfG3G15VEcfysSF51XIrAG8Cg8',
    introduction: '我是超级管理员',
    avatar: 'https://wdl.wallstreetcn.com/48a3e1e0-ea2c-4a4e-9928-247645e3428b',
    name: '超级管理员小潘'
  }
}

export default {
  login: config => {
    const {
      userName
    } = config.params;
    return new Promise((resolve, reject) => {
      if (userMap[userName]) {
        setTimeout(() => {
          resolve([200, {
            data: userMap[userName]
          }]);
        }, 500);
      } else {
        reject('用户名或密码错误')
      }
    })
  }
}
