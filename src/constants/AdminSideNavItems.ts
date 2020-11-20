import CachedIcon from '@material-ui/icons/Cached';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import FeaturedPlayListIcon from '@material-ui/icons/FeaturedPlayList';
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';
import InboxIcon from '@material-ui/icons/Inbox';

export const AdminSideNavItems = [
    {
        label: 'Messages',
        icon: InboxIcon,
    },
    {
        label: 'Contacted',
        icon: ContactMailIcon,
    },
    {
        label: 'Unassigned',
        icon: HourglassEmptyIcon,
    },
    {
        label: 'In Progress',
        icon: CachedIcon,
    },
    {
        label: 'Finished',
        icon: CheckCircleIcon,
    },
    {
        label: 'Featured',
        icon: FeaturedPlayListIcon,
    },
];
