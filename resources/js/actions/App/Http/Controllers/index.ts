import DiscoveryController from './DiscoveryController'
import Auth from './Auth'
import DashboardController from './DashboardController'
import AdminController from './AdminController'
import BookingController from './BookingController'
import StripePaymentController from './StripePaymentController'
import ReviewController from './ReviewController'
import GuideController from './GuideController'
import ExperienceController from './ExperienceController'
import Settings from './Settings'

const Controllers = {
    DiscoveryController: Object.assign(DiscoveryController, DiscoveryController),
    Auth: Object.assign(Auth, Auth),
    DashboardController: Object.assign(DashboardController, DashboardController),
    AdminController: Object.assign(AdminController, AdminController),
    BookingController: Object.assign(BookingController, BookingController),
    StripePaymentController: Object.assign(StripePaymentController, StripePaymentController),
    ReviewController: Object.assign(ReviewController, ReviewController),
    GuideController: Object.assign(GuideController, GuideController),
    ExperienceController: Object.assign(ExperienceController, ExperienceController),
    Settings: Object.assign(Settings, Settings),
}

export default Controllers