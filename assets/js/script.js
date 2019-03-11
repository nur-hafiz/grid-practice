let content2 = document.querySelector(".content-2");

content2.addEventListener("click", () => {
    let content2_classes = content2.classList;
    let rotation = ["rotate_zero", "rotate_one", "rotate_two", "rotate_three"];

    for (let i = 0; i < rotation.length; i++) {
        if (content2_classes.contains(rotation[i])) {
            content2_classes.remove(rotation[i]);

            if (i == rotation.length - 1) {
                content2_classes.add(rotation[0]);
            } else {
                content2_classes.add(rotation[i + 1]);
            }
            break;
        } else if (
            i == rotation.length - 1 &&
            !content2_classes.contains(rotation[i])
        ) {
            content2_classes.add(rotation[1]);
            break;
        }
    }
});

let content3 = document.querySelector(".content-3");
let content3_classes = content3.classList;
let responsive_view = ["mobile", "tablet", "desktop"];

let content3_main_text = content3.querySelector("main h1");

setInterval(() => {
    for (let i = 0; i < responsive_view.length; i++) {
        if (content3_classes.contains(responsive_view[i])) {
            content3_classes.remove(responsive_view[i]);

            if (i == responsive_view.length - 1) {
                content3_classes.add(responsive_view[0]);
                content3_main_text.textContent =
                    responsive_view[0].substr(0, 1).toUpperCase() +
                    responsive_view[0].substr(1);
            } else {
                content3_classes.add(responsive_view[i + 1]);
                console.log(responsive_view[i]);
                console.log(responsive_view[i + 1]);
                content3_main_text.textContent =
                    responsive_view[i + 1].substr(0, 1).toUpperCase() +
                    responsive_view[i + 1].substr(1);
            }

            break;
        }
    }
}, 2000);
