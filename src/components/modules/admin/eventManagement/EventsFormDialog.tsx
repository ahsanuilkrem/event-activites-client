"use client";

import InputFieldError from "@/src/components/shared/InputFieldError";
import { Button } from "@/src/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/src/components/ui/dialog";
import { Field, FieldLabel } from "@/src/components/ui/field";
import { Input } from "@/src/components/ui/input";
import { Textarea } from "@/src/components/ui/textarea";
import { createEvent } from "@/src/services/host/hostEvent.service";
import { useActionState, useEffect } from "react";
import { toast } from "sonner";

interface Props {
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

const EventsFormDialog = ({ open, onClose, onSuccess }: Props) => {
  const [state, formAction, pending] = useActionState(createEvent, null);

  useEffect(() => {
    if (state?.success) {
      toast.success(state.message);
      onSuccess();
      onClose();
    } else if (state && !state.success) {
      toast.error(state.message);
    }
  }, [state, onClose, onSuccess]);

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle>Create New Event</DialogTitle>
        </DialogHeader>

        <form action={formAction} className="space-y-4">
          {/* Event Name */}
          <Field>
            <FieldLabel>Event Name</FieldLabel>
            <Input name="EventName" required />
            <InputFieldError field="EventName" state={state} />
          </Field>

          {/* Description */}
          <Field>
            <FieldLabel>Description</FieldLabel>
            <Textarea name="description" rows={3} />
            <InputFieldError field="description" state={state} />
          </Field>

          {/* Date */}
          <Field>
            <FieldLabel>Date & Time</FieldLabel>
            <Input type="datetime-local" name="date" required />
            <InputFieldError field="date" state={state} />
          </Field>

          {/* Category */}
          <Field>
            <FieldLabel>Category</FieldLabel>
            <Input name="category" placeholder="Music, Sports, Tech" />
            <InputFieldError field="category" state={state} />
          </Field>

          {/* Location */}
          <Field>
            <FieldLabel>Location</FieldLabel>
            <Input name="location" required />
            <InputFieldError field="location" state={state} />
          </Field>

          {/* Participants */}
          <div className="grid grid-cols-2 gap-4">
            <Field>
              <FieldLabel>Min Participants</FieldLabel>
              <Input type="number" name="minParticipants" min={1} required />
              <InputFieldError field="minParticipants" state={state} />
            </Field>

            <Field>
              <FieldLabel>Max Participants</FieldLabel>
              <Input type="number" name="maxParticipants" min={1} required />
              <InputFieldError field="maxParticipants" state={state} />
            </Field>
          </div>

          {/* Fee */}
          <Field>
            <FieldLabel>Joining Fee</FieldLabel>
            <Input type="number" name="fee" min={0} defaultValue={0} />
            <InputFieldError field="fee" state={state} />
          </Field>

          {/* Image */}
          <Field>
            <FieldLabel>Event Image</FieldLabel>
            <Input name="file" type="file" accept="image/*" />
            <InputFieldError field="file" state={state} />
          </Field>

          {/* Actions */}
          <div className="flex justify-end gap-2 pt-2">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              disabled={pending}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={pending}>
              {pending ? "Creating..." : "Create Event"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EventsFormDialog;


