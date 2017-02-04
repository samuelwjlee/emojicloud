let $modal = $("#description-modal");
const $p = $("<p>EmojiCloud is a graphical representation of emojis from around the world. You can also limit it to specified regions by clicking one of the buttons below.</p>");

$modal.append($p);

function openModal() {
  $modal.modal({
  fadeDuration: 300,
  clickClose: true
  });
}

// <p>EmojiCloud is a graphical representation of emojis from around the world. You can also limit it to specified regions by clicking one of the buttons below. </p>
// <p>Click on an emoji and you'll see a sample tweet pop up on the map to the right. </p>
// <p>Represented in logarithmic scale -- an emoji that is twice the size of another is actually 10 times more popular. Three times larger is 100 times more popular.</p>
// <p>IMAGE</p>
// <p>IMAGE</p>
// <p>IMAGE</p>
