import {request} from "@@/exports";

export async function write(
    body: CreatAPI.writeData,
    options?: { [key: string]: any },
) {
    return request(`/api/service-content/post`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        data: body,
        ...(options || {}),
    });
}
