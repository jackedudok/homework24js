// змінна яка відповідає за блок з наповненням.
const content = document.querySelector('.content');

// функція яка змінює текст на жирний.
document.querySelector('.bold-text').addEventListener('click', function () {
    if (content.style.fontWeight == '' || content.style.fontWeight == 'normal') {
        content.style.fontWeight = 'bold'
    }
    else if (content.style.fontWeight == 'bold') {
        content.style.fontWeight = 'normal'
    }
});

// функція яка змінює текст на курсивний текст.
document.querySelector('.italic-text').addEventListener('click', function () {
    if (content.style.fontStyle == '' || content.style.fontStyle == 'normal') {
        content.style.fontStyle = 'italic'
    }
    else if (content.style.fontStyle == 'italic') {
        content.style.fontStyle = 'normal'
    }
})

// функція яка змінює текст на підкреслений.
document.querySelector('.underline-text').addEventListener('click', function () {
    if (content.style.textDecoration == "" || content.style.textDecoration == 'none' || content.style.textDecoration == 'line-through') {
        content.style.textDecoration = 'underline'

    }
    else if (content.style.textDecoration == 'underline') {
        content.style.textDecoration = 'none'
    }
})

// функція яка змінює текст на закркеслений..
document.querySelector('.strikethrough-text').addEventListener('click', function () {
    if (content.style.textDecoration == 'none' || content.style.textDecoration == '' || content.style.textDecoration == 'underline') {
        content.style.textDecoration = 'line-through'
    }
    else if (content.style.textDecoration == 'line-through') {
        content.style.textDecoration = 'none'
    }
})

// функція яка вирівнює текст по правій стороні.
document.querySelector('.text-algin-left').addEventListener('click', function () {
    content.style.alignItems = 'flex-start'
})

// функція яка вирівнює текст по центру.
document.querySelector('.text-algin-center').addEventListener('click', function () {
    content.style.alignItems = 'center'
})

// функція яка вирівнює текст по лівій стороні.
document.querySelector('.text-algin-right').addEventListener('click', function () {
    content.style.alignItems = 'flex-end'
})

// функція яка робить вікно з шрифтами видимим.
document.querySelector('.edit-text-font-family').addEventListener('click', function () {
    if (document.querySelector('.fonts').style.display == 'none' || document.querySelector('.fonts').style.display == '') {
        document.querySelector('.fonts').style.display = 'block'
        document.querySelector('.size-text').style.display = 'none'
    }
    else if (document.querySelector('.fonts').style.display == 'block') {
        document.querySelector('.fonts').style.display = 'none'
    }
})

// функція зміни шрифту.
document.querySelector('.fonts').addEventListener('click', function () {
    content.style.fontFamily = event.target.textContent
    document.querySelector('.fonts').style.display = 'none'

})

// функція яка робить вікно з розміром шрифту видимим.
document.querySelector('.edit-text-font-size').addEventListener('click', function () {
    if (document.querySelector('.size-text').style.display == 'none' || document.querySelector('.size-text').style.display == '') {
        document.querySelector('.size-text').style.display = 'block'
        document.querySelector('.fonts').style.display = 'none'
    }
    else if (document.querySelector('.size-text').style.display == 'block') {
        document.querySelector('.size-text').style.display = 'none'
    }
})

// функція зміни розміру шрифта.
document.querySelector('.size-text').addEventListener('click', function () {
    content.style.fontSize = event.target.textContent
    document.querySelector('.size-text').style.display = 'none'

})

// функція яка робить вікно з кольорами шрифтів видимим.
document.querySelector('.edit-text-color').addEventListener('click', function () {
    document.querySelector('.text-color').style.display = 'block';
    document.body.style.backgroundColor = 'rgba(0,0,0,0.3)'
    document.querySelector('.fonts').style.display = 'none';
    document.querySelector('.size-text').style.display = 'none'
    document.querySelector('.bc-color').style.display = 'none';
})

// функція яка робить вікно з кольорами шрифтів невидимим.
document.querySelector('.text-color-part-top-close').addEventListener('click', function () {
    document.querySelector('.text-color').style.display = 'none'
    document.body.style.backgroundColor = 'rgba(0,0,0,0)'
})

// функція яка змінює колір шрифта
document.querySelector('.text-color-part-bottom').addEventListener('click', function () {
    if (event.target.className == 'text-color-box') {
        content.style.color = event.target.style.backgroundColor;
    }
})

// функція яка робить вікно видимим з заднім фоном для контенту.
document.querySelector('.edit-text-bc').addEventListener('click', function () {
    document.querySelector('.text-color').style.display = 'none';
    document.querySelector('.bc-color').style.display = 'block';
    document.body.style.backgroundColor = 'rgba(0,0,0,0.3)'
})

// функція яка робить вікно невидимим з заднім фоном для контенту.
document.querySelector('.bc-color-part-top-close').addEventListener('click', function () {
    document.querySelector('.bc-color').style.display = 'none';
    document.body.style.backgroundColor = 'rgba(0,0,0,0)'
})

// зміння яка відповіда за кнопку Colors  в блоці з заднім фоном.
const butttonBcColors = document.querySelector('.bc-colors-buttton');

// зміння яка відповіда за кнопку Images  в блоці з заднім фоном.
const butttonBcImg = document.querySelector('.bc-images-buttton');

// зміння яка відповіда за кнопку Files  в блоці з заднім фоном. 
const butttonBcFile = document.querySelector('.bc-files-buttton')


// функція яка змінює стилі кнопки Colors при натисканні.
butttonBcColors.addEventListener('click', function () {
    document.querySelector('.bc-color-part-bottom').style.display = 'flex';
    document.querySelector('.bc-img-part-bottom').style.display = 'none';
    document.querySelector('.bc-file-part-bottom').style.display = 'none';
    butttonBcColors.style.color = 'grey';
    butttonBcColors.style.border = 'none';
    butttonBcColors.style.borderTop = '1px solid gray';
    butttonBcColors.style.borderRight = '1px solid gray';
    butttonBcColors.style.borderLeft = '1px solid gray';

    butttonBcImg.style.color = 'blue';
    butttonBcImg.style.border = 'none';
    butttonBcImg.style.borderBottom = '1px solid gray';

    butttonBcFile.style.color = 'blue';
    butttonBcFile.style.border = 'none';
    butttonBcFile.style.borderBottom = '1px solid gray';

})

// функція яка змінює стилі кнопки Images при натисканні.
butttonBcImg.addEventListener('click', function () {
    document.querySelector('.bc-color-part-bottom').style.display = 'none';
    document.querySelector('.bc-file-part-bottom').style.display = 'none';
    document.querySelector('.bc-img-part-bottom').style.display = 'flex';
    butttonBcImg.style.color = 'grey';
    butttonBcImg.style.border = 'none';
    butttonBcImg.style.borderTop = '1px solid gray';
    butttonBcImg.style.borderRight = '1px solid gray';
    butttonBcImg.style.borderLeft = '1px solid gray';

    butttonBcColors.style.color = 'blue';
    butttonBcColors.style.border = 'none';
    butttonBcColors.style.borderBottom = '1px solid gray';

    butttonBcFile.style.color = 'blue';
    butttonBcFile.style.border = 'none';
    butttonBcFile.style.borderBottom = '1px solid gray';

})

// функція яка змінює стилі кнопки Files при натисканні.
butttonBcFile.addEventListener('click', function () {
    document.querySelector('.bc-color-part-bottom').style.display = 'none';
    document.querySelector('.bc-file-part-bottom').style.display = 'block';
    document.querySelector('.bc-img-part-bottom').style.display = 'none';
    butttonBcFile.style.color = 'grey';
    butttonBcFile.style.border = 'none';
    butttonBcFile.style.borderTop = '1px solid gray';
    butttonBcFile.style.borderRight = '1px solid gray';
    butttonBcFile.style.borderLeft = '1px solid gray';


    butttonBcColors.style.color = 'blue';
    butttonBcColors.style.border = 'none';
    butttonBcColors.style.borderBottom = '1px solid gray';

    butttonBcImg.style.color = 'blue';
    butttonBcImg.style.border = 'none';
    butttonBcImg.style.borderBottom = '1px solid gray';

})

// фукція яка задає колір задньому фону контенту.
document.querySelector('.bc-color-part-bottom').addEventListener('click', function () {
    console.log(event.target.className)
    if (event.target.className == 'bc-color-box') {
        content.removeAttribute("style")
        content.style.backgroundColor = event.target.style.backgroundColor
    }
})

// фукція яка задає зображення задньому фону контенту.
document.querySelector('.bc-img-part-bottom').addEventListener('click', function () {
    console.log(event.target.className)
    if (event.target.className == 'bc-image-box') {
        content.style.backgroundImage = event.target.style.backgroundImage
    }
})

// фукція яка задає зображення задньому фону контенту з файлу яка ви вибрали на комп'ютері.
document.querySelector('.custom-file-input').addEventListener('change', function () {
    let urlImage = URL.createObjectURL(event.target.files[0]);
    content.style.backgroundImage = `url(${urlImage})`;
})

// функція яка робить вікно з паролем та логіном видимим.
document.querySelector('.lock-close').addEventListener('click', function () {
    document.querySelector('.sing-in').style.display = 'block'
    document.body.style.backgroundColor = 'rgba(0,0,0,0.3)'
})

// змінна яка відповідає за форму singIn.
const singIn = document.forms['singIn'];

// змінна з регулярним виразом для логіна і пароля.
let regExpLoginOrPassword = /^admin$/;

// функція яка відповідає за валідність полів логіна та пароля, якщо пароль або логін не вірний, додається клас is-inalid, чи наоборо віднімається клас.
singIn.btnSingIn.addEventListener('click', function () {
    if (regExpLoginOrPassword.test(singIn.singInlogin.value) && regExpLoginOrPassword.test(singIn.singInPassword.value)) {
        document.querySelector('.value-is-empty').style.display = 'none';
        document.querySelector('.check-login-password').style.display = 'none'
        document.querySelector('.singIn-login').classList.remove('is-invalid')
        document.querySelector('.singIn-password').classList.remove('is-invalid')
        document.querySelector('.sing-in').style.display = 'none'
        document.querySelector('.lock-close').style.display = 'none'
        document.querySelector('.lock-open').style.display = 'block'
        document.body.style.backgroundColor = 'rgba(0,0,0,0)'
        document.querySelector('.editor-button').removeAttribute("disabled")
        singIn.singInlogin.value = ''
        singIn.singInPassword.value = ''
    }

    else if (singIn.singInlogin.value == "" && singIn.singInPassword.value == "") {
        document.querySelector('.check-login-password').style.display = 'none'
        document.querySelector('.value-is-empty').style.display = 'block'
        document.querySelector('.singIn-login').classList.add('is-invalid')
        document.querySelector('.singIn-password').classList.add('is-invalid')

    }
    else {
        document.querySelector('.value-is-empty').style.display = 'none';
        document.querySelector('.check-login-password').style.display = 'block'
        document.querySelector('.singIn-login').classList.add('is-invalid')
        document.querySelector('.singIn-password').classList.add('is-invalid')
    }
})

// функіція яка відкривє меню для створення таблиці і списка, а також появляється вікно з текстареа для редагування тексту.
document.querySelector('.editor-button').addEventListener('click', function () {
    document.querySelector('.menu-icons').style.display = 'none'
    document.querySelector('.menu-icons2').style.display = 'block'
    document.querySelector('.content').style.display = 'none'
    document.querySelector('textarea').value = document.querySelector('.content').innerHTML
    document.querySelector('.text-area').style.display = 'block'
})

// функція яка зберігає відредагований текст в контент.
document.querySelector('.save').addEventListener('click', function () {
    document.querySelector('.text-area').style.display = 'none'
    document.querySelector('.content').style.display = 'flex'
    document.querySelector('.menu-icons').style.display = 'flex'
    document.querySelector('.menu-icons2').style.display = 'none'
    document.querySelector('.content').innerHTML = document.querySelector('textarea').value
})

// змінна яка відповідає за форму для створення таблиці.
let tableForm = document.forms['tableForm'];

// функція яка скидує всі поля таблиці.
document.querySelector('.reset-table').addEventListener('click', function () {
    for (let i = 0; i < tableForm.length - 4; i++) {
        tableForm.elements[i].value = ''
    }
    tableForm.styleOfBorder.value = 'choosestyle'
    tableForm.colorOfBorder.value = 'choosecolor'
    count = 0
})

// функція яка робить вікно для створення таблиці видимим.
document.querySelector('.new-table').addEventListener('click', function () {
    document.querySelector('.table').style.display = 'block'
    document.querySelector('textarea').style.backgroundColor = 'rgba(0,0,0,0.3)'
    document.querySelector('textarea').setAttribute("disabled", "disabled")
})

// функція яка робить вікно для створення таблиці невидимим.
document.querySelector('.table-part-top-close').addEventListener('click', function () {
    document.querySelector('.table').style.display = 'none'
    document.querySelector('textarea').style.backgroundColor = 'rgba(0,0,0,0)'
    document.querySelector('textarea').removeAttribute("disabled")
})

// змінна з регулярним виразом для tr і td.
let regExpCountTrTd = /^\d{1,3}$/;

// змінна з регулярним виразом для висоти і ширини td.
let regExpWidthHeightTd = /^\d{1,3}$/;

// змінна яка рахує скільки полів вірно заповнених.
let count = 0;

// функція яка відповідає за валідність полів, якщо поля вірно заповненні, тоді вона створює таблицю.
document.querySelector('.create-table').addEventListener('click', function () {
    if (regExpCountTrTd.test(tableForm.countTr.value) != true) {
        tableForm.countTr.classList.add('is-invalid')
    }
    else if (regExpCountTrTd.test(tableForm.countTr.value)) {
        tableForm.countTr.classList.remove('is-invalid')
    }
    if (regExpCountTrTd.test(tableForm.countTd.value) != true) {
        tableForm.countTd.classList.add('is-invalid')
    }
    else if (regExpCountTrTd.test(tableForm.countTd.value)) {
        tableForm.countTd.classList.remove('is-invalid')
    }
    if (regExpWidthHeightTd.test(tableForm.heightOfTd.value) != true) {
        tableForm.heightOfTd.classList.add('is-invalid')
    }
    else if (regExpWidthHeightTd.test(tableForm.heightOfTd.value)) {
        tableForm.heightOfTd.classList.remove('is-invalid')
    }
    if (regExpWidthHeightTd.test(tableForm.widthOfTD.value) != true) {
        tableForm.widthOfTD.classList.add('is-invalid')
    }
    else if (regExpWidthHeightTd.test(tableForm.widthOfTD.value)) {
        tableForm.widthOfTD.classList.remove('is-invalid')
    }
    if (regExpCountTrTd.test(tableForm.widthOfBorder.value) != true) {
        tableForm.widthOfBorder.classList.add('is-invalid')
    }
    else if (regExpCountTrTd.test(tableForm.widthOfBorder.value)) {
        tableForm.widthOfBorder.classList.remove('is-invalid')
    }
    if (tableForm.styleOfBorder.value == 'choosestyle') {
        tableForm.styleOfBorder.classList.add('is-invalid')
    }
    else if (tableForm.styleOfBorder.value != 'choosestyle') {
        tableForm.styleOfBorder.classList.remove('is-invalid')
    }
    if (tableForm.colorOfBorder.value == 'choosecolor') {
        tableForm.colorOfBorder.classList.add('is-invalid')
    }
    else if (tableForm.colorOfBorder.value != 'choosecolor') {
        tableForm.colorOfBorder.classList.remove('is-invalid')
    }

    for (let i = 0; i < tableForm.length - 2; i++) {
        if (tableForm.elements[i].classList.contains('is-invalid') == false) {
            count++
        }
    }
    if (count == 7) {
        document.querySelector('.invalid-value').style.display = 'none'

        let table1 = document.createElement('table')
        document.querySelector('.table-box').append(table1);
        let countTR1 = tableForm.countTr.value
        let countTD1 = tableForm.countTd.value
        let widthOfTd1 = tableForm.widthOfTD.value
        let heightOfTd1 = tableForm.heightOfTd.value
        let widthOfBorder1 = tableForm.widthOfBorder.value
        let borderStyle = tableForm.styleOfBorder.value
        let borderColor = tableForm.colorOfBorder.value

        for (let i = 0; i < countTR1; i++) {
            let tr = document.createElement('tr');
            document.querySelector('.table-box').lastChild.append(tr);

            for (let j = 0; j < countTD1; j++) {
                let td = document.createElement('td')
                document.querySelector('.table-box').lastChild.children[i].append(td);
                document.querySelector('.table-box').lastChild.children[i].children[j].textContent = 'TD'
                document.querySelector('.table-box').lastChild.children[i].children[j].style.width = `${widthOfTd1}px`;
                document.querySelector('.table-box').lastChild.children[i].children[j].style.height = `${heightOfTd1}px`;
                document.querySelector('.table-box').lastChild.children[i].children[j].style.borderWidth = `${widthOfBorder1}px`;
                document.querySelector('.table-box').lastChild.children[i].children[j].style.borderStyle = `${borderStyle}`;
                document.querySelector('.table-box').lastChild.children[i].children[j].style.borderColor = `${borderColor}`;
            }
        }

        let tableInner = document.querySelector('.table-box').innerHTML
        document.querySelector('textArea').value += tableInner
        document.querySelector('.table-box').innerHTML = ''
        document.querySelector('.table').style.display = 'none'
        document.querySelector('textarea').style.backgroundColor = 'rgba(0,0,0,0)'
        document.querySelector('textarea').removeAttribute("disabled")
    }

    else if (count != 7) {
        document.querySelector('.invalid-value').style.display = 'block'
    }

    count = 0
})

// функція яка робить вікно для створення таблиці Ol видимим.
document.querySelector('.new-list-ol').addEventListener('click', function () {
    document.querySelector('.list-ol').style.display = 'block'
    document.querySelector('textarea').style.backgroundColor = 'rgba(0,0,0,0.3)'
    document.querySelector('textarea').setAttribute("disabled", "disabled")


})

// функція яка робить вікно для створення таблиці Ol невидимим.
document.querySelector('.list-ol-part-top-close').addEventListener('click', function () {
    document.querySelector('.list-ol').style.display = 'none'
    document.querySelector('textarea').style.backgroundColor = 'rgba(0,0,0,0)'
    document.querySelector('textarea').removeAttribute("disabled")
})


// функція яка очищує поля з вікна для створення таблиці.
document.querySelector('.reset-list-ol').addEventListener('click', function () {
    document.querySelector('.count-li-ol').value = '';
    document.querySelector('.type-Ol').value = 'chooseOl'

})

// змінна з регулярним виразом для Count li item.
let regExpCountli = /^\d{1,3}$/;

// змінна з флажком для провірки поля Count li item.
let flagCountLiOl = false

// змінна з флажком для провірки поля Type mark of list.
let flagTypetLiOl = false

// функція я створює таблицю Ol і провіряє валідність полів.
document.querySelector('.create-list-ol').addEventListener('click', function () {
    if (regExpCountli.test(document.querySelector('.count-li-ol').value) != true) {
        document.querySelector('.count-li-ol').classList.add('is-invalid')
        flagCountLiOl = false
    }
    else if (regExpCountTrTd.test(document.querySelector('.count-li-ol').value)) {
        document.querySelector('.count-li-ol').classList.remove('is-invalid')
        flagCountLiOl = true
    }

    if (document.querySelector('.type-Ol').value == 'chooseOl') {
        document.querySelector('.type-Ol').classList.add('is-invalid')
        flagTypetLiOl = false
    }
    else if (document.querySelector('.type-Ol').value != 'chooseOl') {
        document.querySelector('.type-Ol').classList.remove('is-invalid')
        flagTypetLiOl = true
    }

    if (flagCountLiOl && flagTypetLiOl) {
        document.querySelector('.invalid-value-ol').style.display = 'none'
        let ol = document.createElement('ol')
        document.querySelector('.list-box').append(ol);

        let countLiOl = document.querySelector('.count-li-ol').value
        let typeOfMarksLiOl = document.querySelector('.type-Ol').value
        let counter = 0
        for (let i = 0; i < countLiOl; i++) {
            let liOl = document.createElement('li')
            document.querySelector('.list-box').lastChild.append(liOl);
            counter++;
            document.querySelector('.list-box').lastChild.children[i].type = `${typeOfMarksLiOl}`
            document.querySelector('.list-box').lastChild.children[i].innerHTML = `item ${counter}`
        }

        let listOlInner = document.querySelector('.list-box').innerHTML
        document.querySelector('textArea').value += listOlInner
        document.querySelector('.list-box').innerHTML = ''
        document.querySelector('.list-ol').style.display = 'none'
        document.querySelector('textarea').style.backgroundColor = 'rgba(0,0,0,0)'
        document.querySelector('textarea').removeAttribute("disabled")
    }

    else {
        document.querySelector('.invalid-value-ol').style.display = 'block'
    }

})

// функція яка робить вікно для створення таблиці Ul видимим.
document.querySelector('.new-list-ul').addEventListener('click', function () {
    document.querySelector('.list-ul').style.display = 'block'
    document.querySelector('textarea').style.backgroundColor = 'rgba(0,0,0,0.3)'
    document.querySelector('textarea').setAttribute("disabled", "disabled")
})

// функція яка робить вікно для створення таблиці Ul невидимим.
document.querySelector('.list-ul-part-top-close').addEventListener('click', function () {
    document.querySelector('.list-ul').style.display = 'none'
    document.querySelector('textarea').style.backgroundColor = 'rgba(0,0,0,0)'
    document.querySelector('textarea').removeAttribute("disabled")
})


//  функція яка очищає поля з вікна для створення таблиці Ul.
document.querySelector('.reset-list-ul').addEventListener('click', function () {
    document.querySelector('.count-li-ul').value = '';
    document.querySelector('.type-ul').value = 'chooseUl'

})

// змінна з флажком для провірки поля Count li item.
let flagCountLiUl = false

// змінна з флажком для провірки поля Count li item.
let flagTypetLiUl = false

// функція я створює таблицю Ul і провіряє валідність полів.
document.querySelector('.create-list-ul').addEventListener('click', function () {
    if (regExpCountli.test(document.querySelector('.count-li-ul').value) != true) {
        document.querySelector('.count-li-ul').classList.add('is-invalid')
        flagCountLiUl = false
    }
    else if (regExpCountTrTd.test(document.querySelector('.count-li-ul').value)) {
        document.querySelector('.count-li-ul').classList.remove('is-invalid')
        flagCountLiUl = true
    }

    if (document.querySelector('.type-ul').value == 'chooseUl') {
        document.querySelector('.type-ul').classList.add('is-invalid')
        flagTypetLiUl = false
    }
    else if (document.querySelector('.type-ul').value != 'chooseUl') {
        document.querySelector('.type-ul').classList.remove('is-invalid')
        flagTypetLiUl = true
    }

    if (flagCountLiUl && flagTypetLiUl) {
        document.querySelector('.invalid-value-ul').style.display = 'none'
        let ul = document.createElement('ul')
        document.querySelector('.list-box').append(ul);

        let countLiUl = document.querySelector('.count-li-ul').value
        let typeOfMarksLiUl = document.querySelector('.type-ul').value
        let counter = 0
        for (let i = 0; i < countLiUl; i++) {
            let liUl = document.createElement('li')
            document.querySelector('.list-box').lastChild.append(liUl);
            counter++;
            document.querySelector('.list-box').lastChild.children[i].type = `${typeOfMarksLiUl}`
            document.querySelector('.list-box').lastChild.children[i].innerHTML = `item ${counter}`
        }

        let listUlInner = document.querySelector('.list-box').innerHTML
        document.querySelector('textArea').value += listUlInner
        document.querySelector('.list-box').innerHTML = ''
        document.querySelector('.list-ul').style.display = 'none'
        document.querySelector('textarea').style.backgroundColor = 'rgba(0,0,0,0)'
        document.querySelector('textarea').removeAttribute("disabled")
    }

    else {
        document.querySelector('.invalid-value-ul').style.display = 'block'
    }
})

// функція яка робить вікно для виходу з текстового редактора видимим.
document.querySelector('.lock-open').addEventListener('click', function () {
    document.querySelector('.sing-out').style.display = 'flex'
    document.querySelector('.content').style.backgroundColor = 'rgba(0,0,0,0.3)'
})

// функція яка робить вікно для виходу з текстового редактора невидимим.
document.querySelector('.btn-cancel').addEventListener('click', function () {
    document.querySelector('.sing-out').style.display = 'none'
    document.querySelector('.content').style.backgroundColor = 'rgba(0,0,0,0)'
})

// функція для виходу з текстового редактора.
document.querySelector('.btn-sing-out').addEventListener('click', function () {
    document.querySelector('.sing-out').style.display = 'none'
    document.querySelector('.content').style.backgroundColor = 'rgba(0,0,0,0)'
    document.querySelector('.lock-close').style.display = 'block'
    document.querySelector('.lock-open').style.display = 'none'
    document.body.style.backgroundColor = 'rgba(0,0,0,0)'
    document.querySelector('.editor-button').setAttribute("disabled", "disabled")
})