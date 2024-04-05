function toggleMode() {
  const html = document.documentElement
  if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }
}

function toggleModeSobre() {
  const htmlSobre = document.documentElement
  if (htmlSobre.classList.contains("lightSobre")) {
    htmlSobre.classList.remove("lightSobre")
  } else {
    htmlSobre.classList.add("lightSobre")
  }
}
