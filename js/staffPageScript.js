var script = document.createElement('script');
script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js'; 
document.getElementsByTagName('head')[0].appendChild(script);

let myArray = [
    {'name':'Mia Johnson', 'bedNum':'A0', 'caseMan':'Harper Evans', 'pets':'None', 'outSince':'Inside'},
    {'name':'Ethan Carter', 'bedNum':'A1', 'caseMan':'Sophia Reed', 'pets':'None', 'outSince':'Inside'},
    {'name':'Isabella Ramirez', 'bedNum':'A2', 'caseMan':'Liam Thompson', 'pets':'None', 'outSince':'Inside'},
    {'name':'Noah Patel', 'bedNum':'A3', 'caseMan':'Liam Thompson', 'pets':'Cat', 'outSince':'Inside'},
    {'name':'Sophia Anderson', 'bedNum':'A4', 'caseMan':'Lucas Nguyen', 'pets':'Cat', 'outSince':'Inside'},
    {'name':'Liam Nguyen', 'bedNum':'A5', 'caseMan':'Liam Thompson', 'pets':'None', 'outSince':'2024-05-03-09:52'},
    {'name':'Olivia Wilson', 'bedNum':'A6', 'caseMan':'Isabella Ward', 'pets':'Dog', 'outSince':'2024-05-03-07:09'},
    {'name':'Aiden Martinez', 'bedNum':'A7', 'caseMan':'Lucas Nguyen', 'pets':'None', 'outSince':'Inside'},
    {'name':'Ava Thompson', 'bedNum':'A8', 'caseMan':'Lucas Nguyen', 'pets':'None', 'outSince':'2024-05-03-04:46'},
    {'name':'Lucas Lewis', 'bedNum':'A9', 'caseMan':'Noah Foster', 'pets':'Cat', 'outSince':'2024-05-03-10:44'},
    {'name':'Emma Robinson', 'bedNum':'A10', 'caseMan':'Noah Foster', 'pets':'None', 'outSince':'Inside'},
    {'name':'Mason Jackson', 'bedNum':'A11', 'caseMan':'Noah Foster', 'pets':'None', 'outSince':'2024-05-03-05:38'},
    {'name':'Harper White', 'bedNum':'A12', 'caseMan':'Liam Thompson', 'pets':'None', 'outSince':'Inside'},
    {'name':'Elijah Harris', 'bedNum':'B1', 'caseMan':'Noah Foster', 'pets':'Cat', 'outSince':'Inside'},
    {'name':'Charlotte Martin', 'bedNum':'B2', 'caseMan':'Isabella Ward', 'pets':'Cat', 'outSince':'2024-05-03-05:38'},
    {'name':'Oliver Lee', 'bedNum':'B3', 'caseMan':'Harper Evans', 'pets':'None', 'outSince':'2024-05-03-06:29'},
    {'name':'Amelia Clark', 'bedNum':'B4', 'caseMan':'Harper Evans', 'pets':'None', 'outSince':'2024-05-03-22:15'},
    {'name':'Benjamin Taylor', 'bedNum':'B5', 'caseMan':'Mason Martinez', 'pets':'None', 'outSince':'Inside'},
    {'name':'Evelyn Wright', 'bedNum':'B6', 'caseMan':'Harper Evans', 'pets':'None', 'outSince':'Inside'},
    {'name':'Alexander Scott', 'bedNum':'B7', 'caseMan':'Liam Thompson', 'pets':'Cat', 'outSince':'Inside'},
    {'name':'Abigail Thomas', 'bedNum':'B8', 'caseMan':'Noah Foster', 'pets':'Cat', 'outSince':'Inside'},
    {'name':'James Rodriguez', 'bedNum':'B9', 'caseMan':'Olivia Phillips', 'pets':'None', 'outSince':'2024-05-03-03:57'},
    {'name':'Emily Hall', 'bedNum':'B10', 'caseMan':'Liam Thompson', 'pets':'None', 'outSince':'Inside'},
    {'name':'William Young', 'bedNum':'B11', 'caseMan':'Ethan Clarke', 'pets':'None', 'outSince':'Inside'},
    {'name':'Madison Garcia', 'bedNum':'B12', 'caseMan':'Mason Martinez', 'pets':'None', 'outSince':'2024-05-03-06:29'},
    {'name':'Michael King', 'bedNum':'C1', 'caseMan':'Sophia Reed', 'pets':'Cat', 'outSince':'2024-05-03-17:21'},
    {'name':'Grace Hernandez', 'bedNum':'C2', 'caseMan':'Isabella Ward', 'pets':'Dog', 'outSince':'2024-05-03-02:13'},
    {'name':'Daniel Adams', 'bedNum':'C3', 'caseMan':'Lucas Nguyen', 'pets':'Cat', 'outSince':'2024-05-03-02:13'},
    {'name':'Lily Campbell', 'bedNum':'C4', 'caseMan':'Ethan Clarke', 'pets':'None', 'outSince':'2024-05-03-22:15'},
    {'name':'Samuel Chavez', 'bedNum':'C5', 'caseMan':'Liam Thompson', 'pets':'None', 'outSince':'2024-05-03-06:29'},
    {'name':'Elizabeth Baker', 'bedNum':'C6', 'caseMan':'Lucas Nguyen', 'pets':'None', 'outSince':'2024-05-03-09:52'},
    {'name':'Logan Hill', 'bedNum':'C7', 'caseMan':'Ava Sullivan', 'pets':'Dog', 'outSince':'2024-05-03-08:02'},
    {'name':'Avery Green', 'bedNum':'C8', 'caseMan':'Olivia Phillips', 'pets':'Dog', 'outSince':'Inside'},
    {'name':'Matthew Carter', 'bedNum':'C9', 'caseMan':'Sophia Reed', 'pets':'None', 'outSince':'2024-05-03-06:29'},
    {'name':'Chloe Perez', 'bedNum':'C10', 'caseMan':'Noah Foster', 'pets':'None', 'outSince':'2024-05-03-22:15'},
    {'name':'Jackson Morris', 'bedNum':'C11', 'caseMan':'Liam Thompson', 'pets':'None', 'outSince':'2024-05-03-22:15'},
    {'name':'Victoria Rivera', 'bedNum':'C12', 'caseMan':'Ava Sullivan', 'pets':'Cat', 'outSince':'Inside'},
    {'name':'David Brooks', 'bedNum':'D1', 'caseMan':'Ethan Clarke', 'pets':'None', 'outSince':'Inside'},
    {'name':'Zoey Mitchell', 'bedNum':'D2', 'caseMan':'Ethan Clarke', 'pets':'Dog', 'outSince':'2024-05-03-11:33'},
    {'name':'Gabriel Price', 'bedNum':'D3', 'caseMan':'Lucas Nguyen', 'pets':'None', 'outSince':'2024-05-03-20:39'},
    {'name':'Natalie Cooper', 'bedNum':'D4', 'caseMan':'Ava Sullivan', 'pets':'None', 'outSince':'Inside'},
    {'name':'Christopher Turner', 'bedNum':'D5', 'caseMan':'Mason Martinez', 'pets':'None', 'outSince':'2024-05-03-00:42'},
    {'name':'Sarah Stewart', 'bedNum':'D6', 'caseMan':'Isabella Ward', 'pets':'None', 'outSince':'Inside'},
    {'name':'Joshua Foster', 'bedNum':'D7', 'caseMan':'Ava Sullivan', 'pets':'None', 'outSince':'Inside'},
    {'name':'Sofia Gray', 'bedNum':'D8', 'caseMan':'Sophia Reed', 'pets':'None', 'outSince':'Inside'},
    {'name':'Andrew Ward', 'bedNum':'D9', 'caseMan':'Ava Sullivan', 'pets':'Dog', 'outSince':'Inside'},
    {'name':'Scarlett Collins', 'bedNum':'D10', 'caseMan':'Ava Sullivan', 'pets':'None', 'outSince':'2024-05-03-02:13'},
    {'name':'Ryan Murphy', 'bedNum':'D11', 'caseMan':'Olivia Phillips', 'pets':'None', 'outSince':'Inside'},
    {'name':'Addison Bailey', 'bedNum':'D12', 'caseMan':'Isabella Ward', 'pets':'None', 'outSince':'Inside'},
    {'name':'John Reed', 'bedNum':'D13', 'caseMan':'Liam Thompson', 'pets':'None', 'outSince':'2024-05-03-15:48'},
]

const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget)
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('active')
    })
    tabs.forEach(tab => {
      tab.classList.remove('active')
    })
    tab.classList.add('active')
    target.classList.add('active')
  })
})

buildTable(myArray)

function buildTable(data){
    let table = document.getElementById('myTable');

    for (let i = 0; i < data.length; i++) {
        let row = `<tr>
                    <td>${data[i].name}</td>
                    <td>${data[i].bedNum}</td>
                    <td>${data[i].caseMan}</td>
                    <td>${data[i].pets}</td>
                    <td>${data[i].outSince}</td>
                </tr>`;
                table.innerHTML += row;
    }
}