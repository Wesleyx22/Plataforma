document.getElementById("login-form")?.addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "Shopee" && password === "Shopee#1212") {
        window.location.href = "index.html";
    } else {
        document.getElementById("error-message").textContent = "Usuário ou senha inválidos, lembre da senha que usa no PDA";
    }
});

let currentCourse = null;

function loadCourse(courseTitle, lessons, videoUrl) {
    const lessonList = lessons
        .map((lesson) => {
            return `<li><a href="#" onclick="loadLesson('${lesson}', '${videoUrl}')">${lesson}</a></li>`;
        })
        .join("");

    const lessonListElement = document.querySelector(`ul.lesson-list[data-course="${courseTitle}"]`);
    lessonListElement.innerHTML = lessonList;

    if (currentCourse === courseTitle) {
        lessonListElement.style.display = "none";
        currentCourse = null;
        document.getElementById("video-title").textContent = "Título do Curso";
        document.getElementById("video-description").textContent = "Aqui está uma breve descrição do curso atual.";
        document.getElementById("video-frame").src = ""; 
    } else {
        const allLessonLists = document.querySelectorAll(".lesson-list");
        allLessonLists.forEach((list) => {
            list.style.display = "none";
        });

        lessonListElement.style.display = "block";
        currentCourse = courseTitle;
        document.getElementById("video-title").textContent = courseTitle;
        document.getElementById("video-description").textContent = "Seleciona uma aula para começar.";
        document.getElementById("video-frame").src = videoUrl; 
    }
}

function loadLesson(lessonTitle, videoUrl) {
    document.getElementById("video-title").textContent = lessonTitle;
    document.getElementById("video-frame").src = videoUrl; 
    document.getElementById("video-description").textContent = "Aqui está a descrição para " + lessonTitle;
}

function searchCourse() {
    const searchInput = document.getElementById("search-input").value.toLowerCase();
    if (searchInput) {
        alert("Buscando por: " + searchInput);
    } else {
        alert("Por favor, insira um termo de busca.");
    }
}

function toggleLike() {
    const likeBtn = document.getElementById("like-btn");
    if (likeBtn.classList.contains("liked")) {
        likeBtn.textContent = "Curtir 👍";
        likeBtn.classList.remove("liked");
    } else {
        likeBtn.textContent = "Curtido 👍";
        likeBtn.classList.add("liked");
    }
}
