const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const img1 = document.querySelector("#img1");
const img2 = document.querySelector("#img2");
const img3 = document.querySelector("#img3");
const content1 = document.querySelector("#tab1");
const content2 = document.querySelector("#tab2");
const content3 = document.querySelector("#tab3");
let preTab = btn1;
let preImage = img1;
let preContent = content1;

const handleTab = (e)=> {
    const newTab = e.target;
    
    switch(newTab.id) {
        case "btn1":
            test(newTab, img1, content1);
            removeRadius();
            btn2.classList.add("rad-left");
            break;
        case "btn2":
            test(newTab, img2, content2);
            removeRadius();
            btn1.classList.add("rad-right");
            btn3.classList.add("rad-left");
            break;
        case "btn3":
            test(newTab, img3, content3);
            removeRadius();
            btn2.classList.add("rad-right");
            break;
        default:
            break;
    }
}

const test = (tab, img, content)=> {
    preContent.classList.remove("active");
    content.classList.add("active");
    preContent = content;
    preImage.classList.remove("active");
    img.classList.add("active");
    preImage = img;
    preTab.classList.remove("active");
    tab.classList.add("active");
    preTab = tab;
}

const removeRadius = ()=> {
    const btn = [btn1, btn2, btn3]

    btn.forEach(button => {
        button.classList.remove("rad-right");
        button.classList.remove("rad-left");
    })
}

const selection= (e)=> {
    const servies = e.target.value;
    const s = Array.from(document.querySelector("#services").children);
    s.forEach(child => {
        (child.value === servies) ? (child.selected = true) : (child.selected = false);
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
}