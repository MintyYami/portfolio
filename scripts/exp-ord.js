document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".exp-ord-item");
    const container = document.getElementById("exp-container");

    // set active button
    function setActive(btn) {
        buttons.forEach(b => b.classList.remove("exp-ord-active"));
        btn.classList.add("exp-ord-active");
    }

    // sorting function
    function sortExperiences(type) {
        const items = Array.from(container.children);

        items.sort((a, b) => {
        if (type === "relevance") {
            const aRel = Number(a.dataset.relevance ?? Number.POSITIVE_INFINITY);
            const bRel = Number(b.dataset.relevance ?? Number.POSITIVE_INFINITY);
            return aRel - bRel;
        }
        if (type === "date") {
            return b.dataset.date - a.dataset.date;
        }
        return 0;
        });

        items.forEach(card => container.appendChild(card));
    }
    
    // on load
    const initial = document.querySelector(".exp-ord-item.exp-ord-active") || buttons[0];
    if (initial && initial.dataset.type) {
        setActive(initial);
        sortExperiences(initial.dataset.type);
    }

    // event listener for buttons
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const type = button.dataset.type;
            setActive(button);
            sortExperiences(type);
        });
    });
});