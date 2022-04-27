function generateIdCard(event)
{
    // Get Student Name //
    event.preventDefault();
    const studentName = document.getElementById("student-name").value;
    console.log("studentName",studentName);
    const targetStudentName = document.getElementById("generated-student-name");
    targetStudentName.innerHTML = studentName;

    // Get College Name //
    const collegeName = document.getElementById("college-name").value;
    console.log("collegeName",collegeName);
    const targetCollegeName = document.getElementById("generated-college-name")
    targetCollegeName.innerHTML = collegeName;

    // Get location Name //
    const location = document.getElementById("location-name").value;
    console.log("location", location);
    const targetLocation = document.getElementById("generated-location")
    targetLocation.innerHTML = location;

     const generatedIDCardContainer = document.getElementById("generated-id-card");
    generatedIDCardContainer.style.display = "block";

}  
// Get Uploaded Photo //

function preview_image(event)
 {
   console.log("event", event)
   var student = document.getElementById('output_image');
  student.src = URL.createObjectURL(event.target.files[0]);
}















// console.warn("Print Warning");
    // console.error("You did not use the library Code...")
