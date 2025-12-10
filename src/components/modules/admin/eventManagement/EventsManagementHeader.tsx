"use client";

import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import EventsFormDialog from "./EventsFormDialog";
import ManagementPageHeader from "@/src/components/shared/ManagementPageHeader";



const AdminEventManagementHeader = ({
}) => {
  const router = useRouter();
  const [, startTransition] = useTransition();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogKey, setDialogKey] = useState(0);

  const handleSuccess = () => {
    startTransition(() => {
      router.refresh();
    });
  };

  const handleOpenDialog = () => {
    setDialogKey((prev) => prev + 1); // Force remount
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };


  return (
    <>
      <EventsFormDialog
        key={dialogKey}
        open={isDialogOpen}
        onClose={handleCloseDialog}
        onSuccess={handleSuccess}
      
      />

      <ManagementPageHeader
        title="Event Management"
        description="Manage Event information and details"
        action={{
          label: "Add Event ",
          icon: Plus,
          onClick: handleOpenDialog,
        }}
      />
    </>
  );
};

export default AdminEventManagementHeader;