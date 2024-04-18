import config from '~/config';
import HeaderOnly from '~/layouts/HeaderOnly';

import Home from '~/pages/Home';
import CourseDetail from '~/pages/CourseDetail';
import Watch from '~/pages/Watch';
import Blog from '~/pages/Blog';
import BlogDetail from '~/pages/BlogDetail';
import RoadMap from '~/pages/RoadMap';
import RoadMapDetail from '~/pages/RoadMapDetail';
import Search from '~/pages/Search/Search';
import Message from '~/pages/Message';
import Profile from '~/pages/Profile';
import Setting from '~/pages/Setting';
import Personal from '~/pages/Setting/Personal';
import Security from '~/pages/Setting/Security';
import NotFound from '~/pages/NotFound';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.search, component: Search, layout: HeaderOnly },
    { path: config.routes.detail, component: CourseDetail },
    { path: config.routes.watch, component: Watch, layout: null },
    { path: config.routes.roadMap, component: RoadMap },
    { path: config.routes.roadMapDetail, component: RoadMapDetail },
    { path: config.routes.blog, component: Blog },
    { path: config.routes.blogDetail, component: BlogDetail },
    { path: config.routes.profile, component: Profile, layout: HeaderOnly },
    {
        path: config.routes.setting.path,
        component: Setting,
        layout: HeaderOnly,
        children: [
            { path: config.routes.setting.personal, component: Personal },
            { path: config.routes.setting.security, component: Security },
        ],
    },
    {
        path: config.routes.post.path,
        component: Setting,
        layout: HeaderOnly,
        children: [
            { path: config.routes.post.drafts, component: Personal },
            { path: config.routes.post.published, component: Security },
        ],
    },
    { path: config.routes.message, component: Message },
    { path: config.routes.notFound, component: NotFound, layout: null },
];

export { publicRoutes };
