import { binb2b64, core_sha1, str2binb, chrsz } from "./sha1";
export default function b64_sha1(s) { return binb2b64(core_sha1(str2binb(s), s.length * chrsz)); }