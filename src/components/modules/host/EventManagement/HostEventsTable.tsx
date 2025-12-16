
"use client";

import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { toast } from "sonner";
import { IEvent } from "@/src/types/event.interface";
import ManagementTable from "@/src/components/shared/ManagementTable";
import DeleteConfirmationDialog from "@/src/components/shared/DeleteConfirmationDialog";
import { deleteEvent } from "@/src/services/host/hostEvent.service";
import { EventsColumns } from "../../admin/eventManagement/EventsColumns";
import EventsFormDialog from "../../admin/eventManagement/EventsFormDialog";
import EventViewDetailDialog from "../../admin/eventManagement/EventViewDetailDialog";

interface EventsTableProps {
  events: IEvent[];

}

const HostEventsTable = ({events} : EventsTableProps) => {
  const router = useRouter();
  const [, startTransition] = useTransition();
  const [deletingEvent, setDeletingEvent] = useState<IEvent | null>(null);
  const [viewingEvent, setViewingEvent] = useState<IEvent | null>(null);
  const [editingEvent, setEditingEvent] = useState<IEvent | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleRefresh = () => {
    startTransition(() => {
      router.refresh();
    });
  };

  const handleView = (event: IEvent) => {
    setViewingEvent(event);
  };

  const handleEdit = (event: IEvent) => {
    setEditingEvent(event);
  };

  const handleDelete = (event: IEvent) => {
    setDeletingEvent(event);
  };

   const confirmDelete = async () => {
    if (!deletingEvent) return;
    setIsDeleting(true);
    const result = await deleteEvent(deletingEvent.id!);
    setIsDeleting(false);

    if (result.success) {
      toast.success(result.message || "event Deleted successfully");
      setDeletingEvent(null);
      handleRefresh();
    } else {
      toast.error(result.message || "Failed to delete event");
    }
  };

  return (
    <>
      <ManagementTable
        data={events}
        columns={EventsColumns}
        onView={handleView}
        onEdit={handleEdit}
        onDelete={handleDelete}
        getRowKey={(event) => event.id!}
        emptyMessage="No enent found"
      />
      {/* Edit Doctor Form Dialog */}
      <EventsFormDialog
        open={!!editingEvent}
        onClose={() => setEditingEvent(null)}
        event={editingEvent!}
        onSuccess={() => {
          setEditingEvent(null);
          handleRefresh();
        }}
      />

      {/* View Doctor Detail Dialog */}
      <EventViewDetailDialog
        open={!!viewingEvent}
        onClose={() => setViewingEvent(null)}
        event={viewingEvent}
      />

      {/* Delete Confirmation Dialog */}
      <DeleteConfirmationDialog
        open={!!deletingEvent}
        onOpenChange={(open) => !open && setDeletingEvent(null)}
        onConfirm={confirmDelete}
        title="Delete Event"
        description={`Are you sure you want to delete ${deletingEvent?.EventName}? This action cannot be undone.`}
        isDeleting={isDeleting}
      />
    </>
  );
};

export default HostEventsTable;