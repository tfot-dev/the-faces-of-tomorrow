import CachedIcon from '@material-ui/icons/Cached';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import FeaturedPlayListIcon from '@material-ui/icons/FeaturedPlayList';
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';
import InboxIcon from '@material-ui/icons/Inbox';
import { EmailSentContainer } from '../features/Email/EmailSentContainer';
import { Error } from '../features/Error/Error';
import { EmailInboxContainer } from '../features/Email/EmailInboxContainer';

export const AdminSideNavItems = [
    {
        label: 'Messages',
        icon: InboxIcon,
        component: EmailInboxContainer,
        route: 'messages',
    },
    {
        label: 'Contacted',
        icon: ContactMailIcon,
        component: EmailSentContainer,
        route: 'contacted',
    },
    {
        label: 'Unassigned',
        icon: HourglassEmptyIcon,
        component: Error,
        route: 'unassigned',
    },
    {
        label: 'In Progress',
        icon: CachedIcon,
        component: Error,
        route: 'inprogress',
    },
    {
        label: 'Finished',
        icon: CheckCircleIcon,
        component: Error,
        route: 'finished',
    },
    {
        label: 'Featured',
        icon: FeaturedPlayListIcon,
        component: Error,
        route: 'featured',
    },
];
