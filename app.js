let favNumber = 6;
let baseURL = "http://numbersapi.com";

// 1.
async function part1(){

    let data = await $.getJSON(`${baseURL}/${favNumber}?json`);
    console.log(data);
};
part1();

// 2.
const favNumbers = [3, 15, 36];
async function part2(){
    let data = $.getJSON(`${baseURL}/${favNumbers}?json`)
      console.log(data);
}
part2();

// 3.

async function part3(){
    let facts =  await Promise.all(
    Array.from({ length: 43 }, () => $.getJSON(`${baseURL}/${favNumber}?json`))
    );
    facts.forEach(data => {
        $('body').append(`<p>${data.text}</p>`);
    });
}
part3();