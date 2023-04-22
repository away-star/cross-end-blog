export const formatTime = (time: string): { date: string, time: string, day: string } => {
    const date = new Date(time);

    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const dateOfMonth = date.getDate().toString().padStart(2, '0');
    const hour = date.getHours().toString().padStart(2, '0');
    const minute = date.getMinutes().toString().padStart(2, '0');

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const day = days[date.getDay()];

    const formattedDate = `${year}-${month}-${dateOfMonth}`;
    const formattedTime = `${hour}:${minute}`;

    return { date: formattedDate, time: formattedTime, day };
};


export const getTimeAgo = (time: string): string => {
    const now = new Date();
    const timestamp = Date.parse(time);
    const elapsedMilliseconds = now.getTime() - timestamp;

    if (elapsedMilliseconds < 60000) {
        const seconds = Math.round(elapsedMilliseconds / 1000);
        return `${seconds}秒前`;
    }

    if (elapsedMilliseconds < 3600000) {
        const minutes = Math.round(elapsedMilliseconds / 60000);
        return `${minutes}分钟前`;
    }

    if (elapsedMilliseconds < 86400000) {
        const hours = Math.round(elapsedMilliseconds / 3600000);
        return `${hours}小时前`;
    }

    const days = Math.round(elapsedMilliseconds / 86400000);
    if (days < 31) {
        return `${days}天前`;
    }

    const months = Math.round(days / 30);
    return `${months}月前`;
}
