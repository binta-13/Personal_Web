let blogs = [];

function addBlog(event) {
  event.preventDefault();

  let title = document.getElementById("input-blog-title").value;
  // let author = document.getElementById("input-blog-nama").value;
  let content = document.getElementById("input-blog-content").value;
  let image = document.getElementById("input-blog-image");

  image = URL.createObjectURL(image.files[0]);

  let blog = {
    title: title,
    author: "Binta Wahyu",
    content: content,
    image: image,
    postAt: new Date(),
  };

  blogs.push(blog);
  renderBlog();
  // renderBlogdetail();
}

function renderBlog() {
  let contentContainer = document.getElementById("contents");
  contentContainer.innerHTML = "";
  for (let i = 0; i < blogs.length; i++) {
    contentContainer.innerHTML += `<div class="blog-list-item">
    <div class="blog-image">
      <img src="${blogs[i].image}" alt="" />
    </div>
    <div class="blog-content">
      <div class="btn-group">
        <button class="btn-edit">Edit Post</button>
        <button class="btn-post">Post Blog</button>
      </div>
      <h1>
        <a href="blog-detail.html" target="_blank"
          >${blogs[i].title}</a
        >
      </h1>
      <div class="detail-blog-content">
        ${getFullTime(blogs[i].postAt)} | ${blogs[i].author}
      </div>
      <p>
        ${blogs[i].content}
      </p>
      <div style="text-align: right; font-size:15px; color: grey;">
      ${getDistanceTime(blogs[i].postAt)}
      </div>
    </div>
  </div>`;
  }
}

// function renderBlogdetail() {
//   let contentContainer = document.getElementById("detail");
//   contentContainer.innerHTML = "";
//   for (let i = 0; i < blogs.length; i++) {
//     contentContainer.innerHTML += `<div class="blog-detail-container">
//     <h1>${blogs[i].title}</h1>
//     <div class="author">12 Jul 2021 22:30 WIB |  ${blogs[i].author}</div>
//     <img src="${blogs[i].image}" alt="detail" />
//     <p>
//     ${blogs[i].content}
//     </p>
//   </div>
// </div>`;
//   }
// }

let month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "Desember",
];

function getFullTime(time) {
  let date = time.getDate();
  let monthIndex = time.getMonth();
  let year = time.getFullYear();
  let hours = time.getHours();
  let minutes = time.getMinutes();

  let fullTime = `${date} ${month[monthIndex]} ${year} ${hours}:${minutes} WIB`;
  return fullTime;
}

function getDistanceTime(time) {
  let timePost = time;
  let timeNow = new Date();

  let distance = timeNow - timePost;

  let miliseconds = 1000;
  let secondsInHours = 3600;
  let hoursInDay = 23;

  let distanceDay = Math.floor(
    distance / (miliseconds * secondsInHours * hoursInDay)
  );
  let distanceHours = Math.floor(distance / (1000 * 60 * 60));
  let distanceMinutes = Math.floor(distance / (1000 * 60));
  let distanceSeconds = Math.floor(distance / 1000);

  if (distanceDay >= 1) {
    return `${distanceDay} Day ago`;
  } else if (distanceHours >= 1) {
    return `${distanceHours} hours ago`;
  } else if (distanceMinutes >= 1) {
    return `${distanceMinutes} minutes ago`;
  } else {
    return `${distanceSeconds} second ago`;
  }
}

getDistanceTime();

setInterval(() => {
  renderBlog();
}, 1000);
