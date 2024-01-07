import { db } from "@/lib/db";

const CourseIdPage = async({
   params 
  }: {
     params: { courseId: string }
     }) => {

  const {userId} = auth();
  if(!userId){
    return redirect("/");
  }

const course = await db.course.findUnique({
  where:{
    id: params.courseId
  }
})
if(!course){
  return redirect("/");
}

const requiredFields = [
  course.title,
  course.description,
  course.imageUrl,
  course.price,
  course.categoryId,
  // course.chapters.some(chapter => chapter.isPublished),
];

const totalFields = requiredFields.length;
const completedFields = requiredFields.filter(Boolean).length;

const completionText = `(${completedFields}/${totalFields})`;

// const isComplete = requiredFields.every(Boolean);




  return (
    <div>
    Course Id: {params.courseId}
    </div>
  );
}

export default CourseIdPage;
