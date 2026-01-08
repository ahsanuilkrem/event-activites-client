

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
import { toast } from "sonner";
import { FieldContent } from "@/src/components/ui/field";
import { createEvent, UpdateEvent } from "@/src/services/host/hostEvent.service";
import { IEvent } from "@/src/types/event.interface";
import Image from "next/image";
import { useActionState, useEffect, useRef, useState } from "react";
import { SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/src/components/ui/select";
import { Select } from '@/src/components/ui/select';

interface IEventFormDialogProps {
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
  event?: IEvent;
}

const EventsFormDialog = ({
  open,
  onClose,
  onSuccess,
  event,

}: IEventFormDialogProps) => {
  const formRef = useRef<HTMLFormElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const isEdit = !!event;
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [status, setStatus] = useState<"OPEN" | "FULL" | "CANCELLED" | "COMPLETED">(
    event?.status || "OPEN"
  );
  const [state, formAction, pending] = useActionState(
    isEdit ? UpdateEvent.bind(null, event.id!) : createEvent,
    null
  );

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    console.log(file)
    setSelectedFile(file || null);
  };

  const handleClose = () => {
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
    if (selectedFile) {
      setSelectedFile(null); // Clear preview
    }
    formRef.current?.reset(); // Clear form
    onClose(); // Close dialog
  };


  useEffect(() => {
    if (state?.success) {
      toast.success(state.message);
      if (formRef.current) {
        formRef.current.reset();
      }
      onSuccess();
      onClose();
    } else if (state && !state.success) {
      console.log(state)
      toast.error(state.message);
      if (selectedFile && fileInputRef.current) {
        const dataTransfer = new DataTransfer();
        dataTransfer.items.add(selectedFile);
        fileInputRef.current.files = dataTransfer.files;
      }
    }
  }, [state, onSuccess, onClose, selectedFile]);

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-h-[90vh] flex flex-col p-0">
        <DialogHeader className="px-6 pt-6 pb-4">
          <DialogTitle>{isEdit ? "Edit Event" : "Add New Event"}</DialogTitle>
        </DialogHeader>

        <form ref={formRef} action={formAction} className="flex flex-col flex-1 min-h-0">
          <div className="flex-1 overflow-y-auto px-6 space-y-4 pb-4">
            <FieldContent>
              <FieldLabel htmlFor="EventName ">EventName</FieldLabel>
              <Input
                id="EventName"
                name="EventName"
                placeholder="EventName"
                defaultValue={
                  state?.formData?.EventName || (isEdit ? event?.EventName : "")
                }
              />
              <InputFieldError state={state} field="EventName" />
            </FieldContent>

            {/* Description */}
            <Field>
              <FieldLabel htmlFor="description">Description</FieldLabel>
              <Textarea
                id="description"
                name="description"
                placeholder="description"
                defaultValue={
                  state?.formData?.description || (isEdit ? event?.description : "")
                }
                
              />
              <InputFieldError state={state} field="description" />
            </Field>

            {/* Date */}
            <Field>
              <FieldLabel htmlFor="date">Date</FieldLabel>
              <Input
                id="date"
                name="date"
                type="datetime-local"
                placeholder="date"
                defaultValue={
                  state?.formData?.date || (isEdit ? event?.date : "")
                }
              />
              <InputFieldError state={state} field="date" />
            </Field>

            {/* Location */}
            <Field>
              <FieldLabel htmlFor="location">Location </FieldLabel>
              <Input
                id="location"
                name="location"
                placeholder="123 Main St, City, Country"
                defaultValue={
                  state?.formData?.location || (isEdit ? event?.location : "")
                }
              />
              <InputFieldError state={state} field="location" />
            </Field>

            {/* Category */}
            <Field>
              <FieldLabel htmlFor="category">
                Category
              </FieldLabel>
              <Input
                id="category"
                name="category"
                placeholder="Music, Sports, Tech"
                defaultValue={
                  state?.formData?.category || (isEdit ? event?.category : "")
                }
              />
              <InputFieldError state={state} field="category" />
            </Field>
            {/* Min Participants */}
            <Field>
              <FieldLabel htmlFor="minParticipants">
                MinParticipants
              </FieldLabel>
              <Input
                id="minParticipants"
                name="minParticipants"
                type="number"
                placeholder="1"
                defaultValue={
                  state?.formData?.minParticipants || (isEdit ? event?.minParticipants : "")
                }
                min="20"
              />
              <InputFieldError state={state} field="minParticipants" />
            </Field>

            {/*  maxParticipants */}
            <Field>
              <FieldLabel htmlFor="maxParticipants">
                maxParticipants
              </FieldLabel>
              <Input
                id="maxParticipants"
                name="maxParticipants"
                type="number"
                placeholder="30"
                defaultValue={
                  state?.formData?.maxParticipants || (isEdit ? event?.maxParticipants : "")
                }
                max="1000"
              />
              <InputFieldError state={state} field="maxParticipants" />
            </Field>

            {/* Status */}
            {isEdit && (
              <>
                <Field>
                  <FieldLabel htmlFor="status">Status</FieldLabel>
                  <Input
                    id="status"
                    name="status"
                    placeholder="Select gender"
                    defaultValue={status}
                    type="hidden"
                  />
                  <Select
                    value={status}
                    onValueChange={(value) => setStatus(value as "OPEN" | "FULL" | "CANCELLED" | "COMPLETED")}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="OPEN">OPEN</SelectItem>
                      <SelectItem value="FULL">FULL</SelectItem>
                      <SelectItem value="CANCELLED">CANCELLED</SelectItem>
                      <SelectItem value="COMPLETED">COMPLETED</SelectItem>
                    </SelectContent>
                  </Select>
                  <InputFieldError state={state} field="status" />
                </Field>
              </>
            )}
            {/*  event fee  */}
            <Field>
              <FieldLabel htmlFor="appointmentFee">Event Fee</FieldLabel>
              <Input
                id="fee"
                name="fee"
                type="number"
                placeholder="100"
                defaultValue={
                  state?.formData?.fee || (isEdit ? event?.fee : "")
                }
                min="0"
              />
              <InputFieldError state={state} field="fee" />
            </Field>

            {/* Event image */}
            <Field>
              <FieldLabel htmlFor="file">Image</FieldLabel>
              {selectedFile && (
                <Image
                  //get from state if available
                  src={
                    typeof selectedFile === "string"
                      ? selectedFile
                      : URL.createObjectURL(selectedFile)
                  }
                  alt="Event Photo Preview"
                  width={50}
                  height={50}
                  className="mb-2 rounded-full"
                />
              )}
              <Input
                ref={fileInputRef}
                id="file" name="file"
                type="file" accept="image/*"
                onChange={handleFileChange}
              />
              <p className="text-xs text-gray-500 mt-1">
                Upload a Event Image for the Event
              </p>
              <InputFieldError state={state} field="image" />
            </Field>

          </div>

          <div className="flex justify-end gap-2 px-6 py-4 border-t bg-gray-50">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              disabled={pending}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={pending}>
              {pending
                ? "Saving..."
                : isEdit
                  ? "Update Event"
                  : "Create Event"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EventsFormDialog;


