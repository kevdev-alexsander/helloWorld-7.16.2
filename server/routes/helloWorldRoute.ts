export default function (server) {
    const router = server.newRouter();
  
    router.get(
      {
        path: '/api/helloWorld/hello',
        validate: false,
      },
      (context, request, response) => {
        return response.ok({ body: { message: 'Hello World!' } });
      }
    );
  
    server.route(router);
  }
  