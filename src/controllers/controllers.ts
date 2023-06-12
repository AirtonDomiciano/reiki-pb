let users = new Map<string, any>();

export const getUsers = ({ response }: { response: any }) => {
  response.body = Array.from(users.values());
};

export const getUserById = ({ params, response }: { params: { id: string }; response: any }) => {
  if (params && params.id && users.has(params.id)) {
    response.body = users.get(params.id);
  } else {
    response.status = 404;
    response.body = { message: 'User not found' };
  }
};

export const addUser = async ({ request, response }: { request: any; response: any }) => {
  console.log(response);

  if (!request.hasBody) {
    response.status = 400;
    response.body = { message: 'Invalid user data' };
  } else {
    const body = await request.body();
    const user = body.value;
    user.id = Math.random().toString(36).substr(2, 9);
    users.set(user.id, user);
    response.status = 201;
    response.body = user;
  }
};

export const updateUser = async ({ params, request, response }: { params: { id: string }; request: any; response: any }) => {
    if (params && params.id && users.has(params.id)) {
    const body = await request.body();
    Object.assign(users.get(params.id), body.value);
    response.status = 200;
    response.body = { message: 'User updated successfully' };
  } else {
    response.status = 404;
    response.body = { message: 'User not found' };
  }
}

export const deleteUser = ({ params, response }: { params: { id: string }; response: any }) => {
  if (params && params.id && users.has(params.id)) {
    users.delete(params.id);
    response.status = 200;
    response.body = { message: 'User deleted successfully' };
  } else {
    response.status = 404;
    response.body = { message: 'User not found' };
  }
};