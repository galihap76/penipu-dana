let form = document.getElementsByTagName("form")[0];
let hasil = document.querySelector("#hasil");
let hapus = document.getElementById("hapus");
let penipu = document.querySelector(".penipu");
let count = 1;

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let token = document.getElementById("token").value;
  let chat_id = document.getElementById("chat_id").value;
  let jmlPesan = document.getElementById("jmlPesan").value;
  let text = document.getElementById("text").value;

  for (let i = 1; i <= jmlPesan; i++) {
    let newParagraph = document.createElement("p");
    const API_PENIPU = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${text}&parse_mode=html`;

    fetch(API_PENIPU, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
      .then((response) =>
        response
          .json()
          .then((data) => ({ status: response.status, body: data }))
      )
      .then((data) => {
        if (data.status === 200) {
          penipu.innerHTML = `<i class="bi bi-telegram"></i> Nama : ${data.body.result.from.first_name}
            | Bot : <a href="https://t.me/${data.body.result.from.username}">${data.body.result.from.username}</a>`;
          newParagraph.textContent = `${count} : Pesan '${text}' berhasil di kirim dengan status response ${data.status}`;
          hasil.appendChild(newParagraph);
          count++;
        } else {
          newParagraph.textContent = `${count} : Pesan '${text}' gagal di kirim dengan status response ${data.status}`;
          hasil.appendChild(newParagraph);
          count++;
        }
      })
      .catch((error) => {
        newParagraph.textContent = `${count} : error ${error.message}`;
        hasil.appendChild(newParagraph);
        count++;
      });
  }

  hapus.addEventListener("click", function () {
    if (hasil) {
      hasil.textContent = "";
      penipu.innerHTML = "";
      count = 1;
    }
  });
});
