let posts = [];

// 投稿追加
function addPost() {
  const band = document.getElementById("band").value;
  const university = document.getElementById("university").value;
  const part = document.getElementById("part").value;
  const date = document.getElementById("date").value;
  const place = document.getElementById("place").value;

  const post = { band, university, part, date, place };

  posts.push(post);
  saveData();
  render();
}

// 表示
function render() {
  displayFiltered(posts);
}

// 表示共通処理
function displayFiltered(filtered) {
  const list = document.getElementById("list");
  list.innerHTML = "";

  filtered.forEach(post => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${post.band}（${post.university}）<br>
      募集：${post.part}<br>
      日時：${new Date(post.date).toLocaleString()}<br>
      場所：${post.place}
    `;
    list.appendChild(li);
  });
}

// パート検索
function searchByPart() {
  const part = document.getElementById("searchPart").value;
  const filtered = posts.filter(post => post.part === part);
  displayFiltered(filtered);
}

// 大学検索
function searchByUniversity() {
  const keyword = document.getElementById("searchUniversity").value;
  const filtered = posts.filter(post =>
    post.university.includes(keyword)
  );
  displayFiltered(filtered);
}

// 保存
function saveData() {
  localStorage.setItem("posts", JSON.stringify(posts));
}

// 読み込み
function loadData() {
  const data = localStorage.getItem("posts");
  if (data) {
    posts = JSON.parse(data);
  }
}

loadData();
render();