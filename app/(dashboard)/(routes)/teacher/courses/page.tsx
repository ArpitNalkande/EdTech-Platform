import { Button } from "@/components/ui/button";

import Link from "next/link";

const CoursesPage = () => {
  return (
    <div className="p-6">
      <Link href="/teacher/create"></Link>
      <Button>new course</Button>
    </div>
  );
};

export default CoursesPage;
