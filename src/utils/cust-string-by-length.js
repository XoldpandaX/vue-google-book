export default function (str, size) {
  return str.length > size ? `${str.slice(0, size)}...` : str;
}
