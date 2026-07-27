import { useState } from 'react';
import { Head, useForm } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { toast } from 'sonner';
import { Check, Info, User } from 'lucide-react';

interface Guide {
    id?: number;
    bio: string | null;
    specialties: string[];
    languages: string[];
    years_experience: number;
    license_path?: string | null;
    photo_url?: string | null;
    verification_status?: 'unverified' | 'pending' | 'verified' | 'rejected';
}

interface Props {
    guide: Guide | null;
}

export default function GuideProfile({ guide }: Props) {
    const [photoPreview, setPhotoPreview] = useState<string | null>(guide?.photo_url || null);
    
    const { data, setData, post, processing, errors } = useForm<{
        bio: string;
        specialties: string;
        languages: string;
        license: File | null;
        photo: File | null;
    }>({
        bio: guide?.bio || '',
        specialties: guide?.specialties?.join(', ') || '',
        languages: guide?.languages?.join(', ') || '',
        license: null,
        photo: null,
    });

    const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files ? e.target.files[0] : null;
        setData('photo', file);
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPhotoPreview(reader.result as string);
            };
            reader.readAsDataURL(file);
        } else {
            setPhotoPreview(guide?.photo_url || null);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post('/profile/guide', {
            forceFormData: true,
            onSuccess: () => toast.success('Profile updated successfully!'),
            onError: () => toast.error('Please check the form for errors.'),
        });
    };

    return (
        <AppLayout breadcrumbs={[{ title: 'Guide Profile', href: '/profile/guide' }]}>
            <Head title="Guide Profile Setup" />
            
            <div className="max-w-4xl mx-auto p-6 space-y-8">
                <div className="flex flex-col gap-2">
                    <h1 className="text-3xl font-bold tracking-tight">Complete Your Guide Profile</h1>
                    <p className="text-muted-foreground text-lg">
                        This information will be shown to tourists to help them choose you as their guide.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Verification Status Card */}
                    <Card className="border-none shadow-sm bg-white rounded-3xl overflow-hidden">
                        <CardHeader className="p-8 border-b border-zinc-50 flex flex-row items-center justify-between">
                            <div>
                                <CardTitle className="text-xl font-bold">Certification Status</CardTitle>
                                <CardDescription>Verify your identity and guide license to list tours</CardDescription>
                            </div>
                            <div>
                                {guide?.verification_status === 'verified' && (
                                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100 border-none font-bold px-4 py-1.5 rounded-full text-xs">
                                        CERTIFIED GUIDE
                                    </Badge>
                                )}
                                {guide?.verification_status === 'pending' && (
                                    <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100 border-none font-bold px-4 py-1.5 rounded-full text-xs animate-pulse">
                                        UNDER REVIEW
                                    </Badge>
                                )}
                                {guide?.verification_status === 'rejected' && (
                                    <Badge className="bg-red-100 text-red-800 hover:bg-red-100 border-none font-bold px-4 py-1.5 rounded-full text-xs">
                                        REJECTED - ACTION REQUIRED
                                    </Badge>
                                )}
                                {(!guide?.verification_status || guide?.verification_status === 'unverified') && (
                                    <Badge className="bg-zinc-100 text-zinc-800 hover:bg-zinc-100 border-none font-bold px-4 py-1.5 rounded-full text-xs">
                                        NOT CERTIFIED
                                    </Badge>
                                )}
                            </div>
                        </CardHeader>
                        <CardContent className="p-8 space-y-4">
                            {guide?.verification_status === 'verified' ? (
                                <div className="bg-green-50/50 text-green-800 border border-green-100 p-4 rounded-2xl flex items-start gap-3">
                                    <Check className="size-5 shrink-0 mt-0.5" />
                                    <div>
                                        <p className="font-bold">Your profile is certified!</p>
                                        <p className="text-sm text-green-700/90 mt-1">Tourists will see a verified badge next to your experiences, increasing bookings.</p>
                                    </div>
                                </div>
                            ) : guide?.verification_status === 'pending' ? (
                                <div className="bg-amber-50/50 text-amber-800 border border-amber-100 p-4 rounded-2xl flex items-start gap-3">
                                    <Info className="size-5 shrink-0 mt-0.5" />
                                    <div>
                                        <p className="font-bold">License submitted successfully</p>
                                        <p className="text-sm text-amber-700/90 mt-1">Our admin team is currently reviewing your professional guide license. We'll update your status shortly.</p>
                                    </div>
                                </div>
                            ) : guide?.verification_status === 'rejected' ? (
                                <div className="bg-red-50/50 text-red-800 border border-red-100 p-4 rounded-2xl flex items-start gap-3">
                                    <Info className="size-5 shrink-0 mt-0.5 text-red-600" />
                                    <div>
                                        <p className="font-bold">License Verification Failed</p>
                                        <p className="text-sm text-red-700/90 mt-1">Your submitted document did not meet our guidelines. Please upload a valid professional guide license below.</p>
                                    </div>
                                </div>
                            ) : (
                                <div className="bg-zinc-50/50 text-zinc-800 border border-zinc-100 p-4 rounded-2xl flex items-start gap-3">
                                    <Info className="size-5 shrink-0 mt-0.5" />
                                    <div>
                                        <p className="font-bold">Guiding without certification</p>
                                        <p className="text-sm text-zinc-600 mt-1">Please upload your official Rwanda Development Board (RDB) guide license or equivalent professional certification to get certified.</p>
                                    </div>
                                </div>
                            )}

                            {guide?.license_path && (
                                <div className="flex items-center justify-between p-4 bg-zinc-50 border border-zinc-100 rounded-2xl">
                                    <span className="text-sm font-medium text-zinc-700 flex items-center gap-2">
                                        Current Document: <a href={guide.license_path} target="_blank" rel="noreferrer" className="text-[#d93838] underline font-bold hover:text-[#b02e2e]">View Uploaded License</a>
                                    </span>
                                </div>
                            )}

                            <div className="grid gap-2 pt-2">
                                <Label htmlFor="license" className="font-bold text-zinc-700">Upload Professional License (PDF or Image)</Label>
                                <Input
                                    id="license"
                                    type="file"
                                    accept=".pdf,image/*"
                                    onChange={e => setData('license', e.target.files ? e.target.files[0] : null)}
                                    className="file:bg-zinc-100 file:text-zinc-800 file:border-none file:rounded-lg file:font-semibold hover:file:bg-zinc-200 cursor-pointer"
                                />
                                {errors.license && <p className="text-sm text-red-500 font-medium">{errors.license}</p>}
                                <p className="text-xs text-muted-foreground">Supported formats: PDF, JPG, PNG. Max file size: 5MB.</p>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Profile Photo Card */}
                    <Card className="border-none shadow-sm bg-white rounded-3xl overflow-hidden">
                        <CardHeader className="p-8 border-b border-zinc-50">
                            <CardTitle className="text-xl font-bold">Profile Photo</CardTitle>
                            <CardDescription>Upload a professional profile photo. This helps tourists recognize you.</CardDescription>
                        </CardHeader>
                        <CardContent className="p-8 flex flex-col md:flex-row items-center gap-6">
                            <div className="relative group">
                                <Avatar className="size-28 border-4 border-zinc-100 shadow-md">
                                    <AvatarImage src={photoPreview || undefined} alt="Guide Profile Photo" className="object-cover" />
                                    <AvatarFallback className="bg-zinc-100 text-zinc-400">
                                        <User className="size-12 stroke-[1.5]" />
                                    </AvatarFallback>
                                </Avatar>
                            </div>
                            <div className="grid gap-2 w-full max-w-md">
                                <Label htmlFor="photo" className="font-bold text-zinc-700">Choose Photo (PNG, JPG, WEBP)</Label>
                                <Input
                                    id="photo"
                                    type="file"
                                    accept="image/*"
                                    onChange={handlePhotoChange}
                                    className="file:bg-zinc-100 file:text-zinc-800 file:border-none file:rounded-lg file:font-semibold hover:file:bg-zinc-200 cursor-pointer"
                                />
                                {errors.photo && <p className="text-sm text-red-500 font-medium">{errors.photo}</p>}
                                <p className="text-xs text-muted-foreground">Supported formats: JPG, PNG, WEBP. Max file size: 2MB.</p>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="border-t-4 border-[#d93838]">
                        <CardHeader>
                            <CardTitle>Professional Bio</CardTitle>
                            <CardDescription>
                                Tell travelers about yourself, your passion for Rwanda, and your guiding style.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="grid gap-2">
                                <Label htmlFor="bio">Your Story</Label>
                                <Textarea
                                    id="bio"
                                    placeholder="I have been a guide for 10 years, specializing in bird watching and the history of Kigali..."
                                    className="min-h-[150px] text-base"
                                    value={data.bio}
                                    onChange={e => setData('bio', e.target.value)}
                                />
                                {errors.bio && <p className="text-sm text-red-500">{errors.bio}</p>}
                            </div>
                        </CardContent>
                    </Card>

                    <div className="grid gap-6 md:grid-cols-2">
                        <Card>
                            <CardHeader>
                                <CardTitle>Experience & Languages</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="grid gap-2">
                                    <Label htmlFor="languages">Languages (comma separated)</Label>
                                    <Input
                                        id="languages"
                                        placeholder="English, French, Kinyarwanda, Swahili"
                                        value={data.languages}
                                        onChange={e => setData('languages', e.target.value)}
                                    />
                                    <p className="text-xs text-muted-foreground flex items-center gap-1">
                                        <Info className="size-3" /> List the languages you can fluently speak.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Specialties</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="grid gap-2">
                                    <Label htmlFor="specialties">Specialties (comma separated)</Label>
                                    <Input
                                        id="specialties"
                                        placeholder="Hiking, Gorilla Trekking, City Tours, Coffee Tasting"
                                        value={data.specialties}
                                        onChange={e => setData('specialties', e.target.value)}
                                    />
                                    <p className="text-xs text-muted-foreground flex items-center gap-1">
                                        <Info className="size-3" /> What makes your tours special?
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="flex items-center justify-end gap-4">
                        <Button
                            type="submit"
                            className="bg-[#d93838] hover:bg-[#b02e2e] px-8 h-11 text-lg font-bold"
                            disabled={processing}
                        >
                            {processing ? 'Saving...' : 'Save Profile'}
                        </Button>
                    </div>
                </form>
            </div>
        </AppLayout>
    );
}
