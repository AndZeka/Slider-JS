let images = ['imgs/0.jpg', 'imgs/1.jpg', 'imgs/2.jpg','https://images.theconversation.com/files/297577/original/file-20191017-98657-sfw3fi.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1356&h=668&fit=cro','https://media.nationalgeographic.org/assets/photos/143/499/6bf4e993-14aa-48b0-80a1-78265dbdb3d9.png'];


let current_slide_index=0;
const last_image_index=images.length-1;
document.getElementById("header").style.backgroundImage=`url(${images[current_slide_index]})`;

function next(){
    current_slide_index++;
    if(current_slide_index>last_image_index) current_slide_index=0;
    document.getElementById("header").style.backgroundImage=`url(${images[current_slide_index]})`;
}

function previous(){
    current_slide_index--;
    if(current_slide_index<0)current_slide_index=last_image_index;
    document.getElementById("header").style.backgroundImage=`url(${images[current_slide_index]})`;
}


setInterval(function(){
    current_slide_index++;
    if(current_slide_index>last_image_index) current_slide_index=0;
    console.log(current_slide_index);
    document.getElementById("header").style.backgroundImage=`url(${images[current_slide_index]})`;
},4000);


// let x = 0;

// function next() {
//     if (x == 0) {
//         document.getElementById("header").style.backgroundImage = `url(${images[0]})`;
//         x++;
//     } else if (x == 1) {
//         document.getElementById("header").style.backgroundImage = `url(${images[1]})`;
//         x++;
//     } else if (x == 2) {
//         document.getElementById("header").style.backgroundImage = `url(${images[2]})`;
//         x = 0;
//     }
// }


// function previous() {
//     if (x == 0) {
//         document.getElementById("header").style.backgroundImage = `url(${images[1]})`;
//         x = 2;
//     } else if (x == 1) {
//         document.getElementById("header").style.backgroundImage = `url(${images[2]})`;
//         x--;
//     } else if (x == 2) {
//         document.getElementById("header").style.backgroundImage = `url(${images[0]})`;
//         x--;
//     }
// }