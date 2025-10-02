import { Suspense } from "react";
import SearchResultSection from "./SearchResultSection";

export default function SearchPage() {
  return (
    <>
      <Suspense>
        <SearchResultSection />
      </Suspense>
    </>
  );
}
