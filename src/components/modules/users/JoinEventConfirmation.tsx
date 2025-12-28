"use client";
import { createJoinEvent } from "@/src/services/users/joinEvent.service";
import { IEvent } from "@/src/types/event.interface";
import {
    Calendar,
    CheckCircle2,
    Clock,
    Loader2,
    Stethoscope,
    User,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import { Separator } from "../../ui/separator";
import { Button } from "../../ui/button";
import { DateCell } from "../../shared/cell/DateCell";

interface JoinEventConfirmationProps {
    event: IEvent;

}

const JoinEventConfirmation = ({
    event,
}: JoinEventConfirmationProps) => {
    const router = useRouter();
    const [isBooking, setIsBooking] = useState(false);
    const [bookingSuccess, setBookingSuccess] = useState(false);

    const handleConfirmBooking = async () => {
        setIsBooking(true);

        try {
            const result = await createJoinEvent({
                eventId: event.id!,
            });

            if (result.success) {
                setBookingSuccess(true);
                toast.success("Event join successfully!");

                // Redirect after 2 seconds
                setTimeout(() => {
                    router.push("/dashboard/my-event");
                }, 2000);
            } else {
                toast.error(result.message || "Failed to join Event");
                setIsBooking(false);
            }
        } catch (error) {
            toast.error("An error occurred while booking the event");
            setIsBooking(false);
            console.error(error);
        }
    };

    if (bookingSuccess) {
        return (
            <div className="max-w-2xl mx-auto">
                <Card className="border-green-200 bg-green-50">
                    <CardContent className="pt-6">
                        <div className="text-center space-y-4">
                            <div className="flex justify-center">
                                <CheckCircle2 className="h-16 w-16 text-green-600" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-green-900">
                                    Event Confirmed!
                                </h2>
                                <p className="text-green-700 mt-2">
                                    Your Event has been successfully join Event
                                </p>
                            </div>
                            <p className="text-sm text-green-600">
                                Redirecting to your My Events...
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto space-y-6">
            {/* Header */}
            <div>
                <h1 className="text-3xl font-bold tracking-tight">
                    Confirm Event
                </h1>
                <p className="text-muted-foreground mt-2">
                    Review the details below and confirm your Event
                </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
                {/* Host Information Card */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <User className="h-5 w-5" />
                            Host Information
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div>
                            <p className="text-2xl font-semibold">{event.host?.name}</p>
                            <p className="text-muted-foreground">{event.host?.bio}</p>
                        </div>

                        <Separator />

                        {event.host?.interests &&
                            event.host?.interests.length > 0 && (
                                <div>
                                    <div className="flex items-center gap-2 mb-2">
                                        <Stethoscope className="h-4 w-4 text-muted-foreground" />
                                        <span className="text-sm font-medium">Interests</span>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {event.host?.interests?.map((interest, idx) => (
                                            <span
                                                key={idx}
                                                className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-md border border-blue-200"
                                            >
                                                {interest || "N/A"}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}

                        <Separator />

                        <div className="space-y-2">
                            {event.host?.email && (
                                <div className="flex justify-between">
                                    <span className="text-sm text-muted-foreground">
                                        Email:
                                    </span>
                                    <span className="text-sm font-medium">
                                        {event.host?.email}
                                    </span>
                                </div>
                            )}

                        </div>

                    </CardContent>
                </Card>

                {/* event Information Card */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Calendar className="h-5 w-5" />
                            Event Information
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="bg-linear-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6 space-y-4">
                            {/* Event Name */}
                            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                                <div className="">
                                    <span className="text-sm font-medium text-blue-900">
                                        EventName: {event.EventName}
                                    </span>

                                </div>
                            </div>

                            {/* fee */}
                            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                                <div className="flex justify-between items-center">
                                    <span className="text-sm font-medium text-blue-900">
                                        Event Fee :
                                    </span>
                                    <span className="text-xl font-bold text-blue-600">
                                        ${event.fee}
                                    </span>
                                </div>
                            </div>
                            
                            {/* Date */}
                            <Separator />

                            <div className="flex items-center gap-3">
                                <Calendar className="w-4 h-4" />
                                <div>
                                    <p className="text-sm text-muted-foreground">Date</p>
                                    <p className="text-lg font-semibold text-blue-900">
                                       <DateCell date={event.date} />

                                    </p>
                                </div>
                            </div>
                       

                        <Separator />

                        <div className="flex items-center gap-3">
                            <Clock className="h-5 w-5 text-blue-600" />
                            <div>
                                <p className="text-sm text-muted-foreground">Location</p>
                                <p className="text-lg font-semibold text-blue-900">
                                    {event.location}

                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-3 pt-4">
                        <h3 className="font-semibold text-sm">Important Information</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">

                            <li className="flex items-start gap-2">
                                <span className="text-blue-600 mt-0.5">•</span>
                                <span>
                                    You can cancel or reschedule from your Event page
                                </span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-600 mt-0.5">•</span>
                                <span>
                                    A confirmation will be sent to your registered email
                                </span>
                            </li>
                        </ul>
                    </div>

                    <Separator />

                    <div className="space-y-3 pt-2">
                        <Button
                            onClick={handleConfirmBooking}
                            disabled={isBooking}
                            className="w-full"
                            size="lg"
                        >
                            {isBooking ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    join...
                                </>
                            ) : (
                                <>
                                    <CheckCircle2 className="mr-2 h-4 w-4" />
                                    Confirm & join Event
                                </>
                            )}
                        </Button>

                        <Button
                            variant="outline"
                            onClick={() => router.back()}
                            disabled={isBooking}
                            className="w-full"
                        >
                            Go Back
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
        </div >
    );
};

export default JoinEventConfirmation;