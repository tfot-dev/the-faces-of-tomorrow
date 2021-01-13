import CachedIcon from '@material-ui/icons/Cached';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import FeaturedPlayListIcon from '@material-ui/icons/FeaturedPlayList';
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';
import InboxIcon from '@material-ui/icons/Inbox';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import { EmailSentContainer } from '../features/Email/EmailSentContainer';
import { EmailInboxContainer } from '../features/Email/EmailInboxContainer';
import { InquiriesContainer } from '../features/ContactUs/InquiriesContainer';
import { YourStoryUnassignedContainer } from '../features/YourStory/YourStoryUnassignedContainer';
import { YourStoryAssignedContainer } from '../features/YourStory/YourStoryAssignedContainer';
import { YourStoryFinishedContainer } from '../features/YourStory/YourStoryFinishedContainer';
import { YourStoryFeaturedContainer } from '../features/YourStory/YourStoryFeaturedContainer';
import { Routes } from './Routes';

export const AdminSideNavItems = [
    {
        label: 'Messages',
        icon: InboxIcon,
        component: EmailInboxContainer,
        route: Routes.Messages,
    },
    {
        label: 'Contacted',
        icon: ContactMailIcon,
        component: EmailSentContainer,
        route: Routes.Contacted,
    },
    {
        label: 'Unassigned',
        icon: HourglassEmptyIcon,
        component: YourStoryUnassignedContainer,
        route: Routes.Unassigned,
    },
    {
        label: 'In Progress',
        icon: CachedIcon,
        component: YourStoryAssignedContainer,
        route: Routes.InProgress,
    },
    {
        label: 'Finished',
        icon: CheckCircleIcon,
        component: YourStoryFinishedContainer,
        route: Routes.Finished,
    },
    {
        label: 'Featured',
        icon: FeaturedPlayListIcon,
        component: YourStoryFeaturedContainer,
        route: Routes.Featured,
    },
    {
        label: 'Inquiries',
        icon: ContactSupportIcon,
        component: InquiriesContainer,
        route: Routes.Inquiries,
    },
];
