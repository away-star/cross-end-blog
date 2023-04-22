import {request} from "@umijs/max";

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


export async function writeEssay(
    body: CreatAPI.essayData,
    options?: { [key: string]: any },
) {
    return request('/api/service-content/essay', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        data: body,
        ...(options || {}),
    });
}

export async function delEssay(
    params: {
        id:string,
    },
    options?: { [key: string]: any },
) {
    return request(`/api/service-content/essay/${params.id}`, {
        method: 'DELETE',
        ...(options || {}),
    });
}
