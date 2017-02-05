let $modal = $("#description-modal");

let grinEmojiUrl = emojione.shortnameToImage(':grinning:').match(/src="(.*)"/)[1]
let $img = $('.modal-emoji-image');
$img.attr("src", grinEmojiUrl);

function openModal() {
  $modal.modal({
    fadeDuration: 300,
    clickClose: true
  });
}
