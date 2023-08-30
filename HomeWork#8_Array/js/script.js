function manipulateArray() {

    let length = parseInt(prompt("Enter the length of the array:"));

    let arr = [];

    for (let i = 0; i < length; i++) {
        arr.push(prompt("Enter element " + (i + 1) + ":"));
    }
    // Display the contents of the array on the page
    document.write("<h3>Original Array:</h3>");
    document.write("<ul>");
    for (let i = 0; i < arr.length; i++) {
        document.write("<li>" + arr[i] + "</li>");
    }
    document.write("</ul>");

    arr.sort();

    // Display the contents of the sorted array on the page
    document.write("<h3>Sorted Array:</h3>");
    document.write("<ul>");
    for (let i = 0; i < arr.length; i++) {
        document.write("<li>" + arr[i] + "</li>");
    }
    document.write("</ul>");

    arr.splice(2, 3);

    document.write("<h3>Modified Array:</h3>");
    document.write("<ul>");
    for (let i = 0; i < arr.length; i++) {
        document.write("<li>" + arr[i] + "</li>");
    }
    document.write("</ul>");
}