const bookElement = document.getElementById('book');
const resizingButtons = document.querySelectorAll('.font-size');
const textColorButtons = document.querySelectorAll('.book__control_color .color');
const backgroundColorButtons = document.querySelectorAll('.book__control_background .color');

for (const button of resizingButtons) {
    button.addEventListener('click', (event) => {
        for (const button of resizingButtons) {
            button.classList.remove('font-size_active')
        }
        button.classList.add('font-size_active')

        const size = button.dataset.size;
        event.preventDefault()
        bookElement.classList.remove('book_fs-small', 'book_fs-big')
        if (size == 'small') {
            bookElement.classList.add('book_fs-small')
        } else if (size == 'big') {
            bookElement.classList.add('book_fs-big')
        };
    });
}

for (const button of textColorButtons) {
    button.addEventListener('click', (event) => {
        for (const button of textColorButtons) {
            button.classList.remove('color_active')
        }
        button.classList.add('color_active')

        const color = button.dataset.textColor;
        event.preventDefault()
        bookElement.classList.remove(
            'book_color-gray',
            'book_color-black',
            'book_color-whitesmoke',
        )
        if (color == 'black') {
            bookElement.classList.add('book_color-black')
        } else if (color == 'gray') {
            bookElement.classList.add('book_color-gray')
        } else if (color == 'whitesmoke') {
            bookElement.classList.add('book_color-whitesmoke')
        };
    });
}

for (const button of backgroundColorButtons) {
    button.addEventListener('click', (event) => {
        for (const button of backgroundColorButtons) {
            button.classList.remove('color_active')
        }
        button.classList.add('color_active')

        const color = button.dataset.bgColor;
        event.preventDefault()
        bookElement.classList.remove(
            'book_bg-gray',
            'book_bg-black',
            'book_bg-white',
        )
        if (color == 'black') {
            bookElement.classList.add('book_bg-black')
        } else if (color == 'gray') {
            bookElement.classList.add('book_bg-gray')
        } else if (color == 'white') {
            bookElement.classList.add('book_bg-white')
        };
    });
}