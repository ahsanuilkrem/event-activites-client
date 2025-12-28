
"use client";

import { IJoinEvent, PaymentStatus } from "@/src/types/event.interface";
import {
  AlertCircle,
  Calendar,
  Clapperboard,
  Clock,
  Star,
  User2,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "../../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import { Separator } from "../../ui/separator";
import { Badge } from "../../ui/badge";
import ReviewDialog from "./ReviewDialog";
import { DateCell } from "../../shared/cell/DateCell";

interface JoinEventDetailProps {
  event: IJoinEvent;
}

const JoinEventDetails = ({ event }: JoinEventDetailProps) => {
  const router = useRouter();
  const [showReviewDialog, setShowReviewDialog] = useState(false);

  if (!event) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-muted-foreground">Loading event details...</p>
      </div>
    );
  }

  const isCompleted = event.status === PaymentStatus.SUCCESS;
  const canReview = isCompleted && !event.review;

  return (

    <div className="max-w-5xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Event Details
          </h1>
          <p className="text-muted-foreground mt-2">
            Complete information about your event
          </p>
        </div>
        <Button variant="outline" onClick={() => router.back()}>
          Back
        </Button>
      </div>

      {/* Review Notification - Only show if can review (completed but no review) */}
      {canReview && (
        <Card className="border-amber-200 bg-amber-50">
          <CardContent className="pt-6">
            <div className="flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-amber-600 mt-0.5" />
              <div className="flex-1">
                <h3 className="font-semibold text-amber-900">
                  Review This event
                </h3>
                <p className="text-sm text-amber-700 mt-1">
                  Your event has been completed. Share your experience by
                  leaving a review for Event  {event.event.EventName}.
                </p>
                <Button
                  onClick={() => setShowReviewDialog(true)}
                  className="mt-3"
                  size="sm"
                >
                  Write a Review
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Cannot Review Yet - Only show if not completed and no review */}
      {!isCompleted && !event.review && (
        <Card className="border-blue-200 bg-blue-50">
          <CardContent className="pt-6">
            <div className="flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5" />
              <div>
                <h3 className="font-semibold text-blue-900">
                  Review Not Available Yet
                </h3>
                <p className="text-sm text-blue-700 mt-1">
                  You can review this event after it has been completed.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Doctor Information */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Event Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="text-2xl font-semibold">
                {event.event.EventName || "N/A"}
              </p>
              <p className="text-muted-foreground">
                {event.event.description || "event"}
              </p>
            </div>

            <Separator />

            {event.event.category &&
              event.event.category.length > 0 && (
                <>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Clapperboard className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm font-medium">Category</span>
                    </div>
                    <div className="flex flex-wrap gap-2">

                      <Badge variant="secondary">
                        {event.event.category || "N/A"}
                      </Badge>

                    </div>
                  </div>
                  <Separator />
                </>
              )}

            <div className="space-y-2">
              {event.event.date && (
                <div className="flex justify-between text-sm">
                  <div className="flex gap-1">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Event Join Date:</span>
                  </div>
                  <span className="font-medium">
                    <DateCell date={event.event.date} />
                  </span>
                </div>
              )}

              {event.event.location !== undefined && (
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Location:</span>
                  <span className="font-medium">
                    {event.event.location}
                  </span>
                </div>
              )}

              {event.event.host?.email !== undefined && (
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Host Email:</span>
                  <span className="font-medium">
                    {event.event.host?.email}
                  </span>
                </div>
              )}

              {event.event.status && (
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Status:</span>
                  <span className="font-medium">
                    {event.event.status}
                  </span>
                </div>
              )}
            </div>

            <Separator />

            <div className="space-y-2">
              {event.event.maxParticipants && (
                <div className="flex items-center gap-2 text-sm">
                  <User2 className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm font-medium text-blue-900">
                    MaxParticipants:
                  </span>
                  <span>{event.event.maxParticipants}</span>
                </div>
              )}

              {event.event.minParticipants && (
                <div className="flex items-start gap-2 text-sm">
                  <User2 className="h-4 w-4 text-muted-foreground mt-0.5" />
                  <span className="text-sm font-medium text-blue-900">
                    MinParticipants:
                  </span>
                  <span>{event.event.minParticipants}</span>
                </div>
              )}
            </div>

            {event.event.fee !== undefined && (
              <>
                <Separator />
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-blue-900">
                      Event Fee
                    </span>
                    <span className="text-xl font-bold text-blue-600">
                      ${event.event.fee}

                    </span>
                  </div>
                </div>
              </>
            )}
          </CardContent>
        </Card>

        {/* Appointment Details */}
        <div className="space-y-6 lg:col-span-1">
          {/* Status */}
          <Card>
            <CardHeader>
              <CardTitle>Payment Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">
                  Current Status
                </span>
                <Badge variant="secondary">
                   {event.status}
                </Badge>
               
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Review Section - Full Width Below */}
      {event.review && (
        <Card className="border-yellow-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-yellow-700">
              <Star className="h-5 w-5 fill-yellow-600" />
              Your Review
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-yellow-50 rounded-lg p-4 space-y-3">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`h-5 w-5 ${star <= event.review!.rating
                        ? "fill-yellow-500 text-yellow-500"
                        : "text-gray-300"
                      }`}
                  />
                ))}
                <span className="ml-2 text-sm font-medium text-yellow-900">
                  {event.review.rating}/5
                </span>
              </div>

              {event.review.comment && (
                <div>
                  <p className="text-sm text-yellow-900 font-medium mb-1">
                    Comment:
                  </p>
                  <p className="text-sm text-yellow-800">
                    {event.review.comment}
                  </p>
                </div>
              )}

              <p className="text-xs text-yellow-600 italic">
                Reviews cannot be edited or deleted once submitted.
              </p>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Review Dialog */}
      {canReview && (
        <ReviewDialog
          isOpen={showReviewDialog}
          onClose={() => setShowReviewDialog(false)}
          joinEventId={event.id}
          EventName={event.event.EventName || "the event"}
        />
      )}
    </div>
  );
};

export default JoinEventDetails;