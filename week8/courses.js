// courses.js
const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    sections: [
        {sectionNum: 1, roomNum: "STC 353", enrolled: 26, days: "TTh", instructor: 'Bro T'},
        {SectionNum: 2, roomNum: "STC 347", enrolled: 28, days: "TTh", instructor: 'Sis A'}
    ],
    enrollStudent: function (sectionNum) {
        const sectionIndex = this.sections.findIndex((section) => section.sectionNum == sectionNum);
        if (sectionIndex > 0) {
            this.sections[sectionIndex].enrolled++;
        }
        renderCourseDetails
    },
};

// activity 1.3
function renderCourseDetails(course) {
    document.querySelector('#courseName').textContent = course.name;
    document.querySelector('#courseCode').textContent = course.code;
}

//activity 1.4
function sectionTemplate(section) {
    return `<tr>
        <td>${section.sectionNum}</td>
        <td>${section.roomNum}</td>
        <td>${section.enrolled}</td>
        <td>${section.dats}</td>
        <td>${section.instructor}</td>
    </tr>`
}

//activity 1.4
function renderSections(section) {
    const html = sections.map(sectionTemplate);
    document.querySelector("#sections").innerHTML = html.join("");

}

//render the course details
renderCourseDetails(aCourse);


//render the section details
renderSections(aCourse.sections);
