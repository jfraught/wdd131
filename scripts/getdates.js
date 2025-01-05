const currentyear = document.querySelector("#currentyear");
const today = new Date();
currentyear.innerHTML = `<span id="currentyear">${today.getFullYear()}</span>`;

const lastModified = document.querySelector("#lastModified")
const lastModifiedDate = new Date(document.lastModified);
const short = new Intl.DateTimeFormat(
	"en-US",
	{
		dateStyle: "short"
	}
).format(lastModifiedDate);
const hour = lastModifiedDate.getHours();
const minute = lastModifiedDate.getMinutes();
const second = lastModifiedDate.getSeconds();
lastModified.innerHTML = `<p id="lastModified">Last Modifications: ${short} ${hour}:${minute}:${second}</p>`;