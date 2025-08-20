// tech stack cards
document.getElementById("card-front").innerHTML = SkillCard("Frontend", "HTML, CSS, JavaScript, Typescript, React, Dart, Flutter");
document.getElementById("card-back").innerHTML = SkillCard("Backend", "PHP, MYSQL, NoSQL, Python, Firestore");
document.getElementById("card-ai").innerHTML = SkillCard("AI & ML", "Python, OpenCV, Pandas, Scikit-Learn, BeautifulSoap4, Numpy, MatPlotLib, NLTK");
document.getElementById("card-app").innerHTML = SkillCard("App Dev", "Java, C, C++, Andriod Studio, Kotlin");
// experience cards
document.getElementById("exp-1").innerHTML = ExperienceCard("Software Engineer", "QPath Laboratory", "Dec 2024 - Jan 2025", "Delivered a cross-platform Flutter web application to streamline secure data transfer between the pathology lab and client hospitals. Designed and implemented Firebase integration for user authentication and cloud-based backend, significantly improving reliability and scalability. Managed the full development lifecycle independently, providing weekly updates and incorporating client feedback through iterative improvements.", ["Flutter", "Dart", "Firebase Authentication", "Firestore"]);
document.getElementById("exp-1").dataset.relevance = 1
document.getElementById("exp-1").dataset.date = 202412
document.getElementById("exp-2").innerHTML = ExperienceCard("Computer Science Teaching Internship", "Bluecoat SCITT Alliance", "Jun 2024 - Jul 2024", "Led interactive live coding lessons in secondary schools, adapting material to suit varying student skill levels. Enhanced communication by translating complex technical concepts into accessible explanations for non-technical audiences. Developed leadership skills through classroom management, mentorship, and fostering a collaborative learning environment.!", ["Python", "Teaching", "Microsoft"]);
document.getElementById("exp-2").dataset.relevance = 4
document.getElementById("exp-2").dataset.date = 202406
document.getElementById("exp-3").innerHTML = ExperienceCard("Image Processing Research", "University of Nottingham", "Feb 2024 - Apr 2024", "Collaborated on academic research to develop an image segmentation pipeline for flower subject extraction. Utilised and refined methods such as watershed algorithms, morphological transformations, and noise reduction to achieve an 88.9% evaluation score. Independently designed and implemented seven custom evaluation algorithms to benchmark pipeline accuracy and efficiency.", ["Python", "OpenCV", "NumPy", "Matplotlib"]);
document.getElementById("exp-3").dataset.relevance = 3
document.getElementById("exp-3").dataset.date = 202402
document.getElementById("exp-4").innerHTML = ExperienceCard("Lead Software Developer", "Nottingham & Union Rowing Club", "Sep 2023 - May 2024", "Led a team of software engineering students to deliver a mobile application for a local rowing club, improving operational efficiency and member engagement. Designed the backend architecture and integrated a cloud database to enable asynchronous data handling. Managed sprint planning, coordinated sub-teams, and maintained direct communication with the client to ensure alignment with requirements.", ["React", "TypeScript", "Node.js", "Firebase Authentication", "Firestore", "Git"]);
document.getElementById("exp-4").dataset.relevance = 2
document.getElementById("exp-4").dataset.date = 202309
document.getElementById("exp-5").innerHTML = ExperienceCard("Vodaphone Innovator Work Experience", "Vodaphone UK", "Aug 2021", "Researched and developed a safety wristband mockup product, studying Vodafone's product development lifecycle, from initial solution design to market launch. Built a versatile understanding of production stages in technology and telecommunications, with transferable knowledge applicable to software applications and user design.", ["Product Development", "IoT", "Research", "Design"]);
document.getElementById("exp-5").dataset.relevance = 5
document.getElementById("exp-5").dataset.date = 202108
document.getElementById("exp-6").innerHTML = ExperienceCard("Pathway to Your Future Work Experience", "Cisco", "Oct 2020", "Collaborated with a team of students to create a digital product addressing a social need surrounding alcoholism and addiction, enhancing both teamwork and leadership skills.", ["Product Development", "Teamwork", "Digital Design"]);
document.getElementById("exp-6").dataset.relevance = 6
document.getElementById("exp-6").dataset.date = 202010