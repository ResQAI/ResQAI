import type { StaticImageData } from 'next/image';

export type chatUser = {
    id: number;
    name: string;
    avatar: StaticImageData | null;
}