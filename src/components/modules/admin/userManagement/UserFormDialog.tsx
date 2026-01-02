
import InputFieldError from "@/src/components/shared/InputFieldError";
import { Button } from "@/src/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/src/components/ui/dialog";
import { Field, FieldLabel } from "@/src/components/ui/field";
import { Input } from "@/src/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/src/components/ui/select";
import { changeUserStatus } from "@/src/services/admin/usersManagement";
import { IUser } from "@/src/types/user.interface";
import { useActionState, useEffect, useRef } from "react";
import { toast } from "sonner";

interface IUserFormDialogProps {
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
  user?: IUser;
}

const UserFormDialog = ({
  open,
  onClose,
  onSuccess,
  user,
}: IUserFormDialogProps) => {
  const formRef = useRef<HTMLFormElement>(null);

  const [state, formAction, isPending] = useActionState(
    changeUserStatus.bind(null, user?.id as string),
    null
  );
 
  // Handle success/error from server
  useEffect(() => {
    if (state?.success) {
      toast.success(state.message || "Operation successful");
      if (formRef.current) {
        formRef.current.reset();
      }
      onSuccess();
      onClose();
    } else if (state?.message && !state.success) {
      // console.log("error", state)
      toast.error(state.message);
    }
  }, [state, onSuccess, onClose]);

  const handleClose = () => {
    formRef.current?.reset();
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-h-[90vh] flex flex-col p-0">
        <DialogHeader className="px-6 pt-6 pb-4">
          <DialogTitle>Edit User</DialogTitle>
        </DialogHeader>

        <form
          ref={formRef}
          action={formAction}
          className="flex flex-col flex-1 min-h-0"
        >
          <div className="flex-1 overflow-y-auto px-6 space-y-4 pb-4">
            {/* Basic Information */}
            <Field>
              <FieldLabel htmlFor="name">Name</FieldLabel>
              <Input
                id="name"
                name="name"
                placeholder="John Doe"
                defaultValue={state?.formData?.name || user?.name || ""}
              />
              <InputFieldError field="name" state={state} />
            </Field>

            <Field>
              <FieldLabel htmlFor="email">Email</FieldLabel>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="patient@example.com"
                defaultValue={state?.formData?.email || user?.email || ""}
                disabled={!isPending}
              />
              <InputFieldError field="email" state={state} />
            </Field>

            <Field>
              <FieldLabel htmlFor="contactNumber">Contact Number</FieldLabel>
              <Input
                id="contactNumber"
                name="contactNumber"
                placeholder="+1234567890"
                defaultValue={
                  state?.formData?.contactNumber || user?.contactNumber || ""
                }
              />
              <InputFieldError field="contactNumber" state={state} />
            </Field>

            <Field>
              <FieldLabel htmlFor="role">Role</FieldLabel>

              <Select
                name="role"
                defaultValue={state?.formData?.role || user?.role}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select role" />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value="USER">USER</SelectItem>
                  <SelectItem value="HOST">HOST</SelectItem>
                  <SelectItem value="ADMIN">ADMIN</SelectItem>
                </SelectContent>
              </Select>

              <InputFieldError field="role" state={state} />
            </Field>

            <Field>
              <FieldLabel htmlFor="status">Status</FieldLabel>

              <Select
                name="status"
                defaultValue={state?.formData?.status || user?.status}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value="ACTIVE">ACTIVE</SelectItem>
                  <SelectItem value="BLOCKED">BLOCKED</SelectItem>
                  <SelectItem value="DELETED">DELETED</SelectItem>
                </SelectContent>
              </Select>

              <InputFieldError field="status" state={state} />
            </Field>

          </div>

          {/* Form Actions */}
          <div className="flex justify-end gap-2 px-6 py-4 border-t bg-gray-50">
            <Button
              type="button"
              variant="outline"
              onClick={handleClose}
              disabled={isPending}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={isPending}>
              {isPending ? "Saving..." : "Save Changes"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default UserFormDialog;