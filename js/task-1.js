const categories = document.querySelectorAll("ul#categories li.item");
console.log(`Number of categories: ${categories.length}`);
categories.forEach((category) => {
    const title = category.querySelector('h2').textContent;
    const elementsContext= category.querySelectorAll('ul li').length;
    console.log(`Category: ${title}`);
    console.log(`Elements: ${elementsContext}`);
});