const mainButton = document.querySelector('.btn')
const listId = document.getElementById('list');
const arrow = document.querySelector('.arrow')
const title = document.getElementById('title')
let flag = 1

const subList = document.querySelectorAll('.option')



subList.forEach(li => {
    const buttonn = li.querySelector('.list-btn');
    const imge = li.querySelector('.li-img')
    li.addEventListener('click', function()
    {
        subList.forEach(e =>
        {
            e.querySelector('.li-img').style.display = 'none'

        })
        imge.style.display = 'block'
        console.log(buttonn.textContent)
        title.textContent = buttonn.textContent

    })

});


mainButton.addEventListener('click', function()
{
    if (flag == 0)
    {
        flag = 1;
        arrow.style.transform = 'rotate(0deg)';

        listId.animate([
            { opacity: 1, transform: 'translateY(0)' },
            { opacity: 0, transform: 'translateY(-20px)' }
        ], {
            duration: 400,
            easing: 'ease-in'
        }).finished.then(() => {
            listId.style.display = 'none';
        });
    }
    else
    {
        listId.style.display = 'block';
        arrow.style.transform = 'rotate(180deg)';

        // Animate the list sliding down
        listId.animate([
            { opacity: 0, transform: 'translateY(-20px)' },
            { opacity: 1, transform: 'translateY(0)' }
        ], {
            duration: 400,
            easing: 'ease-out'
        });





        flag = 0
    }


})
