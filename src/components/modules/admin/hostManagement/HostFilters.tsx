
"use client";

import ClearFiltersButton from "@/src/components/shared/ClearFilterrsButton";
import RefreshButton from "@/src/components/shared/RefreshButton";
import SearchFilter from "@/src/components/shared/SearchFilter";



const HostFilters = () => {
  return (
    <div className="space-y-3">
      {/* Row 1: Search and Refresh */}
      <div className="flex items-center gap-3">
        <SearchFilter paramName="searchTerm" placeholder="Search hosts name email location interests..." />
        <RefreshButton />
      </div>

      {/* Row 2: Filter Controls */}
      <div className="flex items-center gap-3">
        {/* Email Filter */}

        <SearchFilter paramName="email" placeholder="Email" />

        {/*location Filter */}

        <SearchFilter paramName="location" placeholder="Location" />

       {/*interests Filter */}

        <SearchFilter paramName="interests" placeholder="interests" />

        {/* Clear All Filters */}
        <ClearFiltersButton />
      </div>
    </div>
  );
};

export default HostFilters;