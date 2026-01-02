"use client"
import { Card, CardContent, CardHeader, CardTitle } from "../../../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../../../ui/avatar";
import { IEvent } from "@/src/types/event.interface";
import { Calendar, DollarSign, MapPin, Star, Users } from "lucide-react";
import Image from "next/image";
import { Badge } from "../../../ui/badge";
import { DateCell } from "../../../shared/cell/DateCell";
import { Button } from "@/src/components/ui/button";
import { useRouter } from "next/navigation";

interface EventContentProps {
    event: IEvent;
}

const EventContent = ({ event }: EventContentProps) => {
    const router = useRouter();
    const initials = event.host?.name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
        .slice(0, 2);

    
    const handleContinue = () => {
        if (event) {
            router.push(
                `/dashboard/join-event/${event.id}`
            );
        }
    };

    return (
        <div className="space-y-6">
            {/* Event Details Card */}
            <Card>
                <CardContent className="pt-6">
                    <div className="flex flex-col md:flex-row gap-6">
                        {/* host Profile Picture */}
                        <div className="flex justify-center md:justify-start">
                            <Avatar className="h-32 w-32">
                                {event.host?.profileImage ? (
                                    <AvatarImage
                                        src={
                                            typeof event.host.profileImage === "string"
                                                ? event.host.profileImage
                                                : undefined
                                        }
                                        alt={event.host?.name}
                                    />
                                ) : (
                                    <AvatarFallback className="text-3xl">
                                        {initials}
                                    </AvatarFallback>
                                )}
                            </Avatar>
                        </div>

                        {/* Host Info */}
                        <div className="flex-1 space-y-4">
                            <div>
                                <h1 className="text-3xl font-bold">{event.host?.name}</h1>
                                <p className="text-muted-foreground mt-1">
                                    {event.host?.bio}
                                </p>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Event Details */}
            {/* <div className="flex-1 overflow-y-auto px-6 pb-6"> */}

            <Card className="w-full  mx-auto pt-0 ">
                {/* Image */}
                {event.image && (
                    <div className="relative w-full h-70">
                        <Image
                            src={event.image}
                            alt={event.EventName}
                            fill
                            className="rounded-t-lg  object-cover"
                        />
                    </div>
                )}

                <CardHeader>
                    <div className="flex justify-between items-center">
                        <CardTitle className="text-2xl font-bold">
                            {event.EventName}
                        </CardTitle>

                        {/* Status */}
                        {event.status && (
                            <Badge
                                variant={
                                    event.status === "OPEN"
                                        ? "default"
                                        : event.status === "FULL"
                                            ? "destructive"
                                            : "outline"
                                }
                            >
                                {event.status}
                            </Badge>
                        )}
                    </div>

                    {/* Category */}

                    <div className="flex items-start gap-3">
                        <span>Category :</span>
                        <Badge
                            variant={event?.category ? "destructive" : "default"}
                            className="text-sm"
                        >
                            {event.category}
                        </Badge>
                    </div>

                </CardHeader>

                <CardContent className="space-y-4">

                    {/* Date */}
                    <div className="flex items-center gap-2 text-sm">
                        <Calendar className="w-4 h-4" />
                        <DateCell date={event.date} />
                    </div>

                    {/* Location */}
                    <div className="flex items-center gap-2 text-sm">
                        <MapPin className="w-4 h-4" />
                        <span>{event.location}</span>
                    </div>

                    {/* Participants */}
                    <div className="flex items-center gap-2 text-sm">
                        <Users className="w-4 h-4" />
                        <span>
                            {event.minParticipants} – {event.maxParticipants} participants
                        </span>
                    </div>

                    {/* Fee */}
                    <div className="flex items-center gap-1 text-sm">
                        <DollarSign className="w-4 h-4" />

                        <span>{event.fee === 0 ? "Free" : `${event.fee} BDT`}</span>
                    </div>

                    {/* Rating */}

                    {event.averageRating !== undefined && (
                        <div className="flex items-center gap-2 text-sm">
                            <span>Rating: </span>
                            <Star className="w-4 h-4 text-yellow-500" />
                            <span>{event.averageRating.toFixed(1)}5</span>
                        </div>
                    )}

                    {/* Description */}
                    <div>
                        <span>Description:  </span>
                        {event.description && (
                            <p className="text-sm text-muted-foreground">
                                {event.description}
                            </p>
                        )}
                    </div>
                    <div className="">
                        <Button className="flex-1" onClick={handleContinue}>
                            join event
                        </Button>

                    </div>

                </CardContent>
            </Card>
            {/* </div> */}

        </div>
    );
};

export default EventContent;