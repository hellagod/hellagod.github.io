export function scrollTo(id, block="start") {
    console.log("document.getElementById(id)")
    document.getElementById(id).scrollIntoView({behavior: 'smooth', block})
}