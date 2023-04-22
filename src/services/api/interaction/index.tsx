import {request} from "@@/exports";

export async function leaveMessage(
    body: InteractAPI.messageData,
    options?: { [ key: string ]: any },
) {
    return request(`/api/service-content/message`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            data: body,
            ...(options || {}),
        }
    );
}
