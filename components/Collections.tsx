// pages/collections.tsx

import { getCollections } from "@/lib/actions/actions";
import Slider from "@/components/layout/Slider";

const Collections = async () => {
  const collections = await getCollections();

  return (
    <div className="py-0 px-0">
      {collections && collections.length > 0 ? (
        <Slider collections={collections} />
      ) : (
        <p className="text-center">No collections found</p>
      )}
    </div>
  );
};

export default Collections;
