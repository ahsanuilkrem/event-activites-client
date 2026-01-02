
"use client";

import ManagementTable from "@/src/components/shared/ManagementTable";
import { IHost } from "@/src/types/user.interface";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { toast } from "sonner";
import DeleteConfirmationDialog from "@/src/components/shared/DeleteConfirmationDialog";
import { hostColumns } from "./hostColumns";
import { deleteHost } from "@/src/services/admin/hostManagement";


interface HostsTableProps {
  hosts: IHost[];
}

const HostsTable = ({ hosts }: HostsTableProps) => {
  const router = useRouter();
  const [, startTransition] = useTransition();
  const [deletingHost, setDeletingHost] = useState<IHost | null>(null);
//   const [viewingHost, setViewingHost] = useState<IHost | null>(null);
//   const [editingHost, setEditingHost] = useState<IHost | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleRefresh = () => {
    startTransition(() => {
      router.refresh();
    });
  };

//   const handleView = (host: IHost) => {
//     setViewingHost(host);
//   };

//   const handleEdit = (host: IHost) => {
//     setEditingHost(host);
//   };

  const handleDelete = (host: IHost) => {
    setDeletingHost(host);
  };

  const confirmDelete = async () => {
    if (!deletingHost) return;

    setIsDeleting(true);
    const result = await deleteHost(deletingHost.id!);
    setIsDeleting(false);

    if (result.success) {
      toast.success(result.message || "host deleted successfully");
      setDeletingHost(null);
      handleRefresh();
    } else {
      toast.error(result.message || "Failed to delete host");
    }
  };

  return (
    <>
      <ManagementTable
        data={hosts}
        columns={hostColumns}
        // onView={handleView}
        // onEdit={handleEdit}
        onDelete={handleDelete}
        getRowKey={(host) => host.id!}
        emptyMessage="No user found"
      />

      {/* Edit Patient Form Dialog */}
       {/* <HostFormDialog
        open={!!editingHost}
        onClose={() => setEditingHost(null)}
        patient={editingHost!}
        onSuccess={() => {
          setEditingHost(null);
          handleRefresh();
        }} 
      />  */}

      {/* View Patient Detail Dialog */}
      {/* <HostViewDetailDialog
        open={!!viewingHost}
        onClose={() => setViewingHost(null)}
        patient={viewingHost}
      /> */}

      {/* Delete Confirmation Dialog */}
      <DeleteConfirmationDialog
        open={!!deletingHost}
        onOpenChange={(open) => !open && setDeletingHost(null)}
        onConfirm={confirmDelete}
        title="Delete host User"
        description={`Are you sure you want to delete ${deletingHost?.name}? This action cannot be undone.`}
        isDeleting={isDeleting}
      />
    </>
  );
};

export default HostsTable;