"use server";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { serverFetch } from "@/src/lib/server-fetch";


export async function getUsers(queryString?: string) {
  try {
    const searchParams = new URLSearchParams(queryString);
    const page = searchParams.get("page") || "1";
    const searchTerm = searchParams.get("searchTerm") || "all";
    const response = await serverFetch.get(`/user${queryString ? `?${queryString}` : ""}`,
      {
        next: {
          tags: [
            "users-list",
            `users-page-${page}`,
            `users-search-${searchTerm}`,
          ],
          revalidate: 180
        }

      }
    );
    const result = await response.json();
    return result;
  } catch (error: any) {
    console.log(error);
    return {
      success: false,
      message: `${process.env.NODE_ENV === 'development' ? error.message : 'Something went wrong'}`
    };
  }
}

export async function getUserById(id: string) {
  try {
    const response = await serverFetch.get(`/user/${id}`, {
        next: {
                tags: [`user-${id}, "users-list`],
                revalidate: 180,
            }
    })
    const result = await response.json();
    return result;
  } catch (error: any) {
    console.log(error);
    return {
      success: false,
      message: `${process.env.NODE_ENV === 'development' ? error.message : 'Something went wrong'}`
    };
  }
}

export async function changeUserStatus(
  id: string,
  _prevState: any,
  formData: FormData
) {
  const payload = {
    name: formData.get("name"),
    contactNumber: formData.get("contactNumber"),
    role: formData.get("role"),
    status: formData.get("status"),
  };

  // remove null values
  Object.keys(payload).forEach(
    (key) =>
      payload[key as keyof typeof payload] == null &&
      delete payload[key as keyof typeof payload]
  );

  const response = await serverFetch.patch(
    `/user/status/${id}`,
    {
      body: JSON.stringify(payload),   // ✅ JSON
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return response.json();
}


export async function deleteUser(id: string) {
  try {
    const response = await serverFetch.delete(`/user/${id}`)
    const result = await response.json();
    return result;
  } catch (error: any) {
    console.log(error);
    return {
      success: false,
      message: `${process.env.NODE_ENV === 'development' ? error.message : 'Something went wrong'}`
    };
  }
}