import crypto from "crypto";

export default function(signature, payload, secret, callbackUrl) {
  const base64Digest = data => crypto.createHmac("sha1", secret).update(data).digest("base64");
  return crypto.timingSafeEqual(
    Buffer.from(base64Digest(base64Digest(`${payload}${callbackUrl}`))),
    Buffer.from(base64Digest(signature))
  );
}
