function SkillCard (title, description) {
    return `
        <div class='card-skill fadein'>
            <h4 class='card-skill-title'>${title}</h4>
            <p>${description}</p>
        </div>
    `;
};

function ExperienceCard (title, company, date, description, skills) {
    let skillsText = ""
    skills.forEach((skill) => skillsText += '<span class="card-exp-skill">'+skill+'</span>')
    return `
        <div class='card-exp'>
            <h3 class='card-exp-title'>${title}</h3>
            <div class='row-exp'>
                <h4 class='card-exp-company'>${company}</h4>
                <p class='card-exp-date'>${date}</p>
            </div>
            <p>${description}</p>
            <p>${skillsText}</p>
        </div>
    `;
};