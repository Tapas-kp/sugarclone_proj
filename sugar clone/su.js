let imgarr=[
    "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F9da44dec-d660-43bb-ac4f-3649a40daeb5.gif&w=1920&q=75",
    "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F326fb727-594f-4bf2-b88b-7a4b427b0eab.gif&w=1920&q=75",
    "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F17f95391-9474-4d0f-aad8-021b6cbfe245.gif&w=1920&q=75",
    "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F4d271e23-5554-4850-80f9-da4387a6a6fc.gif&w=1920&q=75",
    "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2Fae6642e7-7a23-4b83-9e2c-c30665699d3d.gif&w=1920&q=75",
    "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F908e8542-2a07-476d-ac01-aeae7778ffc5.jpg&w=1920&q=75"
]
let radioButtons = document.querySelectorAll('input[name="slider"]');
let next = document.querySelector('#next');
let prev = document.querySelector('#prev');
let image = document.querySelector('#dis');
let currimg = 0;

function showImage() {
    image.setAttribute('src', imgarr[currimg]);
}

function nextImage() {
    currimg++;
    if (currimg >= imgarr.length) {
        currimg = 0;
}
    updateRadioButtons();
    showImage();
}

function prevImage() {
    currimg--;
    if (currimg < 0) {
        currimg = imgarr.length - 1;
}
    updateRadioButtons();
    showImage();
}

function updateRadioButtons() {
    radioButtons.forEach((radio, index) => {
        radio.checked = index === currimg;
});
}

next.addEventListener('click', nextImage);
prev.addEventListener('click', prevImage);

// Auto slide every 3 seconds
setInterval(nextImage, 3000);

// Add event listeners for radio buttons
radioButtons.forEach((radio, index) => {
    radio.addEventListener('change', () => {
        currimg = index;
        showImage();
});
})




let imgarr1=[
    "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F3475b8ea-ac02-4974-9557-dbe64dd2439a.gif&w=1920&q=75",
    "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F7a6f082b-d4ba-4b93-93b7-aa79cc63d877.jpg&w=1920&q=75",
    "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F0215955b-9b62-43c6-b155-daa98c79427b.gif&w=1920&q=75",
    "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F36ceb388-0c68-47be-b39d-c893aa6caed9.jpg&w=1920&q=75"
]
let radioButtons1 = document.querySelectorAll('input[name="slider"]');
let next1 = document.querySelector('#next1');
let prev1 = document.querySelector('#prev1');
let image1 = document.querySelector('#dis1');
let currimg1 = 0;

function disImage() {
    image1.setAttribute('src', imgarr1[currimg1]);
}

function nextImage1() {
    currimg1++;
    if (currimg1 >= imgarr1.length) {
        currimg1 = 0;
}
    updateRadioButtons1();
    disImage();
}

function prevImage1() {
    currimg1--;
    if (currimg1 < 0) {
        currimg1 = imgarr1.length - 1;
}
    updateRadioButtons1();
    disImage();
}

function updateRadioButtons1() {
    radioButtons1.forEach((radio, index) => {
        radio.checked = index === currimg1;
});
}

next1.addEventListener('click', nextImage1);
prev1.addEventListener('click', prevImage1);

// Auto slide every 3 seconds
setInterval(nextImage1, 3000);

// Add event listeners for radio buttons
radioButtons1.forEach((radio, index) => {
    radio.addEventListener('change', () => {
        currimg1 = index;
        disImage();
});
})


