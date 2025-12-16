

import { DateCell } from "@/src/components/shared/cell/DateCell";
import { Badge } from "@/src/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/src/components/ui/dialog";
import { IEvent } from "@/src/types/event.interface";
import {
  Calendar,
  DollarSign,
  MapPin,
  Star,
  Users,
} from "lucide-react";
import Image from "next/image";

interface IDoctorViewDialogProps {
  open: boolean;
  onClose: () => void;
  event: IEvent | null;
}

const EventViewDetailDialog = ({
  open,
  onClose,
  event,
}: IDoctorViewDialogProps) => {
  if (!event) {
    return null;
  }
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="min-w-5xl max-h-[90vh] flex flex-col p-0">
        <DialogHeader className="px-6 pt-6 pb-4">
          <DialogTitle>Event Profile</DialogTitle>
        </DialogHeader>

        <div className="flex-1 overflow-y-auto px-6 pb-6">

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
            </CardContent>
          </Card>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EventViewDetailDialog;