// Get all the images
image_array = [
    'banner1.gif',
    'banner2.gif',
    'banner3.gif',
    'banner4.gif',
    'banner5.gif'
]

function get_random_image() {
    // Get a random index
    random_index = Math.floor(Math.random() * image_array.length);

    // Get an image at the random_index
    selected_image = image_array[random_index]

    // Display the image
    document.getElementById('image_shower').src = `./img/bet365/${selected_image}`
}

image_array2 = [
    'square1.gif',
    'square2.gif',
    'square3.gif',
    'square4.gif',
    'square5.gif',
    'square6.gif',
    'square7.gif',
    'square8.gif'
]

function get_random_image2() {
    // Get a random index
    random_index2 = Math.floor(Math.random() * image_array2.length);

    // Get an image at the random_index
    selected_image2 = image_array2[random_index2]

    // Display the image
    document.getElementById('image_shower2').src = `./img/bet365/${selected_image2}`


    random_index3 = Math.floor(Math.random() * image_array2.length);

    while (random_index3 == random_index2) random_index3 = Math.floor(Math.random() * image_array2.length);

    // Get an image at the random_index
    selected_image2 = image_array2[random_index3]

    // Display the image
    document.getElementById('image_shower3').src = `./img/bet365/${selected_image2}`


    random_index4 = Math.floor(Math.random() * image_array2.length);

    while (random_index4 == random_index2 || random_index4 == random_index3) random_index4 = Math.floor(Math.random() * image_array2.length);

    // Get an image at the random_index
    selected_image2 = image_array2[random_index4]

    // Display the image
    document.getElementById('image_shower4').src = `./img/bet365/${selected_image2}`

}

function load() {
    get_random_image()
    get_random_image2()
}