'use client'

export default function Clock() {
    const now = new Date();
    return (
        <span>
            {now.toDateString()} {now.toTimeString()}
        </span>
    );
}