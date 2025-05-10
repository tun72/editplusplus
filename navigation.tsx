import {createSharedPathnamesNavigation} from 'next-intl/navigation'

export const locales = ['en', 'mm'] as const;

export const {Link, useRouter} = createSharedPathnamesNavigation({locales});