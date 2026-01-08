
"use client";

import { EventStatus, IJoinEvent, PaymentStatus } from "@/src/types/event.interface";
import {
  Calendar,
  CreditCard,
  Eye,
  Heart,
  Loader2,
  MapPin,
  Users,
} from "lucide-react";
import Link from "next/link";
import { Card, CardContent, } from "../../ui/card";
import { Button } from "../../ui/button";
import Image from "next/image";
import { motion } from "framer-motion";
import { DateCell } from "../../shared/cell/DateCell";
import { useState } from "react";
import { initiatePayment } from "@/src/services/payment/payment.service";
import { toast } from "sonner";

interface JoinEventListProps {
  events: IJoinEvent[];
}

const JoinEventList = ({ events }: JoinEventListProps) => {

  const [processingPaymentId, setProcessingPaymentId] = useState<string | null>(
    null
  );

  const handlePayNow = async (joinEventId: string) => {
    setProcessingPaymentId(joinEventId);
    try {
      const result = await initiatePayment(joinEventId);

      if (result.success && result.data?.paymentUrl) {
        toast.success("Redirecting to payment...");
        // Store return URL before redirecting to payment
        sessionStorage.setItem(
          "paymentReturnUrl",
          "/dashboard/my-event"
        );
        window.location.replace(result.data.paymentUrl);
      } else {
        toast.error(result.message || "Failed to initiate payment");
        setProcessingPaymentId(null);
      }
    } catch (error) {
      toast.error("An error occurred while initiating payment");
      setProcessingPaymentId(null);
      console.error(error);
    }
  };


  if (events.length === 0) {
    return (
      <Card className="border-dashed">
        <CardContent className="flex flex-col items-center justify-center py-12">
          <Calendar className="h-12 w-12 text-muted-foreground mb-4" />
          <h3 className="text-lg font-semibold mb-2">No Join Events Yet</h3>
          <p className="text-muted-foreground text-center max-w-sm">
            You haven&apos;t join any events. Browse our events and
            join your first consultation.
          </p>
          <Button className="mt-4" asChild>
            <a href="/consultation">Join a Event</a>
          </Button>
        </CardContent>
      </Card>
    );
  }
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" >
      {events?.map((event, index) => (
        <motion.div
          key={event.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ y: -10 }}
          className="group bg-white rounded-2xl  overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
        >

          {/* Image container */}
          <div className="relative w-full h-48">
            <Image
              src={event?.event.image ?? "/fallback.png"}
              alt={event.event.EventName}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Category */}
            <span className="absolute top-3 left-3 bg-white/90 px-3 py-1 rounded-full text-xs font-bold text-gray-800">
              {event.event.category}
            </span>

            {/* Like */}
            <button className="absolute top-3 right-3 p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-[#FF6B6B] transition">
              <Heart size={16} />
            </button>
          </div>

          {/* Content */}
          <div className="p-5">

            {/* Date */}
            <div className="flex justify-between">
              <div className="flex items-center text-sm text-[#FF6B6B] font-medium mb-2">
                <Calendar size={14} className="mr-2" />
                <DateCell date={event.event.date} />
              </div>
              <div>
                <span className="text-sm font-medium text-black">Rating:</span>
                {event.event.averageRating}
              </div>
            </div>

            {/* Title */}
            <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-1 group-hover:text-[#FF6B6B] transition">
              {event.event.EventName}
            </h3>

            {/* Location */}
            <div className="flex items-center text-sm text-gray-500 mb-4">
              <MapPin size={14} className="mr-2" />
              {event.event.location}
            </div>

            {/* Footer Info */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
              <div className="flex items-center text-sm text-gray-600">
                <Users size={14} className="mr-2" />
                {event.event.minParticipants} going
              </div>
              <p className="text-sm font-semibold text-gray-900">
                Free: {event.event.fee}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="mt-4 flex gap-2">
              <Link href={`/dashboard/my-event/${event.id}`} className="flex-1">
                <Button variant="outline" className="w-full">
                  <Eye className="h-4 w-4 mr-2" />
                  View Details
                </Button>
              </Link>

                {event.status === PaymentStatus.PENDING &&
                event.event.status !== EventStatus.CANCELLED && (
                  <Button
                    onClick={() => handlePayNow(event.id)}
                    disabled={processingPaymentId === event.id}
                    size="sm"
                    className="flex-1 bg-emerald-600 hover:bg-emerald-700"
                  >
                    {processingPaymentId === event.id ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      <>
                        <CreditCard className="mr-2 h-4 w-4" />
                        Pay Now
                      </>
                    )}
                  </Button>
                )}

            </div>

          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default JoinEventList;





