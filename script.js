//Promise task-3 Quran Api
// Display quran 114 chapter --> arabicname, name, englishname, chapter



let Quran_data = fetch("https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/info.json",{
method:"GET"
})
.then((data)=>data.json())
.then((data1)=>{
    // using forEach method
    data1.chapters.forEach((val)=>{
        // using dom create div
    let container = document.createElement("div")
    container.className = "container"

    let row = document.createElement("div")
    row.className ="row"

    let col = document.createElement("div")
    col.className = "col-sm-6 "
    col.innerHTML +=`<div class="card text-dark bg-info mb-3" style="max-width: 18rem;">
    <div class="card-header"><h4>Quran Chapters</h4></div>
    <div class="card-body">
    <p class="card-text">ArabicName: ${val.arabicname} </p>
    <p class="card-text">EnglishName: ${val.englishname}</p>
    <p class="card-text">Name: ${val.name}</p>
    <p class="card-text">Chapter: ${val.chapter} </p>
    
    </div>
  </div>`

      row.append(col)
      container.append(row)
      document.body.append(container)
  })

})
.catch((err)=>console.log(err))


    