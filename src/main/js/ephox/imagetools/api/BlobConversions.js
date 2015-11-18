define(
  'ephox.imagetools.api.BlobConversions',

  [
    'ephox.imagetools.util.Conversions'
  ],

  function (Conversions) {
    var blobToImage = function (image) {
      return Conversions.blobToImage(image);
    };

    var imageToBlob = function (blob) {
      return Conversions.imageToBlob(blob);
    };

    var blobToDataUri = function (blob) {
      return Conversions.blobToDataUri(blob);
    };

    var blobToBlobUri = function (blob) {
      return Conversions.blobToBlobUri(blob);
    };

    var blobToBase64 = function (blob) {
      return Conversions.blobToBase64(blob);
    };

    var revokeBlobUri = function (image) {
      Conversions.revokeImageUrl(image);
    };

    return {
      // used outside
      blobToImage: blobToImage,
      // used outside
      imageToBlob: imageToBlob,
      // used outside
      blobToDataUri: blobToDataUri,
      // used outside
      blobToBlobUri: blobToBlobUri,
      // used outside
      blobToBase64: blobToBase64,
      // used outside
      revokeBlobUri: revokeBlobUri
    };
  }
);