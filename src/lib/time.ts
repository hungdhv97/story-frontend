export const calculateTimeDifference = (accessedAt: string) => {
    const now = new Date();
    const accessedTime = new Date(accessedAt);
    const differenceInMs = now.getTime() - accessedTime.getTime();
    return formatTimeDifference(differenceInMs);
};

const formatTimeDifference = (differenceInMs: number): string => {
    const minutes = Math.floor(differenceInMs / 60000);
    const hours = Math.floor(differenceInMs / 3600000);
    const days = Math.floor(differenceInMs / (3600000 * 24));
    if (minutes == 0) {
        return 'Vài giây trước';
    } else if (minutes < 60) {
        return `${minutes} phút trước`;
    } else if (hours < 24) {
        return `${hours} giờ trước`;
    } else if (days < 7) {
        return `${days} ngày trước`;
    } else if (days < 30) {
        return `1 tháng trước`;
    } else {
        return 'Hơn 1 tháng trước';
    }
};
