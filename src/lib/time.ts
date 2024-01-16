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

    if (minutes < 60) {
        return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    } else if (hours < 24) {
        return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    } else if (days < 7) {
        return `${days} day${days > 1 ? 's' : ''} ago`;
    } else {
        return `More than a week ago`;
    }
};
