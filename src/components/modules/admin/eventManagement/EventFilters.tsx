"use client";
import RefreshButton from "@/src/components/shared/RefreshButton";
import SearchFilter from "@/src/components/shared/SearchFilter";
import { Input } from "@/src/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/src/components/ui/select";
import { useDebounce } from "@/src/hooks/useDebounce";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState, useTransition } from "react";


const EventFilters = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();
  const [categoryInput, setCategoryInput] = useState(
    () => searchParams.get("category") || ""
  );
  const [locationInput, setLocationInput] = useState(
    () => searchParams.get("location") || ""
  );
  const [dateInput, setDateInput] = useState(
    () => searchParams.get("date") || ""
  );

  const debouncedCategory = useDebounce(categoryInput, 300);
  const debouncedlocation = useDebounce(locationInput, 500);
  const debouncedDate = useDebounce(dateInput, 500);

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());

    // Update debounced fields
    if (debouncedCategory) {
      params.set("category", debouncedCategory);
    } else {
      params.delete("category");
    }

    if (debouncedlocation) {
      params.set("location", debouncedlocation);
    } else {
      params.delete("location");
    }

    if (debouncedDate) {
      params.set("date", debouncedDate);
    } else {
      params.delete("date");
    }

    // Reset to page 1 when filters change
    params.set("page", "1");

    startTransition(() => {
      router.push(`?${params.toString()}`);
    });
// eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedCategory, debouncedlocation, debouncedDate]);

  // const toggleSpecialty = (specialtyId: string) => {
  //   const newSelection = localSpecialties.includes(specialtyId)
  //     ? localSpecialties.filter((id) => id !== specialtyId)
  //     : [...localSpecialties, specialtyId];

  //   setLocalSpecialties(newSelection);
  // };

//   const applySpecialtyFilter = () => {
//     const params = new URLSearchParams(searchParams.toString());
//     params.delete("specialties");
//     if (localSpecialties.length > 0) {
//       localSpecialties.forEach((val) => params.append("specialties", val));
//     }
//     params.set("page", "1");

//     startTransition(() => {
//       router.push(`?${params.toString()}`);
//     });
//     setOpen(false);
//   };

  // const clearAllFilters = () => {
  //   setGenderInput("");
  //   setEmailInput("");
  //   setContactNumberInput("");
  //   setLocalSpecialties([]);
  //   startTransition(() => {
  //     router.push(window.location.pathname);
  //   });
  // };

  // const activeFiltersCount =
  //   localSpecialties.length +
  //   (genderInput ? 1 : 0) +
  //   (emailInput ? 1 : 0) +
  //   (contactNumberInput ? 1 : 0);

  return (
    <div className="space-y-3">
      {/* Row 1: Search and Refresh */}
      <div className="flex items-center gap-3">
        <SearchFilter paramName="searchTerm" placeholder="location, category" />
      
        {/* Category Filter */}
        <Select
          value={categoryInput}
          onValueChange={(value) =>
            setCategoryInput(value === "all" ? "" : value)
          }
          disabled={isPending}
        >
          <SelectTrigger className="w-[140px] h-10">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all"> All Category</SelectItem>
            <SelectItem value="Tech">Tech</SelectItem>
            <SelectItem value="Music">Music</SelectItem>
            <SelectItem value="Sports">Sports</SelectItem>
            <SelectItem value="Gaming">Gaming</SelectItem>
            <SelectItem value="Art">Art</SelectItem>
          </SelectContent>
        </Select>

        {/* location Filter */}
        <Input
          type="text"
          placeholder="location"
          value={locationInput}
          onChange={(e) => setLocationInput(e.target.value)}
          className="w-[200px] h-10"
          disabled={isPending}
        />

        {/* Date Filter */}
        <Input
          type="text"
          placeholder="Date"
          value={dateInput}
          onChange={(e) => setDateInput(e.target.value)}
          className="w-40 h-10"
          disabled={isPending}
        />
          <RefreshButton />
    </div>
    </div>
  );
};

export default EventFilters;