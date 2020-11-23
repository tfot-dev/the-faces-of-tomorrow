import CachedIcon from '@material-ui/icons/Cached';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import FeaturedPlayListIcon from '@material-ui/icons/FeaturedPlayList';
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';
import InboxIcon from '@material-ui/icons/Inbox';
import { EmailContainer } from '../features/Email/EmailContainer';
import { EmailSentContainer } from '../features/Email/EmailSentContainer';

export const AdminSideNavItems = [
    {
        label: 'Messages',
        icon: InboxIcon,
        component: EmailContainer,
    },
    {
        label: 'Contacted',
        icon: ContactMailIcon,
        component: EmailSentContainer,
    },
    {
        label: 'Unassigned',
        icon: HourglassEmptyIcon,
        component: EmailContainer,
    },
    {
        label: 'In Progress',
        icon: CachedIcon,
        component: EmailContainer,
    },
    {
        label: 'Finished',
        icon: CheckCircleIcon,
        component: EmailContainer,
    },
    {
        label: 'Featured',
        icon: FeaturedPlayListIcon,
        component: EmailContainer,
    },
];
