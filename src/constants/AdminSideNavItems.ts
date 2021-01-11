import CachedIcon from '@material-ui/icons/Cached';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import FeaturedPlayListIcon from '@material-ui/icons/FeaturedPlayList';
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';
import InboxIcon from '@material-ui/icons/Inbox';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import { EmailSentContainer } from '../features/Email/EmailSentContainer';
import { Error } from '../features/Error/Error';
import { EmailInboxContainer } from '../features/Email/EmailInboxContainer';
import { InquiriesContainer } from '../features/ContactUs/InquiriesContainer';
import { YourStoryUnassignedContainer } from '../features/YourStory/YourStoryUnassignedContainer';
import { YourStoryAssignedContainer } from '../features/YourStory/YourStoryAssignedContainer';

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
        component: YourStoryUnassignedContainer,
        route: 'unassigned',
    },
    {
        label: 'In Progress',
        icon: CachedIcon,
        component: YourStoryAssignedContainer,
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
    {
        label: 'Inquiries',
        icon: ContactSupportIcon,
        component: InquiriesContainer,
        route: 'Inquiries',
    },
];
