import * as React from 'react';
import { Head, Link, router } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { toast } from 'sonner';
import { Users, MapPin, CreditCard, Calendar, TrendingUp, ShieldCheck, ArrowRight, FileText, Check, X, ExternalLink, Bell } from 'lucide-react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface Stats {
    total_users: number;
    total_guides: number;
    total_experiences: number;
    total_bookings: number;
    total_revenue: number;
}

interface Booking {
    id: number;
    total_price: string;
    payment_status: string;
    booking_date: string;
    experience: {
        title: string;
    };
    user: {
        name: string;
    };
}

interface User {
    id: number;
    name: string;
    email: string;
    role: string;
    created_at: string;
}

interface Guide {
    id: number;
    user_id: number;
    bio: string | null;
    photo_url: string | null;
    languages: string[];
    specialties: string[];
    national_id: string;
    is_verified: boolean;
    license_path: string | null;
    verification_status: 'unverified' | 'pending' | 'verified' | 'rejected';
    created_at: string;
    user: {
        name: string;
        email: string;
    };
}

interface AdminNotification {
    id: string;
    data: {
        title: string;
        message: string;
        type: string;
        link: string | null;
    };
    read_at: string | null;
    created_at: string;
}

interface Props {
    stats: Stats;
    recentBookings: Booking[];
    recentUsers: User[];
    guides: Guide[];
    notifications: AdminNotification[];
}

export default function AdminDashboard({ stats, recentBookings, recentUsers, guides, notifications = [] }: Props) {
    const [activeTab, setActiveTab] = React.useState<'overview' | 'guides'>('overview');
    const [guideFilter, setGuideFilter] = React.useState<'all' | 'pending' | 'verified' | 'rejected'>('all');

    const handleVerify = (guideId: number) => {
        router.post(`/admin/guides/${guideId}/verify`, {}, {
            onSuccess: () => toast.success('Guide certified successfully!'),
        });
    };

    const handleReject = (guideId: number) => {
        router.post(`/admin/guides/${guideId}/reject`, {}, {
            onSuccess: () => toast.success('Guide certification rejected.'),
        });
    };

    const handleMarkAsRead = (id: string, link: string | null) => {
        router.patch(`/admin/notifications/${id}/read`, {}, {
            preserveScroll: true,
            onSuccess: () => {
                if (link) {
                    router.visit(link);
                }
            }
        });
    };

    const filteredGuides = guides.filter(guide => {
        if (guideFilter === 'all') return true;
        return guide.verification_status === guideFilter;
    });

    return (
        <AppLayout breadcrumbs={[{ title: 'Admin Control', href: '/admin' }]}>
            <Head title="Admin Dashboard" />
            
            <div className="flex h-full flex-1 flex-col gap-8 p-8 overflow-y-auto bg-zinc-50">
                {/* Header Section */}
                <div className="flex items-center justify-between">
                    <div className="space-y-1">
                        <h1 className="text-4xl font-black tracking-tighter text-zinc-900">PLATFORM OVERVIEW</h1>
                        <p className="text-zinc-500 font-medium">Manage the Authentic Rwanda ecosystem from a single screen.</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="flex bg-zinc-200/60 p-1 rounded-xl">
                            <button
                                onClick={() => setActiveTab('overview')}
                                className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${
                                    activeTab === 'overview'
                                        ? 'bg-white text-zinc-900 shadow-sm'
                                        : 'text-zinc-500 hover:text-zinc-900'
                                }`}
                            >
                                Overview
                            </button>
                            <button
                                onClick={() => setActiveTab('guides')}
                                className={`px-4 py-2 rounded-lg text-sm font-bold transition-all flex items-center gap-1.5 ${
                                    activeTab === 'guides'
                                        ? 'bg-white text-zinc-900 shadow-sm'
                                        : 'text-zinc-500 hover:text-zinc-900'
                                }`}
                            >
                                Guide Verifications
                                {guides.filter(g => g.verification_status === 'pending').length > 0 && (
                                    <span className="size-2 rounded-full bg-amber-500 animate-pulse" />
                                )}
                            </button>
                        </div>
                        <Badge className="bg-zinc-900 text-white px-4 py-1.5 rounded-full text-xs font-bold tracking-widest">
                            ADMIN MODE
                        </Badge>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline" size="icon" className="relative rounded-full border-zinc-200">
                                    <Bell className="size-4 text-zinc-600" />
                                    {notifications.filter(n => !n.read_at).length > 0 && (
                                        <span className="absolute top-0 right-0 flex size-2.5">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                            <span className="relative inline-flex rounded-full size-2.5 bg-[#d93838]"></span>
                                        </span>
                                    )}
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="w-80">
                                <DropdownMenuLabel className="font-bold">Notifications</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <div className="max-h-[300px] overflow-y-auto">
                                    {notifications.length === 0 ? (
                                        <div className="p-4 text-center text-sm text-zinc-500">No notifications yet.</div>
                                    ) : (
                                        notifications.map((notification) => (
                                            <DropdownMenuItem
                                                key={notification.id}
                                                className={`flex flex-col items-start p-3 gap-1 cursor-pointer ${!notification.read_at ? 'bg-zinc-50' : ''}`}
                                                onClick={() => handleMarkAsRead(notification.id, notification.data.link)}
                                            >
                                                <div className="flex items-center justify-between w-full">
                                                    <span className="font-bold text-sm text-zinc-900">{notification.data.title}</span>
                                                    {!notification.read_at && <span className="size-2 rounded-full bg-[#d93838]" />}
                                                </div>
                                                <p className="text-xs text-zinc-500 line-clamp-2">{notification.data.message}</p>
                                                <span className="text-[10px] text-zinc-400 font-medium">
                                                    {new Date(notification.created_at).toLocaleString()}
                                                </span>
                                            </DropdownMenuItem>
                                        ))
                                    )}
                                </div>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>

                {activeTab === 'overview' ? (
                    <>
                        {/* Stat Cards */}
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                            <Card className="border-none shadow-sm bg-white rounded-3xl">
                                <CardHeader className="flex flex-row items-center justify-between pb-2">
                                    <CardTitle className="text-sm font-bold text-zinc-400 uppercase tracking-widest">Total Revenue</CardTitle>
                                    <TrendingUp className="size-4 text-green-500" />
                                </CardHeader>
                                <CardContent>
                                    <div className="text-3xl font-black text-zinc-900">${stats.total_revenue}</div>
                                    <p className="text-xs text-zinc-500 mt-1">Confirmed MoMo payments</p>
                                </CardContent>
                            </Card>

                            <Card className="border-none shadow-sm bg-white rounded-3xl">
                                <CardHeader className="flex flex-row items-center justify-between pb-2">
                                    <CardTitle className="text-sm font-bold text-zinc-400 uppercase tracking-widest">Active Users</CardTitle>
                                    <Users className="size-4 text-[#d93838]" />
                                </CardHeader>
                                <CardContent>
                                    <div className="text-3xl font-black text-zinc-900">{stats.total_users}</div>
                                    <p className="text-xs text-zinc-500 mt-1">{stats.total_guides} registered guides</p>
                                </CardContent>
                            </Card>

                            <Card className="border-none shadow-sm bg-white rounded-3xl">
                                <CardHeader className="flex flex-row items-center justify-between pb-2">
                                    <CardTitle className="text-sm font-bold text-zinc-400 uppercase tracking-widest">Tours Listed</CardTitle>
                                    <MapPin className="size-4 text-[#d93838]" />
                                </CardHeader>
                                <CardContent>
                                    <div className="text-3xl font-black text-zinc-900">{stats.total_experiences}</div>
                                    <p className="text-xs text-zinc-500 mt-1">Across all categories</p>
                                </CardContent>
                            </Card>

                            <Card className="border-none shadow-sm bg-white rounded-3xl">
                                <CardHeader className="flex flex-row items-center justify-between pb-2">
                                    <CardTitle className="text-sm font-bold text-zinc-400 uppercase tracking-widest">Bookings</CardTitle>
                                    <Calendar className="size-4 text-[#d93838]" />
                                </CardHeader>
                                <CardContent>
                                    <div className="text-3xl font-black text-zinc-900">{stats.total_bookings}</div>
                                    <p className="text-xs text-zinc-500 mt-1">New adventures scheduled</p>
                                </CardContent>
                            </Card>
                        </div>

                        <div className="grid gap-8 lg:grid-cols-3">
                            {/* Recent Bookings Table */}
                            <Card className="lg:col-span-2 border-none shadow-sm bg-white rounded-3xl overflow-hidden">
                                <CardHeader className="p-8 border-b border-zinc-50">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <CardTitle className="text-xl font-bold">Recent Bookings</CardTitle>
                                            <CardDescription>Live feed of platform activity</CardDescription>
                                        </div>
                                        <Button variant="ghost" size="sm" className="text-[#d93838] font-bold">View All <ArrowRight className="ml-2 size-4" /></Button>
                                    </div>
                                </CardHeader>
                                <CardContent className="p-0">
                                    <table className="w-full text-left text-sm">
                                        <thead className="bg-zinc-50 text-zinc-400 uppercase text-[10px] font-bold tracking-widest">
                                            <tr>
                                                <th className="px-8 py-4">Tourist</th>
                                                <th className="px-8 py-4">Experience</th>
                                                <th className="px-8 py-4">Amount</th>
                                                <th className="px-8 py-4">Status</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-zinc-50">
                                            {recentBookings.map((booking) => (
                                                <tr key={booking.id} className="hover:bg-zinc-50 transition-colors">
                                                    <td className="px-8 py-5 font-bold text-zinc-900">{booking.user.name}</td>
                                                    <td className="px-8 py-5 text-zinc-600">{booking.experience.title}</td>
                                                    <td className="px-8 py-5 font-black text-zinc-900">${booking.total_price}</td>
                                                    <td className="px-8 py-5">
                                                        <Badge className={booking.payment_status === 'paid' ? 'bg-green-100 text-green-700 border-none' : 'bg-amber-100 text-amber-700 border-none'}>
                                                            {booking.payment_status.toUpperCase()}
                                                        </Badge>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </CardContent>
                            </Card>

                            {/* Recent Users List */}
                            <Card className="border-none shadow-sm bg-white rounded-3xl overflow-hidden">
                                <CardHeader className="p-8 border-b border-zinc-50">
                                    <CardTitle className="text-xl font-bold">New Signups</CardTitle>
                                    <CardDescription>Latest members of the community</CardDescription>
                                </CardHeader>
                                <CardContent className="p-8 space-y-6">
                                    {recentUsers.map((user) => (
                                        <div key={user.id} className="flex items-center gap-4">
                                            <div className="size-10 rounded-full bg-[#d93838] flex items-center justify-center text-white font-bold">
                                                {user.name.charAt(0)}
                                            </div>
                                            <div className="flex-1">
                                                <p className="font-bold text-zinc-900 leading-none">{user.name}</p>
                                                <p className="text-xs text-zinc-500 mt-1">{user.email}</p>
                                            </div>
                                            <Badge variant="outline" className="text-[10px] uppercase font-bold">
                                                {user.role}
                                            </Badge>
                                        </div>
                                    ))}
                                </CardContent>
                            </Card>
                        </div>
                    </>
                ) : (
                    /* Guides Verification Tab */
                    <Card className="border-none shadow-sm bg-white rounded-3xl overflow-hidden">
                        <CardHeader className="p-8 border-b border-zinc-50 flex flex-col md:flex-row md:items-center justify-between gap-4">
                            <div>
                                <CardTitle className="text-xl font-bold">Guide Certification Center</CardTitle>
                                <CardDescription>Review guide licenses and verify profiles to maintain quality.</CardDescription>
                            </div>
                            
                            {/* Filter Buttons */}
                            <div className="flex items-center gap-2 bg-zinc-100 p-1 rounded-xl text-xs font-bold">
                                {(['all', 'pending', 'verified', 'rejected'] as const).map(filter => (
                                    <button
                                        key={filter}
                                        onClick={() => setGuideFilter(filter)}
                                        className={`px-3 py-1.5 rounded-lg uppercase tracking-wider transition-all ${
                                            guideFilter === filter
                                                ? 'bg-white text-zinc-900 shadow-sm'
                                                : 'text-zinc-500 hover:text-zinc-900'
                                        }`}
                                    >
                                        {filter}
                                    </button>
                                ))}
                            </div>
                        </CardHeader>
                        
                        <CardContent className="p-0">
                            {filteredGuides.length > 0 ? (
                                <table className="w-full text-left text-sm">
                                    <thead className="bg-zinc-50 text-zinc-400 uppercase text-[10px] font-bold tracking-widest">
                                        <tr>
                                            <th className="px-8 py-4">Guide</th>
                                            <th className="px-8 py-4">Specialties & Languages</th>
                                            <th className="px-8 py-4">National ID</th>
                                            <th className="px-8 py-4">License Doc</th>
                                            <th className="px-8 py-4">Status</th>
                                            <th className="px-8 py-4 text-right">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-zinc-50">
                                        {filteredGuides.map((guide) => (
                                            <tr key={guide.id} className="hover:bg-zinc-50/50 transition-colors">
                                                <td className="px-8 py-5">
                                                    <div className="flex items-center gap-3">
                                                        <Avatar className="size-10 border border-zinc-200 shadow-sm shrink-0">
                                                            <AvatarImage src={guide.photo_url || undefined} alt={guide.user.name} className="object-cover" />
                                                            <AvatarFallback className="bg-zinc-100 text-zinc-400 font-bold">
                                                                {guide.user.name.charAt(0)}
                                                            </AvatarFallback>
                                                        </Avatar>
                                                        <div>
                                                            <p className="font-bold text-zinc-900 leading-tight">{guide.user.name}</p>
                                                            <p className="text-xs text-zinc-500 mt-0.5">{guide.user.email}</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-8 py-5 max-w-[250px]">
                                                    <div className="space-y-1">
                                                        <p className="text-xs text-zinc-600 truncate">
                                                            <strong className="text-zinc-900 font-semibold">Specialties:</strong> {guide.specialties?.join(', ') || 'None'}
                                                        </p>
                                                        <p className="text-xs text-zinc-600 truncate">
                                                            <strong className="text-zinc-900 font-semibold">Languages:</strong> {guide.languages?.join(', ') || 'None'}
                                                        </p>
                                                    </div>
                                                </td>
                                                <td className="px-8 py-5 font-mono text-xs font-semibold text-zinc-600">{guide.national_id}</td>
                                                <td className="px-8 py-5">
                                                    {guide.license_path ? (
                                                        <a
                                                            href={guide.license_path}
                                                            target="_blank"
                                                            rel="noreferrer"
                                                            className="inline-flex items-center gap-1 text-xs text-[#d93838] font-bold hover:underline"
                                                        >
                                                            <FileText className="size-4" /> View License <ExternalLink className="size-3" />
                                                        </a>
                                                    ) : (
                                                        <span className="text-zinc-400 text-xs italic">No document</span>
                                                    )}
                                                </td>
                                                <td className="px-8 py-5">
                                                    {guide.verification_status === 'verified' && (
                                                        <Badge className="bg-green-100 text-green-700 hover:bg-green-100 border-none font-bold">
                                                            VERIFIED
                                                        </Badge>
                                                    )}
                                                    {guide.verification_status === 'pending' && (
                                                        <Badge className="bg-amber-100 text-amber-700 hover:bg-amber-100 border-none font-bold animate-pulse">
                                                            PENDING REVIEW
                                                        </Badge>
                                                    )}
                                                    {guide.verification_status === 'rejected' && (
                                                        <Badge className="bg-red-100 text-red-700 hover:bg-red-100 border-none font-bold">
                                                            REJECTED
                                                        </Badge>
                                                    )}
                                                    {(!guide.verification_status || guide.verification_status === 'unverified') && (
                                                        <Badge className="bg-zinc-100 text-zinc-700 hover:bg-zinc-100 border-none font-bold">
                                                            UNVERIFIED
                                                        </Badge>
                                                    )}
                                                </td>
                                                <td className="px-8 py-5 text-right">
                                                    <div className="flex items-center justify-end gap-2">
                                                        {guide.verification_status !== 'verified' && (
                                                            <Button
                                                                size="sm"
                                                                onClick={() => handleVerify(guide.id)}
                                                                className="bg-green-600 hover:bg-green-700 text-white font-bold h-8 text-xs flex items-center gap-1 rounded-xl"
                                                            >
                                                                <Check className="size-3.5" /> Certify
                                                            </Button>
                                                        )}
                                                        {guide.verification_status !== 'rejected' && (
                                                            <Button
                                                                size="sm"
                                                                onClick={() => handleReject(guide.id)}
                                                                variant="ghost"
                                                                className="text-red-600 hover:text-red-700 hover:bg-red-50 font-bold h-8 text-xs flex items-center gap-1 rounded-xl"
                                                            >
                                                                <X className="size-3.5" /> Reject
                                                            </Button>
                                                        )}
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            ) : (
                                <div className="text-center py-16 space-y-2">
                                    <ShieldCheck className="size-10 text-zinc-300 mx-auto" />
                                    <p className="text-zinc-500 font-bold">No guides match the selected filter.</p>
                                </div>
                            )}
                        </CardContent>
                    </Card>
                )}

                {/* Admin Footer Branding */}
                <div className="mt-auto pt-10 text-center">
                    <div className="flex items-center justify-center gap-2 text-zinc-300">
                        <ShieldCheck className="size-4" />
                        <span className="text-[10px] font-bold uppercase tracking-widest">Secure Admin Control Panel — Authentic Rwanda 2026</span>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
