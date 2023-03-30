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
